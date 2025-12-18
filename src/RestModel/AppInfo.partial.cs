using System.Collections;
using System.ComponentModel;
using System.Reflection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;

namespace RestModel
{
    public partial class AppInfo
    {
        public static AppInfo FromAssembly(IEnumerable<Assembly> assemblies, Func<string, bool> controllerFilter = null)
        {
            return new AppInfo
            {
                Controllers = assemblies.SelectMany(p => FindControllerTypes(p, controllerFilter)).Select(FromControllerType).ToList()
            };
        }

        private static IEnumerable<Type> FindControllerTypes(Assembly assembly, Func<string, bool> controllerFilter)
        {
            return assembly.GetTypes()
                .Where(p => !p.IsAbstract && typeof(ControllerBase).IsAssignableFrom(p) && !p.IsGenericTypeDefinition)
                .Where(p => Attribute.IsDefined(p, typeof(ControllerAttribute), true))
                .Where(p => controllerFilter?.Invoke(p.FullName) ?? true);
        }
        private static ControllerInfo FromControllerType(Type type)
        {
            var typeName = type.Name;
            return new ControllerInfo
            {
                ClassName = type.Name,
                ControllerName = type.Name.EndsWith("Controller") ? type.Name[..^10] : type.Name,
                ControllerType = type,
                NameSpace = type.Namespace,
                DefineAllowAnonymous = Attribute.IsDefined(type, typeof(AllowAnonymousAttribute), true),
                DefineAuthorize = Attribute.IsDefined(type, typeof(AuthorizeAttribute), true),
                Interfaces = type.GetInterfaces(),
                AreaName = type.GetCustomAttribute<AreaAttribute>(true)?.RouteValue,
                RouteTemplate = type.GetCustomAttributes<RouteAttribute>(true).FirstOrDefault()?.Template,
                Actions = FindActionMethods(type).Select(FromActionMethod).Where(p => !IsActionResult(p)).ToList()
            };
        }
        private static IEnumerable<MethodInfo> FindActionMethods(Type controller)
        {
            return controller.GetMethods().Where(p => Attribute.IsDefined(p, typeof(HttpMethodAttribute), true));
        }
        private static ActionInfo FromActionMethod(MethodInfo action)
        {
            var name = action.Name;
            
            var method = action.GetCustomAttributes<HttpMethodAttribute>(true).FirstOrDefault();
            var route = action.GetCustomAttributes<RouteAttribute>(true).FirstOrDefault();
            return new ActionInfo
            {
                MethodInfo = action,
                ActionName = action.Name,
                HttpMethod = method.Name ?? method.HttpMethods.FirstOrDefault(),
                RouteTemplate = route?.Template ?? method.Template,
                ReturnInfo = CreateReturnInfo(action),
                Arguments = action.GetParameters().Select(FromParameter).ToList(),
                DefineAllowAnonymous = Attribute.IsDefined(action, typeof(AllowAnonymousAttribute), true),
                DefineAuthorize = Attribute.IsDefined(action, typeof(AuthorizeAttribute), true),

            };
        }
        private static bool IsActionResult(ActionInfo actionInfo)
        {
            return typeof(IActionResult).IsAssignableFrom(actionInfo.ReturnInfo.ResultType);
        }
        private static ReturnInfo CreateReturnInfo(MethodInfo action)
        {
            var returnType = action.ReturnType;
            var isGeneric = returnType.IsGenericType;
            var isTaskGenericOrValueTaskGeneric = isGeneric && (
                returnType.GetGenericTypeDefinition() == typeof(Task<>) || returnType.GetGenericTypeDefinition() == typeof(ValueTask<>));
            var isTaskOrValueTask = returnType == typeof(Task) || returnType == typeof(ValueTask);
            var resultType = isTaskOrValueTask ? typeof(void) : isTaskGenericOrValueTaskGeneric ? returnType.GetGenericArguments().First() : returnType;
            return new ReturnInfo
            {
                ClrType = returnType,
                IsTask = typeof(Task).IsAssignableFrom(returnType),
                IsValueTask = returnType == typeof(ValueTask) || (returnType.IsGenericType && returnType.GetGenericTypeDefinition() == typeof(ValueTask<>)),
                ResultType = resultType
            };
        }
        private static ArgumentInfo FromParameter(ParameterInfo parameter)
        {
            var (name, source) = GetValueInfo();

            var paremeterTypeInfo = default(ArgumentTypeInfo);


            var isRequired = parameter.IsRequired();
            var receiveType = GetReceiveType(source, parameter.ParameterType, isRequired);
            return new ArgumentInfo
            {
                ValueSource = source,
                ValueName = name,
                ParameterName = parameter.Name,
                ParameterType = parameter.ParameterType,
                IsRequired = parameter.IsRequired(),
                ReceiveType = GetReceiveType(source, parameter.ParameterType, isRequired),
                HasDefaultValue = parameter.HasDefaultValue,
                DefaultValue = parameter.RawDefaultValue
            };
            (string, ValueSource) GetValueInfo()
            {
                var fromForm = parameter.GetCustomAttribute<FromFormAttribute>(true);
                if (fromForm != null) return (fromForm.Name, ValueSource.Form);
                var fromService = parameter.GetCustomAttribute<FromServicesAttribute>(true);
                if (fromService != null) return (null, ValueSource.Service);
                var fromRoute = parameter.GetCustomAttribute<FromRouteAttribute>(true);
                if (fromRoute != null) return (fromRoute.Name, ValueSource.Route);
                var fromQuery = parameter.GetCustomAttribute<FromQueryAttribute>(true);
                if (fromQuery != null) return (fromQuery.Name, ValueSource.Query);
                var fromHeader = parameter.GetCustomAttribute<FromHeaderAttribute>(true);
                if (fromHeader != null) return (fromHeader.Name, ValueSource.Header);
                var fromBody = parameter.GetCustomAttribute<FromBodyAttribute>(true);
                if (fromBody != null) return (null, ValueSource.Body);
                return (null, ValueSource.None);
            }


            bool IsCollectionType(Type type)
            {
                if (type == typeof(string))
                {
                    return false;
                }
                if (type.IsArray)
                {
                    return true;
                }
                if (typeof(IList).IsAssignableFrom(type))
                {
                    return true;
                }
                if (typeof(ICollection).IsAssignableFrom(type)) { return true; }

                return false;
            }

            ArgumentTypeInfo GetReceiveType(ValueSource source, Type type, bool isRequired)
            {
                if (typeof(IFormFile) == type || typeof(IFormFile).IsAssignableFrom(type))
                {
                    return new ArgumentTypeInfo
                    {
                        IsFile = true,
                        Type = type
                    };
                }
                if (typeof(IFormFileCollection) == type ||
                    typeof(IFormFileCollection).IsAssignableFrom(type) ||
                    GetItemType(type) == typeof(IFormFile))
                {
                    return new ArgumentTypeInfo
                    {
                        IsFile = true,
                        IsCollection = true,
                        Type = type,
                        ItemType = typeof(IFormFile)
                    };
                }

                if (IsPlainSource(source))
                {
                    if (IsCollectionType(type))
                    {
                        var itemType = GetItemType(type);
                        var originalType = Nullable.GetUnderlyingType(itemType) ?? itemType;
                        if (IsStringObjectType(originalType))
                        {
                            return new ArgumentTypeInfo
                            {
                                Type = typeof(List<string>),
                                IsCollection = true,
                                IsRequired = isRequired,
                                ItemType = typeof(string)
                            };
                        }
                    }
                    else
                    {
                        var originalType = Nullable.GetUnderlyingType(type);
                        if (originalType != null)
                        {
                            if (IsStringObjectType(originalType))
                            {
                                return new ArgumentTypeInfo
                                {
                                    Type = typeof(string),
                                    IsRequired = false,
                                };
                            }
                        }
                        else
                        {
                            if (IsStringObjectType(type))
                            {
                                return new ArgumentTypeInfo
                                {
                                    Type = typeof(string),
                                    IsRequired = true,
                                };
                            }
                        }
                    }
                }
                return new ArgumentTypeInfo
                {
                    Type = type,
                    IsRequired = isRequired,
                    IsCollection = IsCollectionType(type),
                    ItemType = GetItemType(type),
                };
            }
            bool IsStringObjectType(Type type)
            {
                if (Type.GetTypeCode(type) == TypeCode.Object)
                {
                    var converter = TypeDescriptor.GetConverter(type);
                    return converter != null && converter.CanConvertFrom(typeof(string));
                }
                return false;
            }
            bool IsPlainSource(ValueSource source)
            {
                return source == ValueSource.Form ||
                     source == ValueSource.Header ||
                     source == ValueSource.Query ||
                     source == ValueSource.Route;
            }
            Type GetItemType(Type clrType)
            {
                if (clrType.IsArray)
                {
                    return clrType.GetElementType();

                }
                if (clrType.IsGenericType)
                {
                    return clrType.GetGenericArguments().SingleOrDefault();
                }
                return null;
            }
        }

