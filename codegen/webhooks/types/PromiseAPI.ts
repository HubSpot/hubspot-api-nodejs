import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BatchInputSubscriptionBatchUpdateRequest } from '../models/BatchInputSubscriptionBatchUpdateRequest';
import { BatchResponseSubscriptionResponse } from '../models/BatchResponseSubscriptionResponse';
import { BatchResponseSubscriptionResponseWithErrors } from '../models/BatchResponseSubscriptionResponseWithErrors';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { SettingsChangeRequest } from '../models/SettingsChangeRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { StandardError } from '../models/StandardError';
import { SubscriptionBatchUpdateRequest } from '../models/SubscriptionBatchUpdateRequest';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionPatchRequest } from '../models/SubscriptionPatchRequest';
import { SubscriptionResponse } from '../models/SubscriptionResponse';
import { ThrottlingSettings } from '../models/ThrottlingSettings';
import { ObservableSettingsApi } from './ObservableAPI';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class PromiseSettingsApi {
    private api: ObservableSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param appId 
     * @param appId2 
     */
    public clear(appId: number, appId2: number, _options?: Configuration): Promise<void> {
        const result = this.api.clear(appId, appId2, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     * @param appId2 
     * @param settingsChangeRequest 
     */
    public configure(appId: number, appId2: number, settingsChangeRequest: SettingsChangeRequest, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.configure(appId, appId2, settingsChangeRequest, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     * @param appId2 
     */
    public getAll(appId: number, appId2: number, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.getAll(appId, appId2, _options);
        return result.toPromise();
    }


}



import { ObservableSubscriptionsApi } from './ObservableAPI';

import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";
export class PromiseSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionsApiRequestFactory,
        responseProcessor?: SubscriptionsApiResponseProcessor
    ) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param subscriptionId 
     * @param appId 
     * @param appId2 
     */
    public archive(subscriptionId: number, appId: number, appId2: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(subscriptionId, appId, appId2, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     * @param appId2 
     * @param subscriptionCreateRequest 
     */
    public create(appId: number, appId2: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.create(appId, appId2, subscriptionCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     * @param appId2 
     */
    public getAll(appId: number, appId2: number, _options?: Configuration): Promise<SubscriptionListResponse> {
        const result = this.api.getAll(appId, appId2, _options);
        return result.toPromise();
    }

    /**
     * @param subscriptionId 
     * @param appId 
     * @param appId2 
     */
    public getById(subscriptionId: number, appId: number, appId2: number, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.getById(subscriptionId, appId, appId2, _options);
        return result.toPromise();
    }

    /**
     * @param subscriptionId 
     * @param appId 
     * @param appId2 
     * @param subscriptionPatchRequest 
     */
    public update(subscriptionId: number, appId: number, appId2: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.update(subscriptionId, appId, appId2, subscriptionPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     * @param appId2 
     * @param batchInputSubscriptionBatchUpdateRequest 
     */
    public updateBatch(appId: number, appId2: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors> {
        const result = this.api.updateBatch(appId, appId2, batchInputSubscriptionBatchUpdateRequest, _options);
        return result.toPromise();
    }


}



