var ObservableAPI_1 = require('./ObservableAPI');
var PromiseDomainsApi = (function () {
    function PromiseDomainsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDomainsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Returns a single domains with the id specified.
     * Get a single domain
     * @param domainId The unique ID of the domain.
     * @param archived Whether to return only results that have been archived.
     */
    PromiseDomainsApi.prototype.getById = function (domainId, archived, _options) {
        var result = this.api.getById(domainId, archived, _options);
        return result.toPromise();
    };
    /**
     * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
     * Get current domains
     * @param createdAt Only return domains created at this date.
     * @param createdAfter Only return domains created after this date.
     * @param createdBefore Only return domains created before this date.
     * @param updatedAt Only return domains updated at this date.
     * @param updatedAfter Only return domains updated after this date.
     * @param updatedBefore Only return domains updated before this date.
     * @param sort
     * @param properties
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before
     * @param limit Maximum number of results per page.
     * @param archived Whether to return only results that have been archived.
     */
    PromiseDomainsApi.prototype.getPage = function (createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, properties, after, before, limit, archived, _options) {
        var result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, properties, after, before, limit, archived, _options);
        return result.toPromise();
    };
    return PromiseDomainsApi;
})();
exports.PromiseDomainsApi = PromiseDomainsApi;
