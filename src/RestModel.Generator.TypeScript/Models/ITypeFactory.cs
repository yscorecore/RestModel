using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel.Generator.TypeScript.Models
{
    public interface ITypeFactory
    {
        ITsType FromClrType(Type clrType);
    }
    public class TypeConverterContext
    {
        public ITypeFactory Factory { get; set; }
        public Dictionary<Type, ITsType> Mapping { get; }
    }
}
