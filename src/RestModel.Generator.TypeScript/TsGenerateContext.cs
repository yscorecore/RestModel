using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript
{
    public record TsGenerateContext
    {
        public TsConvertOptions Options { get; init; }
        public TextWriter Output { get; init; }
    }
    public static class TsGenerateContextExtensions
    {
        public static void WriteBlock(this TsGenerateContext context, string title, IEnumerable<string> contents)
        {
            context.Output.WriteLine($"{title} {{");
            foreach (var item in contents ?? Enumerable.Empty<string>())
            {
                context.Output.WriteLine($"{context.Options.IndentText}{item}");
            }
            context.Output.WriteLine("}");
        }
    }
}
