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

import { ObservableCallbacksApi } from "./ObservableAPI";
import { CallbacksApiRequestFactory, CallbacksApiResponseProcessor} from "../apis/CallbacksApi";

export interface CallbacksApiPostAutomationV4ActionsCallbacksCallbackIdCompleteRequest {
    /**
     * 
     * @type string
     * @memberof CallbacksApipostAutomationV4ActionsCallbacksCallbackIdComplete
     */
    callbackId: string
    /**
     * 
     * @type CallbackCompletionRequest
     * @memberof CallbacksApipostAutomationV4ActionsCallbacksCallbackIdComplete
     */
    callbackCompletionRequest: CallbackCompletionRequest
}

export interface CallbacksApiPostAutomationV4ActionsCallbacksCompleteRequest {
    /**
     * 
     * @type BatchInputCallbackCompletionBatchRequest
     * @memberof CallbacksApipostAutomationV4ActionsCallbacksComplete
     */
    batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest
}

export class ObjectCallbacksApi {
    private api: ObservableCallbacksApi

    public constructor(configuration: Configuration, requestFactory?: CallbacksApiRequestFactory, responseProcessor?: CallbacksApiResponseProcessor) {
        this.api = new ObservableCallbacksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Completes a single callback
     * @param param the request object
     */
    public postAutomationV4ActionsCallbacksCallbackIdComplete(param: CallbacksApiPostAutomationV4ActionsCallbacksCallbackIdCompleteRequest, options?: Configuration): Promise<void> {
        return this.api.postAutomationV4ActionsCallbacksCallbackIdComplete(param.callbackId, param.callbackCompletionRequest,  options).toPromise();
    }

    /**
     * Completes a batch of callbacks
     * @param param the request object
     */
    public postAutomationV4ActionsCallbacksComplete(param: CallbacksApiPostAutomationV4ActionsCallbacksCompleteRequest, options?: Configuration): Promise<void> {
        return this.api.postAutomationV4ActionsCallbacksComplete(param.batchInputCallbackCompletionBatchRequest,  options).toPromise();
    }

}

import { ObservableDefinitionsApi } from "./ObservableAPI";
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";

export interface DefinitionsApiDeleteAutomationV4ActionsAppIdDefinitionIdRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApideleteAutomationV4ActionsAppIdDefinitionId
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof DefinitionsApideleteAutomationV4ActionsAppIdDefinitionId
     */
    appId: number
}

export interface DefinitionsApiGetAutomationV4ActionsAppIdRequest {
    /**
     * 
     * @type number
     * @memberof DefinitionsApigetAutomationV4ActionsAppId
     */
    appId: number
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof DefinitionsApigetAutomationV4ActionsAppId
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof DefinitionsApigetAutomationV4ActionsAppId
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof DefinitionsApigetAutomationV4ActionsAppId
     */
    archived?: boolean
}

export interface DefinitionsApiGetAutomationV4ActionsAppIdDefinitionIdRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApigetAutomationV4ActionsAppIdDefinitionId
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof DefinitionsApigetAutomationV4ActionsAppIdDefinitionId
     */
    appId: number
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof DefinitionsApigetAutomationV4ActionsAppIdDefinitionId
     */
    archived?: boolean
}

export interface DefinitionsApiPatchAutomationV4ActionsAppIdDefinitionIdRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApipatchAutomationV4ActionsAppIdDefinitionId
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof DefinitionsApipatchAutomationV4ActionsAppIdDefinitionId
     */
    appId: number
    /**
     * 
     * @type PublicActionDefinitionPatch
     * @memberof DefinitionsApipatchAutomationV4ActionsAppIdDefinitionId
     */
    publicActionDefinitionPatch: PublicActionDefinitionPatch
}

export interface DefinitionsApiPostAutomationV4ActionsAppIdRequest {
    /**
     * 
     * @type number
     * @memberof DefinitionsApipostAutomationV4ActionsAppId
     */
    appId: number
    /**
     * 
     * @type PublicActionDefinitionEgg
     * @memberof DefinitionsApipostAutomationV4ActionsAppId
     */
    publicActionDefinitionEgg: PublicActionDefinitionEgg
}

