using System.Reflection;

namespace RestModel
{
    public class ActionInfo
    {
        public MethodInfo MethodInfo { get; set; }
        public string HttpMethod { get; set; }

        public string ActionName { get; set; }

        public string RouteTemplate { get; set; }

        public ReturnInfo ReturnInfo { get; set; }

        public bool DefineAllowAnonymous { get; init; }
        public bool DefineAuthorize { get; init; }

        public List<ArgumentInfo> Arguments { get; set; }

    }
    public static class ActionInfoExtensions
    {
        public static IEnumerable<Type> GetAllModelTypes(this ActionInfo action)
        {
            foreach (var arg in action.Arguments)
            {
                yield return arg.ParameterType;

            }
            if (action.ReturnInfo.ResultType != null)
            {
                yield return action.ReturnInfo.ResultType;
            }

        }
    }

    
}
