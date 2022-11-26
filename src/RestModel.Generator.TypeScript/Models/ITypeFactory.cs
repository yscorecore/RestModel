﻿using System.Collections.Concurrent;

namespace RestModel.Generator.TypeScript.Models
{
    public interface ITsTypeContainer
    {
        ITsType FromClrType(Type clrType);
        void RegisteClrType(Type clrType);
    }
    public class TsTypeContainer : ITsTypeContainer
    {
        private static List<SupportTypeInfo> SupportTypes = typeof(ITsType)
            .Assembly.GetTypes()
            .Where(p => p.IsClass && !p.IsAbstract && p.GetConstructor(Type.EmptyTypes) != null)
            .Where(p => typeof(ITsType).IsAssignableFrom(p))
            .OrderBy(P => Convert.ToInt32(P.GetProperty(nameof(ITsType.Priority)).GetValue(null)))
            .Select(p => new SupportTypeInfo(p))
            .ToList();


        public TsTypeContainer(TsConvertOptions options)
        {
            this.Options = options;
            this.Context = new TsConvertContext
            {
                Options = this.Options,
                TypeFactory = this
            };
        }
        public TsConvertOptions Options { get; }
        private TsConvertContext Context { get; }
        public ConcurrentDictionary<Type, ITsType> TypeMapping { get; } = new ConcurrentDictionary<Type, ITsType>();



        public ITsType FromClrType(Type clrType)
        {
            RegisteClrType(clrType);
            return TypeMapping[clrType];
        }
        public void RegisteClrType(Type clrType)
        {
            if (TypeMapping.ContainsKey(clrType))
            {
                return;
            }
            var tsType = SupportTypes.Where(p => p.CanConvertFunc(this.Context, clrType)).FirstOrDefault();
            if (tsType != null)
            {
                var instance = tsType.NewInstance();
                if (TypeMapping.TryAdd(clrType, instance))
                {
                    instance.ClrType = clrType;
                    instance.InitType(this.Context, clrType);
                }
            }
            else
            {
                throw new NotSupportedException($"can not support clrType '{clrType}'.");
            }
        }


        class SupportTypeInfo
        {
            public SupportTypeInfo(Type tsType)
            {
                if (typeof(ITsType).IsAssignableFrom(tsType))
                {
                    throw new ArgumentException($"tsType should from '{typeof(ITsType).FullName}'.");
                }

                this.TsType = tsType;
                var method = tsType.GetMethod(nameof(ITsType.CanFromClrType), System.Reflection.BindingFlags.Static | System.Reflection.BindingFlags.Public);
                this.CanConvertFunc = method.CreateDelegate<Func<TsConvertContext, Type, bool>>();

            }
            public Type TsType { get; }
            public Func<TsConvertContext, Type, bool> CanConvertFunc { get; }
            public ITsType NewInstance()
            {
                return Activator.CreateInstance(TsType) as ITsType;
            }
        }
    }
}
