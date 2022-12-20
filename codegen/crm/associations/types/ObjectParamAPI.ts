import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AssociatedId } from '../models/AssociatedId';
import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';
import { CollectionResponsePublicAssociationDefiniton } from '../models/CollectionResponsePublicAssociationDefiniton';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PublicAssociation } from '../models/PublicAssociation';
import { PublicAssociationDefiniton } from '../models/PublicAssociationDefiniton';
import { PublicAssociationMulti } from '../models/PublicAssociationMulti';
import { PublicObjectId } from '../models/PublicObjectId';
import { StandardError } from '../models/StandardError';

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
     * @type BatchInputPublicAssociation
     * @memberof BatchApiarchive
     */
    batchInputPublicAssociation?: BatchInputPublicAssociation
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
     * @type BatchInputPublicAssociation
     * @memberof BatchApicreate
     */
    batchInputPublicAssociation?: BatchInputPublicAssociation
}

export interface BatchApiReadRequest {
    /**
     * 
     * @type string
     * @memberof BatchApiread
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof BatchApiread
     */
    toObjectType: string
    /**
     * 
     * @type BatchInputPublicObjectId
     * @memberof BatchApiread
     */
    batchInputPublicObjectId?: BatchInputPublicObjectId
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
    public archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociation,  options).toPromise();
    }

    /**
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponsePublicAssociation> {
        return this.api.create(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociation,  options).toPromise();
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param param the request object
     */
    public read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponsePublicAssociationMulti> {
        return this.api.read(param.fromObjectType, param.toObjectType, param.batchInputPublicObjectId,  options).toPromise();
    }

}

import { ObservableTypesApi } from "./ObservableAPI";
import { TypesApiRequestFactory, TypesApiResponseProcessor} from "../apis/TypesApi";

export interface TypesApiGetAllRequest {
    /**
     * 
     * @type string
     * @memberof TypesApigetAll
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof TypesApigetAll
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
    public getAll(param: TypesApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePublicAssociationDefiniton> {
        return this.api.getAll(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

}
