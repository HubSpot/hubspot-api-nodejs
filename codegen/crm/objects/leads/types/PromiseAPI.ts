import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectBatchInputForCreate } from '../models/BatchInputSimplePublicObjectBatchInputForCreate';
import { BatchInputSimplePublicObjectBatchInputUpsert } from '../models/BatchInputSimplePublicObjectBatchInputUpsert';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { BatchResponseSimplePublicUpsertObject } from '../models/BatchResponseSimplePublicUpsertObject';
import { BatchResponseSimplePublicUpsertObjectWithErrors } from '../models/BatchResponseSimplePublicUpsertObjectWithErrors';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObject } from '../models/CollectionResponseWithTotalSimplePublicObject';
import { PublicObjectSearchRequest } from '../models/PublicObjectSearchRequest';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectInputForCreate } from '../models/SimplePublicObjectInputForCreate';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';
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
     * Move an Object identified by `{leadsId}` to the recycling bin.
     * Archive
     * @param leadsId
     */
    public archiveWithHttpInfo(leadsId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(leadsId, observableOptions);
        return result.toPromise();
    }

    /**
     * Move an Object identified by `{leadsId}` to the recycling bin.
     * Archive
     * @param leadsId
     */
    public archive(leadsId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(leadsId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a lead with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard leads is provided.
     * Create
     * @param simplePublicObjectInputForCreate
     */
    public createWithHttpInfo(simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SimplePublicObject>> {
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
        const result = this.api.createWithHttpInfo(simplePublicObjectInputForCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a lead with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard leads is provided.
     * Create
     * @param simplePublicObjectInputForCreate
     */
    public create(simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: PromiseConfigurationOptions): Promise<SimplePublicObject> {
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
        const result = this.api.create(simplePublicObjectInputForCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Read an Object identified by `{leadsId}`. `{leadsId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param leadsId
     * @param [archived] Whether to return only results that have been archived.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [idProperty] The name of a property whose values are unique for this object type
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     */
    public getByIdWithHttpInfo(leadsId: string, archived?: boolean, associations?: Array<string>, idProperty?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SimplePublicObjectWithAssociations>> {
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
        const result = this.api.getByIdWithHttpInfo(leadsId, archived, associations, idProperty, properties, propertiesWithHistory, observableOptions);
        return result.toPromise();
    }

    /**
     * Read an Object identified by `{leadsId}`. `{leadsId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param leadsId
     * @param [archived] Whether to return only results that have been archived.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [idProperty] The name of a property whose values are unique for this object type
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     */
    public getById(leadsId: string, archived?: boolean, associations?: Array<string>, idProperty?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, _options?: PromiseConfigurationOptions): Promise<SimplePublicObjectWithAssociations> {
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
        const result = this.api.getById(leadsId, archived, associations, idProperty, properties, propertiesWithHistory, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a page of leads. Control what is returned via the `properties` query param.
     * List
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [limit] The maximum number of results to display per page.
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     */
    public getPageWithHttpInfo(after?: string, archived?: boolean, associations?: Array<string>, limit?: number, properties?: Array<string>, propertiesWithHistory?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>> {
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
        const result = this.api.getPageWithHttpInfo(after, archived, associations, limit, properties, propertiesWithHistory, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a page of leads. Control what is returned via the `properties` query param.
     * List
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [limit] The maximum number of results to display per page.
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     */
    public getPage(after?: string, archived?: boolean, associations?: Array<string>, limit?: number, properties?: Array<string>, propertiesWithHistory?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
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
        const result = this.api.getPage(after, archived, associations, limit, properties, propertiesWithHistory, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{leadsId}`or optionally a unique property value as specified by the `idProperty` query param. `{leadsId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object. Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.
     * Update
     * @param leadsId
     * @param simplePublicObjectInput
     * @param [idProperty] The name of a property whose values are unique for this object type
     */
    public updateWithHttpInfo(leadsId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SimplePublicObject>> {
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
        const result = this.api.updateWithHttpInfo(leadsId, simplePublicObjectInput, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{leadsId}`or optionally a unique property value as specified by the `idProperty` query param. `{leadsId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object. Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.
     * Update
     * @param leadsId
     * @param simplePublicObjectInput
     * @param [idProperty] The name of a property whose values are unique for this object type
     */
    public update(leadsId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: PromiseConfigurationOptions): Promise<SimplePublicObject> {
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
        const result = this.api.update(leadsId, simplePublicObjectInput, idProperty, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBatchApi } from './ObservableAPI';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class PromiseBatchApi {
    private api: ObservableBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive multiple leads by their IDs in a single request, moving them to the recycling bin.
     * Archive a batch of leads by ID
     * @param batchInputSimplePublicObjectId
     */
    public archiveWithHttpInfo(batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(batchInputSimplePublicObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive multiple leads by their IDs in a single request, moving them to the recycling bin.
     * Archive a batch of leads by ID
     * @param batchInputSimplePublicObjectId
     */
    public archive(batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(batchInputSimplePublicObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create multiple lead records in a single request by providing a batch of lead data. This endpoint allows for efficient creation of leads by processing them together, which can be useful for syncing data from other systems or importing large datasets.
     * Create a batch of leads
     * @param batchInputSimplePublicObjectBatchInputForCreate
     */
    public createWithHttpInfo(batchInputSimplePublicObjectBatchInputForCreate: BatchInputSimplePublicObjectBatchInputForCreate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
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
        const result = this.api.createWithHttpInfo(batchInputSimplePublicObjectBatchInputForCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Create multiple lead records in a single request by providing a batch of lead data. This endpoint allows for efficient creation of leads by processing them together, which can be useful for syncing data from other systems or importing large datasets.
     * Create a batch of leads
     * @param batchInputSimplePublicObjectBatchInputForCreate
     */
    public create(batchInputSimplePublicObjectBatchInputForCreate: BatchInputSimplePublicObjectBatchInputForCreate, _options?: PromiseConfigurationOptions): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
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
        const result = this.api.create(batchInputSimplePublicObjectBatchInputForCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve records by record ID or include the `idProperty` parameter to retrieve records by a custom unique value property. 
     * Read a batch of leads by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId
     * @param [archived] Whether to return only results that have been archived.
     */
    public readWithHttpInfo(batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
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
        const result = this.api.readWithHttpInfo(batchReadInputSimplePublicObjectId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve records by record ID or include the `idProperty` parameter to retrieve records by a custom unique value property. 
     * Read a batch of leads by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId
     * @param [archived] Whether to return only results that have been archived.
     */
    public read(batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
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
        const result = this.api.read(batchReadInputSimplePublicObjectId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update multiple lead records using their internal IDs or unique property values. This endpoint allows batch processing of updates, where each lead\'s properties can be modified based on the provided input. Ensure that the properties being updated exist on the lead objects to avoid errors.
     * Update a batch of leads by internal ID, or unique property values
     * @param batchInputSimplePublicObjectBatchInput
     */
    public updateWithHttpInfo(batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
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
        const result = this.api.updateWithHttpInfo(batchInputSimplePublicObjectBatchInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Update multiple lead records using their internal IDs or unique property values. This endpoint allows batch processing of updates, where each lead\'s properties can be modified based on the provided input. Ensure that the properties being updated exist on the lead objects to avoid errors.
     * Update a batch of leads by internal ID, or unique property values
     * @param batchInputSimplePublicObjectBatchInput
     */
    public update(batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: PromiseConfigurationOptions): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
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
        const result = this.api.update(batchInputSimplePublicObjectBatchInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or update records identified by a unique property value as specified by the `idProperty` query param. `idProperty` query param refers to a property whose values are unique for the object.
     * Create or update a batch of leads by unique property values
     * @param batchInputSimplePublicObjectBatchInputUpsert
     */
    public upsertWithHttpInfo(batchInputSimplePublicObjectBatchInputUpsert: BatchInputSimplePublicObjectBatchInputUpsert, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject>> {
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
        const result = this.api.upsertWithHttpInfo(batchInputSimplePublicObjectBatchInputUpsert, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or update records identified by a unique property value as specified by the `idProperty` query param. `idProperty` query param refers to a property whose values are unique for the object.
     * Create or update a batch of leads by unique property values
     * @param batchInputSimplePublicObjectBatchInputUpsert
     */
    public upsert(batchInputSimplePublicObjectBatchInputUpsert: BatchInputSimplePublicObjectBatchInputUpsert, _options?: PromiseConfigurationOptions): Promise<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject> {
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
        const result = this.api.upsert(batchInputSimplePublicObjectBatchInputUpsert, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Perform a search for leads based on the provided filter groups, properties, and sorting options. The request allows for pagination and can return up to 200 results per page.
     * Search for leads using specified criteria.
     * @param publicObjectSearchRequest
     */
    public doSearchWithHttpInfo(publicObjectSearchRequest: PublicObjectSearchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalSimplePublicObject>> {
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
        const result = this.api.doSearchWithHttpInfo(publicObjectSearchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a search for leads based on the provided filter groups, properties, and sorting options. The request allows for pagination and can return up to 200 results per page.
     * Search for leads using specified criteria.
     * @param publicObjectSearchRequest
     */
    public doSearch(publicObjectSearchRequest: PublicObjectSearchRequest, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalSimplePublicObject> {
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
        const result = this.api.doSearch(publicObjectSearchRequest, observableOptions);
        return result.toPromise();
    }


}



