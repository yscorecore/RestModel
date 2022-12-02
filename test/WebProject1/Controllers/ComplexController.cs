using FlyTiger;
using Microsoft.AspNetCore.Mvc;
using WebProject1.Models;

namespace WebProject1.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    [AutoConstructor]
    public partial class ComplexController : BaseController<ComplexObject>
    {


    }


}
