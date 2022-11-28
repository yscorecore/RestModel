using System.Text;
using RestModel.Generator.TypeScript.Models;

namespace RestModel.Generator.TypeScript.Client
{
    public class TsClientGenerator
    {
        public Task GenerateClientFile(TsGenerateContext context, ControllerInfo controllerInfo, IEnumerable<ActionInfo> actionInfos, IDictionary<Type, ITsType> modelTypeMapper)
        {
            var clientName = controllerInfo.ControllerName + "ApiClient";
            var title = $"class {clientName} extend {context.Options.BaseApiClassName}";
            var contents = new List<string>();
           
           // contents.Add($"public {}(): Promise<{}> {")
            context.WriteBlock(title, contents);
            context.Output.WriteLine();
            context.Output.WriteLine($"export {clientName.ToCamelCaseName()} = new {clientName}();");
            context.Output.WriteLine();
            return Task.CompletedTask;
        }
        private string[] GenerateApiBody()
        { 
            var stringBuilder = new StringBuilder();

            return stringBuilder.ToString().Split(new char[] { '\r','\n'})
        }
        /*
         * class RestModelApiClient extend ApiClientBase {
         *  
         *      public Upload(req: UploadRequestReq): Promise<UploadRequestRes> {
         *          return send({
         *            url:'/',  
         *            method:'get'
         *            headers: { },
         *            params: {
         *            },
         *            body: req,
         *            form: {}
         *          });
         *      } 
         * }
         * export restModelApi = new RestModelClient();
         * 
         * 
         * 
         * 
         */

    }
}
