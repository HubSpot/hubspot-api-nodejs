import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { ErrorDetail } from '../models/ErrorDetail';
import { ExternalUnifiedEvent } from '../models/ExternalUnifiedEvent';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
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
    public getPage(occurredAfter?: Date, occurredBefore?: Date, objectType?: string, objectId?: number, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: Configuration): Promise<CollectionResponseExternalUnifiedEvent> {
        const result = this.api.getPage(occurredAfter, occurredBefore, objectType, objectId, eventType, after, before, limit, sort, _options);
        return result.toPromise();
    }


}



