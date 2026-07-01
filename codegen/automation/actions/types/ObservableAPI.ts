import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
     * Complete a specific blocked action execution by ID.
     * Completes a callback
     * @param callbackId The unique identifier for the specific callback to complete.
     * @param callbackCompletionRequest
     */
    public completeWithHttpInfo(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.complete(callbackId, callbackCompletionRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.completeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Complete a specific blocked action execution by ID.
     * Completes a callback
     * @param callbackId The unique identifier for the specific callback to complete.
     * @param callbackCompletionRequest
     */
    public complete(callbackId: string, callbackCompletionRequest: CallbackCompletionRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.completeWithHttpInfo(callbackId, callbackCompletionRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Complete a batch of blocked action executions.
     * Complete a batch of callbacks
     * @param batchInputCallbackCompletionBatchRequest
     */
    public completeBatchWithHttpInfo(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.completeBatch(batchInputCallbackCompletionBatchRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.completeBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Complete a batch of blocked action executions.
     * Complete a batch of callbacks
     * @param batchInputCallbackCompletionBatchRequest
     */
    public completeBatch(batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.completeBatchWithHttpInfo(batchInputCallbackCompletionBatchRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
     * Delete an action definition by ID.
     * Delete an action definition
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to delete.
     */
    public archiveWithHttpInfo(appId: number, definitionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.archive(appId, definitionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an action definition by ID.
     * Delete an action definition
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to delete.
     */
    public archive(appId: number, definitionId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.archiveWithHttpInfo(appId, definitionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve whether a custom action definition requires an object.
     * Retrieve the object requirement status for a custom action definition.
     * @param appId The ID of the app associated with the custom action definition.
     * @param definitionId The ID of the custom action definition.
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObjectWithHttpInfo(appId: number, definitionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicActionDefinitionRequiresObjectResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.automationV4ActionsAppIdDefinitionIdRequiresObject(appId, definitionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.automationV4ActionsAppIdDefinitionIdRequiresObjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve whether a custom action definition requires an object.
     * Retrieve the object requirement status for a custom action definition.
     * @param appId The ID of the app associated with the custom action definition.
     * @param definitionId The ID of the custom action definition.
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObject(appId: number, definitionId: string, _options?: ConfigurationOptions): Observable<PublicActionDefinitionRequiresObjectResponse> {
        return this.automationV4ActionsAppIdDefinitionIdRequiresObjectWithHttpInfo(appId, definitionId, _options).pipe(map((apiResponse: HttpInfo<PublicActionDefinitionRequiresObjectResponse>) => apiResponse.data));
    }

    /**
     * Set whether a custom action definition requires an object.
     * Set the object requirement for a custom action definition.
     * @param appId The ID of the app associated with the custom action definition.
     * @param definitionId The ID of the custom action definition.
     * @param publicActionDefinitionRequiresObjectRequest
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObject_1WithHttpInfo(appId: number, definitionId: string, publicActionDefinitionRequiresObjectRequest: PublicActionDefinitionRequiresObjectRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.automationV4ActionsAppIdDefinitionIdRequiresObject_1(appId, definitionId, publicActionDefinitionRequiresObjectRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.automationV4ActionsAppIdDefinitionIdRequiresObject_1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Set whether a custom action definition requires an object.
     * Set the object requirement for a custom action definition.
     * @param appId The ID of the app associated with the custom action definition.
     * @param definitionId The ID of the custom action definition.
     * @param publicActionDefinitionRequiresObjectRequest
     */
    public automationV4ActionsAppIdDefinitionIdRequiresObject_1(appId: number, definitionId: string, publicActionDefinitionRequiresObjectRequest: PublicActionDefinitionRequiresObjectRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.automationV4ActionsAppIdDefinitionIdRequiresObject_1WithHttpInfo(appId, definitionId, publicActionDefinitionRequiresObjectRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a new custom workflow action.
     * Create a new custom action definition
     * @param appId The unique identifier for the app.
     * @param publicActionDefinitionEgg
     */
    public createWithHttpInfo(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: ConfigurationOptions): Observable<HttpInfo<PublicActionDefinition>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.create(appId, publicActionDefinitionEgg, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new custom workflow action.
     * Create a new custom action definition
     * @param appId The unique identifier for the app.
     * @param publicActionDefinitionEgg
     */
    public create(appId: number, publicActionDefinitionEgg: PublicActionDefinitionEgg, _options?: ConfigurationOptions): Observable<PublicActionDefinition> {
        return this.createWithHttpInfo(appId, publicActionDefinitionEgg, _options).pipe(map((apiResponse: HttpInfo<PublicActionDefinition>) => apiResponse.data));
    }

    /**
     * Retrieve a custom workflow action definition by ID.
     * Retrieve a custom action definition
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to retrieve.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getByIdWithHttpInfo(appId: number, definitionId: string, archived?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<PublicActionDefinition>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getById(appId, definitionId, archived, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a custom workflow action definition by ID.
     * Retrieve a custom action definition
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to retrieve.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getById(appId: number, definitionId: string, archived?: boolean, _options?: ConfigurationOptions): Observable<PublicActionDefinition> {
        return this.getByIdWithHttpInfo(appId, definitionId, archived, _options).pipe(map((apiResponse: HttpInfo<PublicActionDefinition>) => apiResponse.data));
    }

    /**
     * Retrieve custom workflow action definitions by app ID.
     * Retrieve custom action definitions
     * @param appId The unique identifier for the app.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [limit] The maximum number of results to display per page.
     */
    public getPageWithHttpInfo(appId: number, after?: string, archived?: boolean, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getPage(appId, after, archived, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve custom workflow action definitions by app ID.
     * Retrieve custom action definitions
     * @param appId The unique identifier for the app.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [limit] The maximum number of results to display per page.
     */
    public getPage(appId: number, after?: string, archived?: boolean, limit?: number, _options?: ConfigurationOptions): Observable<CollectionResponsePublicActionDefinitionForwardPaging> {
        return this.getPageWithHttpInfo(appId, after, archived, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicActionDefinitionForwardPaging>) => apiResponse.data));
    }

    /**
     * Update an existing action definition by ID.
     * Update an existing action definition
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to update.
     * @param publicActionDefinitionPatch
     */
    public updateWithHttpInfo(appId: number, definitionId: string, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: ConfigurationOptions): Observable<HttpInfo<PublicActionDefinition>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.update(appId, definitionId, publicActionDefinitionPatch, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing action definition by ID.
     * Update an existing action definition
     * @param appId The ID of the app associated with the action definition.
     * @param definitionId The ID of the action definition to update.
     * @param publicActionDefinitionPatch
     */
    public update(appId: number, definitionId: string, publicActionDefinitionPatch: PublicActionDefinitionPatch, _options?: ConfigurationOptions): Observable<PublicActionDefinition> {
        return this.updateWithHttpInfo(appId, definitionId, publicActionDefinitionPatch, _options).pipe(map((apiResponse: HttpInfo<PublicActionDefinition>) => apiResponse.data));
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
     * Archive a function for a specific definition.
     * Archive a function for a definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public archiveWithHttpInfo(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.archive(appId, definitionId, functionId, functionType, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Archive a function for a specific definition.
     * Archive a function for a definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public archive(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: ConfigurationOptions): Observable<void> {
        return this.archiveWithHttpInfo(appId, definitionId, functionId, functionType, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a function within a given definition.
     * Delete a function for a definition
     * @param appId The ID of the app from which the function will be deleted.
     * @param definitionId The ID of the definition from which the function will be deleted.
     * @param functionType The type of function to delete, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public archiveByFunctionTypeWithHttpInfo(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.archiveByFunctionType(appId, definitionId, functionType, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveByFunctionTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a function within a given definition.
     * Delete a function for a definition
     * @param appId The ID of the app from which the function will be deleted.
     * @param definitionId The ID of the definition from which the function will be deleted.
     * @param functionType The type of function to delete, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public archiveByFunctionType(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: ConfigurationOptions): Observable<void> {
        return this.archiveByFunctionTypeWithHttpInfo(appId, definitionId, functionType, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update a function for a given definition by ID.
     * Update a function for a definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * @param body
     */
    public createOrReplaceWithHttpInfo(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', body: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicActionFunctionIdentifier>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.createOrReplace(appId, definitionId, functionId, functionType, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrReplaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a function for a given definition by ID.
     * Update a function for a definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * @param body
     */
    public createOrReplace(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', body: string, _options?: ConfigurationOptions): Observable<PublicActionFunctionIdentifier> {
        return this.createOrReplaceWithHttpInfo(appId, definitionId, functionId, functionType, body, _options).pipe(map((apiResponse: HttpInfo<PublicActionFunctionIdentifier>) => apiResponse.data));
    }

    /**
     * Add a function for a given definition.
     * Insert a function for a definition
     * @param appId The ID of the app to which the function will be added.
     * @param definitionId The ID of the definition to which the function will be added.
     * @param functionType The type of function to add, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * @param body
     */
    public createOrReplaceByFunctionTypeWithHttpInfo(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', body: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicActionFunctionIdentifier>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.createOrReplaceByFunctionType(appId, definitionId, functionType, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrReplaceByFunctionTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a function for a given definition.
     * Insert a function for a definition
     * @param appId The ID of the app to which the function will be added.
     * @param definitionId The ID of the definition to which the function will be added.
     * @param functionType The type of function to add, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     * @param body
     */
    public createOrReplaceByFunctionType(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', body: string, _options?: ConfigurationOptions): Observable<PublicActionFunctionIdentifier> {
        return this.createOrReplaceByFunctionTypeWithHttpInfo(appId, definitionId, functionType, body, _options).pipe(map((apiResponse: HttpInfo<PublicActionFunctionIdentifier>) => apiResponse.data));
    }

    /**
     * Retrieve functions of a specific type for a given definition.
     * Retrieve functions by a type for a given definition
     * @param appId The ID of the app associated with the function.
     * @param definitionId The ID of the definition associated with the function.
     * @param functionType The type of function to retrieve, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public getByFunctionTypeWithHttpInfo(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: ConfigurationOptions): Observable<HttpInfo<PublicActionFunction>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getByFunctionType(appId, definitionId, functionType, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByFunctionTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve functions of a specific type for a given definition.
     * Retrieve functions by a type for a given definition
     * @param appId The ID of the app associated with the function.
     * @param definitionId The ID of the definition associated with the function.
     * @param functionType The type of function to retrieve, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public getByFunctionType(appId: number, definitionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: ConfigurationOptions): Observable<PublicActionFunction> {
        return this.getByFunctionTypeWithHttpInfo(appId, definitionId, functionType, _options).pipe(map((apiResponse: HttpInfo<PublicActionFunction>) => apiResponse.data));
    }

    /**
     * Retrieve a specific function from a given definition.
     * Retrieve a function from a given definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public getByIdWithHttpInfo(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: ConfigurationOptions): Observable<HttpInfo<PublicActionFunction>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getById(appId, definitionId, functionId, functionType, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a specific function from a given definition.
     * Retrieve a function from a given definition
     * @param appId The ID of the application associated with the custom workflow action.
     * @param definitionId The ID of the custom workflow action definition.
     * @param functionId The ID of the specific function within the workflow action definition.
     * @param functionType The type of function, accepted values are: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
     */
    public getById(appId: number, definitionId: string, functionId: string, functionType: 'POST_ACTION_EXECUTION' | 'POST_FETCH_OPTIONS' | 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS', _options?: ConfigurationOptions): Observable<PublicActionFunction> {
        return this.getByIdWithHttpInfo(appId, definitionId, functionId, functionType, _options).pipe(map((apiResponse: HttpInfo<PublicActionFunction>) => apiResponse.data));
    }

    /**
     * Retrieve all functions included in a definition.
     * Retrieve functions for a given definition
     * @param appId The unique identifier for the app.
     * @param definitionId The unique identifier for the action definition.
     */
    public getPageWithHttpInfo(appId: number, definitionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicActionFunctionIdentifierNoPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getPage(appId, definitionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve all functions included in a definition.
     * Retrieve functions for a given definition
     * @param appId The unique identifier for the app.
     * @param definitionId The unique identifier for the action definition.
     */
    public getPage(appId: number, definitionId: string, _options?: ConfigurationOptions): Observable<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
        return this.getPageWithHttpInfo(appId, definitionId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicActionFunctionIdentifierNoPaging>) => apiResponse.data));
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
     * Retrieve a specific revision of a definition by revision ID.
     * Retrieve a specific revision of a definition
     * @param appId
     * @param definitionId
     * @param revisionId
     */
    public getByIdWithHttpInfo(appId: number, definitionId: string, revisionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicActionRevision>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getById(appId, definitionId, revisionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a specific revision of a definition by revision ID.
     * Retrieve a specific revision of a definition
     * @param appId
     * @param definitionId
     * @param revisionId
     */
    public getById(appId: number, definitionId: string, revisionId: string, _options?: ConfigurationOptions): Observable<PublicActionRevision> {
        return this.getByIdWithHttpInfo(appId, definitionId, revisionId, _options).pipe(map((apiResponse: HttpInfo<PublicActionRevision>) => apiResponse.data));
    }

    /**
     * Retrieve the versions of a definition by ID.
     * Retrieve revisions for a given definition
     * @param appId The unique identifier for the app.
     * @param definitionId The unique identifier for the action definition.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to display per page.
     */
    public getPageWithHttpInfo(appId: number, definitionId: string, after?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicActionRevisionForwardPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getPage(appId, definitionId, after, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the versions of a definition by ID.
     * Retrieve revisions for a given definition
     * @param appId The unique identifier for the app.
     * @param definitionId The unique identifier for the action definition.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to display per page.
     */
    public getPage(appId: number, definitionId: string, after?: string, limit?: number, _options?: ConfigurationOptions): Observable<CollectionResponsePublicActionRevisionForwardPaging> {
        return this.getPageWithHttpInfo(appId, definitionId, after, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicActionRevisionForwardPaging>) => apiResponse.data));
    }

}
