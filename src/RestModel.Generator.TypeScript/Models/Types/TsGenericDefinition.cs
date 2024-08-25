using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsGenericDefinition : ITsType
    {
        public static int Priority => 2000;
        public Type ClrType { get; set; }

        public ITsType Parent { get; private set; }
        public List<TsField> Fields { get; private set; }
        public List<ITsType> GenericArguments { get; private set; }

        public string TypeName { get; private set; }

        public string Namespace { get; private set; }

        public List<string> OverrideProperties { get; private set; } = new List<string>();

        public static bool CanFromClrType(TsConvertContext tsConvert, Type clrType)
        {
            return clrType.IsGenericTypeDefinition;
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            this.Namespace = clrType.Namespace;
            this.TypeName = tsConvert.TypeFactory.Request(clrType.Name.Substring(0, clrType.Name.IndexOf('`')));
            this.Fields = clrType.GetProperties(System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Instance)
              .Where(p => p.DeclaringType == clrType)
              .Select(p => new TsField(p.Name, tsConvert.TypeFactory.FromClrType(p.PropertyType)))
             .ToList();

            if (!IsRootType())
            {
                this.Parent = tsConvert.TypeFactory.FromClrType(clrType.BaseType);
                this.OverrideProperties = clrType.BaseType.GetProperties().Select(p => p.Name).Intersect(this.Fields.Select(p => p.Name)).ToList();
            }

            this.GenericArguments = clrType.GetGenericArguments()
                .Select(tsConvert.TypeFactory.FromClrType)
                .ToList();

            

            bool IsRootType()
            {
                return clrType.BaseType == null || clrType.BaseType == typeof(object);
            }
            PropertyAssignKind IsNullableProperty(PropertyInfo prop)
            {
                if (prop.GetCustomAttribute<RequiredAttribute>() != null)
                {
                    return PropertyAssignKind.Required;
                }

                const string nullableAttributeFullName = "System.Runtime.CompilerServices.NullableAttribute";
                var isAssemblyNullable = prop.DeclaringType.Assembly.GetType(nullableAttributeFullName) != null;

                if (isAssemblyNullable)
                {
                    var propHasNullable = prop.GetCustomAttributesData()
                        .Any(p => p.AttributeType.FullName == nullableAttributeFullName);
                    if (propHasNullable)
                    {
                        return PropertyAssignKind.Nullable;
                    }
                }
                else
                {
                    if (prop.PropertyType.IsValueType && Nullable.GetUnderlyingType(prop.PropertyType) != null)
                    {
                        return PropertyAssignKind.Nullable;
                    }
                }
                return PropertyAssignKind.Unknown;
            }
        }

        public string GetDisplayName(TsConvertOptions options, TsTypeDisplayFormat displayFormat = TsTypeDisplayFormat.Default)
        {
            var args = string.Join(", ", this.GenericArguments.Select(p => p.GetDisplayName(options, displayFormat)));
            return $"{this.TypeName}<{args}>";
        }
        public bool HasBody(TsConvertOptions options)
        {
            return true;
        }

        public void GenerateScript(TsGenerateContext context)
        {
            var camelCase = context.Options.CamelCaseProperty;
            Func<string, string> convertFunc = camelCase ? a => a.ToCamelCaseName() : (a) => a;

            var title = Parent is null ?
                $"export interface {GetDisplayName(context.Options)}"
                : $"export interface {GetDisplayName(context.Options)} extends {BuildParentName()}";
            var contents = Fields.Select(item => $"{convertFunc(item.Name)}: {item.Type.GetDisplayName(context.Options)};");


            context.WriteBlock(title, contents);

            string BuildParentName()
            {
                if (this.OverrideProperties.Count > 0)
                {
                    return $"Omit<{this.Parent.GetDisplayName(context.Options)}, {string.Join(" | ", this.OverrideProperties.Select(p => $"'{convertFunc(p)}'"))}>";
                }
                else
                {
                    return this.Parent.GetDisplayName(context.Options);
                }
            }
        }
        public IEnumerable<ITsType> GetDeclareDependencyTypes(TsConvertOptions options)
        {
            return new ITsType[] { this };
        }
        public string GetImportName(TsConvertOptions options)
        {
            return this.TypeName;
        }
    }
}
