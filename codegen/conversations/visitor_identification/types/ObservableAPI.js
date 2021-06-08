var rxjsStub_1 = require('../rxjsStub');
var rxjsStub_2 = require('../rxjsStub');
var GenerateApi_1 = require("../apis/GenerateApi");
var ObservableGenerateApi = (function () {
    function ObservableGenerateApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GenerateApi_1.GenerateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GenerateApi_1.GenerateApiResponseProcessor();
    }
    /**
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
     * Generate a token
     * @param identificationTokenGenerationRequest
     */
    ObservableGenerateApi.prototype.generateToken = function (identificationTokenGenerationRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.generateToken(identificationTokenGenerationRequest, _options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.generateToken(rsp); }));
        }));
    };
    return ObservableGenerateApi;
})();
exports.ObservableGenerateApi = ObservableGenerateApi;
