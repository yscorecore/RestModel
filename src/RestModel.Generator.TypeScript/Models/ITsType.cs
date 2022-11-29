namespace RestModel.Generator.TypeScript.Models
{
    public interface ITsType
    {
        //static abstract bool CanFromClrType(TsConvertContext tsConvert, Type clrType);
        //static abstract int Priority { get; }
        Type ClrType { get; set; }

        void InitType(TsConvertContext tsConvert, Type clrType);

        string GetDisplayName(TsConvertOptions options);
        string GetImportName(TsConvertOptions options);

        bool HasBody(TsConvertOptions options);

        void GenerateScript(TsGenerateContext context);

        IEnumerable<ITsType> GetDeclareDependencyTypes(TsConvertOptions options);
    }
}
