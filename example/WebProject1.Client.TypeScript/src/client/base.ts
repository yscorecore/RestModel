import axios from 'axios';

export interface RestInfo {
    url: string,
    method: string,
    headers?: { [key: string]: any },
    forms?: { [key: string]: any },
    params?: { [key: string]: any },
    body?: any,
}

axios.defaults.baseURL = 'http://localhost:5077';
axios.defaults.timeout = 100000;

const multipartFormDataHeader = { 'Content-type': 'multipart/form-data' };
const applicationJsonDataHeader = { 'Content-type': 'application/json' }

function paramsSerializer(params: any): string {
    let entries = Object.entries(params || {}).flatMap(([k, v]) =>
        Array.isArray(v) ? v.map(t => [k, t]) : [[k, v]]
    );
    let segments = entries.map(p => `${p[0]}=${encodeURIComponent(p[1] ?? '')}`);
    return segments.join('&');
}
function buildFormData(forms:any) {
    let formData= new FormData();
    Object.entries(forms).forEach(([k,v])=>{
        if(v instanceof Blob){

        }else {

        }
    });
    return formData;
}
export class ApiClientBase {
    protected async send<T>(req: RestInfo): Promise<T> {
        let reqInfo = {
            url: req.url,
            method: req.method,
            headers: req.forms ? { ...multipartFormDataHeader, ...req.headers } : { ...applicationJsonDataHeader, ...req.headers },
            params: req.params,
            data: req.forms ? req.forms : req.body,
            
            paramsSerializer: {
                serialize: paramsSerializer
            },
            
        }
        const res = await axios.request(reqInfo);
        return res.data;
    }
}