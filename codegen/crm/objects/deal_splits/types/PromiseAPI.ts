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
     * @param batchInputPublicObjectId
     */
    public readWithHttpInfo(batchInputPublicObjectId: BatchInputPublicObjectId, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
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
        const result = this.api.readWithHttpInfo(batchInputPublicObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param batchInputPublicObjectId
     */
    public read(batchInputPublicObjectId: BatchInputPublicObjectId, _options?: PromiseConfigurationOptions): Promise<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
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
        const result = this.api.read(batchInputPublicObjectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param publicDealSplitsBatchCreateRequest
     */
    public upsertWithHttpInfo(publicDealSplitsBatchCreateRequest: PublicDealSplitsBatchCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
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
        const result = this.api.upsertWithHttpInfo(publicDealSplitsBatchCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param publicDealSplitsBatchCreateRequest
     */
    public upsert(publicDealSplitsBatchCreateRequest: PublicDealSplitsBatchCreateRequest, _options?: PromiseConfigurationOptions): Promise<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
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
        const result = this.api.upsert(publicDealSplitsBatchCreateRequest, observableOptions);
        return result.toPromise();
    }


}



