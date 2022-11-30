using System.Text;
using Microsoft.AspNetCore.Routing.Patterns;

namespace RestModel
{
    public class ApiInfo
    {
        public ControllerInfo ControllerInfo { get; init; }
        public ActionInfo ActionInfo { get; init; }

        public List<ArgumentInfo> FormArguments { get; init; }

        public ArgumentInfo BodyArgument { get; init; }

        public List<ArgumentInfo> ParamArguments { get; init; }

        public List<ArgumentInfo> HeaderArgument { get; init; }
        //路径中不识别的参数
        public List<string> UnknowArgumentsInPath { get; init; }
        //没有被使用的参数
        public List<ArgumentInfo> LeftArguments { get; init; }


        public string UrlTemplate { get; init; }

        public static ApiInfo Create(ControllerInfo controllerInfo, ActionInfo actionInfo)
        {
            _ = controllerInfo ?? throw new ArgumentNullException(nameof(controllerInfo));
            _ = actionInfo ?? throw new ArgumentNullException(nameof(actionInfo));
            return GenerateApiBody(controllerInfo, actionInfo);
        }

        private static ApiInfo GenerateApiBody(ControllerInfo controllerInfo, ActionInfo actionInfo)
        {
            // 被路径使用了的参数
            var usedArguments = new List<ArgumentInfo>();
            // 路径中不识别的参数
            var unknowArguments = new List<string>();

            var urlTemplate = BuildUrl(usedArguments, unknowArguments);

            var methodName = actionInfo.HttpMethod;
            var headerArguments = BuildHeaderContent(usedArguments);
            var formArguments = BuildFormContent(usedArguments);
            var paramArguments = BuildParamsContent(usedArguments);
            var bodyArgument = BuildBodyContent(usedArguments);
            //没有识别的参数
            var leftArguments = actionInfo.Arguments.Except(usedArguments).ToList();

            return new ApiInfo
            {
                ActionInfo = actionInfo,
                ControllerInfo = controllerInfo,
                BodyArgument = bodyArgument,
                FormArguments = formArguments,
                ParamArguments = paramArguments,
                HeaderArgument = headerArguments,
                LeftArguments = leftArguments,
                UnknowArgumentsInPath = unknowArguments,
                UrlTemplate = urlTemplate
            };

            List<ArgumentInfo> BuildHeaderContent(List<ArgumentInfo> usedArguments)
            {
                var items = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Header).ToList();
                usedArguments.AddRange(items);
                return items;
            }

            List<ArgumentInfo> BuildFormContent(List<ArgumentInfo> usedArguments)
            {
                var items = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Form).ToList();
                usedArguments.AddRange(items);
                return items;
            }

            ArgumentInfo BuildBodyContent(List<ArgumentInfo> usedArguments)
            {
                var bodyArguments = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Body).ToList();
                var complexArguments = actionInfo.Arguments.Except(usedArguments).Where(p => p.ValueSource == ValueSource.None && !p.CanConvertFromString).ToList();

                var item = bodyArguments.Union(complexArguments).FirstOrDefault();
                // body 只运行有一个
                if (item != null)
                {
                    usedArguments.Add(item);
                }

                return item;
            }
            List<ArgumentInfo> BuildParamsContent(List<ArgumentInfo> usedArguments)
            {
                var queryArguments = actionInfo.Arguments.Where(p => p.ValueSource == ValueSource.Query).ToList();
                var simpleArguments = actionInfo.Arguments.Except(usedArguments).Where(p => p.ValueSource == ValueSource.None && p.CanConvertFromString).ToList();

                var items = queryArguments.Union(simpleArguments).ToList();
                usedArguments.AddRange(items);
                return items;
            }

            string BuildUrl(List<ArgumentInfo> usedArguments, List<string> unknowArguments)
            {
                StringBuilder stringBuilder = new StringBuilder();

                var controllerPattern = RoutePatternFactory.Parse(controllerInfo.RouteTemplate ?? string.Empty);
                var actionPattern = RoutePatternFactory.Parse(actionInfo.RouteTemplate ?? string.Empty);
                var allsegments = controllerPattern.PathSegments.Concat(actionPattern.PathSegments)
                      .Select(p => BuildUrlSegment(p, usedArguments));
                var url = $"/{string.Join('/', allsegments)}";

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
                            sb.Append($"{{{rpp.Name}}}");
                        }
                        else
                        {
                            unknowArguments.Add(rpp.Name);
                            sb.Append($"{{{rpp.Name}}}");
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
