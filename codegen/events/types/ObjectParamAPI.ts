import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { VisibleExternalEventTypeNames } from '../models/VisibleExternalEventTypeNames';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiEventsV3EventsRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApieventsV3Events
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApieventsV3Events
     */
    before?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApieventsV3Events
     */
    eventType?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApieventsV3Events
     */
    id?: Array<string>
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApieventsV3Events
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApieventsV3Events
     */
    objectId?: number
    /**
     * 
     * Defaults to: undefined
     * @type any
     * @memberof BasicApieventsV3Events
     */
    objectPropertyPropname?: any
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApieventsV3Events
     */
    objectType?: string
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApieventsV3Events
     */
    occurredAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApieventsV3Events
     */
    occurredBefore?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApieventsV3Events
     */
    properties?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type any
     * @memberof BasicApieventsV3Events
     */
    propertyPropname?: any
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApieventsV3Events
     */
    sort?: Array<string>
}

export interface BasicApiEventsV3EventsEventTypesRequest {
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public eventsV3EventsWithHttpInfo(param: BasicApiEventsV3EventsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
        return this.api.eventsV3EventsWithHttpInfo(param.after, param.before, param.eventType, param.id, param.limit, param.objectId, param.objectPropertyPropname, param.objectType, param.occurredAfter, param.occurredBefore, param.properties, param.propertyPropname, param.sort,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventsV3Events(param: BasicApiEventsV3EventsRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseExternalUnifiedEvent> {
        return this.api.eventsV3Events(param.after, param.before, param.eventType, param.id, param.limit, param.objectId, param.objectPropertyPropname, param.objectType, param.occurredAfter, param.occurredBefore, param.properties, param.propertyPropname, param.sort,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventsV3EventsEventTypesWithHttpInfo(param: BasicApiEventsV3EventsEventTypesRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<VisibleExternalEventTypeNames>> {
        return this.api.eventsV3EventsEventTypesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventsV3EventsEventTypes(param: BasicApiEventsV3EventsEventTypesRequest = {}, options?: ConfigurationOptions): Promise<VisibleExternalEventTypeNames> {
        return this.api.eventsV3EventsEventTypes( options).toPromise();
    }

}
