using System.Reflection.Emit;

namespace RestModel.Generator.TypeScript
{
    public class TypeScriptGenerator : IGenerator
    {
        public async Task Generator(GeneratorContext context)
        {
            await this.GeneratModels(context);   
        }
        private Task GeneratModels(GeneratorContext context)
        { 
            return Task.CompletedTask;
        }
    }
}
