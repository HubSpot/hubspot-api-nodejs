import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchInputSubscriptionBatchUpdateRequest } from '../models/BatchInputSubscriptionBatchUpdateRequest';
import { BatchResponseSubscriptionResponse } from '../models/BatchResponseSubscriptionResponse';
import { BatchResponseSubscriptionResponseWithErrors } from '../models/BatchResponseSubscriptionResponseWithErrors';
import { SettingsChangeRequest } from '../models/SettingsChangeRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionPatchRequest } from '../models/SubscriptionPatchRequest';
import { SubscriptionResponse } from '../models/SubscriptionResponse';
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
     * Delete the webhook settings for the specified app. Event subscriptions will not be deleted, but will be paused until another webhook is created.
     * Delete webhook settings
     * @param appId The ID of the app.
     */
    public clearWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.clearWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Delete the webhook settings for the specified app. Event subscriptions will not be deleted, but will be paused until another webhook is created.
     * Delete webhook settings
     * @param appId The ID of the app.
     */
    public clear(appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.clear(appId, _options);
        return result.toPromise();
    }

    /**
     * Update webhook settings for the specified app.
     * Delete webhook settings
     * @param appId The ID of the app.
     * @param settingsChangeRequest 
     */
    public configureWithHttpInfo(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        const result = this.api.configureWithHttpInfo(appId, settingsChangeRequest, _options);
        return result.toPromise();
    }

    /**
     * Update webhook settings for the specified app.
     * Delete webhook settings
     * @param appId The ID of the app.
     * @param settingsChangeRequest 
     */
    public configure(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.configure(appId, settingsChangeRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the webhook settings for the specified app, including the webhook’s target URL, throttle configuration, and create/update date.
     * Read webhook settings
     * @param appId The ID of the app.
     */
    public getAllWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        const result = this.api.getAllWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the webhook settings for the specified app, including the webhook’s target URL, throttle configuration, and create/update date.
     * Read webhook settings
     * @param appId The ID of the app.
     */
    public getAll(appId: number, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.getAll(appId, _options);
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
     * Delete an existing event subscription by ID.
     * Delete event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     */
    public archiveWithHttpInfo(subscriptionId: number, appId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(subscriptionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing event subscription by ID.
     * Delete event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     */
    public archive(subscriptionId: number, appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(subscriptionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Create new event subscription for the specified app.
     * Create an event subscription
     * @param appId The ID of the app.
     * @param subscriptionCreateRequest 
     */
    public createWithHttpInfo(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Promise<HttpInfo<SubscriptionResponse>> {
        const result = this.api.createWithHttpInfo(appId, subscriptionCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Create new event subscription for the specified app.
     * Create an event subscription
     * @param appId The ID of the app.
     * @param subscriptionCreateRequest 
     */
    public create(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.create(appId, subscriptionCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve event subscriptions for the specified app.
     * Read event subscriptions
     * @param appId The ID of the app.
     */
    public getAllWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<SubscriptionListResponse>> {
        const result = this.api.getAllWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve event subscriptions for the specified app.
     * Read event subscriptions
     * @param appId The ID of the app.
     */
    public getAll(appId: number, _options?: Configuration): Promise<SubscriptionListResponse> {
        const result = this.api.getAll(appId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a specific event subscription by ID.
     * Read an event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     */
    public getByIdWithHttpInfo(subscriptionId: number, appId: number, _options?: Configuration): Promise<HttpInfo<SubscriptionResponse>> {
        const result = this.api.getByIdWithHttpInfo(subscriptionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a specific event subscription by ID.
     * Read an event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     */
    public getById(subscriptionId: number, appId: number, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.getById(subscriptionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Update an existing event subscription by ID.
     * Update an event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     * @param subscriptionPatchRequest 
     */
    public updateWithHttpInfo(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Promise<HttpInfo<SubscriptionResponse>> {
        const result = this.api.updateWithHttpInfo(subscriptionId, appId, subscriptionPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * Update an existing event subscription by ID.
     * Update an event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     * @param subscriptionPatchRequest 
     */
    public update(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.update(subscriptionId, appId, subscriptionPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * Batch create event subscriptions for the specified app.
     * Batch create event subscriptions
     * @param appId The ID of the app.
     * @param batchInputSubscriptionBatchUpdateRequest 
     */
    public updateBatchWithHttpInfo(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Promise<HttpInfo<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>> {
        const result = this.api.updateBatchWithHttpInfo(appId, batchInputSubscriptionBatchUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * Batch create event subscriptions for the specified app.
     * Batch create event subscriptions
     * @param appId The ID of the app.
     * @param batchInputSubscriptionBatchUpdateRequest 
     */
    public updateBatch(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors> {
        const result = this.api.updateBatch(appId, batchInputSubscriptionBatchUpdateRequest, _options);
        return result.toPromise();
    }


}



