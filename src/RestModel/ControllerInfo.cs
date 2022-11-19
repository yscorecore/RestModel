using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel
{
    public class ControllerInfo
    {
        public string NameSpace { get; set; }
        public string ClassName { get; set; }
        public Type ControllerType { get; set; }
        public string ControllerName { get; set; }
        public string RouteTemplate { get; set; }
        public bool DefineAllowAnonymous { get; set; }
        public bool DefineAuthorize { get; set; }
        public Type[] Interfaces { get; set; }

        public List<ActionInfo> Actions { get; set; }
    }
}
