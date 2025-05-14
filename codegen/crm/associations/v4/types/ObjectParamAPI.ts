import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    objectId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    toObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    toObjectId: string
}

export interface BasicApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreate
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreate
     */
    objectId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreate
     */
    toObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreate
     */
    toObjectId: string
    /**
     * 
     * @type Array&lt;AssociationSpec&gt;
     * @memberof BasicApicreate
     */
    associationSpec: Array<AssociationSpec>
}

export interface BasicApiCreateDefaultRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreateDefault
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreateDefault
     */
    fromObjectId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreateDefault
     */
    toObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreateDefault
     */
    toObjectId: string
}

export interface BasicApiGetPageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPage
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPage
     */
    objectId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPage
     */
    toObjectType: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPage
     */
    after?: string
    /**
     * The maximum number of results to display per page.
     * Defaults to: 500
     * @type number
     * @memberof BasicApigetPage
     */
    limit?: number
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * deletes all associations between two records.
     * Delete
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectType, param.objectId, param.toObjectType, param.toObjectId,  options).toPromise();
    }

    /**
     * deletes all associations between two records.
     * Delete
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.objectType, param.objectId, param.toObjectType, param.toObjectId,  options).toPromise();
    }

    /**
     * Set association labels between two records.
     * Create
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<LabelsBetweenObjectPair>> {
        return this.api.createWithHttpInfo(param.objectType, param.objectId, param.toObjectType, param.toObjectId, param.associationSpec,  options).toPromise();
    }

    /**
     * Set association labels between two records.
     * Create
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<LabelsBetweenObjectPair> {
        return this.api.create(param.objectType, param.objectId, param.toObjectType, param.toObjectId, param.associationSpec,  options).toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     * Create Default
     * @param param the request object
     */
    public createDefaultWithHttpInfo(param: BasicApiCreateDefaultRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePublicDefaultAssociation>> {
        return this.api.createDefaultWithHttpInfo(param.fromObjectType, param.fromObjectId, param.toObjectType, param.toObjectId,  options).toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     * Create Default
     * @param param the request object
     */
    public createDefault(param: BasicApiCreateDefaultRequest, options?: ConfigurationOptions): Promise<BatchResponsePublicDefaultAssociation> {
        return this.api.createDefault(param.fromObjectType, param.fromObjectId, param.toObjectType, param.toObjectId,  options).toPromise();
    }

    /**
     * List all associations of an object by object type. Limit 500 per call.
     * List
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BasicApiGetPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.objectType, param.objectId, param.toObjectType, param.after, param.limit,  options).toPromise();
    }

    /**
     * List all associations of an object by object type. Limit 500 per call.
     * List
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest, options?: ConfigurationOptions): Promise<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging> {
        return this.api.getPage(param.objectType, param.objectId, param.toObjectType, param.after, param.limit,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BatchApiarchive
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BatchApiarchive
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociationMultiArchive
     * @memberof BatchApiarchive
     */
    batchInputPublicAssociationMultiArchive: BatchInputPublicAssociationMultiArchive
}

export interface BatchApiArchiveLabelsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BatchApiarchiveLabels
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BatchApiarchiveLabels
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociationMultiPost
     * @memberof BatchApiarchiveLabels
     */
    batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost
}

export interface BatchApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BatchApicreate
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BatchApicreate
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociationMultiPost
     * @memberof BatchApicreate
     */
    batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost
}

export interface BatchApiCreateDefaultRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BatchApicreateDefault
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BatchApicreateDefault
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicDefaultAssociationMultiPost
     * @memberof BatchApicreateDefault
     */
    batchInputPublicDefaultAssociationMultiPost: BatchInputPublicDefaultAssociationMultiPost
}

