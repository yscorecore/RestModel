using Microsoft.AspNetCore.Mvc;
using WebProject1.Models;

namespace WebProject1.Controllers
{
    public class BodyBaseController<T> : ControllerBase
    {
        [HttpGet]
        public T GetBody([FromBody] T model)
        {
            return model;
        }
        [HttpPost]
        public T PostBody([FromBody] T model)
        {
            return model;
        }
        [HttpPut]
        public T PutBody([FromBody] T model)
        {
            return model;
        }
        [HttpDelete]
        public T DeleteBody([FromBody] T model)
        {
            return model;
        }
    }

    [ApiController]
    [Route("[controller]/[action]")]
    public class BodyController : BodyBaseController<int>
    {
       
    }

    [ApiController]
    [Route("[controller]/[action]")]
    public class StringArrayBodyController : BodyBaseController<string[]>
    {

    }
    [ApiController]
    [Route("[controller]/[action]")]
    public class SimpleModelBodyController : BodyBaseController<SimpleModel>
    {

    }
    [ApiController]
    [Route("[controller]/[action]")]
    public class ComplexModelBodyController : BodyBaseController<ComplexObject>
    {

    }
}
