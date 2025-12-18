namespace RestModel
{
    public class ArgumentInfo
    {
        public bool IsRequired { get; set; }

        public string ParameterName { get; init; }

        public Type ParameterType { get; init; }

        public ArgumentTypeInfo ReceiveType { get; init; }

        public string ValueName { get; init; }

        public ValueSource ValueSource { get; init; }


        public bool HasDefaultValue { get; init; }
        public object DefaultValue { get; init; }

    }
    public record ArgumentTypeInfo
    {
        public Type Type { get; set; }
        public bool IsCollection { get; set; }
        public Type ItemType { get; set; }
        public bool IsRequired { get; set; }
        public bool IsComplex { get; set; }
        public bool IsFile { get; set; }
    }

    public enum ValueSource
    {
        None,
        Form,//string
        Body,
        Header,//string
        Route,
        Query,//string
        Service
    }
}
