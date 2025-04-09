import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponseDealToDealSplits } from '../models/BatchResponseDealToDealSplits';
import { BatchResponseDealToDealSplitsWithErrors } from '../models/BatchResponseDealToDealSplitsWithErrors';
import { PublicDealSplitsBatchCreateRequest } from '../models/PublicDealSplitsBatchCreateRequest';
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
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param batchInputPublicObjectId 
     */
    public readWithHttpInfo(batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
        const result = this.api.readWithHttpInfo(batchInputPublicObjectId, _options);
        return result.toPromise();
    }

    /**
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param batchInputPublicObjectId 
     */
    public read(batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Promise<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
        const result = this.api.read(batchInputPublicObjectId, _options);
        return result.toPromise();
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param publicDealSplitsBatchCreateRequest 
     */
    public upsertWithHttpInfo(publicDealSplitsBatchCreateRequest: PublicDealSplitsBatchCreateRequest, _options?: Configuration): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
        const result = this.api.upsertWithHttpInfo(publicDealSplitsBatchCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param publicDealSplitsBatchCreateRequest 
     */
    public upsert(publicDealSplitsBatchCreateRequest: PublicDealSplitsBatchCreateRequest, _options?: Configuration): Promise<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
        const result = this.api.upsert(publicDealSplitsBatchCreateRequest, _options);
        return result.toPromise();
    }


}



