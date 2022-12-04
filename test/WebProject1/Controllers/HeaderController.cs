using Microsoft.AspNetCore.Mvc;
using WebProject1.Models;

namespace WebProject1.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class HeaderController : ControllerBase
    {
        [HttpGet]
        public int Sum([FromHeader] int a, [FromHeader] int b)
        {
            return a + b;
        }
        [HttpGet]
        public int SumWithObject([FromHeader] int a, [FromHeader] int b, [FromHeader] SimpleModel simple)
        {
            return a + b + simple.Age;
        }
    }
}
