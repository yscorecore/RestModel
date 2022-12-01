using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Http;
using RazorLight;
using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript.Client
{
    public class ApiClient
    {
        static RazorLightEngine engine;
        static ApiClient()
        {
            engine = new RazorLightEngineBuilder()
            // required to have a default RazorLightProject type,
            // but not required to create a template from string.
            .UseEmbeddedResourcesProject(typeof(ApiClient))
            .SetOperatingAssembly(typeof(ApiClient).Assembly)
            .UseMemoryCachingProvider()
            .DisableEncoding()
            .Build();
        }

        public async Task BuildScript(TsGenerateContext context, string className, List<ApiInfo> apiInfos,  IDictionary<Type, ITsType> modelTypeMapper)
        {
            var model = new Model
            {
                ClassName = className,
                ApiInfos = apiInfos,
                Options = context.Options,
                TypeMapper = modelTypeMapper,
                NameManager = new NameManager(),
            };
            var text= await engine.CompileRenderAsync(nameof(ApiClient), model);
            await context.Output.WriteLineAsync(text);
        }

        public class Model
        {
            public List<ApiInfo> ApiInfos { get; init; }
            public TsConvertOptions Options { get; init; }
            public NameManager NameManager { get; init; }
            public IDictionary<Type, ITsType> TypeMapper { get; init; }

            public string ClassName { get; init; }

            public string NewActionName(ApiInfo apiInfo) => NameManager.Request(apiInfo.ActionInfo.ActionName);
            public string ActionResultType(ApiInfo apiInfo) => GetTsTypeName(apiInfo.ActionInfo.ReturnInfo.ResultType);
            public string ClassCamelCaseName => ClassName.ToCamelCaseName();

            public string GetTsTypeName(Type type) => TypeMapper[type].GetDisplayName(Options);
            public string ArgumentLists(ApiInfo apiInfo)
            {
                var arguments = apiInfo.ActionInfo.Arguments.Select(p => $"{p.ParameterName}: {GetTsTypeName(p.ParameterType)}");
                return string.Join(", ", arguments);
            }
            public string GetUrl(ApiInfo apiInfo)
            {
                var result = Regex.Replace(apiInfo.UrlTemplate, @"\{(?<name>\w+)\}", (m) => {
                    if (apiInfo.ActionInfo.Arguments.Any(p => p.ParameterName == m.Groups["name"].Value))
                    {
                        return "$" + m.Value;
                    }
                    return m.Value;
                } );
                return $"`{result}`";
            }
            public string GetMethod(ApiInfo apiInfo) => apiInfo.ActionInfo.HttpMethod;

            public string GetHeaders(ApiInfo apiInfo)
            {
                return $"{{ {string.Join(", ", apiInfo.HeaderArgument.Select(BuildHeaderSegment))} }}";
                string BuildHeaderSegment(ArgumentInfo p)
                {
                    // header 不支持复杂对象
                    return p.ValueName is null ? p.ParameterName : $"{p.ValueName}:{p.ParameterName}";
                }
            }
            public string GetForms(ApiInfo apiInfo)
            {
                return $"{{ {string.Join(", ", apiInfo.FormArguments.Select(BuildFormSegment))} }}";
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
            }
            public string GetParams(ApiInfo apiInfo)
            {
                return $"{{ {string.Join(", ", apiInfo.ParamArguments.Select(BuildParamSegment))} }}";
                string BuildParamSegment(ArgumentInfo p)
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
            }
            public string GetBody(ApiInfo apiInfo)
            {
                return apiInfo.BodyArgument.ParameterName;
            }
        }
    }
}
