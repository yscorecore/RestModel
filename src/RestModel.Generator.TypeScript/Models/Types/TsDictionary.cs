using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel.Generator.TypeScript.Models.Types
{
    internal class TsDictionary : ITsType
    {
        public static int Priority => 300;
        public string IdentityName { get; init; }
        public string DisplayName { get; init; }

        public ITsType KeyType { get; init; }
        public ITsType ValueType { get; init; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!)
        {
            return typeof(IDictionary<,>).IsAssignableFrom(tsConvert.ClrType);
        }

        public static ITsType FromClrType(TsConvertContext tsConvert!!)
        {
            var itemCrlType = Nullable.GetUnderlyingType(tsConvert.ClrType);
            var subItem = tsConvert.TypeFactory.FromClrType(itemCrlType);
            return new TsNullable
            {
                IdentityName = tsConvert.ClrType.FullName,
                DisplayName = $"Array<{subItem.DisplayName}>",
                ItemType = subItem,
            };
        }
    }
}

