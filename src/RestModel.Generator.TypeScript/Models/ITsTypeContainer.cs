namespace RestModel.Generator.TypeScript.Models
{
    public interface ITsTypeContainer
    {
        ITsType FromClrType(Type clrType);
        void RegisteClrType(Type clrType);

        IDictionary<Type, ITsType> GetAllMapping();
    }
}
