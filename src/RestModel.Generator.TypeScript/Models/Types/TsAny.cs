
namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsAny : ITsType
    {
        public static int Priority => 1000000;
        public string PrimitiveType { get; private set; }
        public Type ClrType { get; set; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!, Type clrType!!)
        {
            return true;
        }

        public string GetDisplayName(TsConvertOptions options)
        {
            return this.PrimitiveType;
        }

        public void InitType(TsConvertContext tsConvert!!, Type clrType!!)
        {
           this.PrimitiveType = "any";
        }
    }
}
