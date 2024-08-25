namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsArray : ITsType
    {
        public static int Priority => 400;

        public Type ClrType { get; set; }
        public ITsType ItemType { get; private set; }

        public static bool CanFromClrType(TsConvertContext tsConvert, Type clrType)
        {
            if (clrType.IsArray)
            {
                return true;
            }
            if (clrType.IsGenericType)
            {
                var define = clrType.GetGenericTypeDefinition();
                if (define == typeof(IEnumerable<>))
                {
                    return true;
                }
                var allInterfaces = define.GetInterfaces();
                return allInterfaces.Any(p => p.IsGenericType && p.GetGenericTypeDefinition() == typeof(IEnumerable<>));
            }
            return false;
        }


        public string GetDisplayName(TsConvertOptions options, TsTypeDisplayFormat displayFormat = TsTypeDisplayFormat.Default)
        {
            if (displayFormat == TsTypeDisplayFormat.Default && (this.ItemType is TsPrimitive || this.ItemType is TsAny || this.ItemType is TsEnum || this.ItemType is TsObject))
            {
                return $"{this.ItemType.GetDisplayName(options, displayFormat)}[]";
            }
            else
            {
                return $"Array<{this.ItemType.GetDisplayName(options, displayFormat)}>";
            }
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
        public bool HasBody(TsConvertOptions options)
        {
            return false;
        }

        public void GenerateScript(TsGenerateContext context)
        {

        }
        public IEnumerable<ITsType> GetDeclareDependencyTypes(TsConvertOptions options)
        {
            return this.ItemType.GetDeclareDependencyTypes(options);
        }
        public string GetImportName(TsConvertOptions options)
        {
            return null;
        }
    }
}

