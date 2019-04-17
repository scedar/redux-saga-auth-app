import axios from 'axios';
import globalVariables from './global'
var qs = require('qs');

const TIMEOUT_IN_MINUTES = 9;

function getTimeout(timeoutInMinutes){
    return ((timeoutInMinutes *60)+30)*1000
}

export default class HttpClient {
    constructor(host, port = "") {
        this.host = host;
        this.port = port;

        if (this.port !== "") {
            this.endpoint = `${this.host}:${this.port}`
        } else {
            this.endpoint = `${this.host}`
        }

        this._axios = axios.create({
            baseURL: this.endpoint,
            timeout: getTimeout(TIMEOUT_IN_MINUTES)
        });
    }

    // Get the endpoint
    getEndpoint() {
        console.log(`${this.endpoint} is our endpoint.`);
        return this.endpoint
    }

    // Get an instance of axios
    getAxiosInstance() {
        return this._axios;
    }

    // Formatted display of the response
    static printResponse(response) {
        console.log("\n");
        console.log("=============:===================================================");
        console.log(" BASE URL    : ", response.config.baseURL);
        console.log("=============:===================================================");
        console.log(" URL         : ", response.config.url);
        console.log("=============:===================================================");
        console.log(" METHOD      : ", response.config.method);
        console.log("=============:===================================================");
        console.log(" STATUS      : ", response.status);
        console.log("=============:===================================================");
        console.log(" STATUS TEXT : ", response.statusText);
        console.log("=============:===================================================");
        console.log(" SERVER      : ", response.headers.server);
        console.log("=============:===================================================");
        console.log(" DATE        : ", response.headers.date);
        console.log("=============:===================================================");
        console.log(" TIMEOUT     : ", response.config.timeout);
        console.log("=============:===================================================");
        console.log(" HEADERS        ");
        console.log("-----------------------------------------------------------------");
        console.log(" ", response.config.headers);
        console.log("=================================================================");
        console.log(" REQUEST DATA        ");
        console.log("-----------------------------------------------------------------");
        console.log(" ", response.config.data);
        console.log("=================================================================");
        console.log(" RESPONSE DATA        ");
        console.log("-----------------------------------------------------------------");
        console.log(" ", response.data);
        console.log("=================================================================");
    }

    // Add a request interceptor.
    static addRequestInterceptor(client) {
        client.interceptors.request.use(function (config) {
            // The process before sending the request.
            //const token = localStorage.getItem("token");
            //let token = globalVariables.getAuthToken();

            //if ( token != null ) {
                //config.headers.Authorization = `${token}`;
                //config.headers.Authorization = `Bearer 05088ddced5cd12570047f5cb1cc58bc14f51395`;
            //}

            // check if token has expired

            // refresh token if the token has expired

            return config;
        }, function (error) {
            // Request error handling.
            return Promise.reject(error);
        });

        return client
    }

    // Add a interceptor.
    static addResponseInterceptor(client) {
        client.interceptors.response.use(function (response) {
            // Processing for the response data.
            return response;
        }, function (error) {
            // Processing after the response error.
            return Promise.reject(error);
        });

        return client
    }

    // Make requests
    makeRequest(method, url, config={data:{}, headers:{}, params: {}, onUploadProgress: function (progressEvent) {}}, withAuth=false){
        let client = this._axios;

        let requestConfig = {
            method: method,
            url: url,
            data: config.data,
            headers: config.headers,
            params: config.params,
            paramsSerializer: params => {
                return qs.stringify(params)
            },
            onUploadProgress: config.onUploadProgress
        };

        if(withAuth){
            client = HttpClient.addRequestInterceptor(client)
        }

        console.log("Request Config ", requestConfig);

        return new Promise((resolve, reject) => {
            client(requestConfig)
                .then(response => {
                    HttpClient.printResponse(response);
                    resolve(response);
                })
                .catch(error => {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        HttpClient.printResponse(error.response);
                        resolve(error.response);
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log("Request ", error.request);
                        reject(error);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                        reject(error);
                    }
                });
        });
    }

    // Cancel HTTP Request still pending
    // ...

}

/*
module.exports = {
    // code here
    HttpClient
}*/
