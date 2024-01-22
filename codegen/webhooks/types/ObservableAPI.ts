import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BatchInputSubscriptionBatchUpdateRequest } from '../models/BatchInputSubscriptionBatchUpdateRequest';
import { BatchResponseSubscriptionResponse } from '../models/BatchResponseSubscriptionResponse';
import { BatchResponseSubscriptionResponseWithErrors } from '../models/BatchResponseSubscriptionResponseWithErrors';
import { SettingsChangeRequest } from '../models/SettingsChangeRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionPatchRequest } from '../models/SubscriptionPatchRequest';
import { SubscriptionResponse } from '../models/SubscriptionResponse';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class ObservableSettingsApi {
    private requestFactory: SettingsApiRequestFactory;
    private responseProcessor: SettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApiResponseProcessor();
    }

    /**
     * @param appId 
     */
    public clearWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.clear(appId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clearWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param appId 
     */
    public clear(appId: number, _options?: Configuration): Observable<void> {
        return this.clearWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param appId 
     * @param settingsChangeRequest 
     */
    public configureWithHttpInfo(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: Configuration): Observable<HttpInfo<SettingsResponse>> {
        const requestContextPromise = this.requestFactory.configure(appId, settingsChangeRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.configureWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param appId 
     * @param settingsChangeRequest 
     */
    public configure(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: Configuration): Observable<SettingsResponse> {
        return this.configureWithHttpInfo(appId, settingsChangeRequest, _options).pipe(map((apiResponse: HttpInfo<SettingsResponse>) => apiResponse.data));
    }

    /**
     * @param appId 
     */
    public getAllWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<SettingsResponse>> {
        const requestContextPromise = this.requestFactory.getAll(appId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param appId 
     */
    public getAll(appId: number, _options?: Configuration): Observable<SettingsResponse> {
        return this.getAllWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<SettingsResponse>) => apiResponse.data));
    }

}

import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";
export class ObservableSubscriptionsApi {
    private requestFactory: SubscriptionsApiRequestFactory;
    private responseProcessor: SubscriptionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionsApiRequestFactory,
        responseProcessor?: SubscriptionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionsApiResponseProcessor();
    }

    /**
     * @param subscriptionId 
     * @param appId 
     */
    public archiveWithHttpInfo(subscriptionId: number, appId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(subscriptionId, appId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subscriptionId 
     * @param appId 
     */
    public archive(subscriptionId: number, appId: number, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(subscriptionId, appId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param appId 
     * @param subscriptionCreateRequest 
     */
    public createWithHttpInfo(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Observable<HttpInfo<SubscriptionResponse>> {
        const requestContextPromise = this.requestFactory.create(appId, subscriptionCreateRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param appId 
     * @param subscriptionCreateRequest 
     */
    public create(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Observable<SubscriptionResponse> {
        return this.createWithHttpInfo(appId, subscriptionCreateRequest, _options).pipe(map((apiResponse: HttpInfo<SubscriptionResponse>) => apiResponse.data));
    }

    /**
     * @param appId 
     */
    public getAllWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<SubscriptionListResponse>> {
        const requestContextPromise = this.requestFactory.getAll(appId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param appId 
     */
    public getAll(appId: number, _options?: Configuration): Observable<SubscriptionListResponse> {
        return this.getAllWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<SubscriptionListResponse>) => apiResponse.data));
    }

    /**
     * @param subscriptionId 
     * @param appId 
     */
    public getByIdWithHttpInfo(subscriptionId: number, appId: number, _options?: Configuration): Observable<HttpInfo<SubscriptionResponse>> {
        const requestContextPromise = this.requestFactory.getById(subscriptionId, appId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subscriptionId 
     * @param appId 
     */
    public getById(subscriptionId: number, appId: number, _options?: Configuration): Observable<SubscriptionResponse> {
        return this.getByIdWithHttpInfo(subscriptionId, appId, _options).pipe(map((apiResponse: HttpInfo<SubscriptionResponse>) => apiResponse.data));
    }

    /**
     * @param subscriptionId 
     * @param appId 
     * @param subscriptionPatchRequest 
     */
    public updateWithHttpInfo(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Observable<HttpInfo<SubscriptionResponse>> {
        const requestContextPromise = this.requestFactory.update(subscriptionId, appId, subscriptionPatchRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param subscriptionId 
     * @param appId 
     * @param subscriptionPatchRequest 
     */
    public update(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Observable<SubscriptionResponse> {
        return this.updateWithHttpInfo(subscriptionId, appId, subscriptionPatchRequest, _options).pipe(map((apiResponse: HttpInfo<SubscriptionResponse>) => apiResponse.data));
    }

    /**
     * @param appId 
     * @param batchInputSubscriptionBatchUpdateRequest 
     */
    public updateBatchWithHttpInfo(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Observable<HttpInfo<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>> {
        const requestContextPromise = this.requestFactory.updateBatch(appId, batchInputSubscriptionBatchUpdateRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param appId 
     * @param batchInputSubscriptionBatchUpdateRequest 
     */
    public updateBatch(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Observable<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors> {
        return this.updateBatchWithHttpInfo(appId, batchInputSubscriptionBatchUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>) => apiResponse.data));
    }

}
