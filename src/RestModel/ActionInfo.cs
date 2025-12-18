using System.Reflection;
using Microsoft.AspNetCore.Http;

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
                var type = arg.ReceiveType.Type;
                if (!IsSpecial(type))
                {
                    yield return arg.ReceiveType.Type;
                }
            }
            if (action.ReturnInfo.ResultType != null)
            {
                yield return action.ReturnInfo.ResultType;
            }
            bool IsSpecial(Type type)
            {
                return type == typeof(CancellationToken)
                    || type == typeof(IFormFile)
                    || type == typeof(IFormFileCollection)
                    || type == typeof(IFormCollection);
            }

        }
    }


}
