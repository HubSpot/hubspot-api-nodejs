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
import { PublicActionDefinitionRequiresObjectRequest } from '../models/PublicActionDefinitionRequiresObjectRequest';
import { PublicActionDefinitionRequiresObjectResponse } from '../models/PublicActionDefinitionRequiresObjectResponse';
import { PublicActionFunction } from '../models/PublicActionFunction';
import { PublicActionFunctionIdentifier } from '../models/PublicActionFunctionIdentifier';
import { PublicActionRevision } from '../models/PublicActionRevision';

import { ObservableCallbacksApi } from "./ObservableAPI";
import { CallbacksApiRequestFactory, CallbacksApiResponseProcessor} from "../apis/CallbacksApi";

export interface CallbacksApiCompleteRequest {
    /**
     * The unique identifier for the specific callback to complete.
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
     * The ID of the app associated with the action definition.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApiarchive
     */
    appId: number
    /**
     * The ID of the action definition to delete.
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApiarchive
     */
    definitionId: string
}

export interface DefinitionsApiAutomationV4ActionsAppIdDefinitionIdRequiresObjectRequest {
    /**
     * The ID of the app associated with the custom action definition.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApiautomationV4ActionsAppIdDefinitionIdRequiresObject
     */
    appId: number
    /**
     * The ID of the custom action definition.
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApiautomationV4ActionsAppIdDefinitionIdRequiresObject
     */
    definitionId: string
}

export interface DefinitionsApiAutomationV4ActionsAppIdDefinitionIdRequiresObject0Request {
    /**
     * The ID of the app associated with the custom action definition.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApiautomationV4ActionsAppIdDefinitionIdRequiresObject_1
     */
    appId: number
    /**
     * The ID of the custom action definition.
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApiautomationV4ActionsAppIdDefinitionIdRequiresObject_1
     */
    definitionId: string
    /**
     * 
     * @type PublicActionDefinitionRequiresObjectRequest
     * @memberof DefinitionsApiautomationV4ActionsAppIdDefinitionIdRequiresObject_1
     */
    publicActionDefinitionRequiresObjectRequest: PublicActionDefinitionRequiresObjectRequest
}

export interface DefinitionsApiCreateRequest {
    /**
     * The unique identifier for the app.
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
     * The ID of the app associated with the action definition.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApigetById
     */
    appId: number
    /**
     * The ID of the action definition to retrieve.
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApigetById
     */
    definitionId: string
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
     * The unique identifier for the app.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApigetPage
     */
    appId: number
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
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApigetPage
     */
    limit?: number
}

