using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RestModel.Generator;

namespace RestModel
{
    public interface IGenerator
    {
        Task Generator(GeneratorSetting setting, IDictionary<string, object> options);
    }
    public interface IGenerator<TOptions>
    {
        Task Generator(GeneratorSetting setting, TOptions options);
    }
}
