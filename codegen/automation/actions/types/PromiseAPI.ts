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
import { PublicActionDefinitionRequiresObjectRequest } from '../models/PublicActionDefinitionRequiresObjectRequest';
import { PublicActionDefinitionRequiresObjectResponse } from '../models/PublicActionDefinitionRequiresObjectResponse';
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
     * @param callbackId The unique identifier for the specific callback to complete.
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
     * @param callbackId The unique identifier for the specific callback to complete.
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
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to delete.
     */
    public archiveWithHttpInfo(appId: number, definitionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(appId, definitionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an action definition by ID.
     * Delete an action definition
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to delete.
     */
    public archive(appId: number, definitionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(appId, definitionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve whether a custom action definition requires an object.
     * Retrieve the object requirement status for a custom action definition.
     * @param appId The ID of the app associated with the custom action definition.
     * @param definitionId The ID of the custom action definition.
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObjectWithHttpInfo(appId: number, definitionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionDefinitionRequiresObjectResponse>> {
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
        const result = this.api.automationV4ActionsAppIdDefinitionIdRequiresObjectWithHttpInfo(appId, definitionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve whether a custom action definition requires an object.
     * Retrieve the object requirement status for a custom action definition.
     * @param appId The ID of the app associated with the custom action definition.
     * @param definitionId The ID of the custom action definition.
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObject(appId: number, definitionId: string, _options?: PromiseConfigurationOptions): Promise<PublicActionDefinitionRequiresObjectResponse> {
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
        const result = this.api.automationV4ActionsAppIdDefinitionIdRequiresObject(appId, definitionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Set whether a custom action definition requires an object.
     * Set the object requirement for a custom action definition.
     * @param appId The ID of the app associated with the custom action definition.
     * @param definitionId The ID of the custom action definition.
     * @param publicActionDefinitionRequiresObjectRequest
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObject_1WithHttpInfo(appId: number, definitionId: string, publicActionDefinitionRequiresObjectRequest: PublicActionDefinitionRequiresObjectRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.automationV4ActionsAppIdDefinitionIdRequiresObject_1WithHttpInfo(appId, definitionId, publicActionDefinitionRequiresObjectRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Set whether a custom action definition requires an object.
     * Set the object requirement for a custom action definition.
     * @param appId The ID of the app associated with the custom action definition.
     * @param definitionId The ID of the custom action definition.
     * @param publicActionDefinitionRequiresObjectRequest
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObject_1(appId: number, definitionId: string, publicActionDefinitionRequiresObjectRequest: PublicActionDefinitionRequiresObjectRequest, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.automationV4ActionsAppIdDefinitionIdRequiresObject_1(appId, definitionId, publicActionDefinitionRequiresObjectRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new custom workflow action.
     * Create a new custom action definition
     * @param appId The unique identifier for the app.
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
     * @param appId The unique identifier for the app.
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
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to retrieve.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getByIdWithHttpInfo(appId: number, definitionId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionDefinition>> {
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
        const result = this.api.getByIdWithHttpInfo(appId, definitionId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a custom workflow action definition by ID.
     * Retrieve a custom action definition
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to retrieve.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getById(appId: number, definitionId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<PublicActionDefinition> {
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
        const result = this.api.getById(appId, definitionId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve custom workflow action definitions by app ID.
     * Retrieve custom action definitions
     * @param appId The unique identifier for the app.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [limit] The maximum number of results to display per page.
     */
    public getPageWithHttpInfo(appId: number, after?: string, archived?: boolean, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging>> {
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
        const result = this.api.getPageWithHttpInfo(appId, after, archived, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve custom workflow action definitions by app ID.
     * Retrieve custom action definitions
     * @param appId The unique identifier for the app.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [limit] The maximum number of results to display per page.
     */
    public getPage(appId: number, after?: string, archived?: boolean, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicActionDefinitionForwardPaging> {
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
        const result = this.api.getPage(appId, after, archived, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing action definition by ID.
     * Update an existing action definition
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to update.
     * @param publicActionDefinitionPatch
     */
    public updateWithHttpInfo(appId: number, definitionId: string, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionDefinition>> {
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
        const result = this.api.updateWithHttpInfo(appId, definitionId, publicActionDefinitionPatch, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing action definition by ID.
     * Update an existing action definition
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to update.
     * @param publicActionDefinitionPatch
     */
    public update(appId: number, definitionId: string, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: PromiseConfigurationOptions): Promise<PublicActionDefinition> {
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
        const result = this.api.update(appId, definitionId, publicActionDefinitionPatch, observableOptions);
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
     * Archive a function for a specific definition.
     * Archive a function for a definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public archiveWithHttpInfo(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(appId, definitionId, functionId, functionType, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a function for a specific definition.
     * Archive a function for a definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public archive(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(appId, definitionId, functionId, functionType, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a function within a given definition.
     * Delete a function for a definition
     * @param appId The ID of the app from which the function will be deleted.
     * @param definitionId The ID of the definition from which the function will be deleted.
     * @param functionType The type of function to delete, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public archiveByFunctionTypeWithHttpInfo(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveByFunctionTypeWithHttpInfo(appId, definitionId, functionType, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a function within a given definition.
     * Delete a function for a definition
     * @param appId The ID of the app from which the function will be deleted.
     * @param definitionId The ID of the definition from which the function will be deleted.
     * @param functionType The type of function to delete, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public archiveByFunctionType(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archiveByFunctionType(appId, definitionId, functionType, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a function for a given definition by ID.
     * Update a function for a definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * @param body
     */
    public createOrReplaceWithHttpInfo(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', body: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
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
        const result = this.api.createOrReplaceWithHttpInfo(appId, definitionId, functionId, functionType, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a function for a given definition by ID.
     * Update a function for a definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * @param body
     */
    public createOrReplace(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', body: string, _options?: PromiseConfigurationOptions): Promise<PublicActionFunctionIdentifier> {
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
        const result = this.api.createOrReplace(appId, definitionId, functionId, functionType, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a function for a given definition.
     * Insert a function for a definition
     * @param appId The ID of the app to which the function will be added.
     * @param definitionId The ID of the definition to which the function will be added.
     * @param functionType The type of function to add, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * @param body
     */
    public createOrReplaceByFunctionTypeWithHttpInfo(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', body: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
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
        const result = this.api.createOrReplaceByFunctionTypeWithHttpInfo(appId, definitionId, functionType, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Add a function for a given definition.
     * Insert a function for a definition
     * @param appId The ID of the app to which the function will be added.
     * @param definitionId The ID of the definition to which the function will be added.
     * @param functionType The type of function to add, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * @param body
     */
    public createOrReplaceByFunctionType(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', body: string, _options?: PromiseConfigurationOptions): Promise<PublicActionFunctionIdentifier> {
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
        const result = this.api.createOrReplaceByFunctionType(appId, definitionId, functionType, body, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve functions of a specific type for a given definition.
     * Retrieve functions by a type for a given definition
     * @param appId The ID of the app associated with the function.
     * @param definitionId The ID of the definition associated with the function.
     * @param functionType The type of function to retrieve, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public getByFunctionTypeWithHttpInfo(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionFunction>> {
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
        const result = this.api.getByFunctionTypeWithHttpInfo(appId, definitionId, functionType, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve functions of a specific type for a given definition.
     * Retrieve functions by a type for a given definition
     * @param appId The ID of the app associated with the function.
     * @param definitionId The ID of the definition associated with the function.
     * @param functionType The type of function to retrieve, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public getByFunctionType(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: PromiseConfigurationOptions): Promise<PublicActionFunction> {
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
        const result = this.api.getByFunctionType(appId, definitionId, functionType, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific function from a given definition.
     * Retrieve a function from a given definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public getByIdWithHttpInfo(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionFunction>> {
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
        const result = this.api.getByIdWithHttpInfo(appId, definitionId, functionId, functionType, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific function from a given definition.
     * Retrieve a function from a given definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public getById(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: PromiseConfigurationOptions): Promise<PublicActionFunction> {
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
        const result = this.api.getById(appId, definitionId, functionId, functionType, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all functions included in a definition.
     * Retrieve functions for a given definition
     * @param appId The unique identifier for the app.
     * @param definitionId The unique identifier for the action definition.
     */
    public getPageWithHttpInfo(appId: number, definitionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionFunctionIdentifierNoPaging>> {
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
        const result = this.api.getPageWithHttpInfo(appId, definitionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all functions included in a definition.
     * Retrieve functions for a given definition
     * @param appId The unique identifier for the app.
     * @param definitionId The unique identifier for the action definition.
     */
    public getPage(appId: number, definitionId: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
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
        const result = this.api.getPage(appId, definitionId, observableOptions);
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
     * @param appId
     * @param definitionId
     * @param revisionId
     */
    public getByIdWithHttpInfo(appId: number, definitionId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicActionRevision>> {
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
        const result = this.api.getByIdWithHttpInfo(appId, definitionId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific revision of a definition by revision ID.
     * Retrieve a specific revision of a definition
     * @param appId
     * @param definitionId
     * @param revisionId
     */
    public getById(appId: number, definitionId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<PublicActionRevision> {
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
        const result = this.api.getById(appId, definitionId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the versions of a definition by ID.
     * Retrieve revisions for a given definition
     * @param appId The unique identifier for the app.
     * @param definitionId The unique identifier for the action definition.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to display per page.
     */
    public getPageWithHttpInfo(appId: number, definitionId: string, after?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionRevisionForwardPaging>> {
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
        const result = this.api.getPageWithHttpInfo(appId, definitionId, after, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the versions of a definition by ID.
     * Retrieve revisions for a given definition
     * @param appId The unique identifier for the app.
     * @param definitionId The unique identifier for the action definition.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to display per page.
     */
    public getPage(appId: number, definitionId: string, after?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicActionRevisionForwardPaging> {
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
        const result = this.api.getPage(appId, definitionId, after, limit, observableOptions);
        return result.toPromise();
    }


}



