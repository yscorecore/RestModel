using Microsoft.AspNetCore.Mvc;
using WebProject1.Models;

namespace WebProject1.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class QueryController : ControllerBase
    {
        [HttpGet]
        public int Sum([FromQuery] int a, [FromQuery] int b)
        {
            return a + b;
        }
        [HttpGet]
        public int SumWithObject([FromQuery] int a, [FromQuery] int b, [FromQuery] ComplexObject complex, [FromQuery] SimpleModel simple)
        {
            return a + b + complex.Age + simple.Age;
        }
    }
}
