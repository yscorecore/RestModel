using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel.Generator.TypeScript.Models.Types
{
    internal class TsNullable : ITsType
    {
        public static int Priority => 200;
        public string IdentityName { get; init; }
        public string DisplayName { get; init; }

        public ITsType ItemType { get; init; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!)
        {
            return Nullable.GetUnderlyingType(tsConvert.ClrType) != null;
        }

        public static ITsType FromClrType(TsConvertContext tsConvert!!)
        {
            var itemCrlType = Nullable.GetUnderlyingType(tsConvert.ClrType);
            var subItem = tsConvert.TypeFactory.FromClrType(itemCrlType);
            return new TsNullable
            {
                IdentityName = tsConvert.ClrType.FullName,
                DisplayName = $"{subItem.DisplayName} | null",
                ItemType = subItem,
            };
        }
    }
}
