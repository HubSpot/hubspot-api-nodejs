var rxjsStub_1 = require('../rxjsStub');
var rxjsStub_2 = require('../rxjsStub');
var AssociationsApi_1 = require("../apis/AssociationsApi");
var ObservableAssociationsApi = (function () {
    function ObservableAssociationsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssociationsApi_1.AssociationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssociationsApi_1.AssociationsApiResponseProcessor();
    }
    /**
     * List associations of a quote by type
     * @param quoteId
     * @param toObjectType
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    ObservableAssociationsApi.prototype.getAll = function (quoteId, toObjectType, after, limit, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAll(quoteId, toObjectType, after, limit, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getAll(rsp); }));
        }));
    };
    return ObservableAssociationsApi;
})();
exports.ObservableAssociationsApi = ObservableAssociationsApi;
var BasicApi_1 = require("../apis/BasicApi");
var ObservableBasicApi = (function () {
    function ObservableBasicApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicApi_1.BasicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicApi_1.BasicApiResponseProcessor();
    }
    /**
     * Read an Object identified by `{quoteId}`. `{quoteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param quoteId
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     * @param idProperty The name of a property whose values are unique for this object type
     */
    ObservableBasicApi.prototype.getById = function (quoteId, properties, associations, archived, idProperty, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getById(quoteId, properties, associations, archived, idProperty, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getById(rsp); }));
        }));
    };
    /**
     * Read a page of quotes. Control what is returned via the `properties` query param.
     * List
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     */
    ObservableBasicApi.prototype.getPage = function (limit, after, properties, associations, archived, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPage(limit, after, properties, associations, archived, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getPage(rsp); }));
        }));
    };
    return ObservableBasicApi;
})();
exports.ObservableBasicApi = ObservableBasicApi;
var BatchApi_1 = require("../apis/BatchApi");
var ObservableBatchApi = (function () {
    function ObservableBatchApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApi_1.BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApi_1.BatchApiResponseProcessor();
    }
    /**
     * Read a list of quotes given a collection of IDs. Use the `properties` request body property to control which properties are returned.
     * Read a batch of quotes by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId
     * @param archived Whether to return only results that have been archived.
     */
    ObservableBatchApi.prototype.read = function (batchReadInputSimplePublicObjectId, archived, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.read(batchReadInputSimplePublicObjectId, archived, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.read(rsp); }));
        }));
    };
    return ObservableBatchApi;
})();
exports.ObservableBatchApi = ObservableBatchApi;
var SearchApi_1 = require("../apis/SearchApi");
var ObservableSearchApi = (function () {
    function ObservableSearchApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApi_1.SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApi_1.SearchApiResponseProcessor();
    }
    /**
     * Filter, Sort, and Search CRM Objects
     * Filter, Sort, and Search CRM Objects
     * @param publicObjectSearchRequest
     */
    ObservableSearchApi.prototype.doSearch = function (publicObjectSearchRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.doSearch(publicObjectSearchRequest, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.doSearch(rsp); }));
        }));
    };
    return ObservableSearchApi;
})();
exports.ObservableSearchApi = ObservableSearchApi;
