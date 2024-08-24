using System;
using System.Collections.Generic;
using RestModel.Generator;

namespace RestModel.AspnetCore
{
    public class RestModelOptions
    {
        public string Path { get; set; } = "/rest-model";

    }
    public class RestModelBuildOptions
    {
        public string Assemblies { get; set; }
        public string Controllers { get; set; }
        internal Dictionary<string, Type> Generators { get; private set; } = new Dictionary<string, Type>();

        public void AddGenerator<T>(string name)
            where T : class, IGenerator
        {
            this.Generators.Add(name, typeof(T));
        }

    }
}
