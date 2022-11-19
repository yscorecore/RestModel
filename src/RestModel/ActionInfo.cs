using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel
{
    public class ActionInfo
    {
        public string HttpMethod { get; set; }

        public string ActionName { get; set; }

        public string RouteTemplate { get; set; }

        public ReturnInfo ReturnInfo { get; set; }

        public List<ArgumetnInfo> Arguments { get; set; }

    }
}
