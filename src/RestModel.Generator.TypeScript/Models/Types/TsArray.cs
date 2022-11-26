namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsArray : ITsType
    {
        public static int Priority => 400;

        public Type ClrType { get; set; }
        public ITsType ItemType { get; private set; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!, Type clrType)
        {
            if (clrType.IsArray)
            {
                return true;
            }
            if (clrType.IsGenericType)
            {
                return clrType.GetGenericTypeDefinition().GetInterfaces().Contains(typeof(IEnumerable<>));
            }
            return false;
        }


        public string GetDisplayName(TsConvertContext tsConvert)
        {
            return $"Array<{this.ItemType.GetDisplayName(tsConvert)}>";
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            var itemCrlType = GetItemType(clrType);
            this.ItemType = tsConvert.TypeFactory.FromClrType(itemCrlType);
            Type GetItemType(Type clrType)
            {
                return clrType.IsArray ? clrType.GetElementType() : clrType.GetGenericArguments().Single();
            }
        }
    }
}

