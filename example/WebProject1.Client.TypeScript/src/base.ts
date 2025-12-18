import axios, { AxiosRequestConfig } from 'axios';

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
const formUrlEncodedHeader = { 'Content-type': 'application/x-www-form-urlencoded' }

function paramsSerializer(params: any): string {
    let entries = Object.entries(params || {}).flatMap(([k, v]) => {
        if (Array.isArray(v)) {
            return v.map(t => [k, t]);
        } else if (v instanceof Object) {
           return Object.entries(v);
        } else {
            return [[k, v]];
        }
    }
    );
    let segments = entries.map(p => `${p[0]}=${encodeURIComponent(p[1] ?? '')}`);
    return segments.join('&');
}
function buildFormData(forms: any) {
    let formData = new FormData();
    Object.entries(forms).forEach(([k, v]) => {
        if (v instanceof Blob) {
            formData.append(k, v);
        } else {
            formData.append(k, String(v));
        }
    });
    return formData;
}

export async function send<T>(req: RestInfo): Promise<T> {
    let reqInfo = req.forms ? (
        req.method.toLowerCase() === "get" ? buildUrlEncodedFormRequest(req)
            : buildMultipartFormDataFormRequest(req))
        : buildCommonRequest(req);
    const res = await axios.request(reqInfo);
    return res.data;
}
function buildUrlEncodedFormRequest(req: RestInfo): AxiosRequestConfig<any> {
    return {
        url: req.url,
        method: req.method,
        headers: { ...formUrlEncodedHeader, ...req.headers },
        params: { ...req.params, ...req.forms },
        paramsSerializer: {
            serialize: paramsSerializer
        }
    }
}
function buildMultipartFormDataFormRequest(req: RestInfo): AxiosRequestConfig<any> {
    return {
        url: req.url,
        method: req.method,
        headers: { ...multipartFormDataHeader, ...req.headers },
        params: req.params,
        data: req.forms,
        paramsSerializer: {
            serialize: paramsSerializer
        }
    }
}
function buildCommonRequest(req: RestInfo): AxiosRequestConfig<any> {
    return {
        url: req.url,
        method: req.method,
        headers: { ...applicationJsonDataHeader, ...req.headers },
        params: req.params,
        data: req.body,
        paramsSerializer: {
            serialize: paramsSerializer
        },
    };
}

