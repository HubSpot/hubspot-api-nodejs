import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { VisibleExternalEventTypeNames } from '../models/VisibleExternalEventTypeNames';
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
    public getPageWithHttpInfo(objectType?: string, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: Configuration): Promise<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
        const result = this.api.getPageWithHttpInfo(objectType, eventType, after, before, limit, sort, occurredAfter, occurredBefore, objectId, objectPropertyPropname, propertyPropname, id, _options);
        return result.toPromise();
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
    public getPage(objectType?: string, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: Configuration): Promise<CollectionResponseExternalUnifiedEvent> {
        const result = this.api.getPage(objectType, eventType, after, before, limit, sort, occurredAfter, occurredBefore, objectId, objectPropertyPropname, propertyPropname, id, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.
     * Event Types
     */
    public getTypesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<VisibleExternalEventTypeNames>> {
        const result = this.api.getTypesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.
     * Event Types
     */
    public getTypes(_options?: Configuration): Promise<VisibleExternalEventTypeNames> {
        const result = this.api.getTypes(_options);
        return result.toPromise();
    }


}



