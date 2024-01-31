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

import { ObservableCallbacksApi } from "./ObservableAPI";
import { CallbacksApiRequestFactory, CallbacksApiResponseProcessor} from "../apis/CallbacksApi";

export interface CallbacksApiCompleteRequest {
    /**
     * 
     * @type string
     * @memberof CallbacksApicomplete
     */
    callbackId: string
    /**
     * 
     * @type CallbackCompletionRequest
     * @memberof CallbacksApicomplete
     */
    callbackCompletionRequest: CallbackCompletionRequest
}

export interface CallbacksApiCompleteBatchRequest {
    /**
     * 
     * @type BatchInputCallbackCompletionBatchRequest
     * @memberof CallbacksApicompleteBatch
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
    public completeWithHttpInfo(param: CallbacksApiCompleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.completeWithHttpInfo(param.callbackId, param.callbackCompletionRequest,  options).toPromise();
    }

    /**
     * Completes a single callback
     * @param param the request object
     */
    public complete(param: CallbacksApiCompleteRequest, options?: Configuration): Promise<void> {
        return this.api.complete(param.callbackId, param.callbackCompletionRequest,  options).toPromise();
    }

    /**
     * Completes a batch of callbacks
     * @param param the request object
     */
    public completeBatchWithHttpInfo(param: CallbacksApiCompleteBatchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.completeBatchWithHttpInfo(param.batchInputCallbackCompletionBatchRequest,  options).toPromise();
    }

    /**
     * Completes a batch of callbacks
     * @param param the request object
     */
    public completeBatch(param: CallbacksApiCompleteBatchRequest, options?: Configuration): Promise<void> {
        return this.api.completeBatch(param.batchInputCallbackCompletionBatchRequest,  options).toPromise();
    }

}

import { ObservableDefinitionsApi } from "./ObservableAPI";
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";

export interface DefinitionsApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApiarchive
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof DefinitionsApiarchive
     */
    appId: number
}

export interface DefinitionsApiCreateRequest {
    /**
     * 
     * @type number
     * @memberof DefinitionsApicreate
     */
    appId: number
    /**
     * 
     * @type PublicActionDefinitionEgg
     * @memberof DefinitionsApicreate
     */
    publicActionDefinitionEgg: PublicActionDefinitionEgg
}

export interface DefinitionsApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApigetById
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof DefinitionsApigetById
     */
    appId: number
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof DefinitionsApigetById
     */
    archived?: boolean
}

export interface DefinitionsApiGetPageRequest {
    /**
     * 
     * @type number
     * @memberof DefinitionsApigetPage
     */
    appId: number
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof DefinitionsApigetPage
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof DefinitionsApigetPage
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof DefinitionsApigetPage
     */
    archived?: boolean
}

