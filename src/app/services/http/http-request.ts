import { HttpService } from './http.service';

export class HttpRequest {
    private _done: Function;
    private _fail: Function;

    private _method: string = "GET";
    private _data: any = {};
    private _url: string = "";


    constructor(private http: HttpService, private params: any) {
        if ("method" in params) {
            this._method = params.method;
        }

        if ("url" in params) {
            this._url = params.url;
        }

        if ("data" in params) {
            this._data = params.data;
        }

        if ("done" in params) {
            this._done = params.done;
        }

        if ("fail" in params) {
            this._fail = params.fail;
        }
    }

    done(func: Function) {
        this._done = func;
        return this;
    }

    fail(func: Function) {
        this._fail = func;
        return this;
    }

    send() {
        let methodName = this._method.toLowerCase();

        if (methodName in this.http) {
            this.http[methodName](this._url, this._data).subscribe(
                response => {this._done(response)},
                error => {this._fail(error)}
            );
        }
    }
}
