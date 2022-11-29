namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsObject : ITsType
    {
        public static int Priority => 10000;
        public Type ClrType { get; set; }
        public ITsType Parent { get; private set; }
        public List<TsField> Fields { get; private set; }

        public string TypeName { get; private set; }

        public string Namespace { get; private set; }


        public static bool CanFromClrType(TsConvertContext tsConvert, Type clrType)
        {
            return Type.GetTypeCode(clrType) == TypeCode.Object && clrType != typeof(object);
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            this.Namespace = clrType.Namespace;
            this.TypeName = clrType.Name;
            if (!IsRootType())
            {
                this.Parent = tsConvert.TypeFactory.FromClrType(clrType.BaseType);
            }
            this.Fields = clrType.GetProperties(System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Instance)
                .Where(p=>p.DeclaringType == clrType)
                .Select(p => new TsField(p.Name, tsConvert.TypeFactory.FromClrType(p.PropertyType)))
                .ToList();

            bool IsRootType()
            {
                return clrType.BaseType == null || clrType.BaseType == typeof(object);
            }
        }

        public string GetDisplayName(TsConvertOptions options)
        {
            return this.TypeName;
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
                $"export interface {TypeName}"
                : $"export interface {TypeName} extends {Parent.GetDisplayName(context.Options)}";
            var contents = Fields.Select(item => $"{convertFunc(item.Name)}: {item.Type.GetDisplayName(context.Options)};");

            context.WriteBlock(title, contents);
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
