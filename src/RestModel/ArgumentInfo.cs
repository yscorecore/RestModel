namespace RestModel
{
    public class ArgumentInfo
    {
        public string ParameterName { get; init; }

        public Type ParameterType { get; init; }
        public string ValueName { get; init; }

        public ValueSource ValueSource { get; init; }

        public bool DefineAllowAnonymous { get; init; }
        public bool DefineAuthorize { get; init; }

        public bool NullableValue => Nullable.GetUnderlyingType(ParameterType) != null;
    }

    public enum ValueSource
    { 
        None,
        Form,
        Body,
        Header,
        Route,
        Query,
        Service
    }
}
