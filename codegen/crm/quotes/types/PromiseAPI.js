var ObservableAPI_1 = require('./ObservableAPI');
var PromiseAssociationsApi = (function () {
    function PromiseAssociationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAssociationsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * List associations of a quote by type
     * @param quoteId
     * @param toObjectType
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    PromiseAssociationsApi.prototype.getAll = function (quoteId, toObjectType, after, limit, _options) {
        var result = this.api.getAll(quoteId, toObjectType, after, limit, _options);
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
     * Read an Object identified by `{quoteId}`. `{quoteId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param quoteId
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     * @param idProperty The name of a property whose values are unique for this object type
     */
    PromiseBasicApi.prototype.getById = function (quoteId, properties, associations, archived, idProperty, _options) {
        var result = this.api.getById(quoteId, properties, associations, archived, idProperty, _options);
        return result.toPromise();
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
    PromiseBasicApi.prototype.getPage = function (limit, after, properties, associations, archived, _options) {
        var result = this.api.getPage(limit, after, properties, associations, archived, _options);
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
     * Read a list of quotes given a collection of IDs. Use the `properties` request body property to control which properties are returned.
     * Read a batch of quotes by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId
     * @param archived Whether to return only results that have been archived.
     */
    PromiseBatchApi.prototype.read = function (batchReadInputSimplePublicObjectId, archived, _options) {
        var result = this.api.read(batchReadInputSimplePublicObjectId, archived, _options);
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
