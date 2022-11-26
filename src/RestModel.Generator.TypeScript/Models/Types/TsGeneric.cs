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

        public string GetDisplayName(TsConvertContext tsConvert)
        {
            var args = string.Join(", ", this.GenericArguments.Select(p => p.GetDisplayName(tsConvert)));
            var genericDefinition = (TsGenericDefinition)this.GenericDefinitionType;
            return genericDefinition.TypeName + $"<{args}>";
        }
    }
}
