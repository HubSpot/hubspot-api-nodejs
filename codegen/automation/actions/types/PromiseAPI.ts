import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { BatchInputCallbackCompletionBatchRequest } from '../models/BatchInputCallbackCompletionBatchRequest';
import { CallbackCompletionRequest } from '../models/CallbackCompletionRequest';
import { CollectionResponsePublicActionDefinitionForwardPaging } from '../models/CollectionResponsePublicActionDefinitionForwardPaging';
import { CollectionResponsePublicActionFunctionIdentifierNoPaging } from '../models/CollectionResponsePublicActionFunctionIdentifierNoPaging';
import { CollectionResponsePublicActionRevisionForwardPaging } from '../models/CollectionResponsePublicActionRevisionForwardPaging';
import { PublicActionDefinition } from '../models/PublicActionDefinition';
import { PublicActionDefinitionEgg } from '../models/PublicActionDefinitionEgg';
import { PublicActionDefinitionPatch } from '../models/PublicActionDefinitionPatch';
import { PublicActionFunction } from '../models/PublicActionFunction';
import { PublicActionFunctionIdentifier } from '../models/PublicActionFunctionIdentifier';
import { PublicActionRevision } from '../models/PublicActionRevision';
import { ObservableCallbacksApi } from './ObservableAPI';

