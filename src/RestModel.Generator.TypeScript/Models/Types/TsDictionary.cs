namespace RestModel.Generator.TypeScript.Models.Types
{
    internal class TsDictionary : ITsType
    {
        public static int Priority => 300;

        public Type ClrType { get; set; }
        public ITsType KeyType { get; private set; }
        public ITsType ValueType { get; private set; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!, Type clrType)
        {
            if (clrType.IsGenericType)
            {
                return clrType.GetGenericTypeDefinition().GetInterfaces().Contains(typeof(IDictionary<,>));
            }
            return false;
        }

        public string GetDisplayName(TsConvertContext tsConvert)
        {
            return $"{{ [key: {KeyType.GetDisplayName(tsConvert)}]: {ValueType.GetDisplayName(tsConvert)}; }}";
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            var types = clrType.GetGenericArguments();
            this.KeyType = tsConvert.TypeFactory.FromClrType(types[0]);
            this.ValueType = tsConvert.TypeFactory.FromClrType(types[1]);
        }
    }
}

