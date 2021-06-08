var ObservableAPI_1 = require('./ObservableAPI');
var PromiseCoreApi = (function () {
    function PromiseCoreApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCoreApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param importId
     */
    PromiseCoreApi.prototype.cancel = function (importId, _options) {
        var result = this.api.cancel(importId, _options);
        return result.toPromise();
    };
    /**
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param files A list of files containing the data to import
     * @param importRequest JSON formatted metadata about the import. This includes a name for the import and the column mappings for each file. See the overview tab for more on the required format.
     */
    PromiseCoreApi.prototype.create = function (files, importRequest, _options) {
        var result = this.api.create(files, importRequest, _options);
        return result.toPromise();
    };
    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param importId
     */
    PromiseCoreApi.prototype.getById = function (importId, _options) {
        var result = this.api.getById(importId, _options);
        return result.toPromise();
    };
    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before
     * @param limit The maximum number of results to display per page.
     */
    PromiseCoreApi.prototype.getPage = function (after, before, limit, _options) {
        var result = this.api.getPage(after, before, limit, _options);
        return result.toPromise();
    };
    return PromiseCoreApi;
})();
exports.PromiseCoreApi = PromiseCoreApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * @param importId
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    PromiseDefaultApi.prototype.getCrmV3ImportsImportIdErrors = function (importId, after, limit, _options) {
        var result = this.api.getCrmV3ImportsImportIdErrors(importId, after, limit, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
})();
exports.PromiseDefaultApi = PromiseDefaultApi;