export interface BatchApiGetPageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BatchApigetPage
     */
    fromObjectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BatchApigetPage
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicFetchAssociationsBatchRequest
     * @memberof BatchApigetPage
     */
    batchInputPublicFetchAssociationsBatchRequest: BatchInputPublicFetchAssociationsBatchRequest
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch delete associations for objects
     * Delete
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiArchive,  options).toPromise();
    }

    /**
     * Batch delete associations for objects
     * Delete
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiArchive,  options).toPromise();
    }

    /**
     * Batch delete specific association labels for objects. Deleting an unlabeled association will also delete all labeled associations between those two objects
     * Delete Specific Labels
     * @param param the request object
     */
    public archiveLabelsWithHttpInfo(param: BatchApiArchiveLabelsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveLabelsWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiPost,  options).toPromise();
    }

    /**
     * Batch delete specific association labels for objects. Deleting an unlabeled association will also delete all labeled associations between those two objects
     * Delete Specific Labels
     * @param param the request object
     */
    public archiveLabels(param: BatchApiArchiveLabelsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveLabels(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiPost,  options).toPromise();
    }

    /**
     * Batch create associations for objects
     * Create
     * @param param the request object
     */
    public createWithHttpInfo(param: BatchApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair>> {
        return this.api.createWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiPost,  options).toPromise();
    }

    /**
     * Batch create associations for objects
     * Create
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: ConfigurationOptions): Promise<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair> {
        return this.api.create(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiPost,  options).toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     *  Create Default Associations
     * @param param the request object
     */
    public createDefaultWithHttpInfo(param: BatchApiCreateDefaultRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePublicDefaultAssociation>> {
        return this.api.createDefaultWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicDefaultAssociationMultiPost,  options).toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     *  Create Default Associations
     * @param param the request object
     */
    public createDefault(param: BatchApiCreateDefaultRequest, options?: ConfigurationOptions): Promise<BatchResponsePublicDefaultAssociation> {
        return this.api.createDefault(param.fromObjectType, param.toObjectType, param.batchInputPublicDefaultAssociationMultiPost,  options).toPromise();
    }

    /**
     * Batch read associations for objects to specific object type. The \'after\' field in a returned paging object  can be added alongside the \'id\' to retrieve the next page of associations from that objectId. The \'link\' field is deprecated and should be ignored. Note: The \'paging\' field will only be present if there are more pages and absent otherwise.
     * Read
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BatchApiGetPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors>> {
        return this.api.getPageWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicFetchAssociationsBatchRequest,  options).toPromise();
    }

    /**
     * Batch read associations for objects to specific object type. The \'after\' field in a returned paging object  can be added alongside the \'id\' to retrieve the next page of associations from that objectId. The \'link\' field is deprecated and should be ignored. Note: The \'paging\' field will only be present if there are more pages and absent otherwise.
     * Read
     * @param param the request object
     */
    public getPage(param: BatchApiGetPageRequest, options?: ConfigurationOptions): Promise<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors> {
        return this.api.getPage(param.fromObjectType, param.toObjectType, param.batchInputPublicFetchAssociationsBatchRequest,  options).toPromise();
    }

}

import { ObservableReportApi } from "./ObservableAPI";
import { ReportApiRequestFactory, ReportApiResponseProcessor} from "../apis/ReportApi";

export interface ReportApiRequestRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ReportApirequest
     */
    userId: number
}

export class ObjectReportApi {
    private api: ObservableReportApi

    public constructor(configuration: Configuration, requestFactory?: ReportApiRequestFactory, responseProcessor?: ReportApiResponseProcessor) {
        this.api = new ObservableReportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Requests a report of all objects in the portal which have a high usage of associations
     * Report
     * @param param the request object
     */
    public requestWithHttpInfo(param: ReportApiRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReportCreationResponse>> {
        return this.api.requestWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Requests a report of all objects in the portal which have a high usage of associations
     * Report
     * @param param the request object
     */
    public request(param: ReportApiRequestRequest, options?: ConfigurationOptions): Promise<ReportCreationResponse> {
        return this.api.request(param.userId,  options).toPromise();
    }

}