export interface DefinitionsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApiupdate
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof DefinitionsApiupdate
     */
    appId: number
    /**
     * 
     * @type PublicActionDefinitionPatch
     * @memberof DefinitionsApiupdate
     */
    publicActionDefinitionPatch: PublicActionDefinitionPatch
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
    public archiveWithHttpInfo(param: DefinitionsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.definitionId, param.appId,  options).toPromise();
    }

    /**
     * Archive an extension definition
     * @param param the request object
     */
    public archive(param: DefinitionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.definitionId, param.appId,  options).toPromise();
    }

    /**
     * Create a new extension definition
     * @param param the request object
     */
    public createWithHttpInfo(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<HttpInfo<PublicActionDefinition>> {
        return this.api.createWithHttpInfo(param.appId, param.publicActionDefinitionEgg,  options).toPromise();
    }

    /**
     * Create a new extension definition
     * @param param the request object
     */
    public create(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<PublicActionDefinition> {
        return this.api.create(param.appId, param.publicActionDefinitionEgg,  options).toPromise();
    }

    /**
     * Get extension definition by Id
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: DefinitionsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicActionDefinition>> {
        return this.api.getByIdWithHttpInfo(param.definitionId, param.appId, param.archived,  options).toPromise();
    }

    /**
     * Get extension definition by Id
     * @param param the request object
     */
    public getById(param: DefinitionsApiGetByIdRequest, options?: Configuration): Promise<PublicActionDefinition> {
        return this.api.getById(param.definitionId, param.appId, param.archived,  options).toPromise();
    }

    /**
     * Get paged extension definitions
     * @param param the request object
     */
    public getPageWithHttpInfo(param: DefinitionsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.appId, param.limit, param.after, param.archived,  options).toPromise();
    }

    /**
     * Get paged extension definitions
     * @param param the request object
     */
    public getPage(param: DefinitionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicActionDefinitionForwardPaging> {
        return this.api.getPage(param.appId, param.limit, param.after, param.archived,  options).toPromise();
    }

    /**
     * Patch an existing extension definition
     * @param param the request object
     */
    public updateWithHttpInfo(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<PublicActionDefinition>> {
        return this.api.updateWithHttpInfo(param.definitionId, param.appId, param.publicActionDefinitionPatch,  options).toPromise();
    }

    /**
     * Patch an existing extension definition
     * @param param the request object
     */
    public update(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<PublicActionDefinition> {
        return this.api.update(param.definitionId, param.appId, param.publicActionDefinitionPatch,  options).toPromise();
    }

}

import { ObservableFunctionsApi } from "./ObservableAPI";
import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi";

export interface FunctionsApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApiarchive
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApiarchive
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type string
     * @memberof FunctionsApiarchive
     */
    functionId: string
    /**
     * 
     * @type number
     * @memberof FunctionsApiarchive
     */
    appId: number
}

export interface FunctionsApiArchiveByFunctionTypeRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApiarchiveByFunctionType
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApiarchiveByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type number
     * @memberof FunctionsApiarchiveByFunctionType
     */
    appId: number
}

export interface FunctionsApiCreateOrReplaceRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApicreateOrReplace
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApicreateOrReplace
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type string
     * @memberof FunctionsApicreateOrReplace
     */
    functionId: string
    /**
     * 
     * @type number
     * @memberof FunctionsApicreateOrReplace
     */
    appId: number
    /**
     * 
     * @type string
     * @memberof FunctionsApicreateOrReplace
     */
    body: string
}

export interface FunctionsApiCreateOrReplaceByFunctionTypeRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type number
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    appId: number
    /**
     * 
     * @type string
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    body: string
}

export interface FunctionsApiGetByFunctionTypeRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApigetByFunctionType
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApigetByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type number
     * @memberof FunctionsApigetByFunctionType
     */
    appId: number
}

export interface FunctionsApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApigetById
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApigetById
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type string
     * @memberof FunctionsApigetById
     */
    functionId: string
    /**
     * 
     * @type number
     * @memberof FunctionsApigetById
     */
    appId: number
}

export interface FunctionsApiGetPageRequest {
    /**
     * 
     * @type string
     * @memberof FunctionsApigetPage
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof FunctionsApigetPage
     */
    appId: number
}

