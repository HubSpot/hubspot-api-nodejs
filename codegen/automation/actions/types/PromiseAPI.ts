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
import { ObservablePublicActionDefinitionsApi } from './ObservableAPI';

import { PublicActionDefinitionsApiRequestFactory, PublicActionDefinitionsApiResponseProcessor} from "../apis/PublicActionDefinitionsApi";
export class PromisePublicActionDefinitionsApi {
    private api: ObservablePublicActionDefinitionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicActionDefinitionsApiRequestFactory,
        responseProcessor?: PublicActionDefinitionsApiResponseProcessor
    ) {
        this.api = new ObservablePublicActionDefinitionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param definitionId 
     * @param appId 
     */
    public archive(definitionId: string, appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(definitionId, appId, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     * @param publicActionDefinitionEgg 
     */
    public create(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: Configuration): Promise<PublicActionDefinition> {
        const result = this.api.create(appId, publicActionDefinitionEgg, _options);
        return result.toPromise();
    }

    /**
     * @param definitionId 
     * @param appId 
     * @param archived Whether to return only results that have been archived.
     */
    public getById(definitionId: string, appId: number, archived?: boolean, _options?: Configuration): Promise<PublicActionDefinition> {
        const result = this.api.getById(definitionId, appId, archived, _options);
        return result.toPromise();
    }

    /**
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
     * @param definitionId 
     * @param appId 
     * @param publicActionDefinitionPatch 
     */
    public update(definitionId: string, appId: number, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: Configuration): Promise<PublicActionDefinition> {
        const result = this.api.update(definitionId, appId, publicActionDefinitionPatch, _options);
        return result.toPromise();
    }


}



import { ObservablePublicActionFunctionsApi } from './ObservableAPI';

import { PublicActionFunctionsApiRequestFactory, PublicActionFunctionsApiResponseProcessor} from "../apis/PublicActionFunctionsApi";
export class PromisePublicActionFunctionsApi {
    private api: ObservablePublicActionFunctionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicActionFunctionsApiRequestFactory,
        responseProcessor?: PublicActionFunctionsApiResponseProcessor
    ) {
        this.api = new ObservablePublicActionFunctionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
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
     * @param definitionId 
     * @param functionType 
     * @param appId 
     */
    public archiveByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archiveByFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    }

    /**
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
     * @param definitionId 
     * @param functionType 
     * @param appId 
     */
    public getByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION', appId: number, _options?: Configuration): Promise<PublicActionFunction> {
        const result = this.api.getByFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    }

    /**
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
     * @param definitionId 
     * @param appId 
     */
    public getPage(definitionId: string, appId: number, _options?: Configuration): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
        const result = this.api.getPage(definitionId, appId, _options);
        return result.toPromise();
    }


}



import { ObservablePublicActionRevisionsApi } from './ObservableAPI';

import { PublicActionRevisionsApiRequestFactory, PublicActionRevisionsApiResponseProcessor} from "../apis/PublicActionRevisionsApi";
export class PromisePublicActionRevisionsApi {
    private api: ObservablePublicActionRevisionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicActionRevisionsApiRequestFactory,
        responseProcessor?: PublicActionRevisionsApiResponseProcessor
    ) {
        this.api = new ObservablePublicActionRevisionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param definitionId 
     * @param revisionId 
     * @param appId 
     */
    public getById(definitionId: string, revisionId: string, appId: number, _options?: Configuration): Promise<PublicActionRevision> {
        const result = this.api.getById(definitionId, revisionId, appId, _options);
        return result.toPromise();
    }

    /**
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



import { ObservablePublicCallbacksApi } from './ObservableAPI';

import { PublicCallbacksApiRequestFactory, PublicCallbacksApiResponseProcessor} from "../apis/PublicCallbacksApi";
export class PromisePublicCallbacksApi {
    private api: ObservablePublicCallbacksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicCallbacksApiRequestFactory,
        responseProcessor?: PublicCallbacksApiResponseProcessor
    ) {
        this.api = new ObservablePublicCallbacksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param callbackId 
     * @param callbackCompletionRequest 
     */
    public complete(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.complete(callbackId, callbackCompletionRequest, _options);
        return result.toPromise();
    }

    /**
     * @param batchInputCallbackCompletionBatchRequest 
     */
    public completeBatch(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: Configuration): Promise<void> {
        const result = this.api.completeBatch(batchInputCallbackCompletionBatchRequest, _options);
        return result.toPromise();
    }


}



