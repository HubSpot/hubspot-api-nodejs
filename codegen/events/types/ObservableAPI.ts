import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { VisibleExternalEventTypeNames } from '../models/VisibleExternalEventTypeNames';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class ObservableBasicApi {
    private requestFactory: BasicApiRequestFactory;
    private responseProcessor: BasicApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicApiResponseProcessor();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] 
     * @param [eventType] 
     * @param [id] 
     * @param [limit] The maximum number of results to display per page.
     * @param [objectId] 
     * @param [objectPropertyPropname] 
     * @param [objectType] 
     * @param [occurredAfter] 
     * @param [occurredBefore] 
     * @param [properties] 
     * @param [propertyPropname] 
     * @param [sort] 
     */
    public eventsV3EventsWithHttpInfo(after?: string, before?: string, eventType?: string, id?: Array<string>, limit?: number, objectId?: number, objectPropertyPropname?: any, objectType?: string, occurredAfter?: Date, occurredBefore?: Date, properties?: Array<string>, propertyPropname?: any, sort?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
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

        const requestContextPromise = this.requestFactory.eventsV3Events(after, before, eventType, id, limit, objectId, objectPropertyPropname, objectType, occurredAfter, occurredBefore, properties, propertyPropname, sort, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsV3EventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] 
     * @param [eventType] 
     * @param [id] 
     * @param [limit] The maximum number of results to display per page.
     * @param [objectId] 
     * @param [objectPropertyPropname] 
     * @param [objectType] 
     * @param [occurredAfter] 
     * @param [occurredBefore] 
     * @param [properties] 
     * @param [propertyPropname] 
     * @param [sort] 
     */
    public eventsV3Events(after?: string, before?: string, eventType?: string, id?: Array<string>, limit?: number, objectId?: number, objectPropertyPropname?: any, objectType?: string, occurredAfter?: Date, occurredBefore?: Date, properties?: Array<string>, propertyPropname?: any, sort?: Array<string>, _options?: ConfigurationOptions): Observable<CollectionResponseExternalUnifiedEvent> {
        return this.eventsV3EventsWithHttpInfo(after, before, eventType, id, limit, objectId, objectPropertyPropname, objectType, occurredAfter, occurredBefore, properties, propertyPropname, sort, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseExternalUnifiedEvent>) => apiResponse.data));
    }

    /**
     */
    public eventsV3EventsEventTypesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<VisibleExternalEventTypeNames>> {
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

        const requestContextPromise = this.requestFactory.eventsV3EventsEventTypes(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsV3EventsEventTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public eventsV3EventsEventTypes(_options?: ConfigurationOptions): Observable<VisibleExternalEventTypeNames> {
        return this.eventsV3EventsEventTypesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<VisibleExternalEventTypeNames>) => apiResponse.data));
    }

}
