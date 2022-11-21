using System.Reflection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;

namespace RestModel
{
    public class AppInfoFactory
    {
        public AppInfo FromAssembly(Assembly assembly)
        {
            return new AppInfo
            {
                AssemblyName = assembly.FullName,
                Controllers = FindControllerTypes(assembly).Select(FromControllerType).ToList()
            };
        }

        private IEnumerable<Type> FindControllerTypes(Assembly assembly)
        {
            return assembly.GetTypes()
                .Where(p => !p.IsAbstract && typeof(ControllerBase).IsAssignableFrom(p))
                .Where(p => Attribute.IsDefined(p, typeof(ControllerAttribute), true));
        }
        public ControllerInfo FromControllerType(Type type)
        {
            return new ControllerInfo
            {
                ClassName = type.Name,
                ControllerName = type.Name.EndsWith("Controller") ? type.Name[..-10] : type.Name,
                ControllerType = type,
                NameSpace = type.Namespace,
                DefineAllowAnonymous = Attribute.IsDefined(type, typeof(AllowAnonymousAttribute), true),
                DefineAuthorize = Attribute.IsDefined(type, typeof(AuthorizeAttribute), true),
                Interfaces = type.GetInterfaces(),
                RouteTemplate = type.GetCustomAttribute<RouteAttribute>(true)?.Template,
                Actions = FindActionMethods(type).Select(FromActionMethod).ToList()
            };
        }
        private IEnumerable<MethodInfo> FindActionMethods(Type controller)
        {
            return controller.GetMethods().Where(p => Attribute.IsDefined(p, typeof(HttpMethodAttribute), true));
        }
        public ActionInfo FromActionMethod(MethodInfo action)
        {
            var method = action.GetCustomAttribute<HttpMethodAttribute>(true);
            var route = action.GetCustomAttribute<RouteAttribute>(true);
            return new ActionInfo
            {
                MethodInfo = action,
                ActionName = action.Name,
                HttpMethod = method.Name,
                RouteTemplate = route?.Template ?? method.Template,
                ReturnInfo = CreateReturnInfo(action),
                Arguments = action.GetParameters().Select(FromParameter).ToList()
            };
        }
        private ReturnInfo CreateReturnInfo(MethodInfo action)
        {
            var returnType = action.ReturnType;
            var isGeneric = returnType.IsGenericType;
            var isTaskGenericOrValueTaskGeneric = isGeneric && (
                returnType.GetGenericTypeDefinition() == typeof(Task<>) || returnType.GetGenericTypeDefinition() == typeof(ValueTask<>));
            return new ReturnInfo
            {
                ClrType = returnType,
                IsTask = typeof(Task).IsAssignableFrom(returnType),
                IsValueTask = returnType == typeof(ValueTask) || (returnType.IsGenericType && returnType.GetGenericTypeDefinition() == typeof(ValueTask<>)),
                ResultType = isTaskGenericOrValueTaskGeneric ? returnType.GetGenericArguments().First() : returnType
            };
        }
        private ArgumentInfo FromParameter(ParameterInfo parameter)
        {
            var (name, source) = GetValueInfo();
            return new ArgumentInfo
            {
                ParameterName = parameter.Name,
                DefineAllowAnonymous = Attribute.IsDefined(parameter, typeof(AllowAnonymousAttribute), true),
                DefineAuthorize = Attribute.IsDefined(parameter, typeof(AuthorizeAttribute), true),
                ParameterType = parameter.ParameterType,
                ValueSource = source,
                ValueName = string.IsNullOrEmpty(name) ? parameter.Name : name,
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
        }
    }
}
