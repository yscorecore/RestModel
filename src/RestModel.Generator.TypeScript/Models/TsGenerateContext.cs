using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Concurrent;

namespace RestModel.Generator.TypeScript.Models
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
            context.Output.WriteLine(title);
            context.Output.WriteLine("{");
            foreach (var item in contents ?? Enumerable.Empty<string>())
            {
                context.Output.WriteLine($"{context.Options.IndentText}{item}");
            }
            context.Output.WriteLine("}");
        }
    }
}
