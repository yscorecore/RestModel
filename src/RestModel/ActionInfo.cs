using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace RestModel
{
    public class ActionInfo
    {
        public MethodInfo MethodInfo { get; set; }
        public string HttpMethod { get; set; }

        public string ActionName { get; set; }

        public string RouteTemplate { get; set; }

        public ReturnInfo ReturnInfo { get; set; }

        public List<ArgumentInfo> Arguments { get; set; }

    }
}
