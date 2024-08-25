using System;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RestModel.Generator;

namespace RestModel.AspnetCore
{

    public class RestModelMiddleware
    {
        private readonly RequestDelegate next;
        private readonly RestModelOptions options;
        private readonly RestModelBuildOptions buildOptions;
        private readonly ILogger<RestModelMiddleware> logger;

        public RestModelMiddleware(RequestDelegate next, ILogger<RestModelMiddleware> logger, RestModelOptions options, RestModelBuildOptions buildOptions)
        {
            this.next = next;
            this.logger = logger;
            this.options = options;
            this.buildOptions = buildOptions;
        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Method.Equals("GET", StringComparison.InvariantCultureIgnoreCase)
                && context.Request.Path.StartsWithSegments(options.Path, out _, out var remaining))
            {

                string remainingName = remaining.ToString().Trim('/');
                if (buildOptions.Generators.TryGetValue(remainingName, out var generator))
                {
                    await WriteCode(context, generator);
                }
                else
                {
                    var allKeys = buildOptions.Generators == null ? Array.Empty<string>() : buildOptions.Generators.Keys.ToArray();
                    if (allKeys.Length == 1)
                    {
                        if (string.IsNullOrEmpty(remainingName))
                        {
                            await WriteCode(context, buildOptions.Generators.Values.Single());
                        }
                        else
                        {
                            context.Response.StatusCode = StatusCodes.Status400BadRequest;
                            await context.Response.WriteAsync($"No generator '{remainingName}' was found.");

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
        private async Task WriteCode(HttpContext context, Type generatorType)
        {
            var generator = CreateGenerator(context, generatorType);
            await RunGenerator(context, generator);
        }
        private IGenerator CreateGenerator(HttpContext context, Type generatorType)
        {
            try
            {
                return (IGenerator)ActivatorUtilities.CreateInstance(context.RequestServices, generatorType);

            }
            catch (Exception ex)
            {

                throw new Exception("create generator instance error", ex);
            }
        }
        private async Task RunGenerator(HttpContext context, IGenerator generator)
        {
            try
            {
                context.Response.StatusCode = StatusCodes.Status200OK;
                context.Response.ContentType = "text/plain";
                var arguments = context.Request.Query.ToDictionary(p => p.Key, p => p.Value.Count == 1 ? (object)p.Value.ToString() : p.Value.ToArray());
                //await using var memoryStream = new MemoryStream();
                //await using var writer = new StreamWriter(memoryStream);

                await using var writer1 = new StreamWriter(context.Response.Body, Encoding.UTF8);
                var settings = new GeneratorSetting()
                {
                    Logger = logger,
                    Writer = writer1,
                    Input = AppContext.BaseDirectory,
                    Assemblies = buildOptions.Assemblies,
                    Controllers = buildOptions.Controllers,
                };
                await generator.Generator(settings, arguments);
                await writer1.FlushAsync();
                // memoryStream.Seek(0, SeekOrigin.Begin);
                // await memoryStream.CopyToAsync(context.Response.Body);
            }
            catch (Exception ex)
            {

                throw new Exception("generate code failed.", ex);
            }

        }
    }
}
