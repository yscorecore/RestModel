using System.Text;
using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript.Client
{
    public class TsClientGenerator
    {
        public Task GenerateClientFile(TsGenerateContext context, ControllerInfo controllerInfo, IEnumerable<ActionInfo> actionInfos, IDictionary<Type, ITsType> modelTypeMapper)
        {
            var clientName = controllerInfo.ControllerName + "ApiClient";
            var title = $"class {clientName} extends {context.Options.BaseApiClassName}";
            var contents = actionInfos.SelectMany(p => GenerateApiBody(context.Options, controllerInfo, p, modelTypeMapper)).Where(p => !string.IsNullOrEmpty(p));
            context.Output.WriteLine();
            context.WriteBlock(title, contents);
            context.Output.WriteLine();
            context.Output.WriteLine($"export const {clientName.ToCamelCaseName()} = new {clientName}();");
            context.Output.WriteLine();
            return Task.CompletedTask;
        }
        private string[] GenerateApiBody(TsConvertOptions options, ControllerInfo controllerInfo, ActionInfo actionInfo, IDictionary<Type, ITsType> modelTypeMapper)
        {
            var returnType = modelTypeMapper[actionInfo.ReturnInfo.ResultType];
            var actionName = actionInfo.ActionName;
            var methodName = actionInfo.HttpMethod;
            var arguments = string.Join(", ", actionInfo.Arguments.Select(p => $"{p.ParameterName}: {modelTypeMapper[p.ParameterType].GetDisplayName(options)}"));
            var headerText = BuildHeaderContent();
            var bodyText = BuildBodyContent();
            var paramText = BuildParamsContent();
            var formText = BuildFormContent();

           
            var url = "/";
            return new string[]
                {
                    $"public {actionName}({arguments}): Promise<{returnType.GetDisplayName(options)}> {{",
                    "    return this.send({",
                    $"      url:'{url}',",
                    $"      method:'{methodName}',",
                    headerText!=null? $"      headers: {headerText}" : null,
                    paramText != null? $"      params: {paramText}," : null,
                    bodyText!=null? $"      body: {bodyText}," : null,
                    formText != null? $"      form: {formText}" : null,
                    "    });",
                    "}"
                };

            string BuildHeaderContent()
            {
                var items = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Header)
                     .Select(p => p.ParameterName == p.ValueName ? p.ValueName : $"{p.ValueName}:{p.ParameterName}").ToList();
                return items.Count > 0 ? WrapSegment(string.Join(", ",items)) : default;
            }
            string BuildBodyContent()
            {
                return actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Body).Select(p => $"{p.ValueName}").FirstOrDefault();
            }
            string BuildParamsContent()
            {
                var items = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Query)
                    .Select(p => p.ParameterName == p.ValueName ? p.ValueName : $"{p.ValueName}:{p.ParameterName}").ToList();
                return items.Count > 0 ? WrapSegment(string.Join(", ", items)) : default;
            }
            string BuildFormContent()
            {
                var items = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Form)
                    .Select(p => p.ParameterName == p.ValueName ? p.ValueName : $"{p.ValueName}:{p.ParameterName}").ToList();
                return items.Count > 0 ? WrapSegment(string.Join(", ", items)) : default;
            }
            string WrapSegment(string text)
            {
                return $"{{{text}}}";
            }
        }
    }
}
