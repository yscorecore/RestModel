using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript.Types
{
    public class TsPrimitive : ITsType
    {
        private static readonly Dictionary<Type, string> TypeMappings =
            new()
            {
                [typeof(string)] = "string",
                [typeof(bool)] = "boolean",
                [typeof(char)] = "string",
                [typeof(byte)] = "number",
                [typeof(sbyte)] = "number",
                [typeof(short)] = "number",
                [typeof(ushort)] = "number",
                [typeof(int)] = "number",
                [typeof(uint)] = "number",
                [typeof(long)] = "number",
                [typeof(ulong)] = "number",
                [typeof(float)] = "number",
                [typeof(double)] = "number",
                [typeof(decimal)] = "number",
                [typeof(ulong)] = "number",
                [typeof(Guid)] = "string",
                [typeof(DateTimeOffset)] = "string",
                [typeof(DateTime)] = "string",
                [typeof(TimeSpan)] = "string",
                [typeof(DateOnly)] = "string",
                [typeof(TimeOnly)] = "string",
                [typeof(DBNull)] = "null",
            };

        public static int Priority => 100;
        public string Name { get; private set; }
        public Type ClrType { get; set; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!, Type clrType)
        {
            return TypeMappings.ContainsKey(clrType);
        }

        public string GetDisplayName(TsConvertContext tsConvert)
        {
            return this.Name;
        }

        public void InitType(TsConvertContext tsConvert, Type clrType)
        {
            this.Name = TypeMappings[clrType];
        }
    }
}
