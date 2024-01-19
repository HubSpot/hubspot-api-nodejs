import { Configuration} from '../configuration'

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
     * Completes a single callback
     * @param callbackId 
     * @param callbackCompletionRequest 
     */
    public postAutomationV4ActionsCallbacksCallbackIdComplete(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.postAutomationV4ActionsCallbacksCallbackIdComplete(callbackId, callbackCompletionRequest, _options);
        return result.toPromise();
    }

    /**
     * Completes a batch of callbacks
     * @param batchInputCallbackCompletionBatchRequest 
     */
    public postAutomationV4ActionsCallbacksComplete(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: Configuration): Promise<void> {
        const result = this.api.postAutomationV4ActionsCallbacksComplete(batchInputCallbackCompletionBatchRequest, _options);
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
     * Archive an extension definition
     * @param definitionId 
     * @param appId 
     */
    public deleteAutomationV4ActionsAppIdDefinitionId(definitionId: string, appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAutomationV4ActionsAppIdDefinitionId(definitionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Get paged extension definitions
     * @param appId 
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param archived Whether to return only results that have been archived.
     */
    public getAutomationV4ActionsAppId(appId: number, limit?: number, after?: string, archived?: boolean, _options?: Configuration): Promise<CollectionResponsePublicActionDefinitionForwardPaging> {
        const result = this.api.getAutomationV4ActionsAppId(appId, limit, after, archived, _options);
        return result.toPromise();
    }

    /**
     * Get extension definition by Id
     * @param definitionId 
     * @param appId 
     * @param archived Whether to return only results that have been archived.
     */
    public getAutomationV4ActionsAppIdDefinitionId(definitionId: string, appId: number, archived?: boolean, _options?: Configuration): Promise<PublicActionDefinition> {
        const result = this.api.getAutomationV4ActionsAppIdDefinitionId(definitionId, appId, archived, _options);
        return result.toPromise();
    }

    /**
     * Patch an existing extension definition
     * @param definitionId 
     * @param appId 
     * @param publicActionDefinitionPatch 
     */
    public patchAutomationV4ActionsAppIdDefinitionId(definitionId: string, appId: number, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: Configuration): Promise<PublicActionDefinition> {
        const result = this.api.patchAutomationV4ActionsAppIdDefinitionId(definitionId, appId, publicActionDefinitionPatch, _options);
        return result.toPromise();
    }

    /**
     * Create a new extension definition
     * @param appId 
     * @param publicActionDefinitionEgg 
     */
    public postAutomationV4ActionsAppId(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: Configuration): Promise<PublicActionDefinition> {
        const result = this.api.postAutomationV4ActionsAppId(appId, publicActionDefinitionEgg, _options);
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
     * Delete a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     */
    public deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    }

    /**
     * Archive a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param functionId 
     * @param appId 
     */
    public deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Get all functions for a given definition
     * @param definitionId 
     * @param appId 
     */
    public getAutomationV4ActionsAppIdDefinitionIdFunctions(definitionId: string, appId: number, _options?: Configuration): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
        const result = this.api.getAutomationV4ActionsAppIdDefinitionIdFunctions(definitionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Get all functions by a type for a given definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     */
    public getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Promise<PublicActionFunction> {
        const result = this.api.getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    }

    /**
     * Get a function for a given definition
     * @param definitionId 
     * @param functionType 
     * @param functionId 
     * @param appId 
     */
    public getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Promise<PublicActionFunction> {
        const result = this.api.getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Insert a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     * @param body 
     */
    public putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, body: string, _options?: Configuration): Promise<PublicActionFunctionIdentifier> {
        const result = this.api.putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(definitionId, functionType, appId, body, _options);
        return result.toPromise();
    }

    /**
     * Insert a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param functionId 
     * @param appId 
     * @param body 
     */
    public putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, body: string, _options?: Configuration): Promise<PublicActionFunctionIdentifier> {
        const result = this.api.putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(definitionId, functionType, functionId, appId, body, _options);
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
     * Get all revisions for a given definition
     * @param definitionId 
     * @param appId 
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     */
    public getAutomationV4ActionsAppIdDefinitionIdRevisions(definitionId: string, appId: number, limit?: number, after?: string, _options?: Configuration): Promise<CollectionResponsePublicActionRevisionForwardPaging> {
        const result = this.api.getAutomationV4ActionsAppIdDefinitionIdRevisions(definitionId, appId, limit, after, _options);
        return result.toPromise();
    }

    /**
     * Gets a revision for a given definition by revision id
     * @param definitionId 
     * @param revisionId 
     * @param appId 
     */
    public getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionId(definitionId: string, revisionId: string, appId: number, _options?: Configuration): Promise<PublicActionRevision> {
        const result = this.api.getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionId(definitionId, revisionId, appId, _options);
        return result.toPromise();
    }


}



