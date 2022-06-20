function buildHTTPQuery(data) {
    return Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join("&");
}

function setAccessToken(token) {
    window.localStorage.setItem('access_token', token);
}

function getAccessToken() {
    window.localStorage.getItem('access_token');
}

export {
    buildHTTPQuery,
    setAccessToken,
    getAccessToken
}