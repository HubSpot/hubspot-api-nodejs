import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';

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
     * @param objectType 
     * @param eventType 
     * @param occurredAfter 
     * @param occurredBefore 
     * @param objectId 
     * @param indexTableName 
     * @param indexSpecificMetadata 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     * @param sort 
     * @param objectPropertyPropname 
     * @param propertyPropname 
     * @param id 
     */
    public getPageWithHttpInfo(objectType?: string, eventType?: string, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, indexTableName?: string, indexSpecificMetadata?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: Configuration): Observable<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
        const requestContextPromise = this.requestFactory.getPage(objectType, eventType, occurredAfter, occurredBefore, objectId, indexTableName, indexSpecificMetadata, after, before, limit, sort, objectPropertyPropname, propertyPropname, id, _options);

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
     * @param objectType 
     * @param eventType 
     * @param occurredAfter 
     * @param occurredBefore 
     * @param objectId 
     * @param indexTableName 
     * @param indexSpecificMetadata 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     * @param sort 
     * @param objectPropertyPropname 
     * @param propertyPropname 
     * @param id 
     */
    public getPage(objectType?: string, eventType?: string, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, indexTableName?: string, indexSpecificMetadata?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: Configuration): Observable<CollectionResponseExternalUnifiedEvent> {
        return this.getPageWithHttpInfo(objectType, eventType, occurredAfter, occurredBefore, objectId, indexTableName, indexSpecificMetadata, after, before, limit, sort, objectPropertyPropname, propertyPropname, id, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseExternalUnifiedEvent>) => apiResponse.data));
    }

}
