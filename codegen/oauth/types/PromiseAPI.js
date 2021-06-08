var ObservableAPI_1 = require('./ObservableAPI');
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * @param token
     */
    PromiseDefaultApi.prototype.archiveRefreshToken = function (token, _options) {
        var result = this.api.archiveRefreshToken(token, _options);
        return result.toPromise();
    };
    /**
     * @param grantType
     * @param code
     * @param redirectUri
     * @param clientId
     * @param clientSecret
     * @param refreshToken
     */
    PromiseDefaultApi.prototype.createToken = function (grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options) {
        var result = this.api.createToken(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options);
        return result.toPromise();
    };
    /**
     * @param token
     */
    PromiseDefaultApi.prototype.getAccessToken = function (token, _options) {
        var result = this.api.getAccessToken(token, _options);
        return result.toPromise();
    };
    /**
     * @param token
     */
    PromiseDefaultApi.prototype.getRefreshToken = function (token, _options) {
        var result = this.api.getRefreshToken(token, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
})();
exports.PromiseDefaultApi = PromiseDefaultApi;
