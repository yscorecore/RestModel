using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Concurrent;

namespace RestModel.Generator.TypeScript.Models
{
    public record TsConvertContext
    {
        public ITsTypeContainer TypeFactory { get; init; }

        public TsConvertOptions Options { get; init; }

       
    }
}
