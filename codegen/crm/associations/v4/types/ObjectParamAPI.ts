import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof BasicApiarchive
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof BasicApiarchive
     */
    objectId: string
    /**
     * 
     * @type string
     * @memberof BasicApiarchive
     */
    toObjectType: string
    /**
     * 
     * @type string
     * @memberof BasicApiarchive
     */
    toObjectId: string
}

export interface BasicApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof BasicApicreate
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof BasicApicreate
     */
    objectId: string
    /**
     * 
     * @type string
     * @memberof BasicApicreate
     */
    toObjectType: string
    /**
     * 
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
     * @type string
     * @memberof BasicApicreateDefault
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof BasicApicreateDefault
     */
    fromObjectId: string
    /**
     * 
     * @type string
     * @memberof BasicApicreateDefault
     */
    toObjectType: string
    /**
     * 
     * @type string
     * @memberof BasicApicreateDefault
     */
    toObjectId: string
}

export interface BasicApiGetPageRequest {
    /**
     * 
     * @type string
     * @memberof BasicApigetPage
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof BasicApigetPage
     */
    objectId: string
    /**
     * 
     * @type string
     * @memberof BasicApigetPage
     */
    toObjectType: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BasicApigetPage
     */
    after?: string
    /**
     * The maximum number of results to display per page.
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
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectType, param.objectId, param.toObjectType, param.toObjectId,  options).toPromise();
    }

    /**
     * deletes all associations between two records.
     * Delete
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectType, param.objectId, param.toObjectType, param.toObjectId,  options).toPromise();
    }

    /**
     * Set association labels between two records.
     * Create
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: Configuration): Promise<HttpInfo<LabelsBetweenObjectPair>> {
        return this.api.createWithHttpInfo(param.objectType, param.objectId, param.toObjectType, param.toObjectId, param.associationSpec,  options).toPromise();
    }

    /**
     * Set association labels between two records.
     * Create
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: Configuration): Promise<LabelsBetweenObjectPair> {
        return this.api.create(param.objectType, param.objectId, param.toObjectType, param.toObjectId, param.associationSpec,  options).toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     * Create Default
     * @param param the request object
     */
    public createDefaultWithHttpInfo(param: BasicApiCreateDefaultRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicDefaultAssociation>> {
        return this.api.createDefaultWithHttpInfo(param.fromObjectType, param.fromObjectId, param.toObjectType, param.toObjectId,  options).toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     * Create Default
     * @param param the request object
     */
    public createDefault(param: BasicApiCreateDefaultRequest, options?: Configuration): Promise<BatchResponsePublicDefaultAssociation> {
        return this.api.createDefault(param.fromObjectType, param.fromObjectId, param.toObjectType, param.toObjectId,  options).toPromise();
    }

    /**
     * List all associations of an object by object type. Limit 500 per call.
     * List
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BasicApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.objectType, param.objectId, param.toObjectType, param.after, param.limit,  options).toPromise();
    }

    /**
     * List all associations of an object by object type. Limit 500 per call.
     * List
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest, options?: Configuration): Promise<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging> {
        return this.api.getPage(param.objectType, param.objectId, param.toObjectType, param.after, param.limit,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof BatchApiarchive
     */
    fromObjectType: string
    /**
     * 
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
     * @type string
     * @memberof BatchApiarchiveLabels
     */
    fromObjectType: string
    /**
     * 
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
     * @type string
     * @memberof BatchApicreate
     */
    fromObjectType: string
    /**
     * 
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
     * @type string
     * @memberof BatchApicreateDefault
     */
    fromObjectType: string
    /**
     * 
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
     * @type string
     * @memberof BatchApigetPage
     */
    fromObjectType: string
    /**
     * 
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
    public archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiArchive,  options).toPromise();
    }

    /**
     * Batch delete associations for objects
     * Delete
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiArchive,  options).toPromise();
    }

    /**
     * Batch delete specific association labels for objects. Deleting an unlabeled association will also delete all labeled associations between those two objects
     * Delete Specific Labels
     * @param param the request object
     */
    public archiveLabelsWithHttpInfo(param: BatchApiArchiveLabelsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveLabelsWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiPost,  options).toPromise();
    }

    /**
     * Batch delete specific association labels for objects. Deleting an unlabeled association will also delete all labeled associations between those two objects
     * Delete Specific Labels
     * @param param the request object
     */
    public archiveLabels(param: BatchApiArchiveLabelsRequest, options?: Configuration): Promise<void> {
        return this.api.archiveLabels(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiPost,  options).toPromise();
    }

    /**
     * Batch create associations for objects
     * Create
     * @param param the request object
     */
    public createWithHttpInfo(param: BatchApiCreateRequest, options?: Configuration): Promise<HttpInfo<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair>> {
        return this.api.createWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiPost,  options).toPromise();
    }

    /**
     * Batch create associations for objects
     * Create
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair> {
        return this.api.create(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiPost,  options).toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     *  Create Default Associations
     * @param param the request object
     */
    public createDefaultWithHttpInfo(param: BatchApiCreateDefaultRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicDefaultAssociation>> {
        return this.api.createDefaultWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicDefaultAssociationMultiPost,  options).toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     *  Create Default Associations
     * @param param the request object
     */
    public createDefault(param: BatchApiCreateDefaultRequest, options?: Configuration): Promise<BatchResponsePublicDefaultAssociation> {
        return this.api.createDefault(param.fromObjectType, param.toObjectType, param.batchInputPublicDefaultAssociationMultiPost,  options).toPromise();
    }

    /**
     * Batch read associations for objects to specific object type. The \'after\' field in a returned paging object  can be added alongside the \'id\' to retrieve the next page of associations from that objectId. The \'link\' field is deprecated and should be ignored. 
     * Read
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BatchApiGetPageRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors>> {
        return this.api.getPageWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicFetchAssociationsBatchRequest,  options).toPromise();
    }

    /**
     * Batch read associations for objects to specific object type. The \'after\' field in a returned paging object  can be added alongside the \'id\' to retrieve the next page of associations from that objectId. The \'link\' field is deprecated and should be ignored. 
     * Read
     * @param param the request object
     */
    public getPage(param: BatchApiGetPageRequest, options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors> {
        return this.api.getPage(param.fromObjectType, param.toObjectType, param.batchInputPublicFetchAssociationsBatchRequest,  options).toPromise();
    }

}
