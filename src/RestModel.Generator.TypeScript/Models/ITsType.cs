using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel.Generator.TypeScript.Models
{
    public interface ITsType
    {
        static abstract ITsType FromClrType(TsConvertContext tsConvert);
        static abstract bool CanFromClrType(TsConvertContext tsConvert);

        static abstract int Priority { get; }

        string IdentityName { get; }
        string DisplayName { get; }

    }
}
