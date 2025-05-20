import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponseDealToDealSplits } from '../models/BatchResponseDealToDealSplits';
import { BatchResponseDealToDealSplitsWithErrors } from '../models/BatchResponseDealToDealSplitsWithErrors';
import { PublicDealSplitsBatchCreateRequest } from '../models/PublicDealSplitsBatchCreateRequest';

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiReadRequest {
    /**
     * 
     * @type BatchInputPublicObjectId
     * @memberof BatchApiread
     */
    batchInputPublicObjectId: BatchInputPublicObjectId
}

export interface BatchApiUpsertRequest {
    /**
     * 
     * @type PublicDealSplitsBatchCreateRequest
     * @memberof BatchApiupsert
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
     * @param param the request object
     */
    public readWithHttpInfo(param: BatchApiReadRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
        return this.api.readWithHttpInfo(param.batchInputPublicObjectId,  options).toPromise();
    }

    /**
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param param the request object
     */
    public read(param: BatchApiReadRequest, options?: ConfigurationOptions): Promise<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
        return this.api.read(param.batchInputPublicObjectId,  options).toPromise();
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param param the request object
     */
    public upsertWithHttpInfo(param: BatchApiUpsertRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
        return this.api.upsertWithHttpInfo(param.publicDealSplitsBatchCreateRequest,  options).toPromise();
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param param the request object
     */
    public upsert(param: BatchApiUpsertRequest, options?: ConfigurationOptions): Promise<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
        return this.api.upsert(param.publicDealSplitsBatchCreateRequest,  options).toPromise();
    }

}
