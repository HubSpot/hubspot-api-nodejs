import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
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
    public getPageWithHttpInfo(objectType?: string, eventType?: string, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, indexTableName?: string, indexSpecificMetadata?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: Configuration): Promise<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
        const result = this.api.getPageWithHttpInfo(objectType, eventType, occurredAfter, occurredBefore, objectId, indexTableName, indexSpecificMetadata, after, before, limit, sort, objectPropertyPropname, propertyPropname, id, _options);
        return result.toPromise();
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
    public getPage(objectType?: string, eventType?: string, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, indexTableName?: string, indexSpecificMetadata?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: Configuration): Promise<CollectionResponseExternalUnifiedEvent> {
        const result = this.api.getPage(objectType, eventType, occurredAfter, occurredBefore, objectId, indexTableName, indexSpecificMetadata, after, before, limit, sort, objectPropertyPropname, propertyPropname, id, _options);
        return result.toPromise();
    }


}



