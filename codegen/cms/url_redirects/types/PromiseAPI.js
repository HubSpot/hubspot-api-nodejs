var ObservableAPI_1 = require('./ObservableAPI');
var PromiseRedirectsApi = (function () {
    function PromiseRedirectsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableRedirectsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Delete one existing redirect, so it is no longer mapped.
     * Delete a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    PromiseRedirectsApi.prototype.archive = function (urlRedirectId, _options) {
        var result = this.api.archive(urlRedirectId, _options);
        return result.toPromise();
    };
    /**
     * Creates and configures a new URL redirect.
     * Create a redirect
     * @param urlMappingCreateRequestBody
     */
    PromiseRedirectsApi.prototype.create = function (urlMappingCreateRequestBody, _options) {
        var result = this.api.create(urlMappingCreateRequestBody, _options);
        return result.toPromise();
    };
    /**
     * Returns the details for a single existing URL redirect by ID.
     * Get details for a redirect
     * @param urlRedirectId The ID of the target redirect.
     */
    PromiseRedirectsApi.prototype.getById = function (urlRedirectId, _options) {
        var result = this.api.getById(urlRedirectId, _options);
        return result.toPromise();
    };
    /**
     * Returns all existing URL redirects. Results can be limited and filtered by creation or updated date.
     * Get current redirects
     * @param createdAt Only return redirects created on exactly this date.
     * @param createdAfter Only return redirects created after this date.
     * @param createdBefore Only return redirects created before this date.
     * @param updatedAt Only return redirects last updated on exactly this date.
     * @param updatedAfter Only return redirects last updated after this date.
     * @param updatedBefore Only return redirects last updated before this date.
     * @param sort
     * @param properties
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before
     * @param limit Maximum number of result per page
     * @param archived Whether to return only results that have been archived.
     */
    PromiseRedirectsApi.prototype.getPage = function (createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, properties, after, before, limit, archived, _options) {
        var result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, properties, after, before, limit, archived, _options);
        return result.toPromise();
    };
    /**
     * Updates the settings for an existing URL redirect.
     * Update a redirect
     * @param urlRedirectId
     * @param urlMapping
     */
    PromiseRedirectsApi.prototype.update = function (urlRedirectId, urlMapping, _options) {
        var result = this.api.update(urlRedirectId, urlMapping, _options);
        return result.toPromise();
    };
    return PromiseRedirectsApi;
})();
exports.PromiseRedirectsApi = PromiseRedirectsApi;
