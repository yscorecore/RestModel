using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel.Generator.TypeScript.Models.Types
{
    internal class TsGenericParameter : ITsType
    {
        public static int Priority => 1000;

        public Type ClrType { get; set; }
        public string Name { get; private set; }

        public static bool CanFromClrType(TsConvertContext tsConvert, Type clrType)
        {
            return clrType.IsGenericParameter;
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            this.Name = clrType.Name;
        }

        public string GetDisplayName(TsConvertOptions options, TsTypeDisplayFormat displayFormat = TsTypeDisplayFormat.Default)
        {
            return this.Name;
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
