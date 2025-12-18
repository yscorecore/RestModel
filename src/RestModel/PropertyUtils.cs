using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace System.Reflection
{
    public static class PropertyUtils
    {
        const string nullableAttributeFullName = "System.Runtime.CompilerServices.NullableAttribute";
        static System.Collections.Concurrent.ConcurrentDictionary<Assembly, bool> assemblyCache = new System.Collections.Concurrent.ConcurrentDictionary<Assembly, bool>();
        public static bool IsRequired(this ParameterInfo prop)
        {
            if (prop.GetCustomAttribute<RequiredAttribute>() != null)
            {
                return true;
            }
            if (IsAssemblyNullable(prop.Member.DeclaringType.Assembly))
            {
                if (prop.ParameterType.IsValueType)
                {
                    return Nullable.GetUnderlyingType(prop.ParameterType) == null;
                }
                var propHasNullable = prop.GetCustomAttributesData()
                   .Any(p => p.AttributeType.FullName == nullableAttributeFullName);
                return !propHasNullable;
            }
            return false;
        }


        public static bool IsRequired(this PropertyInfo prop)
        {
            if (prop.GetCustomAttribute<RequiredAttribute>() != null)
            {
                return true;
            }
            if (IsAssemblyNullable(prop.DeclaringType.Assembly))
            {
                if (prop.PropertyType.IsValueType)
                {
                    return Nullable.GetUnderlyingType(prop.PropertyType) == null;
                }
                var propHasNullable = prop.GetCustomAttributesData()
                   .Any(p => p.AttributeType.FullName == nullableAttributeFullName);
                return !propHasNullable;
            }
            return false;
        }
        private static bool IsAssemblyNullable(Assembly assembly)
        {
            return assemblyCache.GetOrAdd(assembly, (a) =>
                a.GetType(nullableAttributeFullName) != null);
        }
    }
}
