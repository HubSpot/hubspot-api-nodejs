import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { ErrorDetail } from '../models/ErrorDetail';
import { ExternalUnifiedEvent } from '../models/ExternalUnifiedEvent';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiGetPageRequest {
    /**
     * The starting time as an ISO 8601 timestamp.
     * @type Date
     * @memberof EventsApigetPage
     */
    occurredAfter?: Date
    /**
     * The ending time as an ISO 8601 timestamp.
     * @type Date
     * @memberof EventsApigetPage
     */
    occurredBefore?: Date
    /**
     * The type of object being selected. Valid values are hubspot named object types (e.g. &#x60;contact&#x60;).
     * @type string
     * @memberof EventsApigetPage
     */
    objectType?: string
    /**
     * The id of the selected object. If not present, then the &#x60;objectProperty&#x60; parameter is required.
     * @type number
     * @memberof EventsApigetPage
     */
    objectId?: number
    /**
     * Limits the response to the specified event type.  For example &#x60;&amp;eventType&#x3D;e_visited_page&#x60; returns only &#x60;e_visited_page&#x60; events.  If not present all event types are returned.
     * @type string
     * @memberof EventsApigetPage
     */
    eventType?: string
    /**
     * An additional parameter that may be used to get the next &#x60;limit&#x60; set of results.
     * @type string
     * @memberof EventsApigetPage
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof EventsApigetPage
     */
    before?: string
    /**
     * The maximum number of events to return, defaults to 20.
     * @type number
     * @memberof EventsApigetPage
     */
    limit?: number
    /**
     * Selects the sort field and order. Defaults to ascending, prefix with &#x60;-&#x60; for descending order. &#x60;occurredAt&#x60; is the only field supported for sorting.
     * @type Array&lt;string&gt;
     * @memberof EventsApigetPage
     */
    sort?: Array<string>
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a collection of events matching a query.
     * @param param the request object
     */
    public getPage(param: EventsApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseExternalUnifiedEvent> {
        return this.api.getPage(param.occurredAfter, param.occurredBefore, param.objectType, param.objectId, param.eventType, param.after, param.before, param.limit, param.sort,  options).toPromise();
    }

}
