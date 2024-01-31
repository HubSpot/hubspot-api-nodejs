import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';
import { BatchResponsePublicAssociationMultiWithErrors } from '../models/BatchResponsePublicAssociationMultiWithErrors';
import { BatchResponsePublicAssociationWithErrors } from '../models/BatchResponsePublicAssociationWithErrors';
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
     * Remove the associations between all pairs of objects identified in the request body.
     * Archive a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public archiveWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
        return result.toPromise();
    }

    /**
     * Remove the associations between all pairs of objects identified in the request body.
     * Archive a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public archive(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Promise<void> {
        const result = this.api.archive(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
        return result.toPromise();
    }

    /**
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public createWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors>> {
        const result = this.api.createWithHttpInfo(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
        return result.toPromise();
    }

    /**
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public create(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Promise<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors> {
        const result = this.api.create(fromObjectType, toObjectType, batchInputPublicAssociation, _options);
        return result.toPromise();
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicObjectId 
     */
    public readWithHttpInfo(fromObjectType: string, toObjectType: string, batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Promise<HttpInfo<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti>> {
        const result = this.api.readWithHttpInfo(fromObjectType, toObjectType, batchInputPublicObjectId, _options);
        return result.toPromise();
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicObjectId 
     */
    public read(fromObjectType: string, toObjectType: string, batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti> {
        const result = this.api.read(fromObjectType, toObjectType, batchInputPublicObjectId, _options);
        return result.toPromise();
    }


}



