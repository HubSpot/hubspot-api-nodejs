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
import { PublicMergeInput } from '../models/PublicMergeInput';
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
     * Delete a company by ID. Deleted companies can be restored within 90 days of deletion. Learn more about [restoring records](https://knowledge.hubspot.com/records/restore-deleted-records).
     * Archive a company
     * @param companyId
     */
    public archiveWithHttpInfo(companyId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(companyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a company by ID. Deleted companies can be restored within 90 days of deletion. Learn more about [restoring records](https://knowledge.hubspot.com/records/restore-deleted-records).
     * Archive a company
     * @param companyId
     */
    public archive(companyId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(companyId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a single company. Include a `properties` object to define [property values](https://developers.hubspot.com/docs/guides/api/crm/properties) for the company, along with an `associations` array to define [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4) with other CRM records.
     * Create a company
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
     * Create a single company. Include a `properties` object to define [property values](https://developers.hubspot.com/docs/guides/api/crm/properties) for the company, along with an `associations` array to define [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4) with other CRM records.
     * Create a company
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
     * Retrieve a company by its ID (`companyId`) or by a unique property (`idProperty`). You can specify what is returned using the `properties` query parameter.
     * Retrieve a company
     * @param companyId The ID of the company
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [archived] Whether to return only results that have been archived.
     * @param [idProperty] The name of a property whose values are unique for this object
     */
    public getByIdWithHttpInfo(companyId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SimplePublicObjectWithAssociations>> {
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
        const result = this.api.getByIdWithHttpInfo(companyId, properties, propertiesWithHistory, associations, archived, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a company by its ID (`companyId`) or by a unique property (`idProperty`). You can specify what is returned using the `properties` query parameter.
     * Retrieve a company
     * @param companyId The ID of the company
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [archived] Whether to return only results that have been archived.
     * @param [idProperty] The name of a property whose values are unique for this object
     */
    public getById(companyId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: PromiseConfigurationOptions): Promise<SimplePublicObjectWithAssociations> {
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
        const result = this.api.getById(companyId, properties, propertiesWithHistory, associations, archived, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all companies, using query parameters to control the information that gets returned.
     * Retrieve companies
     * @param [limit] The maximum number of results to display per page.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getPageWithHttpInfo(limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging>> {
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
        const result = this.api.getPageWithHttpInfo(limit, after, properties, propertiesWithHistory, associations, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all companies, using query parameters to control the information that gets returned.
     * Retrieve companies
     * @param [limit] The maximum number of results to display per page.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [properties] A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param [propertiesWithHistory] A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @param [associations] A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param [archived] Whether to return only results that have been archived.
     */
    public getPage(limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
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
        const result = this.api.getPage(limit, after, properties, propertiesWithHistory, associations, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Merge two company records. Learn more about [merging records](https://knowledge.hubspot.com/records/merge-records).
     * Merge two companies
     * @param publicMergeInput
     */
    public mergeWithHttpInfo(publicMergeInput: PublicMergeInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SimplePublicObject>> {
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
        const result = this.api.mergeWithHttpInfo(publicMergeInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Merge two company records. Learn more about [merging records](https://knowledge.hubspot.com/records/merge-records).
     * Merge two companies
     * @param publicMergeInput
     */
    public merge(publicMergeInput: PublicMergeInput, _options?: PromiseConfigurationOptions): Promise<SimplePublicObject> {
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
        const result = this.api.merge(publicMergeInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a company by ID (`companyId`) or unique property value (`idProperty`). Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.
     * Update a company
     * @param companyId
     * @param simplePublicObjectInput
     * @param [idProperty] The name of a property whose values are unique for this object
     */
    public updateWithHttpInfo(companyId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SimplePublicObject>> {
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
        const result = this.api.updateWithHttpInfo(companyId, simplePublicObjectInput, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a company by ID (`companyId`) or unique property value (`idProperty`). Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.
     * Update a company
     * @param companyId
     * @param simplePublicObjectInput
     * @param [idProperty] The name of a property whose values are unique for this object
     */
    public update(companyId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: PromiseConfigurationOptions): Promise<SimplePublicObject> {
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
        const result = this.api.update(companyId, simplePublicObjectInput, idProperty, observableOptions);
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
     * Delete a batch of companies by ID. Deleted companies can be restored within 90 days of deletion. Learn more about [restoring records](https://knowledge.hubspot.com/records/restore-deleted-records).
     * Archive a batch of companies
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
     * Delete a batch of companies by ID. Deleted companies can be restored within 90 days of deletion. Learn more about [restoring records](https://knowledge.hubspot.com/records/restore-deleted-records).
     * Archive a batch of companies
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
     * Create a batch of companies. The `inputs` array can contain a `properties` object to define property values for each company, along with an `associations` array to define [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4) with other CRM records.
     * Create a batch of companies
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
     * Create a batch of companies. The `inputs` array can contain a `properties` object to define property values for each company, along with an `associations` array to define [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4) with other CRM records.
     * Create a batch of companies
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
     * Retrieve a batch of companies by ID (`companyId`) or by a unique property (`idProperty`). You can specify what is returned using the `properties` query parameter.
     * Retrieve a batch of companies
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
     * Retrieve a batch of companies by ID (`companyId`) or by a unique property (`idProperty`). You can specify what is returned using the `properties` query parameter.
     * Retrieve a batch of companies
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
     * Update a batch of companies by ID.
     * Update a batch of companies
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
     * Update a batch of companies by ID.
     * Update a batch of companies
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
     * Create or update companies identified by a unique property value as specified by the `idProperty` query parameter. `idProperty` query param refers to a property whose values are unique for the object.
     * Create or update a batch of companies by unique property values
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
     * Create or update companies identified by a unique property value as specified by the `idProperty` query parameter. `idProperty` query param refers to a property whose values are unique for the object.
     * Create or update a batch of companies by unique property values
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
     * Search for companies by filtering on properties, searching through associations, and sorting results. Learn more about [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).
     * Search for companies
     * @param publicObjectSearchRequest
     */
    public doSearchWithHttpInfo(publicObjectSearchRequest: PublicObjectSearchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalSimplePublicObjectForwardPaging>> {
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
     * Search for companies by filtering on properties, searching through associations, and sorting results. Learn more about [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).
     * Search for companies
     * @param publicObjectSearchRequest
     */
    public doSearch(publicObjectSearchRequest: PublicObjectSearchRequest, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
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



