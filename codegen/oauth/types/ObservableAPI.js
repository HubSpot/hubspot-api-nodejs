var rxjsStub_1 = require('../rxjsStub');
var rxjsStub_2 = require('../rxjsStub');
var DefaultApi_1 = require("../apis/DefaultApi");
var ObservableDefaultApi = (function () {
    function ObservableDefaultApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApi_1.DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApi_1.DefaultApiResponseProcessor();
    }
    /**
     * @param token
     */
    ObservableDefaultApi.prototype.archiveRefreshToken = function (token, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.archiveRefreshToken(token, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.archiveRefreshToken(rsp); }));
        }));
    };
    /**
     * @param grantType
     * @param code
     * @param redirectUri
     * @param clientId
     * @param clientSecret
     * @param refreshToken
     */
    ObservableDefaultApi.prototype.createToken = function (grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createToken(grantType, code, redirectUri, clientId, clientSecret, refreshToken, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createToken(rsp); }));
        }));
    };
    /**
     * @param token
     */
    ObservableDefaultApi.prototype.getAccessToken = function (token, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAccessToken(token, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getAccessToken(rsp); }));
        }));
    };
    /**
     * @param token
     */
    ObservableDefaultApi.prototype.getRefreshToken = function (token, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getRefreshToken(token, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getRefreshToken(rsp); }));
        }));
    };
    return ObservableDefaultApi;
})();
exports.ObservableDefaultApi = ObservableDefaultApi;
