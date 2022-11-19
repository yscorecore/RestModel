namespace RestModel
{
    public class ArgumetnInfo
    {
        public string ParameterName { get; set; }

        public Type ParameterType { get; set; }
        public string ValueName { get; set; }

        public ValueSource ValueSource { get; set; }

        public bool DefineAllowAnonymous { get; set; }
        public bool DefineAuthorize { get; set; }

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
