using System;
using System.IO;
using Microsoft.Extensions.Logging;

namespace RestModel.Generator
{
    public class GeneratorSetting
    {
        static char[] SplitChars = new char[] { ',', ';' };
        public string Input { get; set; }
        public Stream Output { get; set; }
        public string Assemblies { get; set; }
        public string Controllers { get; set; }
        public ILogger Logger { get; set; }
        public string[] AssemmbliesRules => string.IsNullOrEmpty(Assemblies) ? new string[] { "*.dll" } :
            Assemblies.Split(SplitChars, StringSplitOptions.RemoveEmptyEntries);
        public string[] ControllerRules => string.IsNullOrEmpty(Controllers) ? new string[] { "*" } :
            Controllers.Split(SplitChars, StringSplitOptions.RemoveEmptyEntries);
    }

}