export class ObjectFunctionsApi {
    private api: ObservableFunctionsApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsApiRequestFactory, responseProcessor?: FunctionsApiResponseProcessor) {
        this.api = new ObservableFunctionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a function for a definition
     * @param param the request object
     */
    public archiveWithHttpInfo(param: FunctionsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Archive a function for a definition
     * @param param the request object
     */
    public archive(param: FunctionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Delete a function for a definition
     * @param param the request object
     */
    public archiveByFunctionTypeWithHttpInfo(param: FunctionsApiArchiveByFunctionTypeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveByFunctionTypeWithHttpInfo(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Delete a function for a definition
     * @param param the request object
     */
    public archiveByFunctionType(param: FunctionsApiArchiveByFunctionTypeRequest, options?: Configuration): Promise<void> {
        return this.api.archiveByFunctionType(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Insert a function for a definition
     * @param param the request object
     */
    public createOrReplaceWithHttpInfo(param: FunctionsApiCreateOrReplaceRequest, options?: Configuration): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
        return this.api.createOrReplaceWithHttpInfo(param.definitionId, param.functionType, param.functionId, param.appId, param.body,  options).toPromise();
    }

    /**
     * Insert a function for a definition
     * @param param the request object
     */
    public createOrReplace(param: FunctionsApiCreateOrReplaceRequest, options?: Configuration): Promise<PublicActionFunctionIdentifier> {
        return this.api.createOrReplace(param.definitionId, param.functionType, param.functionId, param.appId, param.body,  options).toPromise();
    }

    /**
     * Insert a function for a definition
     * @param param the request object
     */
    public createOrReplaceByFunctionTypeWithHttpInfo(param: FunctionsApiCreateOrReplaceByFunctionTypeRequest, options?: Configuration): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
        return this.api.createOrReplaceByFunctionTypeWithHttpInfo(param.definitionId, param.functionType, param.appId, param.body,  options).toPromise();
    }

    /**
     * Insert a function for a definition
     * @param param the request object
     */
    public createOrReplaceByFunctionType(param: FunctionsApiCreateOrReplaceByFunctionTypeRequest, options?: Configuration): Promise<PublicActionFunctionIdentifier> {
        return this.api.createOrReplaceByFunctionType(param.definitionId, param.functionType, param.appId, param.body,  options).toPromise();
    }

    /**
     * Get all functions by a type for a given definition
     * @param param the request object
     */
    public getByFunctionTypeWithHttpInfo(param: FunctionsApiGetByFunctionTypeRequest, options?: Configuration): Promise<HttpInfo<PublicActionFunction>> {
        return this.api.getByFunctionTypeWithHttpInfo(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Get all functions by a type for a given definition
     * @param param the request object
     */
    public getByFunctionType(param: FunctionsApiGetByFunctionTypeRequest, options?: Configuration): Promise<PublicActionFunction> {
        return this.api.getByFunctionType(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Get a function for a given definition
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: FunctionsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicActionFunction>> {
        return this.api.getByIdWithHttpInfo(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Get a function for a given definition
     * @param param the request object
     */
    public getById(param: FunctionsApiGetByIdRequest, options?: Configuration): Promise<PublicActionFunction> {
        return this.api.getById(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Get all functions for a given definition
     * @param param the request object
     */
    public getPageWithHttpInfo(param: FunctionsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicActionFunctionIdentifierNoPaging>> {
        return this.api.getPageWithHttpInfo(param.definitionId, param.appId,  options).toPromise();
    }

    /**
     * Get all functions for a given definition
     * @param param the request object
     */
    public getPage(param: FunctionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
        return this.api.getPage(param.definitionId, param.appId,  options).toPromise();
    }

}

import { ObservableRevisionsApi } from "./ObservableAPI";
import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor} from "../apis/RevisionsApi";

export interface RevisionsApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof RevisionsApigetById
     */
    definitionId: string
    /**
     * 
     * @type string
     * @memberof RevisionsApigetById
     */
    revisionId: string
    /**
     * 
     * @type number
     * @memberof RevisionsApigetById
     */
    appId: number
}

export interface RevisionsApiGetPageRequest {
    /**
     * 
     * @type string
     * @memberof RevisionsApigetPage
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof RevisionsApigetPage
     */
    appId: number
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof RevisionsApigetPage
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof RevisionsApigetPage
     */
    after?: string
}

export class ObjectRevisionsApi {
    private api: ObservableRevisionsApi

    public constructor(configuration: Configuration, requestFactory?: RevisionsApiRequestFactory, responseProcessor?: RevisionsApiResponseProcessor) {
        this.api = new ObservableRevisionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a revision for a given definition by revision id
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: RevisionsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicActionRevision>> {
        return this.api.getByIdWithHttpInfo(param.definitionId, param.revisionId, param.appId,  options).toPromise();
    }

    /**
     * Gets a revision for a given definition by revision id
     * @param param the request object
     */
    public getById(param: RevisionsApiGetByIdRequest, options?: Configuration): Promise<PublicActionRevision> {
        return this.api.getById(param.definitionId, param.revisionId, param.appId,  options).toPromise();
    }

    /**
     * Get all revisions for a given definition
     * @param param the request object
     */
    public getPageWithHttpInfo(param: RevisionsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicActionRevisionForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.definitionId, param.appId, param.limit, param.after,  options).toPromise();
    }

    /**
     * Get all revisions for a given definition
     * @param param the request object
     */
    public getPage(param: RevisionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicActionRevisionForwardPaging> {
        return this.api.getPage(param.definitionId, param.appId, param.limit, param.after,  options).toPromise();
    }

}
