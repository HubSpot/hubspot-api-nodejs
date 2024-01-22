import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiGetPageRequest {
    /**
     * 
     * @type string
     * @memberof EventsApigetPage
     */
    objectType?: string
    /**
     * 
     * @type string
     * @memberof EventsApigetPage
     */
    eventType?: string
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
     * 
     * @type number
     * @memberof EventsApigetPage
     */
    objectId?: number
    /**
     * 
     * @type string
     * @memberof EventsApigetPage
     */
    indexTableName?: string
    /**
     * 
     * @type string
     * @memberof EventsApigetPage
     */
    indexSpecificMetadata?: string
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
     * 
     * @type Array&lt;string&gt;
     * @memberof EventsApigetPage
     */
    sort?: Array<string>
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
     * 
     * @type Array&lt;string&gt;
     * @memberof EventsApigetPage
     */
    id?: Array<string>
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getPageWithHttpInfo(param: EventsApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
        return this.api.getPageWithHttpInfo(param.objectType, param.eventType, param.occurredAfter, param.occurredBefore, param.objectId, param.indexTableName, param.indexSpecificMetadata, param.after, param.before, param.limit, param.sort, param.objectPropertyPropname, param.propertyPropname, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPage(param: EventsApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseExternalUnifiedEvent> {
        return this.api.getPage(param.objectType, param.eventType, param.occurredAfter, param.occurredBefore, param.objectId, param.indexTableName, param.indexSpecificMetadata, param.after, param.before, param.limit, param.sort, param.objectPropertyPropname, param.propertyPropname, param.id,  options).toPromise();
    }

}
