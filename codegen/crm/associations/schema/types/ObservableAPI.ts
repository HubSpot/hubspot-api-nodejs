import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';

import { TypesApiRequestFactory, TypesApiResponseProcessor} from "../apis/TypesApi";
export class ObservableTypesApi {
    private requestFactory: TypesApiRequestFactory;
    private responseProcessor: TypesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TypesApiRequestFactory,
        responseProcessor?: TypesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TypesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TypesApiResponseProcessor();
    }

    /**
     * List all the valid association types available between two object types
     * List association types
     * @param fromObjectType
     * @param toObjectType
     */
    public getAllWithHttpInfo(fromObjectType: string, toObjectType: string, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>> {
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
     * List all the valid association types available between two object types
     * List association types
     * @param fromObjectType
     * @param toObjectType
     */
    public getAll(fromObjectType: string, toObjectType: string, _options?: ConfigurationOptions): Observable<CollectionResponsePublicAssociationDefinitionNoPaging> {
        return this.getAllWithHttpInfo(fromObjectType, toObjectType, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicAssociationDefinitionNoPaging>) => apiResponse.data));
    }

}
