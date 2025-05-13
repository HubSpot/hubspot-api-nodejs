import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponsePublicBusinessUnitNoPaging } from '../models/CollectionResponsePublicBusinessUnitNoPaging';

import { BusinessUnitApiRequestFactory, BusinessUnitApiResponseProcessor} from "../apis/BusinessUnitApi";
export class ObservableBusinessUnitApi {
    private requestFactory: BusinessUnitApiRequestFactory;
    private responseProcessor: BusinessUnitApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessUnitApiRequestFactory,
        responseProcessor?: BusinessUnitApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BusinessUnitApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BusinessUnitApiResponseProcessor();
    }

    /**
     * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
     * Get Business Units for a user
     * @param userId Identifier of user to retrieve.
     * @param [properties] The names of properties to optionally include in the response body. The only valid value is &#x60;logoMetadata&#x60;.
     * @param [name] The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.
     */
    public getByUserIDWithHttpInfo(userId: string, properties?: Array<string>, name?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>> {
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

        const requestContextPromise = this.requestFactory.getByUserID(userId, properties, name, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByUserIDWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
     * Get Business Units for a user
     * @param userId Identifier of user to retrieve.
     * @param [properties] The names of properties to optionally include in the response body. The only valid value is &#x60;logoMetadata&#x60;.
     * @param [name] The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.
     */
    public getByUserID(userId: string, properties?: Array<string>, name?: Array<string>, _options?: ConfigurationOptions): Observable<CollectionResponsePublicBusinessUnitNoPaging> {
        return this.getByUserIDWithHttpInfo(userId, properties, name, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicBusinessUnitNoPaging>) => apiResponse.data));
    }

}