export interface DefinitionsApiUpdateRequest {
    /**
     * The ID of the app associated with the action definition.
     * Defaults to: undefined
     * @type number
     * @memberof DefinitionsApiupdate
     */
    appId: number
    /**
     * The ID of the action definition to update.
     * Defaults to: undefined
     * @type string
     * @memberof DefinitionsApiupdate
     */
    definitionId: string
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
        return this.api.archiveWithHttpInfo(param.appId, param.definitionId,  options).toPromise();
    }

    /**
     * Delete an action definition by ID.
     * Delete an action definition
     * @param param the request object
     */
    public archive(param: DefinitionsApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.appId, param.definitionId,  options).toPromise();
    }

    /**
     * Retrieve whether a custom action definition requires an object.
     * Retrieve the object requirement status for a custom action definition.
     * @param param the request object
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObjectWithHttpInfo(param: DefinitionsApiAutomationV4ActionsAppIdDefinitionIdRequiresObjectRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionDefinitionRequiresObjectResponse>> {
        return this.api.automationV4ActionsAppIdDefinitionIdRequiresObjectWithHttpInfo(param.appId, param.definitionId,  options).toPromise();
    }

    /**
     * Retrieve whether a custom action definition requires an object.
     * Retrieve the object requirement status for a custom action definition.
     * @param param the request object
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObject(param: DefinitionsApiAutomationV4ActionsAppIdDefinitionIdRequiresObjectRequest, options?: ConfigurationOptions): Promise<PublicActionDefinitionRequiresObjectResponse> {
        return this.api.automationV4ActionsAppIdDefinitionIdRequiresObject(param.appId, param.definitionId,  options).toPromise();
    }

    /**
     * Set whether a custom action definition requires an object.
     * Set the object requirement for a custom action definition.
     * @param param the request object
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObject_1WithHttpInfo(param: DefinitionsApiAutomationV4ActionsAppIdDefinitionIdRequiresObject0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.automationV4ActionsAppIdDefinitionIdRequiresObject_1WithHttpInfo(param.appId, param.definitionId, param.publicActionDefinitionRequiresObjectRequest,  options).toPromise();
    }

    /**
     * Set whether a custom action definition requires an object.
     * Set the object requirement for a custom action definition.
     * @param param the request object
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObject_1(param: DefinitionsApiAutomationV4ActionsAppIdDefinitionIdRequiresObject0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.automationV4ActionsAppIdDefinitionIdRequiresObject_1(param.appId, param.definitionId, param.publicActionDefinitionRequiresObjectRequest,  options).toPromise();
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
        return this.api.getByIdWithHttpInfo(param.appId, param.definitionId, param.archived,  options).toPromise();
    }

    /**
     * Retrieve a custom workflow action definition by ID.
     * Retrieve a custom action definition
     * @param param the request object
     */
    public getById(param: DefinitionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicActionDefinition> {
        return this.api.getById(param.appId, param.definitionId, param.archived,  options).toPromise();
    }

    /**
     * Retrieve custom workflow action definitions by app ID.
     * Retrieve custom action definitions
     * @param param the request object
     */
    public getPageWithHttpInfo(param: DefinitionsApiGetPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.appId, param.after, param.archived, param.limit,  options).toPromise();
    }

    /**
     * Retrieve custom workflow action definitions by app ID.
     * Retrieve custom action definitions
     * @param param the request object
     */
    public getPage(param: DefinitionsApiGetPageRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicActionDefinitionForwardPaging> {
        return this.api.getPage(param.appId, param.after, param.archived, param.limit,  options).toPromise();
    }

    /**
     * Update an existing action definition by ID.
     * Update an existing action definition
     * @param param the request object
     */
    public updateWithHttpInfo(param: DefinitionsApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionDefinition>> {
        return this.api.updateWithHttpInfo(param.appId, param.definitionId, param.publicActionDefinitionPatch,  options).toPromise();
    }

    /**
     * Update an existing action definition by ID.
     * Update an existing action definition
     * @param param the request object
     */
    public update(param: DefinitionsApiUpdateRequest, options?: ConfigurationOptions): Promise<PublicActionDefinition> {
        return this.api.update(param.appId, param.definitionId, param.publicActionDefinitionPatch,  options).toPromise();
    }

}

import { ObservableFunctionsApi } from "./ObservableAPI";
import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi";

export interface FunctionsApiArchiveRequest {
    /**
     * The ID of the application associated with the custom workflow action.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApiarchive
     */
    appId: number
    /**
     * The ID of the custom workflow action definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApiarchive
     */
    definitionId: string
    /**
     * The ID of the specific function within the workflow action definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApiarchive
     */
    functionId: string
    /**
     * The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * Defaults to: undefined
     * @type &#39;POST_ACTION_EXECUTION&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39;
     * @memberof FunctionsApiarchive
     */
    functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS'
}

export interface FunctionsApiArchiveByFunctionTypeRequest {
    /**
     * The ID of the app from which the function will be deleted.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApiarchiveByFunctionType
     */
    appId: number
    /**
     * The ID of the definition from which the function will be deleted.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApiarchiveByFunctionType
     */
    definitionId: string
    /**
     * The type of function to delete, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * Defaults to: undefined
     * @type &#39;POST_ACTION_EXECUTION&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39;
     * @memberof FunctionsApiarchiveByFunctionType
     */
    functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS'
}

export interface FunctionsApiCreateOrReplaceRequest {
    /**
     * The ID of the application associated with the custom workflow action.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApicreateOrReplace
     */
    appId: number
    /**
     * The ID of the custom workflow action definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApicreateOrReplace
     */
    definitionId: string
    /**
     * The ID of the specific function within the workflow action definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApicreateOrReplace
     */
    functionId: string
    /**
     * The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * Defaults to: undefined
     * @type &#39;POST_ACTION_EXECUTION&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39;
     * @memberof FunctionsApicreateOrReplace
     */
    functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS'
    /**
     * 
     * @type string
     * @memberof FunctionsApicreateOrReplace
     */
    body: string
}

export interface FunctionsApiCreateOrReplaceByFunctionTypeRequest {
    /**
     * The ID of the app to which the function will be added.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    appId: number
    /**
     * The ID of the definition to which the function will be added.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    definitionId: string
    /**
     * The type of function to add, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * Defaults to: undefined
     * @type &#39;POST_ACTION_EXECUTION&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39;
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS'
    /**
     * 
     * @type string
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    body: string
}

export interface FunctionsApiGetByFunctionTypeRequest {
    /**
     * The ID of the app associated with the function.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApigetByFunctionType
     */
    appId: number
    /**
     * The ID of the definition associated with the function.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApigetByFunctionType
     */
    definitionId: string
    /**
     * The type of function to retrieve, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * Defaults to: undefined
     * @type &#39;POST_ACTION_EXECUTION&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39;
     * @memberof FunctionsApigetByFunctionType
     */
    functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS'
}

export interface FunctionsApiGetByIdRequest {
    /**
     * The ID of the application associated with the custom workflow action.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApigetById
     */
    appId: number
    /**
     * The ID of the custom workflow action definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApigetById
     */
    definitionId: string
    /**
     * The ID of the specific function within the workflow action definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApigetById
     */
    functionId: string
    /**
     * The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * Defaults to: undefined
     * @type &#39;POST_ACTION_EXECUTION&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39;
     * @memberof FunctionsApigetById
     */
    functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS'
}

export interface FunctionsApiGetPageRequest {
    /**
     * The unique identifier for the app.
     * Defaults to: undefined
     * @type number
     * @memberof FunctionsApigetPage
     */
    appId: number
    /**
     * The unique identifier for the action definition.
     * Defaults to: undefined
     * @type string
     * @memberof FunctionsApigetPage
     */
    definitionId: string
}

export class ObjectFunctionsApi {
    private api: ObservableFunctionsApi

    public constructor(configuration: Configuration, requestFactory?: FunctionsApiRequestFactory, responseProcessor?: FunctionsApiResponseProcessor) {
        this.api = new ObservableFunctionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a function for a specific definition.
     * Archive a function for a definition
     * @param param the request object
     */
    public archiveWithHttpInfo(param: FunctionsApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.appId, param.definitionId, param.functionId, param.functionType,  options).toPromise();
    }

    /**
     * Archive a function for a specific definition.
     * Archive a function for a definition
     * @param param the request object
     */
    public archive(param: FunctionsApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.appId, param.definitionId, param.functionId, param.functionType,  options).toPromise();
    }

    /**
     * Delete a function within a given definition.
     * Delete a function for a definition
     * @param param the request object
     */
    public archiveByFunctionTypeWithHttpInfo(param: FunctionsApiArchiveByFunctionTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveByFunctionTypeWithHttpInfo(param.appId, param.definitionId, param.functionType,  options).toPromise();
    }

    /**
     * Delete a function within a given definition.
     * Delete a function for a definition
     * @param param the request object
     */
    public archiveByFunctionType(param: FunctionsApiArchiveByFunctionTypeRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveByFunctionType(param.appId, param.definitionId, param.functionType,  options).toPromise();
    }

    /**
     * Update a function for a given definition by ID.
     * Update a function for a definition
     * @param param the request object
     */
    public createOrReplaceWithHttpInfo(param: FunctionsApiCreateOrReplaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
        return this.api.createOrReplaceWithHttpInfo(param.appId, param.definitionId, param.functionId, param.functionType, param.body,  options).toPromise();
    }

    /**
     * Update a function for a given definition by ID.
     * Update a function for a definition
     * @param param the request object
     */
    public createOrReplace(param: FunctionsApiCreateOrReplaceRequest, options?: ConfigurationOptions): Promise<PublicActionFunctionIdentifier> {
        return this.api.createOrReplace(param.appId, param.definitionId, param.functionId, param.functionType, param.body,  options).toPromise();
    }

    /**
     * Add a function for a given definition.
     * Insert a function for a definition
     * @param param the request object
     */
    public createOrReplaceByFunctionTypeWithHttpInfo(param: FunctionsApiCreateOrReplaceByFunctionTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionFunctionIdentifier>> {
        return this.api.createOrReplaceByFunctionTypeWithHttpInfo(param.appId, param.definitionId, param.functionType, param.body,  options).toPromise();
    }

    /**
     * Add a function for a given definition.
     * Insert a function for a definition
     * @param param the request object
     */
    public createOrReplaceByFunctionType(param: FunctionsApiCreateOrReplaceByFunctionTypeRequest, options?: ConfigurationOptions): Promise<PublicActionFunctionIdentifier> {
        return this.api.createOrReplaceByFunctionType(param.appId, param.definitionId, param.functionType, param.body,  options).toPromise();
    }

    /**
     * Retrieve functions of a specific type for a given definition.
     * Retrieve functions by a type for a given definition
     * @param param the request object
     */
    public getByFunctionTypeWithHttpInfo(param: FunctionsApiGetByFunctionTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionFunction>> {
        return this.api.getByFunctionTypeWithHttpInfo(param.appId, param.definitionId, param.functionType,  options).toPromise();
    }

    /**
     * Retrieve functions of a specific type for a given definition.
     * Retrieve functions by a type for a given definition
     * @param param the request object
     */
    public getByFunctionType(param: FunctionsApiGetByFunctionTypeRequest, options?: ConfigurationOptions): Promise<PublicActionFunction> {
        return this.api.getByFunctionType(param.appId, param.definitionId, param.functionType,  options).toPromise();
    }

    /**
     * Retrieve a specific function from a given definition.
     * Retrieve a function from a given definition
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: FunctionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicActionFunction>> {
        return this.api.getByIdWithHttpInfo(param.appId, param.definitionId, param.functionId, param.functionType,  options).toPromise();
    }

    /**
     * Retrieve a specific function from a given definition.
     * Retrieve a function from a given definition
     * @param param the request object
     */
    public getById(param: FunctionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicActionFunction> {
        return this.api.getById(param.appId, param.definitionId, param.functionId, param.functionType,  options).toPromise();
    }

    /**
     * Retrieve all functions included in a definition.
     * Retrieve functions for a given definition
     * @param param the request object
     */
    public getPageWithHttpInfo(param: FunctionsApiGetPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionFunctionIdentifierNoPaging>> {
        return this.api.getPageWithHttpInfo(param.appId, param.definitionId,  options).toPromise();
    }

    /**
     * Retrieve all functions included in a definition.
     * Retrieve functions for a given definition
     * @param param the request object
     */
    public getPage(param: FunctionsApiGetPageRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
        return this.api.getPage(param.appId, param.definitionId,  options).toPromise();
    }

}

import { ObservableRevisionsApi } from "./ObservableAPI";
import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor} from "../apis/RevisionsApi";

export interface RevisionsApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RevisionsApigetById
     */
    appId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetById
     */
    definitionId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetById
     */
    revisionId: string
}

export interface RevisionsApiGetPageRequest {
    /**
     * The unique identifier for the app.
     * Defaults to: undefined
     * @type number
     * @memberof RevisionsApigetPage
     */
    appId: number
    /**
     * The unique identifier for the action definition.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetPage
     */
    definitionId: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof RevisionsApigetPage
     */
    after?: string
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof RevisionsApigetPage
     */
    limit?: number
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
        return this.api.getByIdWithHttpInfo(param.appId, param.definitionId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieve a specific revision of a definition by revision ID.
     * Retrieve a specific revision of a definition
     * @param param the request object
     */
    public getById(param: RevisionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicActionRevision> {
        return this.api.getById(param.appId, param.definitionId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieve the versions of a definition by ID.
     * Retrieve revisions for a given definition
     * @param param the request object
     */
    public getPageWithHttpInfo(param: RevisionsApiGetPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicActionRevisionForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.appId, param.definitionId, param.after, param.limit,  options).toPromise();
    }

    /**
     * Retrieve the versions of a definition by ID.
     * Retrieve revisions for a given definition
     * @param param the request object
     */
    public getPage(param: RevisionsApiGetPageRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicActionRevisionForwardPaging> {
        return this.api.getPage(param.appId, param.definitionId, param.after, param.limit,  options).toPromise();
    }

}
