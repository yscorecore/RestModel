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

        public static readonly TsPrimitive StringType = new()
        {
            DisplayName = "string",
            IdentityName = "#string",
            PrimitiveType = "string"
        };
        public static readonly TsPrimitive NumberType = new()
        {
            DisplayName = "number",
            IdentityName = "#number",
            PrimitiveType = "number"
        };
        public static readonly TsPrimitive BooleanType = new()
        {
            DisplayName = "boolean",
            IdentityName = "#boolean",
            PrimitiveType = "boolean"
        };
        public static readonly TsPrimitive NullType = new()
        {
            DisplayName = "null",
            IdentityName = "#null",
            PrimitiveType = "null"
        };

        public static int Priority => 100;
        public string DisplayName { get; init; }
        public string IdentityName { get; init; }
        public string PrimitiveType { get; init; }

        public static bool CanFromClrType(TsConvertContext tsConvert!!)
        {
            return TypeMappings.ContainsKey(tsConvert.ClrType);
        }

        public static ITsType FromClrType(TsConvertContext tsConvert!!)
        {
            return TypeMappings[tsConvert.ClrType] switch
            {
                "string" => StringType,
                "number" => NumberType,
                "boolean" => BooleanType,
                "null" => NullType,
                _ => throw new Exception("can not go here.")
            };
        }


    }
}
