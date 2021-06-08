var ObservableAPI_1 = require('./ObservableAPI');
var PromiseAssociationsApi = (function () {
    function PromiseAssociationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAssociationsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Remove an association between two companies
     * @param companyId
     * @param toObjectType
     * @param toObjectId
     * @param associationType
     */
    PromiseAssociationsApi.prototype.archive = function (companyId, toObjectType, toObjectId, associationType, _options) {
        var result = this.api.archive(companyId, toObjectType, toObjectId, associationType, _options);
        return result.toPromise();
    };
    /**
     * Associate a company with another object
     * @param companyId
     * @param toObjectType
     * @param toObjectId
     * @param associationType
     */
    PromiseAssociationsApi.prototype.create = function (companyId, toObjectType, toObjectId, associationType, _options) {
        var result = this.api.create(companyId, toObjectType, toObjectId, associationType, _options);
        return result.toPromise();
    };
    /**
     * List associations of a company by type
     * @param companyId
     * @param toObjectType
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    PromiseAssociationsApi.prototype.getAll = function (companyId, toObjectType, after, limit, _options) {
        var result = this.api.getAll(companyId, toObjectType, after, limit, _options);
        return result.toPromise();
    };
    return PromiseAssociationsApi;
})();
exports.PromiseAssociationsApi = PromiseAssociationsApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromiseBasicApi = (function () {
    function PromiseBasicApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Move an Object identified by `{companyId}` to the recycling bin.
     * Archive
     * @param companyId
     */
    PromiseBasicApi.prototype.archive = function (companyId, _options) {
        var result = this.api.archive(companyId, _options);
        return result.toPromise();
    };
    /**
     * Create a company with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard companies is provided.
     * Create
     * @param simplePublicObjectInput
     */
    PromiseBasicApi.prototype.create = function (simplePublicObjectInput, _options) {
        var result = this.api.create(simplePublicObjectInput, _options);
        return result.toPromise();
    };
    /**
     * Read an Object identified by `{companyId}`. `{companyId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param companyId
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     * @param idProperty The name of a property whose values are unique for this object type
     */
    PromiseBasicApi.prototype.getById = function (companyId, properties, associations, archived, idProperty, _options) {
        var result = this.api.getById(companyId, properties, associations, archived, idProperty, _options);
        return result.toPromise();
    };
    /**
     * Read a page of companies. Control what is returned via the `properties` query param.
     * List
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     */
    PromiseBasicApi.prototype.getPage = function (limit, after, properties, associations, archived, _options) {
        var result = this.api.getPage(limit, after, properties, associations, archived, _options);
        return result.toPromise();
    };
    /**
     * Perform a partial update of an Object identified by `{companyId}`. `{companyId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param companyId
     * @param simplePublicObjectInput
     * @param idProperty The name of a property whose values are unique for this object type
     */
    PromiseBasicApi.prototype.update = function (companyId, simplePublicObjectInput, idProperty, _options) {
        var result = this.api.update(companyId, simplePublicObjectInput, idProperty, _options);
        return result.toPromise();
    };
    return PromiseBasicApi;
})();
exports.PromiseBasicApi = PromiseBasicApi;
var ObservableAPI_3 = require('./ObservableAPI');
var PromiseBatchApi = (function () {
    function PromiseBatchApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Archive a list of companies given a collection of IDs. This method will return a `204 No Content` response on success regardless of the initial state of the object (e.g. active, already archived, non-existent).
     * Archive a batch of companies by ID
     * @param batchInputSimplePublicObjectId
     */
    PromiseBatchApi.prototype.archive = function (batchInputSimplePublicObjectId, _options) {
        var result = this.api.archive(batchInputSimplePublicObjectId, _options);
        return result.toPromise();
    };
    /**
     * Create a batch of companies. This follows the same rules as creating an individual object.
     * Create a batch of companies
     * @param batchInputSimplePublicObjectInput
     */
    PromiseBatchApi.prototype.create = function (batchInputSimplePublicObjectInput, _options) {
        var result = this.api.create(batchInputSimplePublicObjectInput, _options);
        return result.toPromise();
    };
    /**
     * Read a list of companies given a collection of IDs. Use the `properties` request body property to control which properties are returned.
     * Read a batch of companies by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId
     * @param archived Whether to return only results that have been archived.
     */
    PromiseBatchApi.prototype.read = function (batchReadInputSimplePublicObjectId, archived, _options) {
        var result = this.api.read(batchReadInputSimplePublicObjectId, archived, _options);
        return result.toPromise();
    };
    /**
     * Perform a partial upate on a batch of companies. This follows the same rules as performing partial updates on an individual object.
     * Update a batch of companies
     * @param batchInputSimplePublicObjectBatchInput
     */
    PromiseBatchApi.prototype.update = function (batchInputSimplePublicObjectBatchInput, _options) {
        var result = this.api.update(batchInputSimplePublicObjectBatchInput, _options);
        return result.toPromise();
    };
    return PromiseBatchApi;
})();
exports.PromiseBatchApi = PromiseBatchApi;
var ObservableAPI_4 = require('./ObservableAPI');
var PromiseSearchApi = (function () {
    function PromiseSearchApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Filter, Sort, and Search CRM Objects
     * Filter, Sort, and Search CRM Objects
     * @param publicObjectSearchRequest
     */
    PromiseSearchApi.prototype.doSearch = function (publicObjectSearchRequest, _options) {
        var result = this.api.doSearch(publicObjectSearchRequest, _options);
        return result.toPromise();
    };
    return PromiseSearchApi;
})();
exports.PromiseSearchApi = PromiseSearchApi;
