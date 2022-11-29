using System.Collections;
using System.Collections.Concurrent;
using FluentAssertions;
using RestModel.Generator.TypeScript.Models;
using RestModel.Generator.TypeScript.Models.Types;
using Xunit;
using Microsoft.AspNetCore.Http;

namespace RestModel.Generator.TypeScript.UnitTest.Models
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
        [InlineData(typeof(void), "void")]
        public void ShouldConvertPrimitiveType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsPrimitive));
            tsType.GetDisplayName(options).Should().Be(expectedType);
        }


        [Theory]
        [InlineData(typeof(IFormFile), "File")]
        [InlineData(typeof(MyFormFile), "File")]
        public void ShouldConvertFormFileType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsFormFile));
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
        [InlineData(typeof(bool[]), "boolean[]")]
        [InlineData(typeof(ICollection<bool>), "boolean[]")]
        [InlineData(typeof(ISet<bool>), "boolean[]")]
        [InlineData(typeof(IList<bool>), "boolean[]")]
        [InlineData(typeof(List<bool>), "boolean[]")]
        [InlineData(typeof(IEnumerable<bool>), "boolean[]")]
        [InlineData(typeof(IQueryable<bool>), "boolean[]")]
        [InlineData(typeof(bool?[]), "Array<boolean | null>")]
        [InlineData(typeof(double[]), "number[]")]
        [InlineData(typeof(double?[]), "Array<number | null>")]
        [InlineData(typeof(char[]), "string[]")]
        [InlineData(typeof(DateTime[]), "string[]")]
        [InlineData(typeof(DateTimeOffset[]), "string[]")]
        [InlineData(typeof(string[]), "string[]")]
        [InlineData(typeof(Colors?[]), "Array<Colors | null>")]
        [InlineData(typeof(Colors[]), "Colors[]")]
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
        [InlineData(typeof(IDictionary), "any")]
        [InlineData(typeof(IDictionary<Colors, decimal[]>), "{ [key: string | number]: number[]; }")]
        [InlineData(typeof(IDictionary<Class1, decimal[]>), "any")]
        [InlineData(typeof(IDictionary<bool, decimal[]>), "any")]
        [InlineData(typeof(IDictionary<int, decimal[]>), "{ [key: number]: number[]; }")]
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
        [InlineData(typeof(Range<Colors[]>), "Range<Colors[]>")]
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

        [Theory]
        [InlineData(typeof(Class1), "Class1")]
        [InlineData(typeof(Class2), "Class2")]
        [InlineData(typeof(Class3), "Class3")]
        [InlineData(typeof(Struct4), "Struct4")]
        //[InlineData(typeof(Class5), "Class5")]
        public void ShouldConvertObjectType(Type clrType, string expectedType)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(clrType);
            tsType.Should().BeOfType(typeof(TsObject));
            tsType.GetDisplayName(options).Should().Be(expectedType);
        }
        [Fact]
        public void ShouldConvertCircleRefrence()
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            container.RegisteClrType(typeof(Circle1));
            container.RegisteClrType(typeof(Circle2));
            container.GetAllMapping().Should().HaveCount(2);
          
        }

        public enum Colors
        {
            Red,
            Green,
            Blue
        }
        public class Range<T> : Range2<T, T>
        {

        }
        public class Range2<T1, T2>
        {
            public T1 Start { get; set; }
            public T2 End { get; set; }
        }
        public class Class1
        {

        }
        public record Class2
        {

        }
        public record Class3(string Name);

        

        public struct Struct4
        {

        }
        //public class Class5 : Dictionary<string, string>
        //{
        //    public string StrProp { get; set; }
        //}

        public class Circle1
        {
            public Circle1 Circle { get; set; }

        }
        public class Circle2
        { 
            public Circle1 Circle { get; set; }
        }
        public class MyFormFile : IFormFile
        {
            public string ContentType { get; }
            public string ContentDisposition { get; }
            public IHeaderDictionary Headers { get; }
            public long Length { get; }
            public string Name { get; }
            public string FileName { get; }

            public void CopyTo(Stream target)
            {
                throw new NotImplementedException();
            }

            public Task CopyToAsync(Stream target, CancellationToken cancellationToken = default)
            {
                throw new NotImplementedException();
            }

            public Stream OpenReadStream()
            {
                throw new NotImplementedException();
            }
        }
    }
}
