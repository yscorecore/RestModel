using System.Collections.Generic;
using RestModel.Generator;

namespace RestModel.AspnetCore
{
    public class RestModelOptions
    {
        public string Path { get; set; } = "/rest-model";
        public Dictionary<string, IGenerator> Generators { get; set; } = new Dictionary<string, IGenerator>();


    }
}
