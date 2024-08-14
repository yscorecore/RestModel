using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript.ConsoleApp
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            await Generator.Run<TypeScriptGenerator, TsConvertOptions>(new GeneratorInfo<TsConvertOptions>
            {
                Input = @"C:\Users\yangpengbo\source\repos\RestModel\example\WebProject1\bin\Debug\net6.0",
                Assemblies = "WebProject1.dll" ,
                //Input = @"C:\Users\yangpengbo\source\repos\obpt123\StudentMeal\StudentMeal\src\StudentMeal.ImageService\bin\Debug\net6.0",
                //Assemblies = "StudentMeal.*.dll",
                Output = @"C:\Users\yangpengbo\source\repos\RestModel\example\WebProject1.Client.TypeScript\src\client",
                Options = new TsConvertOptions()

            });
        }

    }
}
