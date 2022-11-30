using System.IO;
using Microsoft.AspNetCore.Mvc;
using RestModel.Generator.TypeScript.Client;
using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript
{
    public class TypeScriptGenerator : IGenerator<TsConvertOptions>
    {
        public async Task Generator(GeneratorContext<TsConvertOptions> context)
        {
            var allActionEntry = GetAllActionEntry(context.App).ToList();
            var modelTypeMapper = BuildModelTypeMapper(allActionEntry, context.Options);
            await GenerateModelFile(context, modelTypeMapper);
            await GenerateApiFile(context, allActionEntry, modelTypeMapper);
          
        }

        private Task GenerateModelFile(GeneratorContext<TsConvertOptions> context, IDictionary<Type, ITsType> modelTypeMapper)
        {
            using var modelFile = File.Create(Path.Combine(context.Output, context.Options.ModelFileName));
            using var streamWriter = new StreamWriter(modelFile);
            var tsGenerateContext = new TsGenerateContext
            {
                Output = streamWriter,
                Options = context.Options
            };
            foreach (var modelType in modelTypeMapper)
            {
                modelType.Value.GenerateScript(tsGenerateContext);
            }
            return Task.CompletedTask;
        }
        private async Task GenerateApiFile(GeneratorContext<TsConvertOptions> context, IEnumerable<ActionEntry> actionEntries, IDictionary<Type, ITsType> modelTypeMapper)
        {
            using var apiFile = File.Create(Path.Combine(context.Output, context.Options.ApiFileName));
            using var streamWriter = new StreamWriter(apiFile);
            var tsGenerateContext = new TsGenerateContext
            {
                Output = streamWriter,
                Options = context.Options
            };
            var apiGenerator = new TsClientGenerator();

            await GenerateImport();
            foreach (var actionEntry in actionEntries.GroupBy(p => p.ControllerInfo))
            {
                await apiGenerator.GenerateClientFile(tsGenerateContext, actionEntry.Key, actionEntry.Select(p => p.ActionInfo), modelTypeMapper);
            }
            async Task GenerateImport()
            {
                await streamWriter.WriteLineAsync($"import {{ {context.Options.BaseApiClassName} }} from \"{context.Options.BaseApiImportModelName}\";");
                foreach (var model in GetAllModelTypes())
                {
                    await streamWriter.WriteLineAsync($"import {{ {model.GetImportName(context.Options)} }} from \"./{Path.GetFileNameWithoutExtension(context.Options.ModelFileName)}\";");
                }
            }
            IEnumerable<ITsType> GetAllModelTypes()
            {
                return actionEntries.SelectMany(p => p.ActionInfo.Arguments.Select(a => a.ParameterType).Union(new[] { p.ActionInfo.ReturnInfo.ResultType })
                      .Distinct()
                       .SelectMany(p => modelTypeMapper[p].GetDeclareDependencyTypes(context.Options)))
                        .Distinct();
            }

        }

        private IDictionary<Type, ITsType> BuildModelTypeMapper(IEnumerable<ActionEntry> actionEntries, TsConvertOptions options)
        {
            var ts = new TsTypeContainer(options);
            foreach (var modelType in actionEntries.SelectMany(p => GetAllModelTypes(p.ActionInfo)))
            {
                ts.RegisteClrType(modelType);
            }
            return ts.GetAllMapping();
        }
        private IEnumerable<Type> GetAllModelTypes(ActionInfo action)
        {
            foreach (var arg in action.Arguments)
            {
                yield return arg.ParameterType;

            }
            if (action.ReturnInfo.ResultType != null)
            {
                yield return action.ReturnInfo.ResultType;
            }

        }
        private IEnumerable<ActionEntry> GetAllActionEntry(AppInfo appInfo)
        {
            foreach (var controller in appInfo.Controllers)
            {
                foreach (var action in controller.Actions)
                {
                    if (!typeof(IActionResult).IsAssignableFrom(action.ReturnInfo.ResultType))
                    {
                        yield return new ActionEntry(controller, action);

                    }
                }
            }
        }
        record ActionEntry(ControllerInfo ControllerInfo, ActionInfo ActionInfo);
    }

}
