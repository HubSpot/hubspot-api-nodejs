import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponseDealToDealSplits } from '../models/BatchResponseDealToDealSplits';
import { BatchResponseDealToDealSplitsWithErrors } from '../models/BatchResponseDealToDealSplitsWithErrors';
import { PublicDealSplitsBatchCreateRequest } from '../models/PublicDealSplitsBatchCreateRequest';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param batchInputPublicObjectId 
     */
    public readWithHttpInfo(batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Observable<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
        const requestContextPromise = this.requestFactory.read(batchInputPublicObjectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readWithHttpInfo(rsp)));
            }));
    }

    /**
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param batchInputPublicObjectId 
     */
    public read(batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Observable<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
        return this.readWithHttpInfo(batchInputPublicObjectId, _options).pipe(map((apiResponse: HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>) => apiResponse.data));
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param publicDealSplitsBatchCreateRequest 
     */
    public upsertWithHttpInfo(publicDealSplitsBatchCreateRequest: PublicDealSplitsBatchCreateRequest, _options?: Configuration): Observable<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>> {
        const requestContextPromise = this.requestFactory.upsert(publicDealSplitsBatchCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upsertWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param publicDealSplitsBatchCreateRequest 
     */
    public upsert(publicDealSplitsBatchCreateRequest: PublicDealSplitsBatchCreateRequest, _options?: Configuration): Observable<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors> {
        return this.upsertWithHttpInfo(publicDealSplitsBatchCreateRequest, _options).pipe(map((apiResponse: HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors>) => apiResponse.data));
    }

}
