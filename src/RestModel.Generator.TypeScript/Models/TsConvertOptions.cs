namespace RestModel.Generator.TypeScript.Models
{
    public record TsConvertOptions
    {
        public string ModelFileName { get; set; } = "model.ts";
        public string ApiFileName { get; set; } = "api.ts";
        public bool EnumAsString { get; set; } = false;
        public string IndentText { get; set; } = "    ";
        public bool CamelCaseProperty { get; set; } = true;
        public string BaseApiClassName { get; set; } = "ApiClientBase";
        public string BaseApiImportModelName { get; set; } = "./baseApi.ts";

        public static readonly TsConvertOptions Default = new TsConvertOptions();
    }
}
