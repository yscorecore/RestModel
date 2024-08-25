namespace RestModel
{
    public class ArgumentInfo
    {
        public string ParameterName { get; init; }

        public Type ParameterType { get; init; }

        public bool CanConvertFromString { get; init; }

        public string ValueName { get; init; }

        public ValueSource ValueSource { get; init; }

        public bool DefineAllowAnonymous { get; init; }
        public bool DefineAuthorize { get; init; }

        public bool HasDefaultValue { get; init; }
        public object DefaultValue { get; init; }

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
