namespace RestModel.Generator.TypeScript.Models
{
    public record TsConvertOptions
    {
        public bool EnumAsString { get; set; } = false;
        public string IndentText { get; set; } = "    ";
        public bool CamelCaseProperty { get; set; } = true;
        public string SendFunctionName { get; set; } = "send";
        public string SendFunctionImportModelName { get; set; } = "./base";

        public static readonly TsConvertOptions Default = new TsConvertOptions();
    }
    
}
