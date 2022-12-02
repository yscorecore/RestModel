using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace RestModel.Generator
{
    public class Generator
    {
        public static Task Run<G, T>(GeneratorInfo<T> generatorInfo)
            where G : IGenerator<T>, new()
        {
            var assemblies = LoadAssemblies(generatorInfo);
            var appInfo = AppInfo.FromAssembly(assemblies, (p) => p.IsMatchWildcardAnyOne(generatorInfo.ControllerRules));
            Directory.CreateDirectory(generatorInfo.Output);
            var context = new GeneratorContext<T>
            {
                App = appInfo,
                Output = generatorInfo.Output,
                Options = generatorInfo.Options
            };
            var generator = new G();
            return generator.Generator(context);
        }
        private static IEnumerable<Assembly> LoadAssemblies<T>(GeneratorInfo<T> generatorOptions)
        {
            if (Directory.Exists(generatorOptions.Input))
            {
                var files = Directory.GetFiles(generatorOptions.Input, "*.dll");
                foreach (var file in files)
                {
                    if (Path.GetFileName(file).IsMatchWildcardAnyOne(generatorOptions.ControllerRules))
                    {
                        yield return Assembly.LoadFrom(file);
                    }
                }
            }
        }
    }
    public class GeneratorInfo<T>
    {
        static char[] SplitChars = new char[] { ',', ';' };
        public string Input { get; set; }
        public string Output { get; set; }
        public string Assemblies { get; set; }
        public string Controllers { get; set; }
        public Action<string> Logger { get; set; } = Console.WriteLine;
        public T Options { get; set; }
        public string[] AssemmbliesRules => string.IsNullOrEmpty(Assemblies) ? new string[] { "*.dll" } :
            Assemblies.Split(SplitChars, StringSplitOptions.RemoveEmptyEntries);
        public string[] ControllerRules => string.IsNullOrEmpty(Controllers) ? new string[] { "*" } :
            Controllers.Split(SplitChars, StringSplitOptions.RemoveEmptyEntries);
    }
}
