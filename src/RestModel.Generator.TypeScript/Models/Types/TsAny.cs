
namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsAny : ITsType
    {
        public static int Priority => 1000000;
        public string PrimitiveType { get; private set; }
        public Type ClrType { get; set; }

        public static bool CanFromClrType(TsConvertContext tsConvert, Type clrType)
        {
            return true;
        }

        public string GetDisplayName(TsConvertOptions options)
        {
            return this.PrimitiveType;
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            this.PrimitiveType = "any";
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
            return Enumerable.Empty<ITsType>();
        }

        public string GetImportName(TsConvertOptions options)
        {
            return null;
        }
    }
}
