using System.Collections;

namespace RestModel.Generator.TypeScript.Models.Types
{
    public class TsDictionary : ITsType
    {
        public static int Priority => 300;

        public Type ClrType { get; set; }
        public ITsType KeyType { get; private set; }
        public ITsType ValueType { get; private set; }

        public static bool CanFromClrType(TsConvertContext tsConvert, Type clrType)
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
            else if (typeof(IDictionary).IsAssignableFrom(clrType))
            {
                return true;
            }
            return false;
        }

        public string GetDisplayName(TsConvertOptions options)
        {
            //  { [key: MealKind]: number; } ts(1337)
            // the key not support custom object
            // 索引签名参数类型必须是 “string”、“number”、“symbol”或模板文本类型。
            if (this.KeyType is TsPrimitive ts)
            {
                if (ts.Name == "string" || ts.Name == "number" || ts.Name == "symbol")
                {
                    return $"{{ [key: {ts.Name}]: {ValueType.GetDisplayName(options)}; }}";
                }
            }
            else if (this.KeyType is TsEnum)
            {
                return $"{{ [key: string | number]: {ValueType.GetDisplayName(options)}; }}";
            }
            return "any";

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
        public bool HasBody(TsConvertOptions options)
        {
            return false;
        }

        public void GenerateScript(TsGenerateContext context)
        {

        }
        public IEnumerable<ITsType> GetDeclareDependencyTypes(TsConvertOptions options)
        {
            if (this.KeyType is TsPrimitive ts)
            {
                if (ts.Name == "string" || ts.Name == "number" || ts.Name == "symbol")
                {
                    return this.ValueType.GetDeclareDependencyTypes(options);
                }
            }
            else if (this.KeyType is TsEnum)
            {
                return this.ValueType.GetDeclareDependencyTypes(options);
            }
            return Enumerable.Empty<ITsType>();

        }
        public string GetImportName(TsConvertOptions options)
        {
            return null;
        }
    }
}

