using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel
{
    public class AppInfo
    {
        public string AssemblyName { get; init; }

        public List<ControllerInfo> Controllers { get; init; }
    }
}
