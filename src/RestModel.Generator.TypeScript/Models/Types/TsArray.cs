using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsArray : ITsType
    {
        public static int Priority => 400;
        public string IdentityName { get; init; }
        public string DisplayName { get; init; }

        public ITsType ItemType { get; init; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!)
        {
            if (tsConvert.ClrType.IsArray)
            {
                return true;
            }
            if (tsConvert.ClrType.IsGenericType)
            {
                return tsConvert.ClrType.GetGenericTypeDefinition().GetInterfaces().Contains(typeof(IEnumerable<>));
            }
            return false;
        }

        public static ITsType FromClrType(TsConvertContext tsConvert!!)
        {
            var itemCrlType = GetItemType(tsConvert.ClrType);
            var subItem = tsConvert.TypeFactory.FromClrType(itemCrlType);
            return new TsArray
            {
                IdentityName = tsConvert.ClrType.FullName,
                DisplayName = $"Array<{subItem.DisplayName}>",
                ItemType = subItem,
            };
            Type GetItemType(Type clrType)
            {
                return clrType.IsArray ? clrType.GetElementType() : clrType.GetGenericArguments().Single();
            }
        }
    }
}

