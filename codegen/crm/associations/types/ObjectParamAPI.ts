import { Configuration} from '../configuration'

import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';
import { BatchResponsePublicAssociationMultiWithErrors } from '../models/BatchResponsePublicAssociationMultiWithErrors';
import { BatchResponsePublicAssociationWithErrors } from '../models/BatchResponsePublicAssociationWithErrors';
import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiPostCrmV3AssociationsFromObjectTypeToObjectTypeBatchArchiveRequest {
    /**
     * 
     * @type string
     * @memberof BatchApipostCrmV3AssociationsFromObjectTypeToObjectTypeBatchArchive
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof BatchApipostCrmV3AssociationsFromObjectTypeToObjectTypeBatchArchive
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociation
     * @memberof BatchApipostCrmV3AssociationsFromObjectTypeToObjectTypeBatchArchive
     */
    batchInputPublicAssociation: BatchInputPublicAssociation
}

export interface BatchApiPostCrmV3AssociationsFromObjectTypeToObjectTypeBatchCreateRequest {
    /**
     * 
     * @type string
     * @memberof BatchApipostCrmV3AssociationsFromObjectTypeToObjectTypeBatchCreate
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof BatchApipostCrmV3AssociationsFromObjectTypeToObjectTypeBatchCreate
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicAssociation
     * @memberof BatchApipostCrmV3AssociationsFromObjectTypeToObjectTypeBatchCreate
     */
    batchInputPublicAssociation: BatchInputPublicAssociation
}

export interface BatchApiPostCrmV3AssociationsFromObjectTypeToObjectTypeBatchReadRequest {
    /**
     * 
     * @type string
     * @memberof BatchApipostCrmV3AssociationsFromObjectTypeToObjectTypeBatchRead
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof BatchApipostCrmV3AssociationsFromObjectTypeToObjectTypeBatchRead
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicObjectId
     * @memberof BatchApipostCrmV3AssociationsFromObjectTypeToObjectTypeBatchRead
     */
    batchInputPublicObjectId: BatchInputPublicObjectId
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove the associations between all pairs of objects identified in the request body.
     * Archive a batch of associations
     * @param param the request object
     */
    public postCrmV3AssociationsFromObjectTypeToObjectTypeBatchArchive(param: BatchApiPostCrmV3AssociationsFromObjectTypeToObjectTypeBatchArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.postCrmV3AssociationsFromObjectTypeToObjectTypeBatchArchive(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociation,  options).toPromise();
    }

    /**
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param param the request object
     */
    public postCrmV3AssociationsFromObjectTypeToObjectTypeBatchCreate(param: BatchApiPostCrmV3AssociationsFromObjectTypeToObjectTypeBatchCreateRequest, options?: Configuration): Promise<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors> {
        return this.api.postCrmV3AssociationsFromObjectTypeToObjectTypeBatchCreate(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociation,  options).toPromise();
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param param the request object
     */
    public postCrmV3AssociationsFromObjectTypeToObjectTypeBatchRead(param: BatchApiPostCrmV3AssociationsFromObjectTypeToObjectTypeBatchReadRequest, options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti> {
        return this.api.postCrmV3AssociationsFromObjectTypeToObjectTypeBatchRead(param.fromObjectType, param.toObjectType, param.batchInputPublicObjectId,  options).toPromise();
    }

}

import { ObservableTypesApi } from "./ObservableAPI";
import { TypesApiRequestFactory, TypesApiResponseProcessor} from "../apis/TypesApi";

export interface TypesApiGetCrmV3AssociationsFromObjectTypeToObjectTypeTypesRequest {
    /**
     * 
     * @type string
     * @memberof TypesApigetCrmV3AssociationsFromObjectTypeToObjectTypeTypes
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof TypesApigetCrmV3AssociationsFromObjectTypeToObjectTypeTypes
     */
    toObjectType: string
}

export class ObjectTypesApi {
    private api: ObservableTypesApi

    public constructor(configuration: Configuration, requestFactory?: TypesApiRequestFactory, responseProcessor?: TypesApiResponseProcessor) {
        this.api = new ObservableTypesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all the valid association types available between two object types
     * List association types
     * @param param the request object
     */
    public getCrmV3AssociationsFromObjectTypeToObjectTypeTypes(param: TypesApiGetCrmV3AssociationsFromObjectTypeToObjectTypeTypesRequest, options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionNoPaging> {
        return this.api.getCrmV3AssociationsFromObjectTypeToObjectTypeTypes(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

}
