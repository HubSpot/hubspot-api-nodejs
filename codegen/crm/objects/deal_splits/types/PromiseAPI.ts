import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param batchInputPublicObjectId
     */
    public crmObjectsV3DealsSplitsBatchReadWithHttpInfo(batchInputPublicObjectId: BatchInputPublicObjectId, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.crmObjectsV3DealsSplitsBatchReadWithHttpInfo(batchInputPublicObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a batch of deal split objects by their associated deal object internal ID
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param batchInputPublicObjectId
     */
    public crmObjectsV3DealsSplitsBatchRead(batchInputPublicObjectId: BatchInputPublicObjectId, _options?: PromiseConfigurationOptions): Promise<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.crmObjectsV3DealsSplitsBatchRead(batchInputPublicObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param publicDealSplitsBatchCreateRequest
     */
    public crmObjectsV3DealsSplitsBatchUpsertWithHttpInfo(publicDealSplitsBatchCreateRequest: PublicDealSplitsBatchCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.crmObjectsV3DealsSplitsBatchUpsertWithHttpInfo(publicDealSplitsBatchCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param publicDealSplitsBatchCreateRequest
     */
    public crmObjectsV3DealsSplitsBatchUpsert(publicDealSplitsBatchCreateRequest: PublicDealSplitsBatchCreateRequest, _options?: PromiseConfigurationOptions): Promise<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.crmObjectsV3DealsSplitsBatchUpsert(publicDealSplitsBatchCreateRequest, observableOptions);
        return result.toPromise();
    }


}



