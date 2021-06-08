var ObservableAPI_1 = require('./ObservableAPI');
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Read an owner by given `id` or `userId`
     * @param ownerId
     * @param idProperty
     * @param archived Whether to return only results that have been archived.
     */
    PromiseDefaultApi.prototype.getById = function (ownerId, idProperty, archived, _options) {
        if (idProperty === void 0) { idProperty =  | 'userId'; }
        var result = this.api.getById(ownerId, idProperty, archived, _options);
        return result.toPromise();
    };
    /**
     * Get a page of owners
     * @param email Filter by email address (optional)
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     * @param archived Whether to return only results that have been archived.
     */
    PromiseDefaultApi.prototype.getPage = function (email, after, limit, archived, _options) {
        var result = this.api.getPage(email, after, limit, archived, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
})();
exports.PromiseDefaultApi = PromiseDefaultApi;
