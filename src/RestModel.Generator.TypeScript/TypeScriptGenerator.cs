using Microsoft.AspNetCore.Mvc;
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
        private Task GenerateApiFile(GeneratorContext<TsConvertOptions> context, IEnumerable<ActionEntry> actionEntries, IDictionary<Type, ITsType> modelTypeMapper)
        {
            return Task.CompletedTask;
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
