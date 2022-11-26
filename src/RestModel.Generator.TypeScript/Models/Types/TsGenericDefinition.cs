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
             .Select(p => new TsField(p.Name, tsConvert.TypeFactory.FromClrType(p.PropertyType)))
             .ToList();

            bool IsRootType()
            {
                return clrType.BaseType == null || clrType.BaseType == typeof(object);
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
    }
}
