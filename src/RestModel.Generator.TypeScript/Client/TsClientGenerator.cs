using System.Text;
using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript.Client
{
    public class TsClientGenerator
    {
        public Task GenerateClientFile(TsGenerateContext context, ControllerInfo controllerInfo, IEnumerable<ActionInfo> actionInfos, IDictionary<Type, ITsType> modelTypeMapper)
        {
            var clientName = controllerInfo.ControllerName + "ApiClient";
            var title = $"class {clientName} extend {context.Options.BaseApiClassName}";
            var contents = actionInfos.SelectMany(p => GenerateApiBody(context.Options, controllerInfo, p, modelTypeMapper));
            context.WriteBlock(title, contents);
            context.Output.WriteLine();
            context.Output.WriteLine($"export {clientName.ToCamelCaseName()} = new {clientName}();");
            context.Output.WriteLine();
            return Task.CompletedTask;
        }
        private string[] GenerateApiBody(TsConvertOptions options, ControllerInfo controllerInfo, ActionInfo actionInfo, IDictionary<Type, ITsType> modelTypeMapper)
        {
            var returnType = modelTypeMapper[actionInfo.ReturnInfo.ResultType];
            var actionName = actionInfo.ActionName;
            var methodName = actionInfo.HttpMethod;
            var arguments = string.Join(", ", actionInfo.Arguments.Select(p => $"{p.ParameterName}: {modelTypeMapper[p.ParameterType].GetDisplayName(options)}"));
            return new string[]
                {
                    $"public {actionName}(req: UploadRequestReq): Promise<{returnType.GetDisplayName(options)}> {{",
                    "    return send({",
                    "      url:'/',",
                    "      method:'{methodName}',",
                    "      headers: { }",
                    "      params: { },",
                    "      body: req,",
                    "      form: { }",
                    "    });",
                    "}",
                    ""
                };
        }
    }
}
