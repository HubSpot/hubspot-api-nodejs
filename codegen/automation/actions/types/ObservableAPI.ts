import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { CallbacksApiRequestFactory, CallbacksApiResponseProcessor} from "../apis/CallbacksApi";
export class ObservableCallbacksApi {
    private requestFactory: CallbacksApiRequestFactory;
    private responseProcessor: CallbacksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CallbacksApiRequestFactory,
        responseProcessor?: CallbacksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CallbacksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CallbacksApiResponseProcessor();
    }

    /**
     * Completes the given action callback.
     * Complete a callback
     * @param callbackId The ID of the target app.
     * @param callbackCompletionRequest The result of the completed action.
     */
    public complete(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.complete(callbackId, callbackCompletionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.complete(rsp)));
            }));
    }

    /**
     * Completes the given action callbacks.
     * Complete a batch of callbacks
     * @param batchInputCallbackCompletionBatchRequest The result of the completed action.
     */
    public completeBatch(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.completeBatch(batchInputCallbackCompletionBatchRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.completeBatch(rsp)));
            }));
    }

}

import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";
export class ObservableDefinitionsApi {
    private requestFactory: DefinitionsApiRequestFactory;
    private responseProcessor: DefinitionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefinitionsApiRequestFactory,
        responseProcessor?: DefinitionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefinitionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefinitionsApiResponseProcessor();
    }

    /**
     * Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.
     * Archive a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param appId 
     */
    public archive(definitionId: string, appId: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archive(definitionId, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive(rsp)));
            }));
    }

    /**
     * Creates a new custom workflow action.
     * Create new custom action
     * @param appId 
     * @param extensionActionDefinitionInput The custom workflow action to create.
     */
    public create(appId: number, extensionActionDefinitionInput: ExtensionActionDefinitionInput, _options?: Configuration): Observable<ExtensionActionDefinition> {
        const requestContextPromise = this.requestFactory.create(appId, extensionActionDefinitionInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Returns a single custom workflow action with the specified ID.
     * Get a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param appId 
     * @param archived Whether to include archived custom actions.
     */
    public getById(definitionId: string, appId: number, archived?: boolean, _options?: Configuration): Observable<ExtensionActionDefinition> {
        const requestContextPromise = this.requestFactory.getById(definitionId, appId, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getById(rsp)));
            }));
    }

    /**
     * Returns a list of all custom workflow actions.
     * Get all custom actions
     * @param appId 
     * @param limit Maximum number of results per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param archived Whether to include archived custom actions.
     */
    public getPage(appId: number, limit?: number, after?: string, archived?: boolean, _options?: Configuration): Observable<CollectionResponseExtensionActionDefinitionForwardPaging> {
        const requestContextPromise = this.requestFactory.getPage(appId, limit, after, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPage(rsp)));
            }));
    }

    /**
     * Updates a custom workflow action with new values for the specified fields.
     * Update a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param appId 
     * @param extensionActionDefinitionPatch The custom workflow action fields to be updated.
     */
    public update(definitionId: string, appId: number, extensionActionDefinitionPatch: ExtensionActionDefinitionPatch, _options?: Configuration): Observable<ExtensionActionDefinition> {
        const requestContextPromise = this.requestFactory.update(definitionId, appId, extensionActionDefinitionPatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

}

import { FunctionsApiRequestFactory, FunctionsApiResponseProcessor} from "../apis/FunctionsApi";
export class ObservableFunctionsApi {
    private requestFactory: FunctionsApiRequestFactory;
    private responseProcessor: FunctionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FunctionsApiRequestFactory,
        responseProcessor?: FunctionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FunctionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FunctionsApiResponseProcessor();
    }

    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
     * Delete a custom action function
     * @param definitionId The ID of the custom workflow action
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     */
    public archive(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archive(definitionId, functionType, functionId, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive(rsp)));
            }));
    }

    /**
     * Delete a function for a custom workflow action. This will remove the function itself as well as removing the association between the function and the custom action. This can't be undone.
     * Delete a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     */
    public archiveByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archiveByFunctionType(definitionId, functionType, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveByFunctionType(rsp)));
            }));
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
    public createOrReplace(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, body: string, _options?: Configuration): Observable<ActionFunctionIdentifier> {
        const requestContextPromise = this.requestFactory.createOrReplace(definitionId, functionType, functionId, appId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrReplace(rsp)));
            }));
    }

    /**
     * Creates or replaces a function for a custom workflow action.
     * Create or replace a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     * @param body The function source code. Must be valid JavaScript code.
     */
    public createOrReplaceByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, body: string, _options?: Configuration): Observable<ActionFunctionIdentifier> {
        const requestContextPromise = this.requestFactory.createOrReplaceByFunctionType(definitionId, functionType, appId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrReplaceByFunctionType(rsp)));
            }));
    }

    /**
     * Returns the given function for a custom workflow action.
     * Get a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param appId 
     */
    public getByFunctionType(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', appId: number, _options?: Configuration): Observable<ActionFunction> {
        const requestContextPromise = this.requestFactory.getByFunctionType(definitionId, functionType, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByFunctionType(rsp)));
            }));
    }

    /**
     * Returns the given function for a custom workflow action.
     * Get a custom action function
     * @param definitionId The ID of the custom workflow action.
     * @param functionType The type of function. This determines when the function will be called.
     * @param functionId The ID qualifier for the function. This is used to specify which input field a function is associated with for &#x60;PRE_FETCH_OPTIONS&#x60; and &#x60;POST_FETCH_OPTIONS&#x60; function types.
     * @param appId 
     */
    public getById(definitionId: string, functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS', functionId: string, appId: number, _options?: Configuration): Observable<ActionFunction> {
        const requestContextPromise = this.requestFactory.getById(definitionId, functionType, functionId, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getById(rsp)));
            }));
    }

    /**
     * Returns a list of all functions that are associated with the given custom workflow action.
     * Get all custom action functions
     * @param definitionId The ID of the custom workflow action.
     * @param appId 
     */
    public getPage(definitionId: string, appId: number, _options?: Configuration): Observable<CollectionResponseActionFunctionIdentifierNoPaging> {
        const requestContextPromise = this.requestFactory.getPage(definitionId, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPage(rsp)));
            }));
    }

}

import { RevisionsApiRequestFactory, RevisionsApiResponseProcessor} from "../apis/RevisionsApi";
export class ObservableRevisionsApi {
    private requestFactory: RevisionsApiRequestFactory;
    private responseProcessor: RevisionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RevisionsApiRequestFactory,
        responseProcessor?: RevisionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RevisionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RevisionsApiResponseProcessor();
    }

    /**
     * Returns the given version of a custom workflow action.
     * Get a revision for a custom action
     * @param definitionId The ID of the custom workflow action.
     * @param revisionId The version of the custom workflow action.
     * @param appId 
     */
    public getById(definitionId: string, revisionId: string, appId: number, _options?: Configuration): Observable<ActionRevision> {
        const requestContextPromise = this.requestFactory.getById(definitionId, revisionId, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getById(rsp)));
            }));
    }

    /**
     * Returns a list of revisions for a custom workflow action.
     * Get all revisions for a custom action
     * @param definitionId The ID of the custom workflow action
     * @param appId 
     * @param limit Maximum number of results per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     */
    public getPage(definitionId: string, appId: number, limit?: number, after?: string, _options?: Configuration): Observable<CollectionResponseActionRevisionForwardPaging> {
        const requestContextPromise = this.requestFactory.getPage(definitionId, appId, limit, after, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPage(rsp)));
            }));
    }

}
