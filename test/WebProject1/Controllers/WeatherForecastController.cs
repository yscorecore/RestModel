using System.ComponentModel;
using System.Globalization;
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

        [HttpPost]
        //[Route("aabbcc/{a:range(1,3)}_{b}/{d:int}")]
        public IEnumerable<WeatherForecast> Get([FromBody]TestModel testModel2)
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
    [TypeConverter(typeof(TestModelConverter))]
    public class TestModel
    {
        public int Id { get; set; }
        public int Age { get; set; }
        public string? Content { get; set; }
    }

    public class TestModelConverter : StringConverter
    {
        public override bool CanConvertFrom(ITypeDescriptorContext? context, Type sourceType)
        {
            return base.CanConvertFrom(context, sourceType)||sourceType==typeof(string);
        }
        public override object? ConvertFrom(ITypeDescriptorContext? context, CultureInfo? culture, object value)
        {
            if (value is string)
            {
                return new TestModel();
            }
            return base.ConvertFrom(context, culture, value);
        }
    }

    public class TestModel2
    {
        //[FromRoute]
        public int Id2 { get; set; }
        //[FromQuery]
        public int Age2 { get; set; }
        [FromHeader]
        public string? Content2 { get; set; }
    }
}
