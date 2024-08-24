using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using RestModel.AspnetCore;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class RestModelCollectionExtensions
    {
        public static IServiceCollection AddRestModel(this IServiceCollection services, Action<RestModelBuildOptions> setupAction = null)
        {
            services.TryAddTransient((IServiceProvider s) => s.GetRequiredService<IOptions<RestModelBuildOptions>>().Value);
            if (setupAction != null)
            {
                services.Configure(setupAction);
            }

            return services;
        }
    }
}
