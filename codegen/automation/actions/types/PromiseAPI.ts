import { Configuration} from '../configuration'

import { ActionFunction } from '../models/ActionFunction';
import { ActionFunctionIdentifier } from '../models/ActionFunctionIdentifier';
import { ActionRevision } from '../models/ActionRevision';
import { BatchInputCallbackCompletionBatchRequest } from '../models/BatchInputCallbackCompletionBatchRequest';
import { CallbackCompletionRequest } from '../models/CallbackCompletionRequest';
import { CollectionResponseActionFunctionIdentifierNoPaging } from '../models/CollectionResponseActionFunctionIdentifierNoPaging';
import { CollectionResponseActionRevisionForwardPaging } from '../models/CollectionResponseActionRevisionForwardPaging';
import { CollectionResponseExtensionActionDefinitionForwardPaging } from '../models/CollectionResponseExtensionActionDefinitionForwardPaging';
import { ExtensionActionDefinition } from '../models/ExtensionActionDefinition';
import { ExtensionActionDefinitionInput } from '../models/ExtensionActionDefinitionInput';
import { ExtensionActionDefinitionPatch } from '../models/ExtensionActionDefinitionPatch';
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
     * Completes the given action callback.
     * Complete a callback
     * @param callbackId The ID of the target app.
     * @param callbackCompletionRequest The result of the completed action.
     */
    public complete(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.complete(callbackId, callbackCompletionRequest, _options);
        return result.toPromise();
    }

    /**
     * Completes the given action callbacks.
     * Complete a batch of callbacks
     * @param batchInputCallbackCompletionBatchRequest The result of the completed action.
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
     * Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.
     * Archive a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param appId 
     */
    public archive(definitionId: string, appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(definitionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Creates a new custom workflow action.
     * Create new custom action
     * @param appId 
     * @param extensionActionDefinitionInput The custom workflow action to create.
     */
    public create(appId: number, extensionActionDefinitionInput: ExtensionActionDefinitionInput, _options?: Configuration): Promise<ExtensionActionDefinition> {
        const result = this.api.create(appId, extensionActionDefinitionInput, _options);
        return result.toPromise();
    }

    /**
     * Returns a single custom workflow action with the specified ID.
     * Get a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param appId 
     * @param archived Whether to include archived custom actions.
     */
    public getById(definitionId: string, appId: number, archived?: boolean, _options?: Configuration): Promise<ExtensionActionDefinition> {
        const result = this.api.getById(definitionId, appId, archived, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all custom workflow actions.
     * Get all custom actions
     * @param appId 
     * @param limit Maximum number of results per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param archived Whether to include archived custom actions.
     */
    public getPage(appId: number, limit?: number, after?: string, archived?: boolean, _options?: Configuration): Promise<CollectionResponseExtensionActionDefinitionForwardPaging> {
        const result = this.api.getPage(appId, limit, after, archived, _options);
        return result.toPromise();
    }

    /**
     * Updates a custom workflow action with new values for the specified fields.
     * Update a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param appId 
     * @param extensionActionDefinitionPatch The custom workflow action fields to be updated.
     */
    public update(definitionId: string, appId: number, extensionActionDefinitionPatch: ExtensionActionDefinitionPatch, _options?: Configuration): Promise<ExtensionActionDefinition> {
        const result = this.api.update(definitionId, appId, extensionActionDefinitionPatch, _options);
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
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
     * Delete a custom action function
     * @param definitionId The ID of the custom workflow action
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     */
    public archive(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
     * Delete a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     */
    public archiveByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archiveByFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    }

    /**
     * Creates or replaces a function for a custom workflow action.
     * Create or replace a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     * @param body The function source code. Must be valid JavaScript code.
     */
    public createOrReplace(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, body: string, _options?: Configuration): Promise<ActionFunctionIdentifier> {
        const result = this.api.createOrReplace(definitionId, functionType, functionId, appId, body, _options);
        return result.toPromise();
    }

    /**
     * Creates or replaces a function for a custom workflow action.
     * Create or replace a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     * @param body The function source code. Must be valid JavaScript code.
     */
    public createOrReplaceByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, body: string, _options?: Configuration): Promise<ActionFunctionIdentifier> {
        const result = this.api.createOrReplaceByFunctionType(definitionId, functionType, appId, body, _options);
        return result.toPromise();
    }

    /**
     * Returns the given function for a custom workflow action.
     * Get a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     */
    public getByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, _options?: Configuration): Promise<ActionFunction> {
        const result = this.api.getByFunctionType(definitionId, functionType, appId, _options);
        return result.toPromise();
    }

    /**
     * Returns the given function for a custom workflow action.
     * Get a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     */
    public getById(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, _options?: Configuration): Promise<ActionFunction> {
        const result = this.api.getById(definitionId, functionType, functionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all functions that are associated with the given custom workflow action.
     * Get all custom action functions
     * @param definitionId The ID of the custom workflow action.
     * @param appId 
     */
    public getPage(definitionId: string, appId: number, _options?: Configuration): Promise<CollectionResponseActionFunctionIdentifierNoPaging> {
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
     * Returns the given version of a custom workflow action.
     * Get a revision for a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param revisionId The version of the custom workflow action.
     * @param appId 
     */
    public getById(definitionId: string, revisionId: string, appId: number, _options?: Configuration): Promise<ActionRevision> {
        const result = this.api.getById(definitionId, revisionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of revisions for a custom workflow action.
     * Get all revisions for a custom action
     * @param definitionId The ID of the custom workflow action
     * @param appId 
     * @param limit Maximum number of results per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     */
    public getPage(definitionId: string, appId: number, limit?: number, after?: string, _options?: Configuration): Promise<CollectionResponseActionRevisionForwardPaging> {
        const result = this.api.getPage(definitionId, appId, limit, after, _options);
        return result.toPromise();
    }


}



