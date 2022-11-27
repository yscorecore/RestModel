﻿using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript.ConsoleApp
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            await Generator.Run<TypeScriptGenerator, TsConvertOptions>(new GeneratorInfo<TsConvertOptions>
            {
                Input = @"E:\Repos\studentmeal\StudentMeal\StudentMeal.SchoolApi\bin\Debug\net6.0",
                ControllerDlls = new string[] { "StudentMeal.*.dll" },
                Output = "output",
                Options = new TsConvertOptions()

            });
        }

    }
}
