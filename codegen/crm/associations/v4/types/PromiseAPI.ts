import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { AssociationSpec } from '../models/AssociationSpec';
import { BatchInputPublicAssociationMultiArchive } from '../models/BatchInputPublicAssociationMultiArchive';
import { BatchInputPublicAssociationMultiPost } from '../models/BatchInputPublicAssociationMultiPost';
import { BatchInputPublicDefaultAssociationMultiPost } from '../models/BatchInputPublicDefaultAssociationMultiPost';
import { BatchInputPublicFetchAssociationsBatchRequest } from '../models/BatchInputPublicFetchAssociationsBatchRequest';
import { BatchResponseLabelsBetweenObjectPair } from '../models/BatchResponseLabelsBetweenObjectPair';
import { BatchResponseLabelsBetweenObjectPairWithErrors } from '../models/BatchResponseLabelsBetweenObjectPairWithErrors';
import { BatchResponsePublicAssociationMultiWithLabel } from '../models/BatchResponsePublicAssociationMultiWithLabel';
import { BatchResponsePublicAssociationMultiWithLabelWithErrors } from '../models/BatchResponsePublicAssociationMultiWithLabelWithErrors';
import { BatchResponsePublicDefaultAssociation } from '../models/BatchResponsePublicDefaultAssociation';
import { CollectionResponseMultiAssociatedObjectWithLabelForwardPaging } from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';
import { ReportCreationResponse } from '../models/ReportCreationResponse';
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
     * deletes all associations between two records.
     * Delete
     * @param objectType
     * @param objectId
     * @param toObjectType
     * @param toObjectId
     */
    public archiveWithHttpInfo(objectType: string, objectId: string, toObjectType: string, toObjectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(objectType, objectId, toObjectType, toObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * deletes all associations between two records.
     * Delete
     * @param objectType
     * @param objectId
     * @param toObjectType
     * @param toObjectId
     */
    public archive(objectType: string, objectId: string, toObjectType: string, toObjectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(objectType, objectId, toObjectType, toObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Set association labels between two records.
     * Create
     * @param objectType
     * @param objectId
     * @param toObjectType
     * @param toObjectId
     * @param associationSpec
     */
    public createWithHttpInfo(objectType: string, objectId: string, toObjectType: string, toObjectId: string, associationSpec: Array<AssociationSpec>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LabelsBetweenObjectPair>> {
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
        const result = this.api.createWithHttpInfo(objectType, objectId, toObjectType, toObjectId, associationSpec, observableOptions);
        return result.toPromise();
    }

    /**
     * Set association labels between two records.
     * Create
     * @param objectType
     * @param objectId
     * @param toObjectType
     * @param toObjectId
     * @param associationSpec
     */
    public create(objectType: string, objectId: string, toObjectType: string, toObjectId: string, associationSpec: Array<AssociationSpec>, _options?: PromiseConfigurationOptions): Promise<LabelsBetweenObjectPair> {
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
        const result = this.api.create(objectType, objectId, toObjectType, toObjectId, associationSpec, observableOptions);
        return result.toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     * Create Default
     * @param fromObjectType
     * @param fromObjectId
     * @param toObjectType
     * @param toObjectId
     */
    public createDefaultWithHttpInfo(fromObjectType: string, fromObjectId: string, toObjectType: string, toObjectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePublicDefaultAssociation>> {
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
        const result = this.api.createDefaultWithHttpInfo(fromObjectType, fromObjectId, toObjectType, toObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     * Create Default
     * @param fromObjectType
     * @param fromObjectId
     * @param toObjectType
     * @param toObjectId
     */
    public createDefault(fromObjectType: string, fromObjectId: string, toObjectType: string, toObjectId: string, _options?: PromiseConfigurationOptions): Promise<BatchResponsePublicDefaultAssociation> {
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
        const result = this.api.createDefault(fromObjectType, fromObjectId, toObjectType, toObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * List all associations of an object by object type. Limit 500 per call.
     * List
     * @param objectType
     * @param objectId
     * @param toObjectType
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to display per page.
     */
    public getPageWithHttpInfo(objectType: string, objectId: string, toObjectType: string, after?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging>> {
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
        const result = this.api.getPageWithHttpInfo(objectType, objectId, toObjectType, after, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * List all associations of an object by object type. Limit 500 per call.
     * List
     * @param objectType
     * @param objectId
     * @param toObjectType
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to display per page.
     */
    public getPage(objectType: string, objectId: string, toObjectType: string, after?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging> {
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
        const result = this.api.getPage(objectType, objectId, toObjectType, after, limit, observableOptions);
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
     * Batch delete associations for objects
     * Delete
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationMultiArchive
     */
    public archiveWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiArchive: BatchInputPublicAssociationMultiArchive, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationMultiArchive, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch delete associations for objects
     * Delete
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationMultiArchive
     */
    public archive(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiArchive: BatchInputPublicAssociationMultiArchive, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(fromObjectType, toObjectType, batchInputPublicAssociationMultiArchive, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch delete specific association labels for objects. Deleting an unlabeled association will also delete all labeled associations between those two objects
     * Delete Specific Labels
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationMultiPost
     */
    public archiveLabelsWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveLabelsWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationMultiPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch delete specific association labels for objects. Deleting an unlabeled association will also delete all labeled associations between those two objects
     * Delete Specific Labels
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationMultiPost
     */
    public archiveLabels(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archiveLabels(fromObjectType, toObjectType, batchInputPublicAssociationMultiPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch create associations for objects
     * Create
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationMultiPost
     */
    public createWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair>> {
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
        const result = this.api.createWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociationMultiPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch create associations for objects
     * Create
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicAssociationMultiPost
     */
    public create(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: PromiseConfigurationOptions): Promise<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair> {
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
        const result = this.api.create(fromObjectType, toObjectType, batchInputPublicAssociationMultiPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     *  Create Default Associations
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicDefaultAssociationMultiPost
     */
    public createDefaultWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicDefaultAssociationMultiPost: BatchInputPublicDefaultAssociationMultiPost, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePublicDefaultAssociation>> {
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
        const result = this.api.createDefaultWithHttpInfo(fromObjectType, toObjectType, batchInputPublicDefaultAssociationMultiPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     *  Create Default Associations
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicDefaultAssociationMultiPost
     */
    public createDefault(fromObjectType: string, toObjectType: string, batchInputPublicDefaultAssociationMultiPost: BatchInputPublicDefaultAssociationMultiPost, _options?: PromiseConfigurationOptions): Promise<BatchResponsePublicDefaultAssociation> {
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
        const result = this.api.createDefault(fromObjectType, toObjectType, batchInputPublicDefaultAssociationMultiPost, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch read associations for objects to specific object type. The \'after\' field in a returned paging object  can be added alongside the \'id\' to retrieve the next page of associations from that objectId. The \'link\' field is deprecated and should be ignored. Note: The \'paging\' field will only be present if there are more pages and absent otherwise.
     * Read
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicFetchAssociationsBatchRequest
     */
    public getPageWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicFetchAssociationsBatchRequest: BatchInputPublicFetchAssociationsBatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors>> {
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
        const result = this.api.getPageWithHttpInfo(fromObjectType, toObjectType, batchInputPublicFetchAssociationsBatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch read associations for objects to specific object type. The \'after\' field in a returned paging object  can be added alongside the \'id\' to retrieve the next page of associations from that objectId. The \'link\' field is deprecated and should be ignored. Note: The \'paging\' field will only be present if there are more pages and absent otherwise.
     * Read
     * @param fromObjectType
     * @param toObjectType
     * @param batchInputPublicFetchAssociationsBatchRequest
     */
    public getPage(fromObjectType: string, toObjectType: string, batchInputPublicFetchAssociationsBatchRequest: BatchInputPublicFetchAssociationsBatchRequest, _options?: PromiseConfigurationOptions): Promise<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors> {
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
        const result = this.api.getPage(fromObjectType, toObjectType, batchInputPublicFetchAssociationsBatchRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableReportApi } from './ObservableAPI';

import { ReportApiRequestFactory, ReportApiResponseProcessor} from "../apis/ReportApi";
export class PromiseReportApi {
    private api: ObservableReportApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportApiRequestFactory,
        responseProcessor?: ReportApiResponseProcessor
    ) {
        this.api = new ObservableReportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Requests a report of all objects in the portal which have a high usage of associations
     * Report
     * @param userId 
     */
    public requestWithHttpInfo(userId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReportCreationResponse>> {
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
        const result = this.api.requestWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Requests a report of all objects in the portal which have a high usage of associations
     * Report
     * @param userId 
     */
    public request(userId: number, _options?: PromiseConfigurationOptions): Promise<ReportCreationResponse> {
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
        const result = this.api.request(userId, observableOptions);
        return result.toPromise();
    }


}



