import { buildHTTPQuery, getAccessToken } from './helpers';

class Connector {
    constructor(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
        this.accessToken = getAccessToken();
    }

    setAccessToken(token) {
        this.access_token = token;
    }

    async get(path, data = {}) {
        return this.request(path, 'get', data);
    }

    async post(path, data = {}) {
        return this.request(path, 'post', data);
    }


    async request(path, method, data) {
        data = data || {}
        if (this.accessToken) data.access_token = this.accessToken;

        let fullPath = `${this.apiEndpoint}${path}`;
        let params = buildHTTPQuery(data);

        if (method === 'get') fullPath += `?${params}`;

        let settings = {
            method,
            headers: {
                ContentType: 'form/multipart'
            },
        };

        if (method === 'post') {
            settings.body = new FormData();
            
            Object.keys(data).forEach(key => {
                if (data) settings.body.append(key, data[key]);
            });
        }

        const response = await fetch(fullPath, settings);
        return await response.json();
    }
}

const API_ENDPOINT = 'https://floodrb.ugatu.su/api/';
const connector = new Connector(API_ENDPOINT);

export {
    connector,
    Connector
}