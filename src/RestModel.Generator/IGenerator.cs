using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel
{
    public interface IGenerator<TOptions>
    {
        Task Generator(GeneratorContext<TOptions> context);
    }
    public class GeneratorContext<TOptions>
    {
        public AppInfo App { get; init; }
        public string Output { get; init; }
        public TOptions Options { get; init; }
    }
}
