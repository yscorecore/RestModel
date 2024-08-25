using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel.Generator.TypeScript.Models
{
    public record TsField(string Name, bool Required, ITsType Type);

    public enum PropertyAssignKind
    {
        Unknown,
        Nullable,
        Required,

    }


    public record TsEnumField(string Name, ITsType Type, long Value);
}
