import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

    private token: string;
    private baseurl: string = 'http://localhost:8080/';
    private useBaseurl: boolean = true;

    constructor(
        private http: Http
    ) {
        this.http = http;
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

    handleError(err: string) {

    }

    get(url: string, data: any) {
        let headers = new Headers();
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
        let headers = new Headers(
            { 'Content-Type': 'application/json' }
        );
        this.createAuthorizationHeader(headers);
        return this.http.post(this.getUrl(url), data, {
            headers: headers
        }).catch(e => {
            this.handleError(e.json().error_msg);
            return e.json();
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
        });
    }

    put(url: string, data: any) {
        let headers = new Headers(
            { 'Content-Type': 'application/json' }
        );
        this.createAuthorizationHeader(headers);
        return this.http.put(this.getUrl(url), data, {
            headers: headers
        }).catch(e => {
            this.handleError(e.json().error_msg);
            return e.json();
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
        });
    }
    // data:any
    delete(url: string) {
        let headers = new Headers(
            { 'Content-Type': 'application/json' }
        );
        this.createAuthorizationHeader(headers);
        return this.http.delete(this.getUrl(url), {
            headers: headers
        }).catch(e => {
            this.handleError(e.json().error_msg);
            return e.json();
        }).map((res: any) => {
            if (res.status !== 204) {
                return res.json()
            } else {
                return res;
            }
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

}