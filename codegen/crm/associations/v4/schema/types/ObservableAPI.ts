import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BatchInputPublicAssociationDefinitionConfigurationCreateRequest } from '../models/BatchInputPublicAssociationDefinitionConfigurationCreateRequest';
import { BatchInputPublicAssociationDefinitionConfigurationUpdateRequest } from '../models/BatchInputPublicAssociationDefinitionConfigurationUpdateRequest';
import { BatchInputPublicAssociationSpec } from '../models/BatchInputPublicAssociationSpec';
import { BatchResponsePublicAssociationDefinitionConfigurationUpdateResult } from '../models/BatchResponsePublicAssociationDefinitionConfigurationUpdateResult';
import { BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors } from '../models/BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors';
import { BatchResponsePublicAssociationDefinitionUserConfiguration } from '../models/BatchResponsePublicAssociationDefinitionUserConfiguration';
import { BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors } from '../models/BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors';
import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';

import { DefinitionConfigurationsApiRequestFactory, DefinitionConfigurationsApiResponseProcessor} from "../apis/DefinitionConfigurationsApi";
export class ObservableDefinitionConfigurationsApi {
    private requestFactory: DefinitionConfigurationsApiRequestFactory;
    private responseProcessor: DefinitionConfigurationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefinitionConfigurationsApiRequestFactory,
        responseProcessor?: DefinitionConfigurationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefinitionConfigurationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefinitionConfigurationsApiResponseProcessor();
    }

    /**
     * Batch create user configurations between two object types
     * Create
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationDefinitionConfigurationCreateRequest
     */
    public batchCreateWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationCreateRequest: BatchInputPublicAssociationDefinitionConfigurationCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
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
        allMiddleware = calltimeMiddleware
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
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.batchCreate(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationCreateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch create user configurations between two object types
     * Create
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationDefinitionConfigurationCreateRequest
     */
    public batchCreate(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationCreateRequest: BatchInputPublicAssociationDefinitionConfigurationCreateRequest, _options?: ConfigurationOptions): Observable<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration> {
        return this.batchCreateWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationCreateRequest, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration>) => apiResponse.data));
    }

    /**
     * Batch delete user configurations between two object types
     * Delete
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationSpec
     */
    public batchRemoveWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationSpec: BatchInputPublicAssociationSpec, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
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
        allMiddleware = calltimeMiddleware
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
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.batchRemove(fromObjectType, toObjectType, batchInputPublicAssociationSpec, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchRemoveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch delete user configurations between two object types
     * Delete
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationSpec
     */
    public batchRemove(fromObjectType: string, toObjectType: string, batchInputPublicAssociationSpec: BatchInputPublicAssociationSpec, _options?: ConfigurationOptions): Observable<void> {
        return this.batchRemoveWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationSpec, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Batch update user configurations between two object types
     * Update
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationDefinitionConfigurationUpdateRequest
     */
    public batchUpdateWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationUpdateRequest: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
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
        allMiddleware = calltimeMiddleware
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
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.batchUpdate(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationUpdateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.batchUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Batch update user configurations between two object types
     * Update
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationDefinitionConfigurationUpdateRequest
     */
    public batchUpdate(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationUpdateRequest: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest, _options?: ConfigurationOptions): Observable<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors> {
        return this.batchUpdateWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationDefinitionConfigurationUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors>) => apiResponse.data));
    }

    /**
     * Returns all user configurations available on a given portal
     * Read All
     */
    public getAllWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
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
        allMiddleware = calltimeMiddleware
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
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getAll(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all user configurations available on a given portal
     * Read All
     */
    public getAll(_options?: ConfigurationOptions): Observable<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        return this.getAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>) => apiResponse.data));
    }

    /**
     * Returns user configurations on all association definitions between two object types
     * Read
     * @param fromObjectType
     * @param toObjectType
     */
    public getAllBetweenTwoObjectTypesWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
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
        allMiddleware = calltimeMiddleware
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
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getAllBetweenTwoObjectTypes(fromObjectType, toObjectType, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBetweenTwoObjectTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns user configurations on all association definitions between two object types
     * Read
     * @param fromObjectType
     * @param toObjectType
     */
    public getAllBetweenTwoObjectTypes(fromObjectType: string, toObjectType: string, _options?: ConfigurationOptions): Observable<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging> {
        return this.getAllBetweenTwoObjectTypesWithHttpInfo(fromObjectType, toObjectType, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging>) => apiResponse.data));
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
     * Create a user defined association definition
     * Create
     * @param fromObjectType
     * @param toObjectType
     * @param publicAssociationDefinitionCreateRequest
     */
    public createWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
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
        allMiddleware = calltimeMiddleware
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
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.create(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _config);
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
     * Create a user defined association definition
     * Create
     * @param fromObjectType
     * @param toObjectType
     * @param publicAssociationDefinitionCreateRequest
     */
    public create(fromObjectType: string, toObjectType: string, publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest, _options?: ConfigurationOptions): Observable<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.createWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionCreateRequest, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>) => apiResponse.data));
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param fromObjectType
     * @param toObjectType
     */
    public getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
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
        allMiddleware = calltimeMiddleware
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
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getAll(fromObjectType, toObjectType, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param fromObjectType
     * @param toObjectType
     */
    public getAll(fromObjectType: string, toObjectType: string, _options?: ConfigurationOptions): Observable<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.getAllWithHttpInfo(fromObjectType, toObjectType, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>) => apiResponse.data));
    }

    /**
     * Deletes an association definition
     * Delete
     * @param fromObjectType
     * @param toObjectType
     * @param associationTypeId
     */
    public removeWithHttpInfo(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
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
        allMiddleware = calltimeMiddleware
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
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.remove(fromObjectType, toObjectType, associationTypeId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an association definition
     * Delete
     * @param fromObjectType
     * @param toObjectType
     * @param associationTypeId
     */
    public remove(fromObjectType: string, toObjectType: string, associationTypeId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.removeWithHttpInfo(fromObjectType, toObjectType, associationTypeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update a user defined association definition
     * Update
     * @param fromObjectType
     * @param toObjectType
     * @param publicAssociationDefinitionUpdateRequest
     */
    public updateWithHttpInfo(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
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
        allMiddleware = calltimeMiddleware
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
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.update(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _config);
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
     * Update a user defined association definition
     * Update
     * @param fromObjectType
     * @param toObjectType
     * @param publicAssociationDefinitionUpdateRequest
     */
    public update(fromObjectType: string, toObjectType: string, publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.updateWithHttpInfo(fromObjectType, toObjectType, publicAssociationDefinitionUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
