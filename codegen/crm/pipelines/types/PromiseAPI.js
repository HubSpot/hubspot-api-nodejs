var ObservableAPI_1 = require('./ObservableAPI');
var PromisePipelineStagesApi = (function () {
    function PromisePipelineStagesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservablePipelineStagesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Archive the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Archive a pipeline stage
     * @param objectType
     * @param pipelineId
     * @param stageId
     */
    PromisePipelineStagesApi.prototype.archive = function (objectType, pipelineId, stageId, _options) {
        var result = this.api.archive(objectType, pipelineId, stageId, _options);
        return result.toPromise();
    };
    /**
     * Create a new stage associated with the pipeline identified by `{pipelineId}`. The entire stage object, including its unique ID, will be returned in the response.
     * Create a pipeline stage
     * @param objectType
     * @param pipelineId
     * @param pipelineStageInput
     */
    PromisePipelineStagesApi.prototype.create = function (objectType, pipelineId, pipelineStageInput, _options) {
        var result = this.api.create(objectType, pipelineId, pipelineStageInput, _options);
        return result.toPromise();
    };
    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param objectType
     * @param pipelineId
     * @param archived Whether to return only results that have been archived.
     */
    PromisePipelineStagesApi.prototype.getAll = function (objectType, pipelineId, archived, _options) {
        var result = this.api.getAll(objectType, pipelineId, archived, _options);
        return result.toPromise();
    };
    /**
     * Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Return a pipeline stage by ID
     * @param objectType
     * @param pipelineId
     * @param stageId
     * @param archived Whether to return only results that have been archived.
     */
    PromisePipelineStagesApi.prototype.getById = function (objectType, pipelineId, stageId, archived, _options) {
        var result = this.api.getById(objectType, pipelineId, stageId, archived, _options);
        return result.toPromise();
    };
    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param objectType
     * @param pipelineId
     * @param stageId
     * @param pipelineStageInput
     */
    PromisePipelineStagesApi.prototype.replace = function (objectType, pipelineId, stageId, pipelineStageInput, _options) {
        var result = this.api.replace(objectType, pipelineId, stageId, pipelineStageInput, _options);
        return result.toPromise();
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
    PromisePipelineStagesApi.prototype.update = function (objectType, pipelineId, stageId, archived, pipelineStagePatchInput, _options) {
        var result = this.api.update(objectType, pipelineId, stageId, archived, pipelineStagePatchInput, _options);
        return result.toPromise();
    };
    return PromisePipelineStagesApi;
})();
exports.PromisePipelineStagesApi = PromisePipelineStagesApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromisePipelinesApi = (function () {
    function PromisePipelinesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservablePipelinesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Archive the pipeline identified by `{pipelineId}`.
     * Archive a pipeline
     * @param objectType
     * @param pipelineId
     */
    PromisePipelinesApi.prototype.archive = function (objectType, pipelineId, _options) {
        var result = this.api.archive(objectType, pipelineId, _options);
        return result.toPromise();
    };
    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param objectType
     * @param pipelineInput
     */
    PromisePipelinesApi.prototype.create = function (objectType, pipelineInput, _options) {
        var result = this.api.create(objectType, pipelineInput, _options);
        return result.toPromise();
    };
    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param objectType
     * @param archived Whether to return only results that have been archived.
     */
    PromisePipelinesApi.prototype.getAll = function (objectType, archived, _options) {
        var result = this.api.getAll(objectType, archived, _options);
        return result.toPromise();
    };
    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param objectType
     * @param pipelineId
     * @param archived Whether to return only results that have been archived.
     */
    PromisePipelinesApi.prototype.getById = function (objectType, pipelineId, archived, _options) {
        var result = this.api.getById(objectType, pipelineId, archived, _options);
        return result.toPromise();
    };
    /**
     * Replace all the properties of an existing pipeline with the values provided. This will overwrite any existing pipeline stages. The updated pipeline will be returned in the response.
     * Replace a pipeline
     * @param objectType
     * @param pipelineId
     * @param pipelineInput
     */
    PromisePipelinesApi.prototype.replace = function (objectType, pipelineId, pipelineInput, _options) {
        var result = this.api.replace(objectType, pipelineId, pipelineInput, _options);
        return result.toPromise();
    };
    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * Update a pipeline
     * @param objectType
     * @param pipelineId
     * @param archived Whether to return only results that have been archived.
     * @param pipelinePatchInput
     */
    PromisePipelinesApi.prototype.update = function (objectType, pipelineId, archived, pipelinePatchInput, _options) {
        var result = this.api.update(objectType, pipelineId, archived, pipelinePatchInput, _options);
        return result.toPromise();
    };
    return PromisePipelinesApi;
})();
exports.PromisePipelinesApi = PromisePipelinesApi;
