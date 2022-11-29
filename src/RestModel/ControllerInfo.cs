using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel
{
    public class ControllerInfo
    {
        public string NameSpace { get; init; }
        public string AreaName { get; init; }
        public string ClassName { get; init; }
        public Type ControllerType { get; init; }
        public string ControllerName { get; init; }
        public string RouteTemplate { get; init; }
        public bool DefineAllowAnonymous { get; init; }
        public bool DefineAuthorize { get; init; }
        public Type[] Interfaces { get; init; }

        public List<ActionInfo> Actions { get; init; }
    }
}
