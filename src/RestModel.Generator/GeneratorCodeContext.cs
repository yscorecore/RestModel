using System;
using System.IO;
using Microsoft.Extensions.Logging;

namespace RestModel
{
    public class GeneratorCodeContext<TOptions> 
    {
        public TOptions Options { get; init; }
        public AppInfo App { get; init; }
        public StreamWriter Writer { get; init; }
        public ILogger Logger { get; init; }
    }
}
