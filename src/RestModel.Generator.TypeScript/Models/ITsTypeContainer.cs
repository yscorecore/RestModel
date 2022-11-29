namespace RestModel.Generator.TypeScript.Models
{
    public interface ITsTypeContainer : INameManager
    {
        ITsType FromClrType(Type clrType);
        void RegisteClrType(Type clrType);

        IDictionary<Type, ITsType> GetAllMapping();
    }
}
