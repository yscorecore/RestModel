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
axios.defaults.timeout = 1000;

const multipartFormDataHeader = { 'Content-type': 'multipart/form-data' };

function paramsSerializer(params: any): string {
    let entries = Object.entries(params || {}).flatMap(([k, v]) =>
        Array.isArray(v) ? v.map(t => [k, t]) : [[k, v]]
    );
    let segments = entries.map(p => `${p[0]}=${encodeURIComponent(p[1] ?? '')}`);
    return segments.join("&amp;");
}

export class ApiClientBase {
    protected async send<T>(req: RestInfo): Promise<T> {
        const res = await axios.request({
            url: req.url,
            method: req.method,
            headers: req.forms ? { ...multipartFormDataHeader, ...req.headers } : req.headers,
            params: req.params,
            data: req.forms ? req.forms : req.body,
            paramsSerializer: {
                serialize: paramsSerializer
            }
        });
        return res.data;
    }
}