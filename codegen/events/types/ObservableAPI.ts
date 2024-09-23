import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
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
     * This endpoint allows you to query for event instances using filter criteria. 
     * Event Instance Query
     * @param objectType The CRM Object type name to filter event instances on. Optionally, you can also provide an objectId in another param to filter to a specific CRM Object instance.
     * @param eventType The event type name. A list of available event type names can be obtained from another API call.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     * @param sort Sort direction based on the timestamp of the event instance, ASCENDING or DESCENDING.
     * @param occurredAfter 
     * @param occurredBefore 
     * @param objectId The ID of the CRM Object to filter event instances on. If filtering on objectId, you must also provide an objectType.
     * @param objectPropertyPropname 
     * @param propertyPropname 
     * @param id ID of an event instance. IDs are 1:1 with event instances. If you. provide this filter and additional filters, the other filters must match the values on the event instance to yield results.
     */
    public getPageWithHttpInfo(objectType?: string, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: Configuration): Observable<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
        const requestContextPromise = this.requestFactory.getPage(objectType, eventType, after, before, limit, sort, occurredAfter, occurredBefore, objectId, objectPropertyPropname, propertyPropname, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows you to query for event instances using filter criteria. 
     * Event Instance Query
     * @param objectType The CRM Object type name to filter event instances on. Optionally, you can also provide an objectId in another param to filter to a specific CRM Object instance.
     * @param eventType The event type name. A list of available event type names can be obtained from another API call.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     * @param sort Sort direction based on the timestamp of the event instance, ASCENDING or DESCENDING.
     * @param occurredAfter 
     * @param occurredBefore 
     * @param objectId The ID of the CRM Object to filter event instances on. If filtering on objectId, you must also provide an objectType.
     * @param objectPropertyPropname 
     * @param propertyPropname 
     * @param id ID of an event instance. IDs are 1:1 with event instances. If you. provide this filter and additional filters, the other filters must match the values on the event instance to yield results.
     */
    public getPage(objectType?: string, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: Configuration): Observable<CollectionResponseExternalUnifiedEvent> {
        return this.getPageWithHttpInfo(objectType, eventType, after, before, limit, sort, occurredAfter, occurredBefore, objectId, objectPropertyPropname, propertyPropname, id, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseExternalUnifiedEvent>) => apiResponse.data));
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.
     * Event Types
     */
    public getTypesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<VisibleExternalEventTypeNames>> {
        const requestContextPromise = this.requestFactory.getTypes(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTypesWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.
     * Event Types
     */
    public getTypes(_options?: Configuration): Observable<VisibleExternalEventTypeNames> {
        return this.getTypesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<VisibleExternalEventTypeNames>) => apiResponse.data));
    }

}
