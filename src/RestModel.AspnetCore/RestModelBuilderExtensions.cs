using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RestModel.AspnetCore;

namespace Microsoft.AspNetCore.Builder
{
    public static class RestModelBuilderExtensions
    {
        public static IApplicationBuilder UseRestModel(this IApplicationBuilder app)
        {
            return app.UseMiddleware<RestModelMiddleware>(new RestModelOptions());
        }
        public static IApplicationBuilder UseRestModel(this IApplicationBuilder app, RestModelOptions options)
        {
            return app.UseMiddleware<RestModelMiddleware>(new object[1] { options });
        }
        public static IApplicationBuilder UseRestModel(this IApplicationBuilder app, string path)
        {
            return app.UseMiddleware<RestModelMiddleware>(new object[1] { new RestModelOptions { Path = path } });
        }

    }
}
