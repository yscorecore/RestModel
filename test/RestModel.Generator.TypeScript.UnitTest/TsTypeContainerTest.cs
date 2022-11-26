using System.Collections;
using System.Collections.Concurrent;
using FluentAssertions;
using RestModel.Generator.TypeScript.Models;
using RestModel.Generator.TypeScript.Models.Types;
using Xunit;

namespace RestModel.Generator.TypeScript.UnitTest
{
    public class TsTypeContainerTest
    {

        [Theory]
        [InlineData(typeof(string), "string")]
        [InlineData(typeof(char), "string")]
        [InlineData(typeof(DateTime), "string")]
        [InlineData(typeof(DateTimeOffset), "string")]
        [InlineData(typeof(TimeSpan), "string")]
        [InlineData(typeof(DateOnly), "string")]
        [InlineData(typeof(TimeOnly), "string")]
        [InlineData(typeof(Guid), "string")]
        [InlineData(typeof(bool), "boolean")]
        [InlineData(typeof(DBNull), "null")]
        [InlineData(typeof(byte), "number")]
        [InlineData(typeof(sbyte), "number")]
        [InlineData(typeof(short), "number")]
        [InlineData(typeof(ushort), "number")]
        [InlineData(typeof(int), "number")]
        [InlineData(typeof(uint), "number")]
        [InlineData(typeof(long), "number")]
        [InlineData(typeof(ulong), "number")]
        [InlineData(typeof(float), "number")]
        [InlineData(typeof(double), "number")]
        [InlineData(typeof(decimal), "number")]
        public void ShouldConvertPrimitiveType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsPrimitive));
            tsType.GetDisplayName(options).Should().Be(expectedType);

        }
        [Theory]
        [InlineData(typeof(object), "any")]
        public void ShouldConvertAnyType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsAny));
            tsType.GetDisplayName(options).Should().Be(expectedType);
        }

        [Theory]
        [InlineData(typeof(Colors), "Colors")]
        public void ShouldConvertEnumType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsEnum));
            tsType.GetDisplayName(options).Should().Be(expectedType);
        }


        [Theory]
        [InlineData(typeof(bool?), "boolean | null")]
        [InlineData(typeof(char?), "string | null")]
        [InlineData(typeof(DateTime?), "string | null")]
        [InlineData(typeof(DateTimeOffset?), "string | null")]
        [InlineData(typeof(int?), "number | null")]
        [InlineData(typeof(double?), "number | null")]
        [InlineData(typeof(decimal?), "number | null")]
        [InlineData(typeof(Colors?), "Colors | null")]
        public void ShouldConvertNullableType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsNullable));
            tsType.GetDisplayName(options).Should().Be(expectedType);
        }


        [Theory]
        [InlineData(typeof(bool[]), "Array<boolean>")]
        [InlineData(typeof(ICollection<bool>), "Array<boolean>")]
        [InlineData(typeof(ISet<bool>), "Array<boolean>")]
        [InlineData(typeof(IList<bool>), "Array<boolean>")]
        [InlineData(typeof(List<bool>), "Array<boolean>")]
        [InlineData(typeof(IEnumerable<bool>), "Array<boolean>")]
        [InlineData(typeof(IQueryable<bool>), "Array<boolean>")]
        [InlineData(typeof(bool?[]), "Array<boolean | null>")]
        [InlineData(typeof(double[]), "Array<number>")]
        [InlineData(typeof(double?[]), "Array<number | null>")]
        [InlineData(typeof(char[]), "Array<string>")]
        [InlineData(typeof(DateTime[]), "Array<string>")]
        [InlineData(typeof(DateTimeOffset[]), "Array<string>")]
        [InlineData(typeof(string[]), "Array<string>")]
        [InlineData(typeof(Colors?[]), "Array<Colors | null>")]
        [InlineData(typeof(Colors[]), "Array<Colors>")]
        public void ShouldConvertArrayType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsArray));
            tsType.GetDisplayName(options).Should().Be(expectedType);
        }
        [Theory]
        [InlineData(typeof(IDictionary<string, string>), "{ [key: string]: string; }")]
        [InlineData(typeof(Dictionary<string, string>), "{ [key: string]: string; }")]
        [InlineData(typeof(ConcurrentDictionary<string, string>), "{ [key: string]: string; }")]
        [InlineData(typeof(IDictionary), "{ [key: any]: any; }")]
        [InlineData(typeof(IDictionary<Colors, decimal[]>), "{ [key: Colors]: Array<number>; }")]
        public void ShouldConvertDictionaryType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsDictionary));
            tsType.GetDisplayName(options).Should().Be(expectedType);
        }

        [Theory]
        [InlineData(typeof(Range<string>), "Range<string>")]
        [InlineData(typeof(Range<decimal>), "Range<number>")]
        [InlineData(typeof(Range<DateTime>), "Range<string>")]
        [InlineData(typeof(Range<Colors[]>), "Range<Array<Colors>>")]
        public void ShouldConvertGenericType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsGeneric));
            tsType.GetDisplayName(options).Should().Be(expectedType);
        }
        [Theory]
        [InlineData(typeof(Range<>), "Range<T>")]
        [InlineData(typeof(Range2<,>), "Range2<T1, T2>")]
        public void ShouldConvertGenericDefinitionType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsGenericDefinition));
            tsType.GetDisplayName(options).Should().Be(expectedType);
        }
        public enum Colors
        {
            Red,
            Green,
            Blue
        }
        public class Range<T>
        {
            public T Start { get; set; }
            public T End { get; set; }
        }
        public class Range2<T1,T2>
        {
            public T1 Start { get; set; }
            public T2 End { get; set; }
        }
    }
}
