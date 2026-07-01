import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { VisibleExternalEventTypeNames } from '../models/VisibleExternalEventTypeNames';
import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] 
     * @param [eventType] 
     * @param [id] 
     * @param [limit] The maximum number of results to display per page.
     * @param [objectId] 
     * @param [objectPropertyPropname] 
     * @param [objectType] 
     * @param [occurredAfter] 
     * @param [occurredBefore] 
     * @param [properties] 
     * @param [propertyPropname] 
     * @param [sort] 
     */
    public eventsV3EventsWithHttpInfo(after?: string, before?: string, eventType?: string, id?: Array<string>, limit?: number, objectId?: number, objectPropertyPropname?: any, objectType?: string, occurredAfter?: Date, occurredBefore?: Date, properties?: Array<string>, propertyPropname?: any, sort?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseExternalUnifiedEvent>> {
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
        const result = this.api.eventsV3EventsWithHttpInfo(after, before, eventType, id, limit, objectId, objectPropertyPropname, objectType, occurredAfter, occurredBefore, properties, propertyPropname, sort, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] 
     * @param [eventType] 
     * @param [id] 
     * @param [limit] The maximum number of results to display per page.
     * @param [objectId] 
     * @param [objectPropertyPropname] 
     * @param [objectType] 
     * @param [occurredAfter] 
     * @param [occurredBefore] 
     * @param [properties] 
     * @param [propertyPropname] 
     * @param [sort] 
     */
    public eventsV3Events(after?: string, before?: string, eventType?: string, id?: Array<string>, limit?: number, objectId?: number, objectPropertyPropname?: any, objectType?: string, occurredAfter?: Date, occurredBefore?: Date, properties?: Array<string>, propertyPropname?: any, sort?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CollectionResponseExternalUnifiedEvent> {
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
        const result = this.api.eventsV3Events(after, before, eventType, id, limit, objectId, objectPropertyPropname, objectType, occurredAfter, occurredBefore, properties, propertyPropname, sort, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public eventsV3EventsEventTypesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<VisibleExternalEventTypeNames>> {
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
        const result = this.api.eventsV3EventsEventTypesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public eventsV3EventsEventTypes(_options?: PromiseConfigurationOptions): Promise<VisibleExternalEventTypeNames> {
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
        const result = this.api.eventsV3EventsEventTypes(observableOptions);
        return result.toPromise();
    }


}



