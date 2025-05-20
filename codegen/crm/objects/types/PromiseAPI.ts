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
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
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
     * Move an Object identified by `{objectId}` to the recycling bin.
     * Archive
     * @param objectType
     * @param objectId
     */
    public archiveWithHttpInfo(objectType: string, objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(objectType, objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Move an Object identified by `{objectId}` to the recycling bin.
     * Archive
     * @param objectType
     * @param objectId
     */
    public archive(objectType: string, objectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(objectType, objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a CRM object with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard objects is provided.
     * Create
     * @param objectType
     * @param simplePublicObjectInputForCreate
     */
    public createWithHttpInfo(objectType: string, simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SimplePublicObject>> {
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
        const result = this.api.createWithHttpInfo(objectType, simplePublicObjectInputForCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a CRM object with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard objects is provided.
     * Create
     * @param objectType
     * @param simplePublicObjectInputForCreate
     */
    public create(objectType: string, simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate, _options?: PromiseConfigurationOptions): Promise<SimplePublicObject> {
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
        const result = this.api.create(objectType, simplePublicObjectInputForCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Read an Object identified by `{objectId}`. `{objectId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param objectType
     * @param objectId
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [archived] Whether to return only results that have been archived.
     * @param [idProperty] The name of a property whose values are unique for this object
     */
    public getByIdWithHttpInfo(objectType: string, objectId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SimplePublicObjectWithAssociations>> {
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
        const result = this.api.getByIdWithHttpInfo(objectType, objectId, properties, propertiesWithHistory, associations, archived, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Read an Object identified by `{objectId}`. `{objectId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param objectType
     * @param objectId
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [archived] Whether to return only results that have been archived.
     * @param [idProperty] The name of a property whose values are unique for this object
     */
    public getById(objectType: string, objectId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: PromiseConfigurationOptions): Promise<SimplePublicObjectWithAssociations> {
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
        const result = this.api.getById(objectType, objectId, properties, propertiesWithHistory, associations, archived, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a page of objects. Control what is returned via the `properties` query param.
     * List
     * @param objectType
     * @param [limit] The maximum number of results to display per page.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getPageWithHttpInfo(objectType: string, limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>> {
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
        const result = this.api.getPageWithHttpInfo(objectType, limit, after, properties, propertiesWithHistory, associations, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a page of objects. Control what is returned via the `properties` query param.
     * List
     * @param objectType
     * @param [limit] The maximum number of results to display per page.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getPage(objectType: string, limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
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
        const result = this.api.getPage(objectType, limit, after, properties, propertiesWithHistory, associations, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{objectId}`or optionally a unique property value as specified by the `idProperty` query param. `{objectId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object. Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.
     * Update
     * @param objectType
     * @param objectId
     * @param simplePublicObjectInput
     * @param [idProperty] The name of a property whose values are unique for this object
     */
    public updateWithHttpInfo(objectType: string, objectId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SimplePublicObject>> {
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
        const result = this.api.updateWithHttpInfo(objectType, objectId, simplePublicObjectInput, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a partial update of an Object identified by `{objectId}`or optionally a unique property value as specified by the `idProperty` query param. `{objectId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object. Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.
     * Update
     * @param objectType
     * @param objectId
     * @param simplePublicObjectInput
     * @param [idProperty] The name of a property whose values are unique for this object
     */
    public update(objectType: string, objectId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: PromiseConfigurationOptions): Promise<SimplePublicObject> {
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
        const result = this.api.update(objectType, objectId, simplePublicObjectInput, idProperty, observableOptions);
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
     * Archive a batch of objects by ID
     * @param objectType
     * @param batchInputSimplePublicObjectId
     */
    public archiveWithHttpInfo(objectType: string, batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(objectType, batchInputSimplePublicObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a batch of objects by ID
     * @param objectType
     * @param batchInputSimplePublicObjectId
     */
    public archive(objectType: string, batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(objectType, batchInputSimplePublicObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of objects
     * @param objectType
     * @param batchInputSimplePublicObjectBatchInputForCreate
     */
    public createWithHttpInfo(objectType: string, batchInputSimplePublicObjectBatchInputForCreate: BatchInputSimplePublicObjectBatchInputForCreate, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
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
        const result = this.api.createWithHttpInfo(objectType, batchInputSimplePublicObjectBatchInputForCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of objects
     * @param objectType
     * @param batchInputSimplePublicObjectBatchInputForCreate
     */
    public create(objectType: string, batchInputSimplePublicObjectBatchInputForCreate: BatchInputSimplePublicObjectBatchInputForCreate, _options?: PromiseConfigurationOptions): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
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
        const result = this.api.create(objectType, batchInputSimplePublicObjectBatchInputForCreate, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve records by record ID or include the `idProperty` parameter to retrieve records by a custom unique value property. 
     * Read a batch of objects by internal ID, or unique property values
     * @param objectType
     * @param batchReadInputSimplePublicObjectId
     * @param [archived] Whether to return only results that have been archived.
     */
    public readWithHttpInfo(objectType: string, batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
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
        const result = this.api.readWithHttpInfo(objectType, batchReadInputSimplePublicObjectId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve records by record ID or include the `idProperty` parameter to retrieve records by a custom unique value property. 
     * Read a batch of objects by internal ID, or unique property values
     * @param objectType
     * @param batchReadInputSimplePublicObjectId
     * @param [archived] Whether to return only results that have been archived.
     */
    public read(objectType: string, batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
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
        const result = this.api.read(objectType, batchReadInputSimplePublicObjectId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a batch of objects by internal ID, or unique property values
     * @param objectType
     * @param batchInputSimplePublicObjectBatchInput
     */
    public updateWithHttpInfo(objectType: string, batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors>> {
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
        const result = this.api.updateWithHttpInfo(objectType, batchInputSimplePublicObjectBatchInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a batch of objects by internal ID, or unique property values
     * @param objectType
     * @param batchInputSimplePublicObjectBatchInput
     */
    public update(objectType: string, batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: PromiseConfigurationOptions): Promise<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
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
        const result = this.api.update(objectType, batchInputSimplePublicObjectBatchInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or update records identified by a unique property value as specified by the `idProperty` query param. `idProperty` query param refers to a property whose values are unique for the object.
     * Create or update a batch of objects by unique property values
     * @param objectType
     * @param batchInputSimplePublicObjectBatchInputUpsert
     */
    public upsertWithHttpInfo(objectType: string, batchInputSimplePublicObjectBatchInputUpsert: BatchInputSimplePublicObjectBatchInputUpsert, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject>> {
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
        const result = this.api.upsertWithHttpInfo(objectType, batchInputSimplePublicObjectBatchInputUpsert, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or update records identified by a unique property value as specified by the `idProperty` query param. `idProperty` query param refers to a property whose values are unique for the object.
     * Create or update a batch of objects by unique property values
     * @param objectType
     * @param batchInputSimplePublicObjectBatchInputUpsert
     */
    public upsert(objectType: string, batchInputSimplePublicObjectBatchInputUpsert: BatchInputSimplePublicObjectBatchInputUpsert, _options?: PromiseConfigurationOptions): Promise<BatchResponseSimplePublicUpsertObjectWithErrors | BatchResponseSimplePublicUpsertObject> {
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
        const result = this.api.upsert(objectType, batchInputSimplePublicObjectBatchInputUpsert, observableOptions);
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
     * @param objectType
     * @param publicObjectSearchRequest
     */
    public doSearchWithHttpInfo(objectType: string, publicObjectSearchRequest: PublicObjectSearchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalSimplePublicObjectForwardPaging>> {
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
        const result = this.api.doSearchWithHttpInfo(objectType, publicObjectSearchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param objectType
     * @param publicObjectSearchRequest
     */
    public doSearch(objectType: string, publicObjectSearchRequest: PublicObjectSearchRequest, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
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
        const result = this.api.doSearch(objectType, publicObjectSearchRequest, observableOptions);
        return result.toPromise();
    }


}



