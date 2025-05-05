import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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
     * The ID of the action execution.
     * Defaults to: undefined
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
     * Complete a specific blocked action execution by ID.
     * Completes a callback
     * @param param the request object
     */
    public completeWithHttpInfo(param: CallbacksApiCompleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.completeWithHttpInfo(param.callbackId, param.callbackCompletionRequest,  options).toPromise();
    }

    /**
     * Complete a specific blocked action execution by ID.
     * Completes a callback
     * @param param the request object
     */
    public complete(param: CallbacksApiCompleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.complete(param.callbackId, param.callbackCompletionRequest,  options).toPromise();
    }

    /**
     * Complete a batch of blocked action executions.
     * Complete a batch of callbacks
     * @param param the request object
     */
    public completeBatchWithHttpInfo(param: CallbacksApiCompleteBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.completeBatchWithHttpInfo(param.batchInputCallbackCompletionBatchRequest,  options).toPromise();
    }

    /**
     * Complete a batch of blocked action executions.
     * Complete a batch of callbacks
     * @param param the request object
     */
    public completeBatch(param: CallbacksApiCompleteBatchRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.completeBatch(param.batchInputCallbackCompletionBatchRequest,  options).toPromise();
    }

}

import { ObservableDefinitionsApi } from "./ObservableAPI";
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";

export interface DefinitionsApiArchiveRequest {
    /**
     * The ID of the custom action definition.
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApiarchive
     */
    definitionId: string
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApiarchive
     */
    appId: number
}

export interface DefinitionsApiCreateRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
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
     * The ID of the custom action.
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApigetById
     */
    definitionId: string
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApigetById
     */
    appId: number
    /**
     * Whether to return only results that have been archived.
     * Defaults to: false
     * @type boolean
     * @memberof DefinitionsApigetById
     */
    archived?: boolean
}

export interface DefinitionsApiGetPageRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApigetPage
     */
    appId: number
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApigetPage
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApigetPage
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: false
     * @type boolean
     * @memberof DefinitionsApigetPage
     */
    archived?: boolean
}

