using Microsoft.AspNetCore.Http;

namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsFormFile : ITsType
    {
        public static int Priority => 0;
        public Type ClrType { get; set; }

        public static bool CanFromClrType(TsConvertContext tsConvert, Type clrType)
        {
            return typeof(IFormFile).IsAssignableFrom(clrType) || typeof(IFormFileCollection).IsAssignableFrom(clrType);
        }

        public string GetDisplayName(TsConvertOptions options)
        {
            if (typeof(IFormFile).IsAssignableFrom(this.ClrType))
            {
                return "File";
            }
            else
            {
                return "FileList";
            }
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {

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

