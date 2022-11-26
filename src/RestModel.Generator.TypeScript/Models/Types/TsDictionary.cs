using System.Collections;

namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsDictionary : ITsType
    {
        public static int Priority => 300;

        public Type ClrType { get; set; }
        public ITsType KeyType { get; private set; }
        public ITsType ValueType { get; private set; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!, Type clrType)
        {
            if (clrType.IsGenericType)
            {
                var define = clrType.GetGenericTypeDefinition();
                if (define == typeof(IDictionary<,>))
                {
                    return true;
                }
                var allInterfaces = define.GetInterfaces();
                return allInterfaces.Any(p => p.IsGenericType && p.GetGenericTypeDefinition() == typeof(IDictionary<,>));
            }
            else if(typeof(IDictionary).IsAssignableFrom(clrType))
            {
                return true;
            }
            return false;
        }

        public string GetDisplayName(TsConvertOptions options)
        {
            return $"{{ [key: {KeyType.GetDisplayName(options)}]: {ValueType.GetDisplayName(options)}; }}";
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            if (clrType.IsGenericType)
            {
                var types = clrType.GetGenericArguments();
                this.KeyType = tsConvert.TypeFactory.FromClrType(types[0]);
                this.ValueType = tsConvert.TypeFactory.FromClrType(types[1]);
            }
            else
            {
                this.KeyType = tsConvert.TypeFactory.FromClrType(typeof(object));
                this.ValueType = tsConvert.TypeFactory.FromClrType(typeof(object));
            }
           
        }
    }
}

