using Microsoft.AspNetCore.Mvc;
using WebProject1.Models;
namespace WebProject1.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class RouteController : ControllerBase
    {
        [HttpGet]
        [Route("a/{b:int}")]
        public int Sum([FromRoute] int a, [FromRoute] int b)
        {
            return a + b;
        }
        [HttpGet]
        [HttpGet]
        [Route("{a}/{b}/{c}/{simple?}")]
        public int SumWithObject([FromRoute] int a, [FromRoute] int b, [FromRoute] SimpleModel simple)
        {
            return a + b +  simple.Age;
        }
    }
}
