using Microsoft.AspNetCore.Http;
namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsFormFile : ITsType
    {
        public static int Priority => 0;
        public Type ClrType { get; set; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!, Type clrType!!)
        {
            return typeof(IFormFile).IsAssignableFrom(clrType);
        }

        public string GetDisplayName(TsConvertOptions options)
        {
            return "File";
        }

        public void InitType(TsConvertContext tsConvert!!, Type clrType!!)
        {

        }
        public bool HasBody(TsConvertOptions options)
        {
            return false;
        }

        public void GenerateScript(TsGenerateContext context)
        {

        }
    }
}

