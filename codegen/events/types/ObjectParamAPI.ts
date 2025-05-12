import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { VisibleExternalEventTypeNames } from '../models/VisibleExternalEventTypeNames';

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiGetPageRequest {
    /**
     * The type of CRM object to filter event instances on (e.g., &#x60;contact&#x60;). To retrieve event data for a specific CRM record, include the additional &#x60;objectId&#x60; query parameter (below). 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApigetPage
     */
    objectType?: string
    /**
     * The event type name. You can retrieve available event types using the [event types endpoint](#get-%2Fevents%2Fv3%2Fevents%2Fevent-types).
     * Defaults to: undefined
     * @type string
     * @memberof EventsApigetPage
     */
    eventType?: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof EventsApigetPage
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApigetPage
     */
    before?: string
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof EventsApigetPage
     */
    limit?: number
    /**
     * Sort direction based on the timestamp of the event instance, &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60;.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof EventsApigetPage
     */
    sort?: Array<string>
    /**
     * Filter for event data that occurred after a specific datetime.
     * Defaults to: undefined
     * @type Date
     * @memberof EventsApigetPage
     */
    occurredAfter?: Date
    /**
     * Filter for event data that occurred before a specific datetime.
     * Defaults to: undefined
     * @type Date
     * @memberof EventsApigetPage
     */
    occurredBefore?: Date
    /**
     * The ID of the CRM Object to filter event instances on. When including this parameter, you must also include the &#x60;objectType&#x60; parameter.
     * Defaults to: undefined
     * @type number
     * @memberof EventsApigetPage
     */
    objectId?: number
    /**
     * Instead of retrieving event data for a specific object by its ID, you can specify a unique identifier property. For contacts, you can use the &#x60;email&#x60; property. (e.g., &#x60;objectProperty.email&#x3D;name@domain.com&#x60;).
     * Defaults to: undefined
     * @type any
     * @memberof EventsApigetPage
     */
    objectPropertyPropname?: any
    /**
     * Filter for event completions that contain a specific value for an event property (e.g., &#x60;property.hs_city&#x3D;portland&#x60;). For properties values with spaces, replaces spaces with &#x60;%20&#x60; or &#x60;+&#x60; (e.g., &#x60;property.hs_city&#x3D;new+york&#x60;).
     * Defaults to: undefined
     * @type any
     * @memberof EventsApigetPage
     */
    propertyPropname?: any
    /**
     * ID of an event instance. IDs are 1:1 with event instances. If you provide this filter and additional filters, the other filters must match the values on the event instance to yield results.
     * Defaults to: undefined
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
     * Retrieve instances of event completion data. For example, retrieve all event completions associated with a specific contact.
     * Retrieve event data
     * @param param the request object
     */
    public getPageWithHttpInfo(param: EventsApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
        return this.api.getPageWithHttpInfo(param.objectType, param.eventType, param.after, param.before, param.limit, param.sort, param.occurredAfter, param.occurredBefore, param.objectId, param.objectPropertyPropname, param.propertyPropname, param.id,  options).toPromise();
    }

    /**
     * Retrieve instances of event completion data. For example, retrieve all event completions associated with a specific contact.
     * Retrieve event data
     * @param param the request object
     */
    public getPage(param: EventsApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseExternalUnifiedEvent> {
        return this.api.getPage(param.objectType, param.eventType, param.after, param.before, param.limit, param.sort, param.occurredAfter, param.occurredBefore, param.objectId, param.objectPropertyPropname, param.propertyPropname, param.id,  options).toPromise();
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.  Note: the `get_types` method is only supported in the Python SDK version `12.0.0-beta.1` or later. 
     * Event Types
     * @param param the request object
     */
    public getTypesWithHttpInfo(param: EventsApiGetTypesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<VisibleExternalEventTypeNames>> {
        return this.api.getTypesWithHttpInfo( options).toPromise();
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.  Note: the `get_types` method is only supported in the Python SDK version `12.0.0-beta.1` or later. 
     * Event Types
     * @param param the request object
     */
    public getTypes(param: EventsApiGetTypesRequest = {}, options?: ConfigurationOptions): Promise<VisibleExternalEventTypeNames> {
        return this.api.getTypes( options).toPromise();
    }

}
