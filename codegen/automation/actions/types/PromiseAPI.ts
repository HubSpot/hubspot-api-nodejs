import { HttpInfo } from '../http/http';
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
    public completeWithHttpInfo(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.completeWithHttpInfo(callbackId, callbackCompletionRequest, _options);
        return result.toPromise();
    }

    /**
     * Completes a single callback
     * @param callbackId 
     * @param callbackCompletionRequest 
     */
    public complete(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.complete(callbackId, callbackCompletionRequest, _options);
        return result.toPromise();
    }

    /**
     * Completes a batch of callbacks
     * @param batchInputCallbackCompletionBatchRequest 
     */
    public completeBatchWithHttpInfo(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.completeBatchWithHttpInfo(batchInputCallbackCompletionBatchRequest, _options);
        return result.toPromise();
    }

    /**
     * Completes a batch of callbacks
     * @param batchInputCallbackCompletionBatchRequest 
     */
    public completeBatch(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: Configuration): Promise<void> {
        const result = this.api.completeBatch(batchInputCallbackCompletionBatchRequest, _options);
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
    public archiveWithHttpInfo(definitionId: string, appId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(definitionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Archive an extension definition
     * @param definitionId 
     * @param appId 
     */
    public archive(definitionId: string, appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(definitionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Create a new extension definition
     * @param appId 
     * @param publicActionDefinitionEgg 
     */
    public createWithHttpInfo(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: Configuration): Promise<HttpInfo<PublicActionDefinition>> {
        const result = this.api.createWithHttpInfo(appId, publicActionDefinitionEgg, _options);
        return result.toPromise();
    }

    /**
     * Create a new extension definition
     * @param appId 
     * @param publicActionDefinitionEgg 
     */
    public create(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: Configuration): Promise<PublicActionDefinition> {
        const result = this.api.create(appId, publicActionDefinitionEgg, _options);
        return result.toPromise();
    }

    /**
     * Get extension definition by Id
     * @param definitionId 
     * @param appId 
     * @param archived Whether to return only results that have been archived.
     */
    public getByIdWithHttpInfo(definitionId: string, appId: number, archived?: boolean, _options?: Configuration): Promise<HttpInfo<PublicActionDefinition>> {
        const result = this.api.getByIdWithHttpInfo(definitionId, appId, archived, _options);
        return result.toPromise();
    }

    /**
     * Get extension definition by Id
     * @param definitionId 
     * @param appId 
     * @param archived Whether to return only results that have been archived.
     */
    public getById(definitionId: string, appId: number, archived?: boolean, _options?: Configuration): Promise<PublicActionDefinition> {
        const result = this.api.getById(definitionId, appId, archived, _options);
        return result.toPromise();
    }

    /**
     * Get paged extension definitions
     * @param appId 
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param archived Whether to return only results that have been archived.
     */
    public getPageWithHttpInfo(appId: number, limit?: number, after?: string, archived?: boolean, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging>> {
        const result = this.api.getPageWithHttpInfo(appId, limit, after, archived, _options);
        return result.toPromise();
    }

    /**
     * Get paged extension definitions
     * @param appId 
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param archived Whether to return only results that have been archived.
     */
    public getPage(appId: number, limit?: number, after?: string, archived?: boolean, _options?: Configuration): Promise<CollectionResponsePublicActionDefinitionForwardPaging> {
        const result = this.api.getPage(appId, limit, after, archived, _options);
        return result.toPromise();
    }

    /**
     * Patch an existing extension definition
     * @param definitionId 
     * @param appId 
     * @param publicActionDefinitionPatch 
     */
    public updateWithHttpInfo(definitionId: string, appId: number, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: Configuration): Promise<HttpInfo<PublicActionDefinition>> {
        const result = this.api.updateWithHttpInfo(definitionId, appId, publicActionDefinitionPatch, _options);
        return result.toPromise();
    }

    /**
     * Patch an existing extension definition
     * @param definitionId 
     * @param appId 
     * @param publicActionDefinitionPatch 
     */
    public update(definitionId: string, appId: number, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: Configuration): Promise<PublicActionDefinition> {
        const result = this.api.update(definitionId, appId, publicActionDefinitionPatch, _options);
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
    public archiveWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Archive a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param functionId 
     * @param appId 
     */
    public archive(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Delete a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     */
    public archiveByFunctionTypeWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveByFunctionTypeWithHttpInfo(definitionId, functionType, appId, _options);
        return result.toPromise();
    }

    /**
     * Delete a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     */
    public archiveByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archiveByFunctionType(definitionId, functionType, appId, _options);
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
    public createOrReplaceWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, body: string, _options?: Configuration): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
        const result = this.api.createOrReplaceWithHttpInfo(definitionId, functionType, functionId, appId, body, _options);
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
    public createOrReplace(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, body: string, _options?: Configuration): Promise<PublicActionFunctionIdentifier> {
        const result = this.api.createOrReplace(definitionId, functionType, functionId, appId, body, _options);
        return result.toPromise();
    }

    /**
     * Insert a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     * @param body 
     */
    public createOrReplaceByFunctionTypeWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, body: string, _options?: Configuration): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
        const result = this.api.createOrReplaceByFunctionTypeWithHttpInfo(definitionId, functionType, appId, body, _options);
        return result.toPromise();
    }

    /**
     * Insert a function for a definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     * @param body 
     */
    public createOrReplaceByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, body: string, _options?: Configuration): Promise<PublicActionFunctionIdentifier> {
        const result = this.api.createOrReplaceByFunctionType(definitionId, functionType, appId, body, _options);
        return result.toPromise();
    }

    /**
     * Get all functions by a type for a given definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     */
    public getByFunctionTypeWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Promise<HttpInfo<PublicActionFunction>> {
        const result = this.api.getByFunctionTypeWithHttpInfo(definitionId, functionType, appId, _options);
        return result.toPromise();
    }

    /**
     * Get all functions by a type for a given definition
     * @param definitionId 
     * @param functionType 
     * @param appId 
     */
    public getByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Promise<PublicActionFunction> {
        const result = this.api.getByFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    }

    /**
     * Get a function for a given definition
     * @param definitionId 
     * @param functionType 
     * @param functionId 
     * @param appId 
     */
    public getByIdWithHttpInfo(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Promise<HttpInfo<PublicActionFunction>> {
        const result = this.api.getByIdWithHttpInfo(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Get a function for a given definition
     * @param definitionId 
     * @param functionType 
     * @param functionId 
     * @param appId 
     */
    public getById(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', functionId: string, appId: number, _options?: Configuration): Promise<PublicActionFunction> {
        const result = this.api.getById(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Get all functions for a given definition
     * @param definitionId 
     * @param appId 
     */
    public getPageWithHttpInfo(definitionId: string, appId: number, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicActionFunctionIdentifierNoPaging>> {
        const result = this.api.getPageWithHttpInfo(definitionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Get all functions for a given definition
     * @param definitionId 
     * @param appId 
     */
    public getPage(definitionId: string, appId: number, _options?: Configuration): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
        const result = this.api.getPage(definitionId, appId, _options);
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
     * Gets a revision for a given definition by revision id
     * @param definitionId 
     * @param revisionId 
     * @param appId 
     */
    public getByIdWithHttpInfo(definitionId: string, revisionId: string, appId: number, _options?: Configuration): Promise<HttpInfo<PublicActionRevision>> {
        const result = this.api.getByIdWithHttpInfo(definitionId, revisionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Gets a revision for a given definition by revision id
     * @param definitionId 
     * @param revisionId 
     * @param appId 
     */
    public getById(definitionId: string, revisionId: string, appId: number, _options?: Configuration): Promise<PublicActionRevision> {
        const result = this.api.getById(definitionId, revisionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Get all revisions for a given definition
     * @param definitionId 
     * @param appId 
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     */
    public getPageWithHttpInfo(definitionId: string, appId: number, limit?: number, after?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicActionRevisionForwardPaging>> {
        const result = this.api.getPageWithHttpInfo(definitionId, appId, limit, after, _options);
        return result.toPromise();
    }

    /**
     * Get all revisions for a given definition
     * @param definitionId 
     * @param appId 
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     */
    public getPage(definitionId: string, appId: number, limit?: number, after?: string, _options?: Configuration): Promise<CollectionResponsePublicActionRevisionForwardPaging> {
        const result = this.api.getPage(definitionId, appId, limit, after, _options);
        return result.toPromise();
    }


}



