using RestModel.Generator.TypeScript.Client;
using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript
{
    public class TypeScriptGenerator : IGenerator<TsConvertOptions>
    {
        public async Task Generator(GeneratorContext<TsConvertOptions> context)
        {
            var modelTypeMapper = GetModelMappings(context);
            await GenerateModelFile(context, modelTypeMapper);
            await GenerateApiFile(context, modelTypeMapper);
        }
        private IDictionary<Type, ITsType> GetModelMappings(GeneratorContext<TsConvertOptions> context)
        {
            var ts = new TsTypeContainer(context.Options);
            foreach (var controller in context.App.Controllers)
            {
                foreach (var action in controller.Actions)
                {
                    foreach (var type in action.GetAllModelTypes())
                    {
                        ts.RegisteClrType(type);
                    }
                }
            }

            return ts.GetAllMapping();
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
        private async Task GenerateApiFile(GeneratorContext<TsConvertOptions> context, IDictionary<Type, ITsType> modelTypeMapper)
        {
            using var apiFile = File.Create(Path.Combine(context.Output, context.Options.ApiFileName));
            using var streamWriter = new StreamWriter(apiFile);
            var tsGenerateContext = new TsGenerateContext
            {
                Output = streamWriter,
                Options = context.Options
            };
            var apiClient = new ApiClient();

            await GenerateImport();
            var nameManager = new NameManager();
            foreach (var controller in context.App.Controllers)
            {
                var name = nameManager.Request(controller.ControllerName + "Api");
                await apiClient.BuildScript(tsGenerateContext, name, controller.AllApiInfos(), modelTypeMapper);
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
                return context.App.Controllers.SelectMany(p => p.Actions).SelectMany(p => p.GetAllModelTypes())
                      .Distinct()
                      .SelectMany(p => modelTypeMapper[p].GetDeclareDependencyTypes(context.Options))
                      .Distinct();
            }
        }

    }

}
