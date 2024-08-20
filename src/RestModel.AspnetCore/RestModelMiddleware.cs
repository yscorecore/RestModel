using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using RestModel.Generator;

namespace RestModel.AspnetCore
{

    public class RestModelMiddleware
    {
        private readonly RequestDelegate next;
        private readonly RestModelOptions options;
        private readonly ILogger<RestModelMiddleware> logger;

        public RestModelMiddleware(RequestDelegate next, ILogger<RestModelMiddleware> logger, RestModelOptions options)
        {
            this.next = next;
            this.logger = logger;
            this.options = options;
        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Method.Equals("GET", StringComparison.InvariantCultureIgnoreCase)
                && context.Request.Path.StartsWithSegments(options.Path, out _, out var remaining))
            {

                string remainingName = remaining.ToString();
                if (options.Generators != null && options.Generators.TryGetValue(remainingName, out var generator))
                {
                    await WriteCode(context, generator);
                }
                else
                {
                    var allKeys = options.Generators == null ? Array.Empty<string>() : options.Generators.Keys.ToArray();
                    if (allKeys.Length == 1)
                    {
                        if (string.IsNullOrEmpty(remainingName))
                        {
                            await WriteCode(context, options.Generators.Values.Single());
                        }
                    }
                    else if (allKeys.Length == 0)
                    {
                        context.Response.StatusCode = StatusCodes.Status400BadRequest;
                        await context.Response.WriteAsync($"No generator was found.");
                    }
                    else
                    {
                        context.Response.StatusCode = StatusCodes.Status400BadRequest;
                        await context.Response.WriteAsync($"Invalid generator name, support names: [{string.Join(", ", allKeys.Select(p => $"'{p}'"))}].");
                    }
                }
            }
            else
            {
                await next(context);
            }
        }
        private async Task WriteCode(HttpContext context, IGenerator generator)
        {
            context.Response.StatusCode = StatusCodes.Status200OK;
            context.Response.ContentType = "text/plain";
            var arguments = context.Request.Query.ToDictionary(p => p.Key, p => p.Value.Count == 1 ? (object)p.Value.ToString() : p.Value.ToArray());
            var settings = new GeneratorSetting()
            {
                Logger = logger,
                Output = context.Response.Body,
            };
            await generator.Generator(settings, arguments);
        }
    }
}
