using Microsoft.AspNetCore.Mvc;
using FlyTiger;
using WebProject1.Models;

namespace WebProject1.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    [AutoConstructor]
    public partial class SimpleController : BaseController<SimpleModel>
    {
    }


}

