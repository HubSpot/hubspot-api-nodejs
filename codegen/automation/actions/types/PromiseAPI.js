var ObservableAPI_1 = require('./ObservableAPI');
var PromiseCallbacksApi = (function () {
    function PromiseCallbacksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCallbacksApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Completes the given action callback.
     * Complete a callback
     * @param callbackId The ID of the target app.
     * @param callbackCompletionRequest The result of the completed action.
     */
    PromiseCallbacksApi.prototype.complete = function (callbackId, callbackCompletionRequest, _options) {
        var result = this.api.complete(callbackId, callbackCompletionRequest, _options);
        return result.toPromise();
    };
    /**
     * Completes the given action callbacks.
     * Complete a batch of callbacks
     * @param batchInputCallbackCompletionBatchRequest The result of the completed action.
     */
    PromiseCallbacksApi.prototype.completeBatch = function (batchInputCallbackCompletionBatchRequest, _options) {
        var result = this.api.completeBatch(batchInputCallbackCompletionBatchRequest, _options);
        return result.toPromise();
    };
    return PromiseCallbacksApi;
})();
exports.PromiseCallbacksApi = PromiseCallbacksApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromiseDefinitionsApi = (function () {
    function PromiseDefinitionsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.
     * Archive a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param appId
     */
    PromiseDefinitionsApi.prototype.archive = function (definitionId, appId, _options) {
        var result = this.api.archive(definitionId, appId, _options);
        return result.toPromise();
    };
    /**
     * Creates a new custom workflow action.
     * Create new custom action
     * @param appId
     * @param extensionActionDefinitionInput The custom workflow action to create.
     */
    PromiseDefinitionsApi.prototype.create = function (appId, extensionActionDefinitionInput, _options) {
        var result = this.api.create(appId, extensionActionDefinitionInput, _options);
        return result.toPromise();
    };
    /**
     * Returns a single custom workflow action with the specified ID.
     * Get a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param appId
     * @param archived Whether to include archived custom actions.
     */
    PromiseDefinitionsApi.prototype.getById = function (definitionId, appId, archived, _options) {
        var result = this.api.getById(definitionId, appId, archived, _options);
        return result.toPromise();
    };
    /**
     * Returns a list of all custom workflow actions.
     * Get all custom actions
     * @param appId
     * @param limit Maximum number of results per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param archived Whether to include archived custom actions.
     */
    PromiseDefinitionsApi.prototype.getPage = function (appId, limit, after, archived, _options) {
        var result = this.api.getPage(appId, limit, after, archived, _options);
        return result.toPromise();
    };
    /**
     * Updates a custom workflow action with new values for the specified fields.
     * Update a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param appId
     * @param extensionActionDefinitionPatch The custom workflow action fields to be updated.
     */
    PromiseDefinitionsApi.prototype.update = function (definitionId, appId, extensionActionDefinitionPatch, _options) {
        var result = this.api.update(definitionId, appId, extensionActionDefinitionPatch, _options);
        return result.toPromise();
    };
    return PromiseDefinitionsApi;
})();
exports.PromiseDefinitionsApi = PromiseDefinitionsApi;
var ObservableAPI_3 = require('./ObservableAPI');
var PromiseFunctionsApi = (function () {
    function PromiseFunctionsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableFunctionsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
     * Delete a custom action function
     * @param definitionId The ID of the custom workflow action
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId
     */
    PromiseFunctionsApi.prototype.archive = function (definitionId, functionType, functionId, appId, _options) {
        if (functionType === void 0) { functionType =  | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'; }
        var result = this.api.archive(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    };
    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
     * Delete a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId
     */
    PromiseFunctionsApi.prototype.archiveByFunctionType = function (definitionId, functionType, appId, _options) {
        if (functionType === void 0) { functionType =  | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'; }
        var result = this.api.archiveByFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    };
    /**
     * Creates or replaces a function for a custom workflow action.
     * Create or replace a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId
     * @param body The function source code. Must be valid JavaScript code.
     */
    PromiseFunctionsApi.prototype.createOrReplace = function (definitionId, functionType, functionId, appId, body, _options) {
        if (functionType === void 0) { functionType =  | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'; }
        var result = this.api.createOrReplace(definitionId, functionType, functionId, appId, body, _options);
        return result.toPromise();
    };
    /**
     * Creates or replaces a function for a custom workflow action.
     * Create or replace a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId
     * @param body The function source code. Must be valid JavaScript code.
     */
    PromiseFunctionsApi.prototype.createOrReplaceByFunctionType = function (definitionId, functionType, appId, body, _options) {
        if (functionType === void 0) { functionType =  | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'; }
        var result = this.api.createOrReplaceByFunctionType(definitionId, functionType, appId, body, _options);
        return result.toPromise();
    };
    /**
     * Returns the given function for a custom workflow action.
     * Get a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId
     */
    PromiseFunctionsApi.prototype.getByFunctionType = function (definitionId, functionType, appId, _options) {
        if (functionType === void 0) { functionType =  | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'; }
        var result = this.api.getByFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    };
    /**
     * Returns the given function for a custom workflow action.
     * Get a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId
     */
    PromiseFunctionsApi.prototype.getById = function (definitionId, functionType, functionId, appId, _options) {
        if (functionType === void 0) { functionType =  | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'; }
        var result = this.api.getById(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    };
    /**
     * Returns a list of all functions that are associated with the given custom workflow action.
     * Get all custom action functions
     * @param definitionId The ID of the custom workflow action.
     * @param appId
     */
    PromiseFunctionsApi.prototype.getPage = function (definitionId, appId, _options) {
        var result = this.api.getPage(definitionId, appId, _options);
        return result.toPromise();
    };
    return PromiseFunctionsApi;
})();
exports.PromiseFunctionsApi = PromiseFunctionsApi;
var ObservableAPI_4 = require('./ObservableAPI');
var PromiseRevisionsApi = (function () {
    function PromiseRevisionsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableRevisionsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Returns the given version of a custom workflow action.
     * Get a revision for a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param revisionId The version of the custom workflow action.
     * @param appId
     */
    PromiseRevisionsApi.prototype.getById = function (definitionId, revisionId, appId, _options) {
        var result = this.api.getById(definitionId, revisionId, appId, _options);
        return result.toPromise();
    };
    /**
     * Returns a list of revisions for a custom workflow action.
     * Get all revisions for a custom action
     * @param definitionId The ID of the custom workflow action
     * @param appId
     * @param limit Maximum number of results per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     */
    PromiseRevisionsApi.prototype.getPage = function (definitionId, appId, limit, after, _options) {
        var result = this.api.getPage(definitionId, appId, limit, after, _options);
        return result.toPromise();
    };
    return PromiseRevisionsApi;
})();
exports.PromiseRevisionsApi = PromiseRevisionsApi;
