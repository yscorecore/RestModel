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
            var appInfo = AppInfo.FromAssembly(assemblies);
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
                    if (Path.GetFileName(file).IsMatchWildcardAnyOne(generatorOptions.ControllerDlls))
                    {
                        yield return Assembly.LoadFrom(file);
                    }
                }
            }
        }
    }
    public class GeneratorInfo<T>
    {
        public string Input { get; set; }
        public string Output { get; set; }
       // public bool ClearOutput { get; set; } = false;
        public string[] ControllerDlls { get; set; }
        public T Options { get; set; }
    }
}
