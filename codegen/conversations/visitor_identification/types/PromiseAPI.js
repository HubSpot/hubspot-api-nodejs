var ObservableAPI_1 = require('./ObservableAPI');
var PromiseGenerateApi = (function () {
    function PromiseGenerateApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableGenerateApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
     * Generate a token
     * @param identificationTokenGenerationRequest
     */
    PromiseGenerateApi.prototype.generateToken = function (identificationTokenGenerationRequest, _options) {
        var result = this.api.generateToken(identificationTokenGenerationRequest, _options);
        return result.toPromise();
    };
    return PromiseGenerateApi;
})();
exports.PromiseGenerateApi = PromiseGenerateApi;
