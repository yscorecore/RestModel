using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel.Generator.TypeScript.Models
{
    public record TsConvertContext
    {
        public Type ClrType { get; init; }
        public ITypeFactory TypeFactory { get; init; }

        public TsConvertOptions Options { get; init; }

    }
    public record TsConvertOptions
    { 
    
    }
}
