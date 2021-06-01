import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { ErrorDetail } from '../models/ErrorDetail';
import { ExternalUnifiedEvent } from '../models/ExternalUnifiedEvent';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';

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
     * Returns a collection of events matching a query.
     * @param occurredAfter The starting time as an ISO 8601 timestamp.
     * @param occurredBefore The ending time as an ISO 8601 timestamp.
     * @param objectType The type of object being selected. Valid values are hubspot named object types (e.g. &#x60;contact&#x60;).
     * @param objectId The id of the selected object. If not present, then the &#x60;objectProperty&#x60; parameter is required.
     * @param eventType Limits the response to the specified event type.  For example &#x60;&amp;eventType&#x3D;e_visited_page&#x60; returns only &#x60;e_visited_page&#x60; events.  If not present all event types are returned.
     * @param after An additional parameter that may be used to get the next &#x60;limit&#x60; set of results.
     * @param before 
     * @param limit The maximum number of events to return, defaults to 20.
     * @param sort Selects the sort field and order. Defaults to ascending, prefix with &#x60;-&#x60; for descending order. &#x60;occurredAt&#x60; is the only field supported for sorting.
     */
    public getPage(occurredAfter?: Date, occurredBefore?: Date, objectType?: string, objectId?: number, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: Configuration): Observable<CollectionResponseExternalUnifiedEvent> {
        const requestContextPromise = this.requestFactory.getPage(occurredAfter, occurredBefore, objectType, objectId, eventType, after, before, limit, sort, _options);

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
