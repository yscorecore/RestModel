using System.ComponentModel;
using System.Globalization;

namespace WebProject1.Models
{
    [TypeConverter(typeof(SimpleConverter))]
    public class SimpleModel
    {
        public string? Id { get; set; }
        public int Age { get; set; }
    }
    public class SimpleConverter : StringConverter
    {
        public override bool CanConvertFrom(ITypeDescriptorContext? context, Type sourceType)
        {
            return base.CanConvertFrom(context, sourceType) || sourceType == typeof(string);
        }
        public override object? ConvertFrom(ITypeDescriptorContext? context, CultureInfo? culture, object value)
        {
            if (value is string str)
            {
                var items = str.Split('|');
                if (items.Length > 1)
                {
                    return new SimpleModel() { Id = items[0], Age = int.Parse(items[1]) };
                }
                else
                {
                    return new SimpleModel() { Id = str };
                }
            }
            return base.ConvertFrom(context, culture, value);
        }
    }
}

