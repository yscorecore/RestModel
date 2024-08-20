using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace RestModel.Generator
{
    public abstract class BaseGenerator<T> : IGenerator<T>, IGenerator
        where T : new()
    {
        protected abstract Task GenerateCode(GeneratorCodeContext<T> context);
        public Task Generator(GeneratorSetting setting, T options)
        {
            var assemblies = LoadAssemblies(setting);
            var appInfo = AppInfo.FromAssembly(assemblies, (p) => p.IsMatchWildcardAnyOne(setting.ControllerRules));
            var context = new GeneratorCodeContext<T>
            {
                App = appInfo,
                Output = setting.Output,
                Options = options,
                Logger = setting.Logger,
            };
            return this.GenerateCode(context);
        }
        private static IEnumerable<Assembly> LoadAssemblies(GeneratorSetting generatorOptions)
        {
            if (Directory.Exists(generatorOptions.Input))
            {
                var files = Directory.GetFiles(generatorOptions.Input, "*.dll");
                foreach (var file in files)
                {
                    if (Path.GetFileName(file).IsMatchWildcardAnyOne(generatorOptions.AssemmbliesRules))
                    {
                        yield return Assembly.LoadFrom(file);
                    }
                }
            }
        }

        public Task Generator(GeneratorSetting setting, IDictionary<string, object> options)
        {
            return Generator(setting, CreateOptionsFromDic(setting, options));
        }
        private T CreateOptionsFromDic(GeneratorSetting setting, IDictionary<string, object> options)
        {
            var option = new T();
            var allPropMap = typeof(T).GetProperties()
                .Where(p => p.CanWrite && !p.IsSpecialName)
                .ToDictionary(p => p.Name, StringComparer.OrdinalIgnoreCase);

            if (options != null)
            {
                foreach (var (k, v) in options)
                {
                    if (allPropMap.TryGetValue(k, out var prop))
                    {
                        if (ConvertObjectTo(v, prop.PropertyType, out var val))
                        {
                            prop.SetValue(option, val);
                        }
                        else
                        {
                            setting.Logger?.LogWarning("invalid value for prop '{prop}', '{type}' required", k, prop.PropertyType);
                        }
                    }
                    else
                    {
                        setting.Logger?.LogWarning("unknow property '{prop}' for type '{type}'", k, typeof(T));
                    }
                }
            }
            return option;
        }
        private bool ConvertObjectTo(object from, Type type, out object val)
        {
            try
            {
                if (from != null && type.IsAssignableFrom(from.GetType()))
                {
                    val = from;
                    return true;
                }
                val = Convert.ChangeType(from, type);
                return true;
            }
            catch (Exception)
            {
                val = null;
                return false;
            }
        }
    }
}
