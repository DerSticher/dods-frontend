import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpRequest } from './http-request';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

    private token: string;
    private baseurl: string = 'http://localhost:8080';
    private useBaseurl: boolean = true;
    private headers: any = {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    };

    constructor(
        private http: Http
    ) {
        this.http = http;
    }

    request(params: any) {
        return new HttpRequest(this, params);
    }

    setUseBaseurl(bool: boolean) {
        this.useBaseurl = bool;
    }

    setToken(token: string) {
        this.token = token;
        localStorage.setItem('token', token);
    }

    getToken(){
        return this.token;
    }

    createAuthorizationHeader(headers: Headers) {
        if (this.token) {
            headers.append('token', this.token);
        }
    }

    handleError(err: any) {

    }

    get(url: string, data: any) {
        let headers = this.createHeaders({});
        this.createAuthorizationHeader(headers);
        let query = this.createQueryString(data);
        return this.http.get(this.getUrl(url + query), {
            headers: headers
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
        }).catch(e => {
            console.log(e);
            // this.handleError(e.json().error_msg);
            return e;
        });
    }

    post(url: string, data: any) {
        let headers = this.createHeaders(
            { 'Content-Type': 'application/json' }
        );
        this.createAuthorizationHeader(headers);
        return this.http.post(this.getUrl(url), data, {
            headers: headers
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
        }).catch(e => {
            this.handleError(e.json().error_msg);
            return e.json();
        });
    }

    put(url: string, data: any) {
        let headers = this.createHeaders(
            { 'Content-Type': 'application/json' }
        );
        this.createAuthorizationHeader(headers);
        return this.http.put(this.getUrl(url), data, {
            headers: headers
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
        }).catch(e => {
            this.handleError(e.json().error_msg);
            return e.json();
        });
    }
    // data:any
    delete(url: string) {
        let headers = this.createHeaders(
            { 'Content-Type': 'application/json' }
        );
        this.createAuthorizationHeader(headers);
        return this.http.delete(this.getUrl(url), {
            headers: headers
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
        }).catch(e => {
            this.handleError(e.json().error_msg);
            return e.json();
        });
    }


    createQueryString(data: any) {
        let query = "";
        for (var key in data) {
            if (query == "") {
                query += "?";
            } else {
                query += "&";
            }
            query += key + "=" + data[key];
        }
        return query;
    }

    private getUrl(url) {
        let finalUrl = "";

        if (this.useBaseurl) {
            finalUrl = this.baseurl;
        }

        finalUrl += url;
        return finalUrl;
    }

    private createHeaders(additionalHeaders: any) {
        let headers = {};
        for (let header in this.headers) {
            headers[header] = this.headers[header];
        }

        for (let header in additionalHeaders) {
            headers[header] = additionalHeaders[header];
        }
        return new Headers(headers);
    }
}