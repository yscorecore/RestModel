using RestModel.Generator.TypeScript.Client;
using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript
{
    public class TypeScriptGenerator : BaseGenerator<TsConvertOptions>
    {
        protected override async Task GenerateCode(GeneratorCodeContext<TsConvertOptions> context)
        {
            var modelTypeMapper = GetModelMappings(context);
            await GenerateImport(context.Writer, context, modelTypeMapper);
            await GenerateModelFile(context.Writer, context, modelTypeMapper);
            await GenerateApiFile(context.Writer, context, modelTypeMapper);
        }
        private IDictionary<Type, ITsType> GetModelMappings(GeneratorCodeContext<TsConvertOptions> context)
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
        private async Task GenerateImport(StreamWriter streamWriter, GeneratorCodeContext<TsConvertOptions> context, IDictionary<Type, ITsType> modelTypeMapper)
        {
            await streamWriter.WriteLineAsync($"import {{ {context.Options.SendFunctionName} }} from \"{context.Options.SendFunctionImportModelName}\";");
        }
        private Task GenerateModelFile(StreamWriter streamWriter, GeneratorCodeContext<TsConvertOptions> context, IDictionary<Type, ITsType> modelTypeMapper)
        {
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
        private async Task GenerateApiFile(StreamWriter streamWriter, GeneratorCodeContext<TsConvertOptions> context, IDictionary<Type, ITsType> modelTypeMapper)
        {
            var tsGenerateContext = new TsGenerateContext
            {
                Output = streamWriter,
                Options = context.Options
            };
            var apiClient = new ApiClient();


            var nameManager = new NameManager();
            foreach (var controller in context.App.Controllers)
            {
                var name = nameManager.Request(controller.ControllerName + "Api");
                await apiClient.BuildScript(tsGenerateContext, name, controller.AllApiInfos(), modelTypeMapper);
            }
        }


    }

}
