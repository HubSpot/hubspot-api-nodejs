import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { VisibleExternalEventTypeNames } from '../models/VisibleExternalEventTypeNames';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * Retrieve instances of event completion data. For example, retrieve all event completions associated with a specific contact.
     * Retrieve event data
     * @param [objectType] The type of CRM object to filter event instances on (e.g., &#x60;contact&#x60;). To retrieve event data for a specific CRM record, include the additional &#x60;objectId&#x60; query parameter (below). 
     * @param [eventType] The event type name. You can retrieve available event types using the [event types endpoint](#get-%2Fevents%2Fv3%2Fevents%2Fevent-types).
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before]
     * @param [limit] The maximum number of results to display per page.
     * @param [sort] Sort direction based on the timestamp of the event instance, &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60;.
     * @param [occurredAfter] Filter for event data that occurred after a specific datetime.
     * @param [occurredBefore] Filter for event data that occurred before a specific datetime.
     * @param [objectId] The ID of the CRM Object to filter event instances on. When including this parameter, you must also include the &#x60;objectType&#x60; parameter.
     * @param [objectPropertyPropname] Instead of retrieving event data for a specific object by its ID, you can specify a unique identifier property. For contacts, you can use the &#x60;email&#x60; property. (e.g., &#x60;objectProperty.email&#x3D;name@domain.com&#x60;).
     * @param [propertyPropname] Filter for event completions that contain a specific value for an event property (e.g., &#x60;property.hs_city&#x3D;portland&#x60;). For properties values with spaces, replaces spaces with &#x60;%20&#x60; or &#x60;+&#x60; (e.g., &#x60;property.hs_city&#x3D;new+york&#x60;).
     * @param [id] ID of an event instance. IDs are 1:1 with event instances. If you provide this filter and additional filters, the other filters must match the values on the event instance to yield results.
     */
    public getPageWithHttpInfo(objectType?: string, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
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

        const requestContextPromise = this.requestFactory.getPage(objectType, eventType, after, before, limit, sort, occurredAfter, occurredBefore, objectId, objectPropertyPropname, propertyPropname, id, _config);
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
     * Retrieve instances of event completion data. For example, retrieve all event completions associated with a specific contact.
     * Retrieve event data
     * @param [objectType] The type of CRM object to filter event instances on (e.g., &#x60;contact&#x60;). To retrieve event data for a specific CRM record, include the additional &#x60;objectId&#x60; query parameter (below). 
     * @param [eventType] The event type name. You can retrieve available event types using the [event types endpoint](#get-%2Fevents%2Fv3%2Fevents%2Fevent-types).
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before]
     * @param [limit] The maximum number of results to display per page.
     * @param [sort] Sort direction based on the timestamp of the event instance, &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60;.
     * @param [occurredAfter] Filter for event data that occurred after a specific datetime.
     * @param [occurredBefore] Filter for event data that occurred before a specific datetime.
     * @param [objectId] The ID of the CRM Object to filter event instances on. When including this parameter, you must also include the &#x60;objectType&#x60; parameter.
     * @param [objectPropertyPropname] Instead of retrieving event data for a specific object by its ID, you can specify a unique identifier property. For contacts, you can use the &#x60;email&#x60; property. (e.g., &#x60;objectProperty.email&#x3D;name@domain.com&#x60;).
     * @param [propertyPropname] Filter for event completions that contain a specific value for an event property (e.g., &#x60;property.hs_city&#x3D;portland&#x60;). For properties values with spaces, replaces spaces with &#x60;%20&#x60; or &#x60;+&#x60; (e.g., &#x60;property.hs_city&#x3D;new+york&#x60;).
     * @param [id] ID of an event instance. IDs are 1:1 with event instances. If you provide this filter and additional filters, the other filters must match the values on the event instance to yield results.
     */
    public getPage(objectType?: string, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: ConfigurationOptions): Observable<CollectionResponseExternalUnifiedEvent> {
        return this.getPageWithHttpInfo(objectType, eventType, after, before, limit, sort, occurredAfter, occurredBefore, objectId, objectPropertyPropname, propertyPropname, id, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseExternalUnifiedEvent>) => apiResponse.data));
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.  Note: the `get_types` method is only supported in the Python SDK version `12.0.0-beta.1` or later. 
     * Event Types
     */
    public getTypesWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<VisibleExternalEventTypeNames>> {
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

        const requestContextPromise = this.requestFactory.getTypes(_config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.  Note: the `get_types` method is only supported in the Python SDK version `12.0.0-beta.1` or later. 
     * Event Types
     */
    public getTypes(_options?: ConfigurationOptions): Observable<VisibleExternalEventTypeNames> {
        return this.getTypesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<VisibleExternalEventTypeNames>) => apiResponse.data));
    }

}