        private static ArgumentInfo FromParameter2(ParameterInfo parameter)
        {
            var (name, source) = GetValueInfo();
            var parameterInfo = GetParameterTypeInfo();

            return null;
            (string, ValueSource) GetValueInfo()
            {
                var fromForm = parameter.GetCustomAttribute<FromFormAttribute>(true);
                if (fromForm != null) return (fromForm.Name, ValueSource.Form);
                var fromService = parameter.GetCustomAttribute<FromServicesAttribute>(true);
                if (fromService != null) return (null, ValueSource.Service);
                var fromRoute = parameter.GetCustomAttribute<FromRouteAttribute>(true);
                if (fromRoute != null) return (fromRoute.Name, ValueSource.Route);
                var fromQuery = parameter.GetCustomAttribute<FromQueryAttribute>(true);
                if (fromQuery != null) return (fromQuery.Name, ValueSource.Query);
                var fromHeader = parameter.GetCustomAttribute<FromHeaderAttribute>(true);
                if (fromHeader != null) return (fromHeader.Name, ValueSource.Header);
                var fromBody = parameter.GetCustomAttribute<FromBodyAttribute>(true);
                if (fromBody != null) return (null, ValueSource.Body);
                return (null, ValueSource.None);
            }
            ValueSource InferNoneValueSource(ParameterTypeInfo pInfo,string method) 
            {
                if (pInfo.IsComplex)
                {
                    if (pInfo.CanConvertFromString && method.Equals("get", StringComparison.InvariantCultureIgnoreCase))
                    {
                        return ValueSource.Query;
                    }
                }
                return ValueSource.Query;

            }

            ParameterTypeInfo GetParameterTypeInfo()
            {
                return null;
            }
        }

        record ParameterTypeInfo
        {
            public Type Type { get; set; }
            public bool Required { get; set; }
            public bool IsCollection { get; set; }
            public bool CanConvertFromString { get; set; }
            public Type ItemType { get; set; }
            public bool IsComplex { get; set; }
        }
    }
}