import { CallbacksApiRequestFactory, CallbacksApiResponseProcessor} from "../apis/CallbacksApi";
export class PromiseCallbacksApi {
    private api: ObservableCallbacksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CallbacksApiRequestFactory,
        responseProcessor?: CallbacksApiResponseProcessor
    ) {
        this.api = new ObservableCallbacksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Complete a specific blocked action execution by ID.
     * Completes a callback
     * @param callbackId The ID of the action execution.
     * @param callbackCompletionRequest
     */
    public completeWithHttpInfo(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.completeWithHttpInfo(callbackId, callbackCompletionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Complete a specific blocked action execution by ID.
     * Completes a callback
     * @param callbackId The ID of the action execution.
     * @param callbackCompletionRequest
     */
    public complete(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.complete(callbackId, callbackCompletionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Complete a batch of blocked action executions.
     * Complete a batch of callbacks
     * @param batchInputCallbackCompletionBatchRequest
     */
    public completeBatchWithHttpInfo(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.completeBatchWithHttpInfo(batchInputCallbackCompletionBatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Complete a batch of blocked action executions.
     * Complete a batch of callbacks
     * @param batchInputCallbackCompletionBatchRequest
     */
    public completeBatch(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.completeBatch(batchInputCallbackCompletionBatchRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDefinitionsApi } from './ObservableAPI';

import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";
export class PromiseDefinitionsApi {
    private api: ObservableDefinitionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefinitionsApiRequestFactory,
        responseProcessor?: DefinitionsApiResponseProcessor
    ) {
        this.api = new ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an action definition by ID.
     * Delete an action definition
     * @param definitionId The ID of the custom action definition.
     * @param appId The ID of the app.
     */
    public archiveWithHttpInfo(definitionId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(definitionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an action definition by ID.
     * Delete an action definition
     * @param definitionId The ID of the custom action definition.
     * @param appId The ID of the app.
     */
    public archive(definitionId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(definitionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new custom workflow action.
     * Create a new custom action definition
     * @param appId The ID of the app.
     * @param publicActionDefinitionEgg
     */
    public createWithHttpInfo(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionDefinition>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(appId, publicActionDefinitionEgg, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new custom workflow action.
     * Create a new custom action definition
     * @param appId The ID of the app.
     * @param publicActionDefinitionEgg
     */
    public create(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: PromiseConfigurationOptions): Promise<PublicActionDefinition> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(appId, publicActionDefinitionEgg, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a custom workflow action definition by ID.
     * Retrieve a custom action definition
     * @param definitionId The ID of the custom action.
     * @param appId The ID of the app.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getByIdWithHttpInfo(definitionId: string, appId: number, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionDefinition>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByIdWithHttpInfo(definitionId, appId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a custom workflow action definition by ID.
     * Retrieve a custom action definition
     * @param definitionId The ID of the custom action.
     * @param appId The ID of the app.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getById(definitionId: string, appId: number, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<PublicActionDefinition> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById(definitionId, appId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve custom workflow action definitions by app ID.
     * Retrieve custom action definitions
     * @param appId The ID of the app.
     * @param [limit] The maximum number of results to display per page.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getPageWithHttpInfo(appId: number, limit?: number, after?: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageWithHttpInfo(appId, limit, after, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve custom workflow action definitions by app ID.
     * Retrieve custom action definitions
     * @param appId The ID of the app.
     * @param [limit] The maximum number of results to display per page.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getPage(appId: number, limit?: number, after?: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicActionDefinitionForwardPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPage(appId, limit, after, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing action definition by ID.
     * Update an existing action definition
     * @param definitionId The ID of the custom action definition.
     * @param appId The ID of the app.
     * @param publicActionDefinitionPatch
     */
    public updateWithHttpInfo(definitionId: string, appId: number, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionDefinition>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateWithHttpInfo(definitionId, appId, publicActionDefinitionPatch, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing action definition by ID.
     * Update an existing action definition
     * @param definitionId The ID of the custom action definition.
     * @param appId The ID of the app.
     * @param publicActionDefinitionPatch
     */
    public update(definitionId: string, appId: number, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: PromiseConfigurationOptions): Promise<PublicActionDefinition> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update(definitionId, appId, publicActionDefinitionPatch, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFunctionsApi } from './ObservableAPI';

import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi";
export class PromiseFunctionsApi {
    private api: ObservableFunctionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsApiRequestFactory,
        responseProcessor?: FunctionsApiResponseProcessor
    ) {
        this.api = new ObservableFunctionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a function for a definition
     * @param definitionId
     * @param functionType
     * @param functionId
     * @param appId
     */
    public archiveWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(definitionId, functionType, functionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a function for a definition
     * @param definitionId
     * @param functionType
     * @param functionId
     * @param appId
     */
    public archive(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(definitionId, functionType, functionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a function within a given definition.
     * Delete a function for a definition
     * @param definitionId The ID of the definition.
     * @param functionType The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * @param appId The ID of the app.
     */
    public archiveByFunctionTypeWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveByFunctionTypeWithHttpInfo(definitionId, functionType, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a function within a given definition.
     * Delete a function for a definition
     * @param definitionId The ID of the definition.
     * @param functionType The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * @param appId The ID of the app.
     */
    public archiveByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveByFunctionType(definitionId, functionType, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a function for a given definition by ID.
     * Update a function for a definition
     * @param definitionId The ID of the definition.
     * @param functionType The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * @param functionId The ID of the function.
     * @param appId The ID of the app.
     * @param body
     */
    public createOrReplaceWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, body: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createOrReplaceWithHttpInfo(definitionId, functionType, functionId, appId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a function for a given definition by ID.
     * Update a function for a definition
     * @param definitionId The ID of the definition.
     * @param functionType The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * @param functionId The ID of the function.
     * @param appId The ID of the app.
     * @param body
     */
    public createOrReplace(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, body: string, _options?: PromiseConfigurationOptions): Promise<PublicActionFunctionIdentifier> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createOrReplace(definitionId, functionType, functionId, appId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a function for a given definition.
     * Insert a function for a definition
     * @param definitionId The ID of the definition.
     * @param functionType The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * @param appId The ID of the app.
     * @param body
     */
    public createOrReplaceByFunctionTypeWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, body: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createOrReplaceByFunctionTypeWithHttpInfo(definitionId, functionType, appId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a function for a given definition.
     * Insert a function for a definition
     * @param definitionId The ID of the definition.
     * @param functionType The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * @param appId The ID of the app.
     * @param body
     */
    public createOrReplaceByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, body: string, _options?: PromiseConfigurationOptions): Promise<PublicActionFunctionIdentifier> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createOrReplaceByFunctionType(definitionId, functionType, appId, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve functions by a type for a given definition
     * @param definitionId The ID of the definition.
     * @param functionType The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * @param appId The ID of the app.
     */
    public getByFunctionTypeWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionFunction>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByFunctionTypeWithHttpInfo(definitionId, functionType, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve functions by a type for a given definition
     * @param definitionId The ID of the definition.
     * @param functionType The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * @param appId The ID of the app.
     */
    public getByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: PromiseConfigurationOptions): Promise<PublicActionFunction> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByFunctionType(definitionId, functionType, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific function from a given definition.
     * Retrieve a function from a given definition
     * @param definitionId The ID of the definition.
     * @param functionType The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * @param functionId The ID of the function.
     * @param appId The ID of the app.
     */
    public getByIdWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionFunction>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByIdWithHttpInfo(definitionId, functionType, functionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific function from a given definition.
     * Retrieve a function from a given definition
     * @param definitionId The ID of the definition.
     * @param functionType The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * @param functionId The ID of the function.
     * @param appId The ID of the app.
     */
    public getById(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<PublicActionFunction> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById(definitionId, functionType, functionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all functions included in a definition.
     * Retrieve functions for a given definition
     * @param definitionId The ID of the definition.
     * @param appId The ID of the app.
     */
    public getPageWithHttpInfo(definitionId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionFunctionIdentifierNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageWithHttpInfo(definitionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all functions included in a definition.
     * Retrieve functions for a given definition
     * @param definitionId The ID of the definition.
     * @param appId The ID of the app.
     */
    public getPage(definitionId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPage(definitionId, appId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRevisionsApi } from './ObservableAPI';

import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor} from "../apis/RevisionsApi";
export class PromiseRevisionsApi {
    private api: ObservableRevisionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RevisionsApiRequestFactory,
        responseProcessor?: RevisionsApiResponseProcessor
    ) {
        this.api = new ObservableRevisionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a specific revision of a definition by revision ID.
     * Retrieve a specific revision of a definition
     * @param definitionId The ID of the definition.
     * @param revisionId The ID of the revision.
     * @param appId The ID of the app.
     */
    public getByIdWithHttpInfo(definitionId: string, revisionId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionRevision>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByIdWithHttpInfo(definitionId, revisionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific revision of a definition by revision ID.
     * Retrieve a specific revision of a definition
     * @param definitionId The ID of the definition.
     * @param revisionId The ID of the revision.
     * @param appId The ID of the app.
     */
    public getById(definitionId: string, revisionId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<PublicActionRevision> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById(definitionId, revisionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the versions of a definition by ID.
     * Retrieve revisions for a given definition
     * @param definitionId The ID of the definition.
     * @param appId The ID of the app.
     * @param [limit] The maximum number of results to display per page.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     */
    public getPageWithHttpInfo(definitionId: string, appId: number, limit?: number, after?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionRevisionForwardPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageWithHttpInfo(definitionId, appId, limit, after, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the versions of a definition by ID.
     * Retrieve revisions for a given definition
     * @param definitionId The ID of the definition.
     * @param appId The ID of the app.
     * @param [limit] The maximum number of results to display per page.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     */
    public getPage(definitionId: string, appId: number, limit?: number, after?: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicActionRevisionForwardPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPage(definitionId, appId, limit, after, observableOptions);
        return result.toPromise();
    }


}



