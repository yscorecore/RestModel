using System.ComponentModel;
using Microsoft.AspNetCore.Mvc;

namespace WebProject1.Controllers
{
    [ApiController]
    [Area("aaa")]
    [Route("[area]/abc/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("aabbcc/{a:range(1,3)}_{b}/{d:int}")]
        public IEnumerable<WeatherForecast> Get([FromRoute(Name ="b")]int a,  int b,string c)
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
    [TypeConverter()]
    public class TestModel
    {
        [FromRoute]
        public int Id { get; set; }
        [FromQuery]
        public int Age { get; set; }
        [FromBody]
        public string? Content { get; set; }
    }
}
