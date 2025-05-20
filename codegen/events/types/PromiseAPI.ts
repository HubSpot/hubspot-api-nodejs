import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
     * Retrieve instances of event completion data. For example, retrieve all event completions associated with a specific contact.
     * Retrieve event data
     * @param [objectType] The type of CRM object to filter event instances on (e.g., &#x60;contact&#x60;). To retrieve event data for a specific CRM record, include the additional &#x60;objectId&#x60; query parameter (below). 
     * @param [eventType] The event type name. You can retrieve available event types using the [event types endpoint](#get-%2Fevents%2Fv3%2Fevents%2Fevent-types).
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before]
     * @param [limit] The maximum number of results to display per page.
     * @param [sort] Sort direction based on the timestamp of the event instance, &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60;.
     * @param [occurredAfter] Filter for event data that occurred after a specific datetime.
     * @param [occurredBefore] Filter for event data that occurred before a specific datetime.
     * @param [objectId] The ID of the CRM Object to filter event instances on. When including this parameter, you must also include the &#x60;objectType&#x60; parameter.
     * @param [objectPropertyPropname] Instead of retrieving event data for a specific object by its ID, you can specify a unique identifier property. For contacts, you can use the &#x60;email&#x60; property. (e.g., &#x60;objectProperty.email&#x3D;name@domain.com&#x60;).
     * @param [propertyPropname] Filter for event completions that contain a specific value for an event property (e.g., &#x60;property.hs_city&#x3D;portland&#x60;). For properties values with spaces, replaces spaces with &#x60;%20&#x60; or &#x60;+&#x60; (e.g., &#x60;property.hs_city&#x3D;new+york&#x60;).
     * @param [id] ID of an event instance. IDs are 1:1 with event instances. If you provide this filter and additional filters, the other filters must match the values on the event instance to yield results.
     */
    public getPageWithHttpInfo(objectType?: string, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageWithHttpInfo(objectType, eventType, after, before, limit, sort, occurredAfter, occurredBefore, objectId, objectPropertyPropname, propertyPropname, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve instances of event completion data. For example, retrieve all event completions associated with a specific contact.
     * Retrieve event data
     * @param [objectType] The type of CRM object to filter event instances on (e.g., &#x60;contact&#x60;). To retrieve event data for a specific CRM record, include the additional &#x60;objectId&#x60; query parameter (below). 
     * @param [eventType] The event type name. You can retrieve available event types using the [event types endpoint](#get-%2Fevents%2Fv3%2Fevents%2Fevent-types).
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before]
     * @param [limit] The maximum number of results to display per page.
     * @param [sort] Sort direction based on the timestamp of the event instance, &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60;.
     * @param [occurredAfter] Filter for event data that occurred after a specific datetime.
     * @param [occurredBefore] Filter for event data that occurred before a specific datetime.
     * @param [objectId] The ID of the CRM Object to filter event instances on. When including this parameter, you must also include the &#x60;objectType&#x60; parameter.
     * @param [objectPropertyPropname] Instead of retrieving event data for a specific object by its ID, you can specify a unique identifier property. For contacts, you can use the &#x60;email&#x60; property. (e.g., &#x60;objectProperty.email&#x3D;name@domain.com&#x60;).
     * @param [propertyPropname] Filter for event completions that contain a specific value for an event property (e.g., &#x60;property.hs_city&#x3D;portland&#x60;). For properties values with spaces, replaces spaces with &#x60;%20&#x60; or &#x60;+&#x60; (e.g., &#x60;property.hs_city&#x3D;new+york&#x60;).
     * @param [id] ID of an event instance. IDs are 1:1 with event instances. If you provide this filter and additional filters, the other filters must match the values on the event instance to yield results.
     */
    public getPage(objectType?: string, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CollectionResponseExternalUnifiedEvent> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPage(objectType, eventType, after, before, limit, sort, occurredAfter, occurredBefore, objectId, objectPropertyPropname, propertyPropname, id, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.  Note: the `get_types` method is only supported in the Python SDK version `12.0.0-beta.1` or later. 
     * Event Types
     */
    public getTypesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<VisibleExternalEventTypeNames>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getTypesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.  Note: the `get_types` method is only supported in the Python SDK version `12.0.0-beta.1` or later. 
     * Event Types
     */
    public getTypes(_options?: PromiseConfigurationOptions): Promise<VisibleExternalEventTypeNames> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getTypes(observableOptions);
        return result.toPromise();
    }


}



