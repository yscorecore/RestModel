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

        public static bool CanFromClrType(TsConvertContext tsConvert, Type clrType)
        {
            return clrType.IsGenericTypeDefinition;
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            this.Namespace = clrType.Namespace;
            this.TypeName = clrType.Name.Substring(0, clrType.Name.IndexOf('`'));
            if (!IsRootType())
            {
                this.Parent = tsConvert.TypeFactory.FromClrType(clrType.BaseType);
            }

            this.GenericArguments = clrType.GetGenericArguments()
                .Select(tsConvert.TypeFactory.FromClrType)
                .ToList();

            this.Fields = clrType.GetProperties(System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Instance)
              .Where(p => p.DeclaringType == clrType)
              .Select(p => new TsField(p.Name, tsConvert.TypeFactory.FromClrType(p.PropertyType)))
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
                    if (prop.PropertyType.IsValueType && Nullable.GetUnderlyingType(prop.PropertyType)!=null)
                    {
                        return PropertyAssignKind.Nullable;
                    }
                }

                return PropertyAssignKind.Unknown;
            }
    }

    public string GetDisplayName(TsConvertOptions options)
    {
        var args = string.Join(", ", this.GenericArguments.Select(p => p.GetDisplayName(options)));
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
            : $"export interface {GetDisplayName(context.Options)} extends {Parent.GetDisplayName(context.Options)}";
        var contents = Fields.Select(item => $"{convertFunc(item.Name)}: {item.Type.GetDisplayName(context.Options)};");

        context.WriteBlock(title, contents);
    }
}
}
