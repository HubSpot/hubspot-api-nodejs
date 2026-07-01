import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponseDealToDealSplits } from '../models/BatchResponseDealToDealSplits';
import { BatchResponseDealToDealSplitsWithErrors } from '../models/BatchResponseDealToDealSplitsWithErrors';
import { PublicDealSplitsBatchCreateRequest } from '../models/PublicDealSplitsBatchCreateRequest';

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiCrmObjectsV3DealsSplitsBatchReadRequest {
    /**
     * 
     * @type BatchInputPublicObjectId
     * @memberof BatchApicrmObjectsV3DealsSplitsBatchRead
     */
    batchInputPublicObjectId: BatchInputPublicObjectId
}

export interface BatchApiCrmObjectsV3DealsSplitsBatchUpsertRequest {
    /**
     * 
     * @type PublicDealSplitsBatchCreateRequest
     * @memberof BatchApicrmObjectsV3DealsSplitsBatchUpsert
     */
    publicDealSplitsBatchCreateRequest: PublicDealSplitsBatchCreateRequest
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read a batch of deal split objects by their associated deal object internal ID
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param param the request object
     */
    public crmObjectsV3DealsSplitsBatchReadWithHttpInfo(param: BatchApiCrmObjectsV3DealsSplitsBatchReadRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
        return this.api.crmObjectsV3DealsSplitsBatchReadWithHttpInfo(param.batchInputPublicObjectId,  options).toPromise();
    }

    /**
     * Read a batch of deal split objects by their associated deal object internal ID
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param param the request object
     */
    public crmObjectsV3DealsSplitsBatchRead(param: BatchApiCrmObjectsV3DealsSplitsBatchReadRequest, options?: ConfigurationOptions): Promise<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
        return this.api.crmObjectsV3DealsSplitsBatchRead(param.batchInputPublicObjectId,  options).toPromise();
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param param the request object
     */
    public crmObjectsV3DealsSplitsBatchUpsertWithHttpInfo(param: BatchApiCrmObjectsV3DealsSplitsBatchUpsertRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
        return this.api.crmObjectsV3DealsSplitsBatchUpsertWithHttpInfo(param.publicDealSplitsBatchCreateRequest,  options).toPromise();
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param param the request object
     */
    public crmObjectsV3DealsSplitsBatchUpsert(param: BatchApiCrmObjectsV3DealsSplitsBatchUpsertRequest, options?: ConfigurationOptions): Promise<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
        return this.api.crmObjectsV3DealsSplitsBatchUpsert(param.publicDealSplitsBatchCreateRequest,  options).toPromise();
    }

}
