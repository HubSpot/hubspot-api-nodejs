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
    public archive(objectType: string, objectId: number, toObjectType: string, toObjectId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, objectId, toObjectType, toObjectId, _options);
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
    public create(objectType: string, objectId: number, toObjectType: string, toObjectId: number, associationSpec: Array<AssociationSpec>, _options?: Configuration): Promise<LabelsBetweenObjectPair> {
        const result = this.api.create(objectType, objectId, toObjectType, toObjectId, associationSpec, _options);
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
    public createDefault(fromObjectType: string, fromObjectId: number, toObjectType: string, toObjectId: number, _options?: Configuration): Promise<BatchResponsePublicDefaultAssociation> {
        const result = this.api.createDefault(fromObjectType, fromObjectId, toObjectType, toObjectId, _options);
        return result.toPromise();
    }

    /**
     * List all associations of an object by object type. Limit 500 per call.
     * List
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public getPage(objectType: string, objectId: number, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Promise<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging> {
        const result = this.api.getPage(objectType, objectId, toObjectType, after, limit, _options);
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
    public archive(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiArchive: BatchInputPublicAssociationMultiArchive, _options?: Configuration): Promise<void> {
        const result = this.api.archive(fromObjectType, toObjectType, batchInputPublicAssociationMultiArchive, _options);
        return result.toPromise();
    }

    /**
     * Batch delete specific association labels for objects. Deleting an unlabeled association will also delete all labeled associations between those two objects
     * Delete Specific Labels
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiPost 
     */
    public archiveLabels(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Promise<void> {
        const result = this.api.archiveLabels(fromObjectType, toObjectType, batchInputPublicAssociationMultiPost, _options);
        return result.toPromise();
    }

    /**
     * Batch create associations for objects
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiPost 
     */
    public create(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Promise<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair> {
        const result = this.api.create(fromObjectType, toObjectType, batchInputPublicAssociationMultiPost, _options);
        return result.toPromise();
    }

    /**
     * Create the default (most generic) association type between two object types
     *  Create Default Associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicDefaultAssociationMultiPost 
     */
    public createDefault(fromObjectType: string, toObjectType: string, batchInputPublicDefaultAssociationMultiPost: BatchInputPublicDefaultAssociationMultiPost, _options?: Configuration): Promise<BatchResponsePublicDefaultAssociation> {
        const result = this.api.createDefault(fromObjectType, toObjectType, batchInputPublicDefaultAssociationMultiPost, _options);
        return result.toPromise();
    }

    /**
     * Batch read associations for objects to specific object type. The 'after' field in a returned paging object  can be added alongside the 'id' to retrieve the next page of associations from that objectId. The 'link' field is deprecated and should be ignored. 
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicFetchAssociationsBatchRequest 
     */
    public getPage(fromObjectType: string, toObjectType: string, batchInputPublicFetchAssociationsBatchRequest: BatchInputPublicFetchAssociationsBatchRequest, _options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors> {
        const result = this.api.getPage(fromObjectType, toObjectType, batchInputPublicFetchAssociationsBatchRequest, _options);
        return result.toPromise();
    }


}