export interface DefinitionsApiUpdateRequest {
    /**
     * The ID of the custom action definition.
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApiupdate
     */
    definitionId: string
    /**
     * The ID of the app.
     * Defaults to: undefined
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
     * Delete an action definition by ID.
     * Delete an action definition
     * @param param the request object
     */
    public archiveWithHttpInfo(param: DefinitionsApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.definitionId, param.appId,  options).toPromise();
    }

    /**
     * Delete an action definition by ID.
     * Delete an action definition
     * @param param the request object
     */
    public archive(param: DefinitionsApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.definitionId, param.appId,  options).toPromise();
    }

    /**
     * Create a new custom workflow action.
     * Create a new custom action definition
     * @param param the request object
     */
    public createWithHttpInfo(param: DefinitionsApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionDefinition>> {
        return this.api.createWithHttpInfo(param.appId, param.publicActionDefinitionEgg,  options).toPromise();
    }

    /**
     * Create a new custom workflow action.
     * Create a new custom action definition
     * @param param the request object
     */
    public create(param: DefinitionsApiCreateRequest, options?: ConfigurationOptions): Promise<PublicActionDefinition> {
        return this.api.create(param.appId, param.publicActionDefinitionEgg,  options).toPromise();
    }

    /**
     * Retrieve a custom workflow action definition by ID.
     * Retrieve a custom action definition
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: DefinitionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionDefinition>> {
        return this.api.getByIdWithHttpInfo(param.definitionId, param.appId, param.archived,  options).toPromise();
    }

    /**
     * Retrieve a custom workflow action definition by ID.
     * Retrieve a custom action definition
     * @param param the request object
     */
    public getById(param: DefinitionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicActionDefinition> {
        return this.api.getById(param.definitionId, param.appId, param.archived,  options).toPromise();
    }

    /**
     * Retrieve custom workflow action definitions by app ID.
     * Retrieve custom action definitions
     * @param param the request object
     */
    public getPageWithHttpInfo(param: DefinitionsApiGetPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.appId, param.limit, param.after, param.archived,  options).toPromise();
    }

    /**
     * Retrieve custom workflow action definitions by app ID.
     * Retrieve custom action definitions
     * @param param the request object
     */
    public getPage(param: DefinitionsApiGetPageRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicActionDefinitionForwardPaging> {
        return this.api.getPage(param.appId, param.limit, param.after, param.archived,  options).toPromise();
    }

    /**
     * Update an existing action definition by ID.
     * Update an existing action definition
     * @param param the request object
     */
    public updateWithHttpInfo(param: DefinitionsApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionDefinition>> {
        return this.api.updateWithHttpInfo(param.definitionId, param.appId, param.publicActionDefinitionPatch,  options).toPromise();
    }

    /**
     * Update an existing action definition by ID.
     * Update an existing action definition
     * @param param the request object
     */
    public update(param: DefinitionsApiUpdateRequest, options?: ConfigurationOptions): Promise<PublicActionDefinition> {
        return this.api.update(param.definitionId, param.appId, param.publicActionDefinitionPatch,  options).toPromise();
    }

}

import { ObservableFunctionsApi } from "./ObservableAPI";
import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi";

export interface FunctionsApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApiarchive
     */
    definitionId: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApiarchive
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApiarchive
     */
    functionId: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApiarchive
     */
    appId: number
}

export interface FunctionsApiArchiveByFunctionTypeRequest {
    /**
     * The ID of the definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApiarchiveByFunctionType
     */
    definitionId: string
    /**
     * The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * Defaults to: undefined
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApiarchiveByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApiarchiveByFunctionType
     */
    appId: number
}

export interface FunctionsApiCreateOrReplaceRequest {
    /**
     * The ID of the definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApicreateOrReplace
     */
    definitionId: string
    /**
     * The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * Defaults to: undefined
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApicreateOrReplace
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * The ID of the function.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApicreateOrReplace
     */
    functionId: string
    /**
     * The ID of the app.
     * Defaults to: undefined
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
     * The ID of the definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    definitionId: string
    /**
     * The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * Defaults to: undefined
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * The ID of the app.
     * Defaults to: undefined
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
     * The ID of the definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApigetByFunctionType
     */
    definitionId: string
    /**
     * The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * Defaults to: undefined
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApigetByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApigetByFunctionType
     */
    appId: number
}

export interface FunctionsApiGetByIdRequest {
    /**
     * The ID of the definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApigetById
     */
    definitionId: string
    /**
     * The type of function. Can be &#x60;PRE_ACTION_EXECUTION&#x60;, &#x60;PRE_FETCH_OPTIONS&#x60;, &#x60;POST_FETCH_OPTIONS&#x60;, &#x60;POST_ACTION_EXECUTION&#x60;.
     * Defaults to: undefined
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof FunctionsApigetById
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * The ID of the function.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApigetById
     */
    functionId: string
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApigetById
     */
    appId: number
}

export interface FunctionsApiGetPageRequest {
    /**
     * The ID of the definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApigetPage
     */
    definitionId: string
    /**
     * The ID of the app.
     * Defaults to: undefined
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
    public archiveWithHttpInfo(param: FunctionsApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Archive a function for a definition
     * @param param the request object
     */
    public archive(param: FunctionsApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Delete a function within a given definition.
     * Delete a function for a definition
     * @param param the request object
     */
    public archiveByFunctionTypeWithHttpInfo(param: FunctionsApiArchiveByFunctionTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveByFunctionTypeWithHttpInfo(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Delete a function within a given definition.
     * Delete a function for a definition
     * @param param the request object
     */
    public archiveByFunctionType(param: FunctionsApiArchiveByFunctionTypeRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveByFunctionType(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Update a function for a given definition by ID.
     * Update a function for a definition
     * @param param the request object
     */
    public createOrReplaceWithHttpInfo(param: FunctionsApiCreateOrReplaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
        return this.api.createOrReplaceWithHttpInfo(param.definitionId, param.functionType, param.functionId, param.appId, param.body,  options).toPromise();
    }

    /**
     * Update a function for a given definition by ID.
     * Update a function for a definition
     * @param param the request object
     */
    public createOrReplace(param: FunctionsApiCreateOrReplaceRequest, options?: ConfigurationOptions): Promise<PublicActionFunctionIdentifier> {
        return this.api.createOrReplace(param.definitionId, param.functionType, param.functionId, param.appId, param.body,  options).toPromise();
    }

    /**
     * Add a function for a given definition.
     * Insert a function for a definition
     * @param param the request object
     */
    public createOrReplaceByFunctionTypeWithHttpInfo(param: FunctionsApiCreateOrReplaceByFunctionTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
        return this.api.createOrReplaceByFunctionTypeWithHttpInfo(param.definitionId, param.functionType, param.appId, param.body,  options).toPromise();
    }

    /**
     * Add a function for a given definition.
     * Insert a function for a definition
     * @param param the request object
     */
    public createOrReplaceByFunctionType(param: FunctionsApiCreateOrReplaceByFunctionTypeRequest, options?: ConfigurationOptions): Promise<PublicActionFunctionIdentifier> {
        return this.api.createOrReplaceByFunctionType(param.definitionId, param.functionType, param.appId, param.body,  options).toPromise();
    }

    /**
     * Retrieve functions by a type for a given definition
     * @param param the request object
     */
    public getByFunctionTypeWithHttpInfo(param: FunctionsApiGetByFunctionTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionFunction>> {
        return this.api.getByFunctionTypeWithHttpInfo(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Retrieve functions by a type for a given definition
     * @param param the request object
     */
    public getByFunctionType(param: FunctionsApiGetByFunctionTypeRequest, options?: ConfigurationOptions): Promise<PublicActionFunction> {
        return this.api.getByFunctionType(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Retrieve a specific function from a given definition.
     * Retrieve a function from a given definition
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: FunctionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionFunction>> {
        return this.api.getByIdWithHttpInfo(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Retrieve a specific function from a given definition.
     * Retrieve a function from a given definition
     * @param param the request object
     */
    public getById(param: FunctionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicActionFunction> {
        return this.api.getById(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Retrieve all functions included in a definition.
     * Retrieve functions for a given definition
     * @param param the request object
     */
    public getPageWithHttpInfo(param: FunctionsApiGetPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionFunctionIdentifierNoPaging>> {
        return this.api.getPageWithHttpInfo(param.definitionId, param.appId,  options).toPromise();
    }

    /**
     * Retrieve all functions included in a definition.
     * Retrieve functions for a given definition
     * @param param the request object
     */
    public getPage(param: FunctionsApiGetPageRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
        return this.api.getPage(param.definitionId, param.appId,  options).toPromise();
    }

}

import { ObservableRevisionsApi } from "./ObservableAPI";
import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor} from "../apis/RevisionsApi";

export interface RevisionsApiGetByIdRequest {
    /**
     * The ID of the definition.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetById
     */
    definitionId: string
    /**
     * The ID of the revision.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetById
     */
    revisionId: string
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof RevisionsApigetById
     */
    appId: number
}

export interface RevisionsApiGetPageRequest {
    /**
     * The ID of the definition.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetPage
     */
    definitionId: string
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof RevisionsApigetPage
     */
    appId: number
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof RevisionsApigetPage
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
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
     * Retrieve a specific revision of a definition by revision ID.
     * Retrieve a specific revision of a definition
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: RevisionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionRevision>> {
        return this.api.getByIdWithHttpInfo(param.definitionId, param.revisionId, param.appId,  options).toPromise();
    }

    /**
     * Retrieve a specific revision of a definition by revision ID.
     * Retrieve a specific revision of a definition
     * @param param the request object
     */
    public getById(param: RevisionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicActionRevision> {
        return this.api.getById(param.definitionId, param.revisionId, param.appId,  options).toPromise();
    }

    /**
     * Retrieve the versions of a definition by ID.
     * Retrieve revisions for a given definition
     * @param param the request object
     */
    public getPageWithHttpInfo(param: RevisionsApiGetPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionRevisionForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.definitionId, param.appId, param.limit, param.after,  options).toPromise();
    }

    /**
     * Retrieve the versions of a definition by ID.
     * Retrieve revisions for a given definition
     * @param param the request object
     */
    public getPage(param: RevisionsApiGetPageRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicActionRevisionForwardPaging> {
        return this.api.getPage(param.definitionId, param.appId, param.limit, param.after,  options).toPromise();
    }

}