export class ObjectDefinitionsApi {
    private api: ObservableDefinitionsApi

    public constructor(configuration: Configuration, requestFactory?: DefinitionsApiRequestFactory, responseProcessor?: DefinitionsApiResponseProcessor) {
        this.api = new ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive an extension definition
     * @param param the request object
     */
    public deleteAutomationV4ActionsAppIdDefinitionId(param: DefinitionsApiDeleteAutomationV4ActionsAppIdDefinitionIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAutomationV4ActionsAppIdDefinitionId(param.definitionId, param.appId,  options).toPromise();
    }

    /**
     * Get paged extension definitions
     * @param param the request object
     */
    public getAutomationV4ActionsAppId(param: DefinitionsApiGetAutomationV4ActionsAppIdRequest, options?: Configuration): Promise<CollectionResponsePublicActionDefinitionForwardPaging> {
        return this.api.getAutomationV4ActionsAppId(param.appId, param.limit, param.after, param.archived,  options).toPromise();
    }

    /**
     * Get extension definition by Id
     * @param param the request object
     */
    public getAutomationV4ActionsAppIdDefinitionId(param: DefinitionsApiGetAutomationV4ActionsAppIdDefinitionIdRequest, options?: Configuration): Promise<PublicActionDefinition> {
        return this.api.getAutomationV4ActionsAppIdDefinitionId(param.definitionId, param.appId, param.archived,  options).toPromise();
    }

    /**
     * Patch an existing extension definition
     * @param param the request object
     */
    public patchAutomationV4ActionsAppIdDefinitionId(param: DefinitionsApiPatchAutomationV4ActionsAppIdDefinitionIdRequest, options?: Configuration): Promise<PublicActionDefinition> {
        return this.api.patchAutomationV4ActionsAppIdDefinitionId(param.definitionId, param.appId, param.publicActionDefinitionPatch,  options).toPromise();
    }

    /**
     * Create a new extension definition
     * @param param the request object
     */
    public postAutomationV4ActionsAppId(param: DefinitionsApiPostAutomationV4ActionsAppIdRequest, options?: Configuration): Promise<PublicActionDefinition> {
        return this.api.postAutomationV4ActionsAppId(param.appId, param.publicActionDefinitionEgg,  options).toPromise();
    }

}

import { ObservableFunctionsApi } from "./ObservableAPI";
import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi";

export interface FunctionsApiDeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApideleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApideleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type number
     * @memberof FunctionsApideleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     */
    appId: number
}

export interface FunctionsApiDeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApideleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApideleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type string
     * @memberof FunctionsApideleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    functionId: string
    /**
     * 
     * @type number
     * @memberof FunctionsApideleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    appId: number
}

export interface FunctionsApiGetAutomationV4ActionsAppIdDefinitionIdFunctionsRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApigetAutomationV4ActionsAppIdDefinitionIdFunctions
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof FunctionsApigetAutomationV4ActionsAppIdDefinitionIdFunctions
     */
    appId: number
}

export interface FunctionsApiGetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApigetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApigetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type number
     * @memberof FunctionsApigetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     */
    appId: number
}

export interface FunctionsApiGetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApigetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApigetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type string
     * @memberof FunctionsApigetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    functionId: string
    /**
     * 
     * @type number
     * @memberof FunctionsApigetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    appId: number
}

export interface FunctionsApiPutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApiputAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApiputAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type number
     * @memberof FunctionsApiputAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     */
    appId: number
    /**
     * 
     * @type string
     * @memberof FunctionsApiputAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType
     */
    body: string
}

export interface FunctionsApiPutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApiputAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApiputAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type string
     * @memberof FunctionsApiputAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    functionId: string
    /**
     * 
     * @type number
     * @memberof FunctionsApiputAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    appId: number
    /**
     * 
     * @type string
     * @memberof FunctionsApiputAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId
     */
    body: string
}

