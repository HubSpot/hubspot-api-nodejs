import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ActionFunction } from '../models/ActionFunction';
import { ActionFunctionIdentifier } from '../models/ActionFunctionIdentifier';
import { ActionLabels } from '../models/ActionLabels';
import { ActionRevision } from '../models/ActionRevision';
import { BatchInputCallbackCompletionBatchRequest } from '../models/BatchInputCallbackCompletionBatchRequest';
import { CallbackCompletionBatchRequest } from '../models/CallbackCompletionBatchRequest';
import { CallbackCompletionRequest } from '../models/CallbackCompletionRequest';
import { CollectionResponseActionFunctionIdentifierNoPaging } from '../models/CollectionResponseActionFunctionIdentifierNoPaging';
import { CollectionResponseActionRevisionForwardPaging } from '../models/CollectionResponseActionRevisionForwardPaging';
import { CollectionResponseExtensionActionDefinitionForwardPaging } from '../models/CollectionResponseExtensionActionDefinitionForwardPaging';
import { ConditionalSingleFieldDependency } from '../models/ConditionalSingleFieldDependency';
import { ErrorDetail } from '../models/ErrorDetail';
import { ExtensionActionDefinition } from '../models/ExtensionActionDefinition';
import { ExtensionActionDefinitionInput } from '../models/ExtensionActionDefinitionInput';
import { ExtensionActionDefinitionInputFieldDependenciesInner } from '../models/ExtensionActionDefinitionInputFieldDependenciesInner';
import { ExtensionActionDefinitionPatch } from '../models/ExtensionActionDefinitionPatch';
import { FieldTypeDefinition } from '../models/FieldTypeDefinition';
import { ForwardPaging } from '../models/ForwardPaging';
import { InputFieldDefinition } from '../models/InputFieldDefinition';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { ObjectRequestOptions } from '../models/ObjectRequestOptions';
import { Option } from '../models/Option';
import { SingleFieldDependency } from '../models/SingleFieldDependency';

import { ObservableCallbacksApi } from "./ObservableAPI";
import { CallbacksApiRequestFactory, CallbacksApiResponseProcessor} from "../apis/CallbacksApi";

export interface CallbacksApiCompleteRequest {
    /**
     * The ID of the target app.
     * @type string
     * @memberof CallbacksApicomplete
     */
    callbackId: string
    /**
     * The result of the completed action.
     * @type CallbackCompletionRequest
     * @memberof CallbacksApicomplete
     */
    callbackCompletionRequest: CallbackCompletionRequest
}

export interface CallbacksApiCompleteBatchRequest {
    /**
     * The result of the completed action.
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
     * Completes the given action callback.
     * Complete a callback
     * @param param the request object
     */
    public complete(param: CallbacksApiCompleteRequest, options?: Configuration): Promise<void> {
        return this.api.complete(param.callbackId, param.callbackCompletionRequest,  options).toPromise();
    }

    /**
     * Completes the given action callbacks.
     * Complete a batch of callbacks
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
     * The ID of the custom workflow action.
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
     * The custom workflow action to create.
     * @type ExtensionActionDefinitionInput
     * @memberof DefinitionsApicreate
     */
    extensionActionDefinitionInput: ExtensionActionDefinitionInput
}

export interface DefinitionsApiGetByIdRequest {
    /**
     * The ID of the custom workflow action.
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
     * Whether to include archived custom actions.
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
     * Maximum number of results per page.
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
     * Whether to include archived custom actions.
     * @type boolean
     * @memberof DefinitionsApigetPage
     */
    archived?: boolean
}

export interface DefinitionsApiUpdateRequest {
    /**
     * The ID of the custom workflow action.
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
     * The custom workflow action fields to be updated.
     * @type ExtensionActionDefinitionPatch
     * @memberof DefinitionsApiupdate
     */
    extensionActionDefinitionPatch: ExtensionActionDefinitionPatch
}

export class ObjectDefinitionsApi {
    private api: ObservableDefinitionsApi

    public constructor(configuration: Configuration, requestFactory?: DefinitionsApiRequestFactory, responseProcessor?: DefinitionsApiResponseProcessor) {
        this.api = new ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.
     * Archive a custom action
     * @param param the request object
     */
    public archive(param: DefinitionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.definitionId, param.appId,  options).toPromise();
    }

