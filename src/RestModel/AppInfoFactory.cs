using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace RestModel
{
    public class AppInfoFactory
    {
        public AppInfo FromAssembly(Assembly assembly)
        {
            return new AppInfo
            {
                AssemblyName = assembly.FullName,
                Controllers = FindControllerTypes(assembly).Select(FromControllerType).ToList()
            };
        }

        private IEnumerable<Type> FindControllerTypes(Assembly assembly)
        {
            return assembly.GetTypes()
                .Where(p => !p.IsAbstract && typeof(ControllerBase).IsAssignableFrom(p))
                .Where(p => Attribute.IsDefined(p, typeof(ControllerAttribute), true));
        }
        public ControllerInfo FromControllerType(Type type)
        {
            return new ControllerInfo
            {
                ClassName = type.Name,
                ControllerName = type.Name.EndsWith("Controller") ? type.Name[..-10] : type.Name,
                ControllerType = type,
                NameSpace = type.Namespace,
                DefineAllowAnonymous = Attribute.IsDefined(type, typeof(AllowAnonymousAttribute), true),
                DefineAuthorize = Attribute.IsDefined(type, typeof(AuthorizeAttribute), true),
                Interfaces = type.GetInterfaces(),
                RouteTemplate = type.GetCustomAttribute<RouteAttribute>(true)?.Template,
                Actions = FindActionMethods(type).Select(FromActionMethod).ToList()
            };
        }
        private IEnumerable<MethodInfo> FindActionMethods(Type controller)
        {
            return null;
        }
        public ActionInfo FromActionMethod(MethodInfo action)
        {
            return null;
        }
    }
}
