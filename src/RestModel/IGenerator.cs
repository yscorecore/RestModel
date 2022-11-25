using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel
{
    public interface IGenerator
    {
        Task Generator(GeneratorContext context);
    }
    public class GeneratorContext
    {
        public AppInfo App { get; set; }
    }
}
