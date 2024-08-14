using Microsoft.AspNetCore.Mvc;
using FlyTiger;
using WebProject1.Models;

namespace WebProject1.Controllers
{
   
    public partial class BaseController<T> : ControllerBase
    {
        [HttpGet]
        public T GetModelFromDefault(T model)
        {
            return model;
        }
        [HttpGet]
        public Task<T> GetModelFromDefaultAndReturnTask(T model)
        {
            return Task.FromResult(model);
        }
        [HttpGet]
        public ValueTask<T> GetModelFromDefaultAndReturnValueTask(T model)
        {
            return ValueTask.FromResult(model);
        }

        [HttpGet]
        public T GetModelFromQuery([FromQuery] T model)
        {
            return model;
        }
        [HttpGet]
        public T GetModelFromHeader([FromHeader] T model)
        {
            return model;
        }
        [HttpGet]
        public T GetModelFromBody([FromBody] T model)
        {
            return model;
        }
       
        [HttpGet]
        public T GetModelFromForm([FromForm] T model)
        {
            return model;
        }

        [HttpPost]
        public T PostModelFromDefault(T model)
        {
            return model;
        }
        [HttpPost]
        public T PostModelFromQuery([FromQuery] T model)
        {
            return model;
        }
        [HttpPost]
        public T PostModelFromHeader([FromHeader] T model)
        {
            return model;
        }
        [HttpPost]
        public T PostModelFromBody([FromBody] T model)
        {
            return model;
        }
        [HttpPost]
        public T PostModelFromForm([FromForm] T model)
        {
            return model;
        }


        [HttpPut]
        public T PutModelFromDefault(T model)
        {
            return model;
        }
        [HttpPut]
        public T PutModelFromQuery([FromQuery] T model)
        {
            return model;
        }
        [HttpPut]
        public T PutModelFromHeader([FromHeader] T model)
        {
            return model;
        }
        [HttpPut]
        public T PutModelFromBody([FromBody] T model)
        {
            return model;
        }
        [HttpPut]
        public T PutModelFromForm([FromForm] T model)
        {
            return model;
        }


        [HttpDelete]
        public T DeleteModelFromDefault(T model)
        {
            return model;
        }
        [HttpDelete]
        public T DeleteModelFromQuery([FromQuery] T model)
        {
            return model;
        }
        [HttpDelete]
        public T DeleteModelFromHeader([FromHeader] T model)
        {
            return model;
        }
        [HttpDelete]
        public T DeleteModelFromBody([FromBody] T model)
        {
            return model;
        }
        [HttpDelete]
        public T DeleteModelFromForm([FromForm] T model)
        {
            return model;
        }

    }

    [ApiController]
    [Route("[controller]/[action]")]
    [AutoConstructor]
    public partial class ComplexController : BaseController<ComplexObject>
    {


    }
    [ApiController]
    [Route("[controller]/[action]")]
    [AutoConstructor]
    public partial class ComplexArrayController : BaseController<ComplexObject[]>
    {


    }
    [ApiController]
    [Route("[controller]/[action]")]
    [AutoConstructor]
    public partial class SimpleController : BaseController<SimpleModel>
    {
    }
    [ApiController]
    [Route("[controller]/[action]")]
    [AutoConstructor]
    public partial class SimpleArrayController : BaseController<SimpleModel[]>
    {
    }
    [ApiController]
    [Route("[controller]/[action]")]
    public partial class DateTimeController : BaseController<DateTime>
    {


    }
    [ApiController]
    [Route("[controller]/[action]")]
    public partial class IntController : BaseController<int>
    {


    }
    [ApiController]
    [Route("[controller]/[action]")]
    public partial class IntArrayController : BaseController<int[]>
    {


    }
    [ApiController]
    [Route("[controller]/[action]")]
    public partial class StringController : BaseController<string>
    {


    }
    [ApiController]
    [Route("[controller]/[action]")]
    public partial class StringArrayController : BaseController<string[]>
    {


    }
}

