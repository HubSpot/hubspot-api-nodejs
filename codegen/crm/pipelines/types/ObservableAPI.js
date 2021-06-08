var rxjsStub_1 = require('../rxjsStub');
var rxjsStub_2 = require('../rxjsStub');
var PipelineStagesApi_1 = require("../apis/PipelineStagesApi");
var ObservablePipelineStagesApi = (function () {
    function ObservablePipelineStagesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PipelineStagesApi_1.PipelineStagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PipelineStagesApi_1.PipelineStagesApiResponseProcessor();
    }
    /**
     * Archive the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Archive a pipeline stage
     * @param objectType
     * @param pipelineId
     * @param stageId
     */
    ObservablePipelineStagesApi.prototype.archive = function (objectType, pipelineId, stageId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.archive(objectType, pipelineId, stageId, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.archive(rsp); }));
        }));
    };
    /**
     * Create a new stage associated with the pipeline identified by `{pipelineId}`. The entire stage object, including its unique ID, will be returned in the response.
     * Create a pipeline stage
     * @param objectType
     * @param pipelineId
     * @param pipelineStageInput
     */
    ObservablePipelineStagesApi.prototype.create = function (objectType, pipelineId, pipelineStageInput, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.create(objectType, pipelineId, pipelineStageInput, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.create(rsp); }));
        }));
    };
    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param objectType
     * @param pipelineId
     * @param archived Whether to return only results that have been archived.
     */
    ObservablePipelineStagesApi.prototype.getAll = function (objectType, pipelineId, archived, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAll(objectType, pipelineId, archived, _options);
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
    /**
     * Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Return a pipeline stage by ID
     * @param objectType
     * @param pipelineId
     * @param stageId
     * @param archived Whether to return only results that have been archived.
     */
    ObservablePipelineStagesApi.prototype.getById = function (objectType, pipelineId, stageId, archived, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getById(objectType, pipelineId, stageId, archived, _options);
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
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param objectType
     * @param pipelineId
     * @param stageId
     * @param pipelineStageInput
     */
    ObservablePipelineStagesApi.prototype.replace = function (objectType, pipelineId, stageId, pipelineStageInput, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.replace(objectType, pipelineId, stageId, pipelineStageInput, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.replace(rsp); }));
        }));
    };
    /**
     * Perform a partial update of the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`. Any properties not included in this update will keep their existing values. The updated stage will be returned in the response.
     * Update a pipeline stage
     * @param objectType
     * @param pipelineId
     * @param stageId
     * @param archived Whether to return only results that have been archived.
     * @param pipelineStagePatchInput
     */
    ObservablePipelineStagesApi.prototype.update = function (objectType, pipelineId, stageId, archived, pipelineStagePatchInput, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.update(objectType, pipelineId, stageId, archived, pipelineStagePatchInput, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.update(rsp); }));
        }));
    };
    return ObservablePipelineStagesApi;
})();
exports.ObservablePipelineStagesApi = ObservablePipelineStagesApi;
var PipelinesApi_1 = require("../apis/PipelinesApi");
var ObservablePipelinesApi = (function () {
    function ObservablePipelinesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PipelinesApi_1.PipelinesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PipelinesApi_1.PipelinesApiResponseProcessor();
    }
    /**
     * Archive the pipeline identified by `{pipelineId}`.
     * Archive a pipeline
     * @param objectType
     * @param pipelineId
     */
    ObservablePipelinesApi.prototype.archive = function (objectType, pipelineId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.archive(objectType, pipelineId, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.archive(rsp); }));
        }));
    };
    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param objectType
     * @param pipelineInput
     */
    ObservablePipelinesApi.prototype.create = function (objectType, pipelineInput, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.create(objectType, pipelineInput, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.create(rsp); }));
        }));
    };
    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param objectType
     * @param archived Whether to return only results that have been archived.
     */
    ObservablePipelinesApi.prototype.getAll = function (objectType, archived, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAll(objectType, archived, _options);
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
    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param objectType
     * @param pipelineId
     * @param archived Whether to return only results that have been archived.
     */
    ObservablePipelinesApi.prototype.getById = function (objectType, pipelineId, archived, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getById(objectType, pipelineId, archived, _options);
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
     * Replace all the properties of an existing pipeline with the values provided. This will overwrite any existing pipeline stages. The updated pipeline will be returned in the response.
     * Replace a pipeline
     * @param objectType
     * @param pipelineId
     * @param pipelineInput
     */
    ObservablePipelinesApi.prototype.replace = function (objectType, pipelineId, pipelineInput, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.replace(objectType, pipelineId, pipelineInput, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.replace(rsp); }));
        }));
    };
    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * Update a pipeline
     * @param objectType
     * @param pipelineId
     * @param archived Whether to return only results that have been archived.
     * @param pipelinePatchInput
     */
    ObservablePipelinesApi.prototype.update = function (objectType, pipelineId, archived, pipelinePatchInput, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.update(objectType, pipelineId, archived, pipelinePatchInput, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.update(rsp); }));
        }));
    };
    return ObservablePipelinesApi;
})();
exports.ObservablePipelinesApi = ObservablePipelinesApi;
