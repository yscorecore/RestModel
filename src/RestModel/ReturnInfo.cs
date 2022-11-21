using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RestModel
{
    public class ReturnInfo
    {
        public Type ClrType { get; init; }

        public Type ResultType { get; init; }


        public bool IsValueTask { get; init; }

        public bool IsTask { get; init; }

        public bool IsActionResult => typeof(IActionResult).IsAssignableFrom(ResultType);
    }
}
