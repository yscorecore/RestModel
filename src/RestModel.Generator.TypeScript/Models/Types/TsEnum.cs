using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript.Types
{
    public class TsEnum : ITsType
    {
        public static int Priority { get; }
        public string DisplayName { get; }
        public string IdentityName { get; }

      
        public List<TsEnumField> Fields { get; init; }

        public static bool CanFromClrType(TsConvertContext tsConvert)
        {
            return tsConvert.ClrType.IsEnum;
        }

        public static ITsType FromClrType(TsConvertContext tsConvert)
        {
            throw new NotImplementedException();
        }
    }
}
