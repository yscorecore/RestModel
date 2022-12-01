using System.Text;
using FluentAssertions;
using RestModel.Generator.TypeScript.Models;
using Xunit;

namespace RestModel.Generator.TypeScript.UnitTest.Models
{
    public class TsTypeGeneratorTest
    {
        [Theory]
        [InlineData(typeof(string), "")]
        [InlineData(typeof(Guid), "")]
        [InlineData(typeof(DateTime), "")]
        [InlineData(typeof(DateTimeOffset), "")]
        [InlineData(typeof(double), "")]
        [InlineData(typeof(double?), "")]
        [InlineData(typeof(double[]), "")]
        [InlineData(typeof(Dictionary<string, string>), "")]
        [InlineData(typeof(Colors), @"export const enum Colors {
    Red = 0,
    Green = 1,
    Blue = 2,
}")]
        [InlineData(typeof(Person), @"export interface Person {
    name: string;
    age: number;
}")]
        [InlineData(typeof(Student), @"export interface Student extends Person {
    school: string;
}")]
        [InlineData(typeof(Circle), @"export interface Circle {
    value: Circle;
}")]
        [InlineData(typeof(Range<int>), @"")]
        [InlineData(typeof(Range2<int, int>), @"")]
        [InlineData(typeof(Range2<,>), @"export interface Range2<T1, T2> {
    start: T1;
    end: T2;
}")]
        [InlineData(typeof(Range<>), @"export interface Range<T> extends Range2<T, T> {
    middle: T;
}")]
        [InlineData(typeof(SubClass), @"export interface SubClass extends Omit<BaseClass, 'value'> {
    value: number;
}")]
        [InlineData(typeof(SubClass2), @"export interface SubClass2 extends Omit<BaseClass<string>, 'value'> {
    value: number;
}")]
        [InlineData(typeof(SubClass2<>), @"export interface SubClass2<T> extends Omit<BaseClass<T>, 'value'> {
    value: number;
    newValue: T;
}")]
        public void ToTypeScriptModelCode(Type type, string expected)
        {
            var options = TsConvertOptions.Default;
            var container = new TsTypeContainer(options);
            var tsType = container.FromClrType(type);
            var stringBuilder = new StringBuilder();
            using var output = new StringWriter(stringBuilder);
            var generatorContext = new TsGenerateContext
            {
                Options = options,
                Output = output,
            };
            tsType.GenerateScript(generatorContext);
            output.Flush();
            stringBuilder.ToString().Trim().Should().Be(expected);
        }

        public enum Colors
        {
            Red,
            Green,
            Blue
        }
        public class Person
        {
            public string? Name { get; set; }
            public int Age { get; set; }
        }
        public class Student : Person
        {
            public string School { get; set; }
        }

        public class Circle
        {
            public Circle? Value { get; set; }
        }

        public class Range<T> : Range2<T, T>
        {
            public T Middle { get; set; }
        }
        public class Range2<T1, T2>
        {
            public T1? Start { get; set; }
            public T2? End { get; set; }
        }

        public class BaseClass
        {
            public string Value { get; set; }
            public string Value2 { get; set; }
        }
        public class SubClass : BaseClass
        {
            public new int Value { get; set; }
        }
        public class BaseClass<T>
        {
            public T Value { get; set; }
        }

        public class SubClass2 : BaseClass<string>
        {
            public new int Value { get; set; }
        }
        public class SubClass2<T> : BaseClass<T>
        {
            public new int Value { get; set; }
            public T NewValue { get; set; }
        }
    }
}
