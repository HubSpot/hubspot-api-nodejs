import { Configuration} from '../configuration'

import { BatchInputPublicAssociationMultiArchive } from '../models/BatchInputPublicAssociationMultiArchive';
import { BatchInputPublicAssociationMultiPost } from '../models/BatchInputPublicAssociationMultiPost';
import { BatchInputPublicDefaultAssociationMultiPost } from '../models/BatchInputPublicDefaultAssociationMultiPost';
import { BatchInputPublicFetchAssociationsBatchRequest } from '../models/BatchInputPublicFetchAssociationsBatchRequest';
import { BatchResponseLabelsBetweenObjectPair } from '../models/BatchResponseLabelsBetweenObjectPair';
import { BatchResponseLabelsBetweenObjectPairWithErrors } from '../models/BatchResponseLabelsBetweenObjectPairWithErrors';
import { BatchResponsePublicAssociationMultiWithLabel } from '../models/BatchResponsePublicAssociationMultiWithLabel';
import { BatchResponsePublicAssociationMultiWithLabelWithErrors } from '../models/BatchResponsePublicAssociationMultiWithLabelWithErrors';
import { BatchResponsePublicDefaultAssociation } from '../models/BatchResponsePublicDefaultAssociation';
import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';

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
    public archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiArchive,  options).toPromise();
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
    public create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair> {
        return this.api.create(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociationMultiPost,  options).toPromise();
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
     * Batch read associations for objects to specific object type. The 'after' field in a returned paging object  can be added alongside the 'id' to retrieve the next page of associations from that objectId. The 'link' field is deprecated and should be ignored. 
     * Read
     * @param param the request object
     */
    public getPage(param: BatchApiGetPageRequest, options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors> {
        return this.api.getPage(param.fromObjectType, param.toObjectType, param.batchInputPublicFetchAssociationsBatchRequest,  options).toPromise();
    }

}

import { ObservableDefinitionsApi } from "./ObservableAPI";
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";

export interface DefinitionsApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApiarchive
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApiarchive
     */
    toObjectType: string
    /**
     * 
     * @type number
     * @memberof DefinitionsApiarchive
     */
    associationTypeId: number
}

export interface DefinitionsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApicreate
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApicreate
     */
    toObjectType: string
    /**
     * 
     * @type PublicAssociationDefinitionCreateRequest
     * @memberof DefinitionsApicreate
     */
    publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest
}

export interface DefinitionsApiGetAllRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApigetAll
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApigetAll
     */
    toObjectType: string
}

export interface DefinitionsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApiupdate
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApiupdate
     */
    toObjectType: string
    /**
     * 
     * @type PublicAssociationDefinitionUpdateRequest
     * @memberof DefinitionsApiupdate
     */
    publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest
}

export class ObjectDefinitionsApi {
    private api: ObservableDefinitionsApi

    public constructor(configuration: Configuration, requestFactory?: DefinitionsApiRequestFactory, responseProcessor?: DefinitionsApiResponseProcessor) {
        this.api = new ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an association definition
     * Delete
     * @param param the request object
     */
    public archive(param: DefinitionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.fromObjectType, param.toObjectType, param.associationTypeId,  options).toPromise();
    }

    /**
     * Create a user defined association definition
     * Create
     * @param param the request object
     */
    public create(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.create(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionCreateRequest,  options).toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param param the request object
     */
    public getAll(param: DefinitionsApiGetAllRequest, options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.getAll(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
     * @param param the request object
     */
    public update(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.update(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionUpdateRequest,  options).toPromise();
    }

}
