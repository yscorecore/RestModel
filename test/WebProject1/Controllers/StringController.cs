using Microsoft.AspNetCore.Mvc;
using WebProject1.Models;

namespace WebProject1.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public partial class StringController : BaseController<string>
    {


    }
}
