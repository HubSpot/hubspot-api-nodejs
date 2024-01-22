import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';
import { BatchResponsePublicAssociationMultiWithErrors } from '../models/BatchResponsePublicAssociationMultiWithErrors';
import { BatchResponsePublicAssociationWithErrors } from '../models/BatchResponsePublicAssociationWithErrors';

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
    batchInputPublicAssociation: BatchInputPublicAssociation
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
    batchInputPublicAssociation: BatchInputPublicAssociation
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
    public archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociation,  options).toPromise();
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
    public createWithHttpInfo(param: BatchApiCreateRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors>> {
        return this.api.createWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociation,  options).toPromise();
    }

    /**
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param param the request object
     */
    public create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors> {
        return this.api.create(param.fromObjectType, param.toObjectType, param.batchInputPublicAssociation,  options).toPromise();
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param param the request object
     */
    public readWithHttpInfo(param: BatchApiReadRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti>> {
        return this.api.readWithHttpInfo(param.fromObjectType, param.toObjectType, param.batchInputPublicObjectId,  options).toPromise();
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param param the request object
     */
    public read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti> {
        return this.api.read(param.fromObjectType, param.toObjectType, param.batchInputPublicObjectId,  options).toPromise();
    }

}
