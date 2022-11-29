using System.Reflection;

namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsEnum : ITsType
    {
        public static int Priority => 200;

        public Type ClrType { get; set; }

        public List<TsEnumField> Fields { get; private set; }

        public string Name { get; private set; }

        public string Namespace { get; private set; }

        public static bool CanFromClrType(TsConvertContext tsConvert, Type clrType)
        {
            return clrType.IsEnum;
        }

        public string GetDisplayName(TsConvertOptions options)
        {
            return this.Name;
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            this.Name = clrType.Name;
            this.Namespace = clrType.Namespace;
            var tsType = tsConvert.TypeFactory.FromClrType(Enum.GetUnderlyingType(clrType));
            this.Fields = clrType.GetFields(BindingFlags.Static | BindingFlags.Public)
                .Select(f => new TsEnumField(f.Name, tsType, Convert.ToInt64(f.GetValue(null))))
                .ToList();
        }

        public bool HasBody(TsConvertOptions options)
        {
            return true;
        }

        public void GenerateScript(TsGenerateContext context)
        {
            var title = $"export const enum {this.Name}";
            var contents = this.Fields.Select(item => $"{item.Name} = {item.Value},");
            context.WriteBlock(title, contents);
        }
        public IEnumerable<ITsType> GetDeclareDependencyTypes(TsConvertOptions options)
        {
            return new ITsType[] { this };
        }
        public string GetImportName(TsConvertOptions options)
        {
            return this.Name;
        }
    }
}