    /**
     * Creates a new custom workflow action.
     * Create new custom action
     * @param param the request object
     */
    public create(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<ExtensionActionDefinition> {
        return this.api.create(param.appId, param.extensionActionDefinitionInput,  options).toPromise();
    }

    /**
     * Returns a single custom workflow action with the specified ID.
     * Get a custom action
     * @param param the request object
     */
    public getById(param: DefinitionsApiGetByIdRequest, options?: Configuration): Promise<ExtensionActionDefinition> {
        return this.api.getById(param.definitionId, param.appId, param.archived,  options).toPromise();
    }

    /**
     * Returns a list of all custom workflow actions.
     * Get all custom actions
     * @param param the request object
     */
    public getPage(param: DefinitionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseExtensionActionDefinitionForwardPaging> {
        return this.api.getPage(param.appId, param.limit, param.after, param.archived,  options).toPromise();
    }

    /**
     * Updates a custom workflow action with new values for the specified fields.
     * Update a custom action
     * @param param the request object
     */
    public update(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<ExtensionActionDefinition> {
        return this.api.update(param.definitionId, param.appId, param.extensionActionDefinitionPatch,  options).toPromise();
    }

}

import { ObservableFunctionsApi } from "./ObservableAPI";
import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi";

export interface FunctionsApiArchiveRequest {
    /**
     * The ID of the custom workflow action
     * @type string
     * @memberof FunctionsApiarchive
     */
    definitionId: string
    /**
     * The type of function. This determines when the function will be called.
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39;
     * @memberof FunctionsApiarchive
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'
    /**
     * The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
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
     * The ID of the custom workflow action.
     * @type string
     * @memberof FunctionsApiarchiveByFunctionType
     */
    definitionId: string
    /**
     * The type of function. This determines when the function will be called.
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39;
     * @memberof FunctionsApiarchiveByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'
    /**
     * 
     * @type number
     * @memberof FunctionsApiarchiveByFunctionType
     */
    appId: number
}

export interface FunctionsApiCreateOrReplaceRequest {
    /**
     * The ID of the custom workflow action.
     * @type string
     * @memberof FunctionsApicreateOrReplace
     */
    definitionId: string
    /**
     * The type of function. This determines when the function will be called.
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39;
     * @memberof FunctionsApicreateOrReplace
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'
    /**
     * The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
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
     * The function source code. Must be valid JavaScript code.
     * @type string
     * @memberof FunctionsApicreateOrReplace
     */
    body: string
}

export interface FunctionsApiCreateOrReplaceByFunctionTypeRequest {
    /**
     * The ID of the custom workflow action.
     * @type string
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    definitionId: string
    /**
     * The type of function. This determines when the function will be called.
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39;
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'
    /**
     * 
     * @type number
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    appId: number
    /**
     * The function source code. Must be valid JavaScript code.
     * @type string
     * @memberof FunctionsApicreateOrReplaceByFunctionType
     */
    body: string
}

export interface FunctionsApiGetByFunctionTypeRequest {
    /**
     * The ID of the custom workflow action.
     * @type string
     * @memberof FunctionsApigetByFunctionType
     */
    definitionId: string
    /**
     * The type of function. This determines when the function will be called.
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39;
     * @memberof FunctionsApigetByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'
    /**
     * 
     * @type number
     * @memberof FunctionsApigetByFunctionType
     */
    appId: number
}

export interface FunctionsApiGetByIdRequest {
    /**
     * The ID of the custom workflow action.
     * @type string
     * @memberof FunctionsApigetById
     */
    definitionId: string
    /**
     * The type of function. This determines when the function will be called.
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39;
     * @memberof FunctionsApigetById
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS'
    /**
     * The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
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
     * The ID of the custom workflow action.
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
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
     * Delete a custom action function
     * @param param the request object
     */
    public archive(param: FunctionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
     * Delete a custom action function
     * @param param the request object
     */
    public archiveByFunctionType(param: FunctionsApiArchiveByFunctionTypeRequest, options?: Configuration): Promise<void> {
        return this.api.archiveByFunctionType(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Creates or replaces a function for a custom workflow action.
     * Create or replace a custom action function
     * @param param the request object
     */
    public createOrReplace(param: FunctionsApiCreateOrReplaceRequest, options?: Configuration): Promise<ActionFunctionIdentifier> {
        return this.api.createOrReplace(param.definitionId, param.functionType, param.functionId, param.appId, param.body,  options).toPromise();
    }

    /**
     * Creates or replaces a function for a custom workflow action.
     * Create or replace a custom action function
     * @param param the request object
     */
    public createOrReplaceByFunctionType(param: FunctionsApiCreateOrReplaceByFunctionTypeRequest, options?: Configuration): Promise<ActionFunctionIdentifier> {
        return this.api.createOrReplaceByFunctionType(param.definitionId, param.functionType, param.appId, param.body,  options).toPromise();
    }

    /**
     * Returns the given function for a custom workflow action.
     * Get a custom action function
     * @param param the request object
     */
    public getByFunctionType(param: FunctionsApiGetByFunctionTypeRequest, options?: Configuration): Promise<ActionFunction> {
        return this.api.getByFunctionType(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * Returns the given function for a custom workflow action.
     * Get a custom action function
     * @param param the request object
     */
    public getById(param: FunctionsApiGetByIdRequest, options?: Configuration): Promise<ActionFunction> {
        return this.api.getById(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * Returns a list of all functions that are associated with the given custom workflow action.
     * Get all custom action functions
     * @param param the request object
     */
    public getPage(param: FunctionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseActionFunctionIdentifierNoPaging> {
        return this.api.getPage(param.definitionId, param.appId,  options).toPromise();
    }

}

import { ObservableRevisionsApi } from "./ObservableAPI";
import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor} from "../apis/RevisionsApi";

export interface RevisionsApiGetByIdRequest {
    /**
     * The ID of the custom workflow action.
     * @type string
     * @memberof RevisionsApigetById
     */
    definitionId: string
    /**
     * The version of the custom workflow action.
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
     * The ID of the custom workflow action
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
     * Maximum number of results per page.
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
     * Returns the given version of a custom workflow action.
     * Get a revision for a custom action
     * @param param the request object
     */
    public getById(param: RevisionsApiGetByIdRequest, options?: Configuration): Promise<ActionRevision> {
        return this.api.getById(param.definitionId, param.revisionId, param.appId,  options).toPromise();
    }

    /**
     * Returns a list of revisions for a custom workflow action.
     * Get all revisions for a custom action
     * @param param the request object
     */
    public getPage(param: RevisionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseActionRevisionForwardPaging> {
        return this.api.getPage(param.definitionId, param.appId, param.limit, param.after,  options).toPromise();
    }

}