export class ObjectFunctionsApi {
    private api: ObservableFunctionsApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsApiRequestFactory, responseProcessor?: FunctionsApiResponseProcessor) {
        this.api = new ObservableFunctionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a function for a definition
     * @param param the request object
     */
    public deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(param: FunctionsApiDeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Archive a function for a definition
     * @param param the request object
     */
    public deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(param: FunctionsApiDeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Get all functions for a given definition
     * @param param the request object
     */
    public getAutomationV4ActionsAppIdDefinitionIdFunctions(param: FunctionsApiGetAutomationV4ActionsAppIdDefinitionIdFunctionsRequest, options?: Configuration): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
        return this.api.getAutomationV4ActionsAppIdDefinitionIdFunctions(param.definitionId, param.appId,  options).toPromise();
    }

    /**
     * Get all functions by a type for a given definition
     * @param param the request object
     */
    public getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(param: FunctionsApiGetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeRequest, options?: Configuration): Promise<PublicActionFunction> {
        return this.api.getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Get a function for a given definition
     * @param param the request object
     */
    public getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(param: FunctionsApiGetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdRequest, options?: Configuration): Promise<PublicActionFunction> {
        return this.api.getAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Insert a function for a definition
     * @param param the request object
     */
    public putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(param: FunctionsApiPutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeRequest, options?: Configuration): Promise<PublicActionFunctionIdentifier> {
        return this.api.putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionType(param.definitionId, param.functionType, param.appId, param.body,  options).toPromise();
    }

    /**
     * Insert a function for a definition
     * @param param the request object
     */
    public putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(param: FunctionsApiPutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdRequest, options?: Configuration): Promise<PublicActionFunctionIdentifier> {
        return this.api.putAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionId(param.definitionId, param.functionType, param.functionId, param.appId, param.body,  options).toPromise();
    }

}

import { ObservableRevisionsApi } from "./ObservableAPI";
import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor} from "../apis/RevisionsApi";

export interface RevisionsApiGetAutomationV4ActionsAppIdDefinitionIdRevisionsRequest {
    /**
     * 
     * @type string
     * @memberof RevisionsApigetAutomationV4ActionsAppIdDefinitionIdRevisions
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof RevisionsApigetAutomationV4ActionsAppIdDefinitionIdRevisions
     */
    appId: number
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof RevisionsApigetAutomationV4ActionsAppIdDefinitionIdRevisions
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof RevisionsApigetAutomationV4ActionsAppIdDefinitionIdRevisions
     */
    after?: string
}

export interface RevisionsApiGetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdRequest {
    /**
     * 
     * @type string
     * @memberof RevisionsApigetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionId
     */
    definitionId: string
    /**
     * 
     * @type string
     * @memberof RevisionsApigetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionId
     */
    revisionId: string
    /**
     * 
     * @type number
     * @memberof RevisionsApigetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionId
     */
    appId: number
}

export class ObjectRevisionsApi {
    private api: ObservableRevisionsApi

    public constructor(configuration: Configuration, requestFactory?: RevisionsApiRequestFactory, responseProcessor?: RevisionsApiResponseProcessor) {
        this.api = new ObservableRevisionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all revisions for a given definition
     * @param param the request object
     */
    public getAutomationV4ActionsAppIdDefinitionIdRevisions(param: RevisionsApiGetAutomationV4ActionsAppIdDefinitionIdRevisionsRequest, options?: Configuration): Promise<CollectionResponsePublicActionRevisionForwardPaging> {
        return this.api.getAutomationV4ActionsAppIdDefinitionIdRevisions(param.definitionId, param.appId, param.limit, param.after,  options).toPromise();
    }

    /**
     * Gets a revision for a given definition by revision id
     * @param param the request object
     */
    public getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionId(param: RevisionsApiGetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdRequest, options?: Configuration): Promise<PublicActionRevision> {
        return this.api.getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionId(param.definitionId, param.revisionId, param.appId,  options).toPromise();
    }

}
