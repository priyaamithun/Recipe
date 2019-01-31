export class HttpHeader {
     method;
    headers;
    body;

    constructor() {
        this.headers = {
            // 'Content-Type': 'application/json', // set the default content type to be json,
            // 'Access-Control-Allow-Methods': 'GET, POST',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Credentials': 'true',
            // 'Access-Control-Allow-Headers': 'Authorization, Lang',
             };
        this.body = undefined;
    }
}

export default HttpHeader;