using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestModel
{
    public class ReturnInfo
    {
        public Type ClrType { get; set; }

        public Type ActionResultType { get; set; }

        public Type EntityType { get; set; }

        public bool IsValueTask { get; set; }

        public bool IsTask { get; set; }
    }
}
