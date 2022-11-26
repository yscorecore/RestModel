namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsGeneric : ITsType
    {
        public static int Priority => 3000;

        public Type ClrType { get; set; }
        public List<ITsType> GenericArguments { get; private set; }

        public ITsType GenericDefinitionType { get; private set; }


        public static bool CanFromClrType(TsConvertContext tsConvert, Type clrType)
        {
            return clrType.IsGenericType;
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            this.GenericArguments = clrType.GetGenericArguments()
                 .Select(tsConvert.TypeFactory.FromClrType)
                 .ToList();
            this.GenericDefinitionType = tsConvert.TypeFactory.FromClrType(clrType.GetGenericTypeDefinition());
        }

        public string GetDisplayName(TsConvertOptions options)
        {
            var args = string.Join(", ", this.GenericArguments.Select(p => p.GetDisplayName(options)));
            var genericDefinition = (TsGenericDefinition)this.GenericDefinitionType;
            return genericDefinition.TypeName + $"<{args}>";
        }
        public bool HasBody(TsConvertOptions options)
        {
            return false;
        }
    }
}
