var ObservableAPI_1 = require('./ObservableAPI');
var PromiseBatchApi = (function () {
    function PromiseBatchApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Remove the associations between all pairs of objects identified in the request body.
     * Archive a batch of associations
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociation
     */
    PromiseBatchApi.prototype.archive = function (fromObjectType, toObjectType, batchInputPublicAssociation, _options) {
        var result = this.api.archive(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
        return result.toPromise();
    };
    /**
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociation
     */
    PromiseBatchApi.prototype.create = function (fromObjectType, toObjectType, batchInputPublicAssociation, _options) {
        var result = this.api.create(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
        return result.toPromise();
    };
    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicObjectId
     */
    PromiseBatchApi.prototype.read = function (fromObjectType, toObjectType, batchInputPublicObjectId, _options) {
        var result = this.api.read(fromObjectType, toObjectType, batchInputPublicObjectId, _options);
        return result.toPromise();
    };
    return PromiseBatchApi;
})();
exports.PromiseBatchApi = PromiseBatchApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromiseTypesApi = (function () {
    function PromiseTypesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableTypesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * List all the valid association types available between two object types
     * List association types
     * @param fromObjectType
     * @param toObjectType
     */
    PromiseTypesApi.prototype.getAll = function (fromObjectType, toObjectType, _options) {
        var result = this.api.getAll(fromObjectType, toObjectType, _options);
        return result.toPromise();
    };
    return PromiseTypesApi;
})();
exports.PromiseTypesApi = PromiseTypesApi;
