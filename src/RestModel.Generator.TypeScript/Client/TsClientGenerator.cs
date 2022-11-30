using System.Data;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing.Patterns;
using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript.Client
{
    public class TsClientGenerator
    {


        public async Task GenerateClientFile(TsGenerateContext context, ControllerInfo controllerInfo, IEnumerable<ActionInfo> actionInfos, IDictionary<Type, ITsType> modelTypeMapper)
        {
            var apiClient = new ApiClient();
            var text = await apiClient.Run(context.Options, controllerInfo, actionInfos, modelTypeMapper);
            await context.Output.WriteLineAsync(text);
            //var actionNameManager = new NameManager();
            //var clientName = controllerInfo.ControllerName + "Api";
            //var title = $"class {clientName} extends {context.Options.BaseApiClassName}";
            //var contents = actionInfos.SelectMany(p => GenerateApiBody(actionNameManager, context.Options, controllerInfo, p, modelTypeMapper)).Where(p => !string.IsNullOrEmpty(p));
            //context.Output.WriteLine();
            //context.WriteBlock(title, contents);
            //context.Output.WriteLine();
            //context.Output.WriteLine($"export const {clientName.ToCamelCaseName()} = new {clientName}();");
            //context.Output.WriteLine();
            //return Task.CompletedTask;
        }
        private string[] GenerateApiBody(NameManager nameManager, TsConvertOptions options, ControllerInfo controllerInfo, ActionInfo actionInfo, IDictionary<Type, ITsType> modelTypeMapper)
        {
            // 被路径使用了的参数
            var usedArguments = new List<ArgumentInfo>();
            // 路径中不识别的参数
            var unknowArguments = new List<ArgumentInfo>();

            var url = BuildUrl(usedArguments, unknowArguments);
            var returnType = modelTypeMapper[actionInfo.ReturnInfo.ResultType];
            var actionName = nameManager.Request(actionInfo.ActionName);
            var methodName = actionInfo.HttpMethod;
            var arguments = string.Join(", ", actionInfo.Arguments.Concat(unknowArguments).Select(p => $"{p.ParameterName}: {modelTypeMapper[p.ParameterType].GetDisplayName(options)}"));
            var headerText = BuildHeaderContent(usedArguments);
            var formText = BuildFormContent(usedArguments);
            var paramText = BuildParamsContent(usedArguments);
            var bodyText = BuildBodyContent(usedArguments);
            //没有识别的参数
            var leftArguments = actionInfo.Arguments.Except(usedArguments).ToList();
            foreach (var argument in leftArguments)
            {
                Console.WriteLine($"unknow argument '{argument.ParameterName}' in method '{actionInfo.ActionName}' of controller '{controllerInfo.ClassName}'");
            }
            return new string[]
                {
                    $"public {actionName}({arguments}): Promise<{returnType.GetDisplayName(options)}> {{",
                    "  return this.send({",
                    $"  url:{url},",
                    $"  method:'{methodName}',",
                    headerText!=null? $"  headers: {headerText}" : null,
                    formText != null? $"  form: {formText}" : null,
                    paramText != null? $"  params: {paramText}," : null,
                    bodyText!=null? $"  body: {bodyText}," : null,
                    "  });",
                    "}"
                };

            string BuildHeaderContent(List<ArgumentInfo> usedArguments)
            {
                var items = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Header).ToList();
                usedArguments.AddRange(items);
                return items.Count > 0 ? WrapSegment(string.Join(", ", items.Select(BuildHeaderSegment))) : default;
            }
            string BuildHeaderSegment(ArgumentInfo p)
            {
                // header 不支持复杂对象
                return p.ValueName is null ? p.ParameterName : $"{p.ValueName}:{p.ParameterName}";
            }
            string BuildFormContent(List<ArgumentInfo> usedArguments)
            {
                var items = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Form).ToList();
                usedArguments.AddRange(items);
                return items.Count > 0 ? WrapSegment(string.Join(", ", items.Select(BuildFormSegment))) : default;
            }
            string BuildFormSegment(ArgumentInfo p)
            {
                if (p.ParameterType == typeof(IFormFile) || p.ParameterType == typeof(IFormFileCollection) || p.CanConvertFromString)
                {
                    return p.ValueName is null ? p.ParameterName : $"{p.ValueName}:{p.ParameterName}";
                }
                else
                {
                    //复杂类型
                    return $"...{p.ParameterName}";
                }
            }
            string BuildBodyContent(List<ArgumentInfo> usedArguments)
            {
                var bodyArguments = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Body).ToList();
                var complexArguments = actionInfo.Arguments.Except(usedArguments).Where(p => p.ValueSource == ValueSource.None && !p.CanConvertFromString).ToList();

                var item = bodyArguments.Union(complexArguments).FirstOrDefault();
                // body 只运行有一个
                if (item != null)
                {
                    usedArguments.Add(item);
                }

                return item != null ? item.ParameterName : default;
            }
            string BuildParamsContent(List<ArgumentInfo> usedArguments)
            {
                var queryArguments = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Query).ToList();
                var simpleArguments = actionInfo.Arguments.Except(usedArguments).Where(p => p.ValueSource == ValueSource.None && p.CanConvertFromString).ToList();

                var items = queryArguments.Union(simpleArguments).ToList();
                usedArguments.AddRange(items);
                return items.Count > 0 ? WrapSegment(string.Join(", ", items.Select(BuildParamsSegment))) : default;
            }
            string BuildParamsSegment(ArgumentInfo p)
            {
                if (p.CanConvertFromString)
                {
                    return p.ValueName is null ? p.ParameterName : $"{p.ValueName}:{p.ParameterName}";
                }
                else
                {
                    //复杂类型
                    return $"...{p.ParameterName}";
                }
            }
            string WrapSegment(string text)
            {
                return $"{{{text}}}";
            }
            string BuildUrl(List<ArgumentInfo> usedArguments, List<ArgumentInfo> unknowArguments)
            {
                StringBuilder stringBuilder = new StringBuilder();

                var controllerPattern = RoutePatternFactory.Parse(controllerInfo.RouteTemplate ?? string.Empty);
                var actionPattern = RoutePatternFactory.Parse(actionInfo.RouteTemplate ?? string.Empty);
                var allsegments = controllerPattern.PathSegments.Concat(actionPattern.PathSegments)
                      .Select(p => BuildUrlSegment(p, usedArguments));
                var url = $"`/{string.Join('/', allsegments)}`";

                var replacements = new Dictionary<string, string>()
                {
                    ["[controller]"] = controllerInfo.ControllerName,
                    ["[action]"] = actionInfo.ActionName,
                    ["[area]"] = controllerInfo.AreaName ?? "[area]"
                };

                //RoutePatternSeparatorPart  .
                // RoutePatternLiteralPart 
                //RoutePatternParameterPart
                //https://learn.microsoft.com/zh-cn/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0#routing-token-replacement-templates-ref-label
                return replacements.Aggregate(url, (p, kv) => p.Replace(kv.Key, kv.Value));
            }
            string BuildUrlSegment(RoutePatternPathSegment seg, List<ArgumentInfo> usedArguments)
            {
                var sb = new StringBuilder();
                foreach (var part in seg.Parts)
                {
                    if (part is RoutePatternSeparatorPart rp)
                    {
                        sb.Append(rp.Content);
                    }
                    else if (part is RoutePatternLiteralPart rr)
                    {
                        sb.Append(rr.Content);
                    }
                    else if (part is RoutePatternParameterPart rpp)
                    {
                        var argument = GetRouteArgumentInfo(rpp.Name);
                        if (argument != null)
                        {
                            usedArguments.Add(argument);
                            sb.Append($"${{encodeURIComponent({rpp.Name})}}");
                        }
                        else
                        {
                            unknowArguments.Add(new ArgumentInfo { ParameterType = typeof(string), ParameterName = rpp.Name, CanConvertFromString = true });
                            sb.Append($"${{encodeURIComponent({rpp.Name})}}");
                        }
                    }
                    else
                    {
                        throw new NotSupportedException($"unknow path segment part '{part.GetType().FullName}' in segment '{seg}'.");
                    }
                }
                return sb.ToString();
            }
            ArgumentInfo GetRouteArgumentInfo(string name)
            {
                return actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Route)
                         .Where(p => p.ValueName == name).FirstOrDefault()
                         ??
                          actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Route)
                         .Where(p => p.ParameterName == name).FirstOrDefault()
                         ??
                         actionInfo.Arguments
                         .Where(p => p.ParameterName == name).FirstOrDefault();

            }

        }
    }
}
