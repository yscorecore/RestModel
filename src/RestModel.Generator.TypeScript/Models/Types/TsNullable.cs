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

        public Type ClrType { get; set; }
        public ITsType ItemType { get; private set; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!, Type clrType!!)
        {
            return Nullable.GetUnderlyingType(clrType) != null;
        }

        public string GetDisplayName(TsConvertContext tsConvert)
        {
            return $"{this.ItemType.GetDisplayName(tsConvert)} | null";
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            var itemCrlType = Nullable.GetUnderlyingType(clrType);
            this.ItemType = tsConvert.TypeFactory.FromClrType(itemCrlType);
        }
    }
}
