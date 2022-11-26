using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel.Generator.TypeScript.Models
{
    public interface ITsType
    {
        static abstract bool CanFromClrType(TsConvertContext tsConvert, Type clrType);
        static abstract int Priority { get; }
        Type ClrType { get; set; }

        void InitType(TsConvertContext tsConvert, Type clrType);

        string GetDisplayName(TsConvertOptions options);
    }
}
