using RestModel.Generator.TypeScript.Types;

namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsAny : ITsType
    {
        public static readonly TsPrimitive AnyType = new()
        {
            DisplayName = "any",
            IdentityName = "#any",
            PrimitiveType = "any"
        };

        public static int Priority => 1000000;
        public string DisplayName { get; init; }
        public string IdentityName { get; init; }
        public string PrimitiveType { get; init; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!)
        {
            return true;
        }

        public static ITsType FromClrType(TsConvertContext tsConvert!!)
        {
            return AnyType;
        }
    }
}
