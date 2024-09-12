import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { VisibleExternalEventTypeNames } from '../models/VisibleExternalEventTypeNames';

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiGetPageRequest {
    /**
     * The CRM Object type name to filter event instances on. Optionally, you can also provide an objectId in another param to filter to a specific CRM Object instance.
     * @type string
     * @memberof EventsApigetPage
     */
    objectType?: string
    /**
     * The event type name. A list of available event type names can be obtained from another API call.
     * @type string
     * @memberof EventsApigetPage
     */
    eventType?: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
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
     * The maximum number of results to display per page.
     * @type number
     * @memberof EventsApigetPage
     */
    limit?: number
    /**
     * Sort direction based on the timestamp of the event instance, ASCENDING or DESCENDING.
     * @type Array&lt;string&gt;
     * @memberof EventsApigetPage
     */
    sort?: Array<string>
    /**
     * 
     * @type Date
     * @memberof EventsApigetPage
     */
    occurredAfter?: Date
    /**
     * 
     * @type Date
     * @memberof EventsApigetPage
     */
    occurredBefore?: Date
    /**
     * The ID of the CRM Object to filter event instances on. If filtering on objectId, you must also provide an objectType.
     * @type number
     * @memberof EventsApigetPage
     */
    objectId?: number
    /**
     * 
     * @type any
     * @memberof EventsApigetPage
     */
    objectPropertyPropname?: any
    /**
     * 
     * @type any
     * @memberof EventsApigetPage
     */
    propertyPropname?: any
    /**
     * ID of an event instance. IDs are 1:1 with event instances. If you. provide this filter and additional filters, the other filters must match the values on the event instance to yield results.
     * @type Array&lt;string&gt;
     * @memberof EventsApigetPage
     */
    id?: Array<string>
}

export interface EventsApiGetTypesRequest {
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to query for event instances using filter criteria. 
     * Event Instance Query
     * @param param the request object
     */
    public getPageWithHttpInfo(param: EventsApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
        return this.api.getPageWithHttpInfo(param.objectType, param.eventType, param.after, param.before, param.limit, param.sort, param.occurredAfter, param.occurredBefore, param.objectId, param.objectPropertyPropname, param.propertyPropname, param.id,  options).toPromise();
    }

    /**
     * This endpoint allows you to query for event instances using filter criteria. 
     * Event Instance Query
     * @param param the request object
     */
    public getPage(param: EventsApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseExternalUnifiedEvent> {
        return this.api.getPage(param.objectType, param.eventType, param.after, param.before, param.limit, param.sort, param.occurredAfter, param.occurredBefore, param.objectId, param.objectPropertyPropname, param.propertyPropname, param.id,  options).toPromise();
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.
     * Event Types
     * @param param the request object
     */
    public getTypesWithHttpInfo(param: EventsApiGetTypesRequest = {}, options?: Configuration): Promise<HttpInfo<VisibleExternalEventTypeNames>> {
        return this.api.getTypesWithHttpInfo( options).toPromise();
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.
     * Event Types
     * @param param the request object
     */
    public getTypes(param: EventsApiGetTypesRequest = {}, options?: Configuration): Promise<VisibleExternalEventTypeNames> {
        return this.api.getTypes( options).toPromise();
    }

}
