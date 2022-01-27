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
     * Resets webhook target URL to empty, and max concurrency limit to `0` for the given app. This will effectively pause all webhook subscriptions until new settings are provided.
     * Clear webhook settings
     * @param appId The ID of the target app.
     */
    public clear(appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.clear(appId, _options);
        return result.toPromise();
    }

    /**
     * Used to set the webhook target URL and max concurrency limit for the given app.
     * Configure webhook settings
     * @param appId The ID of the target app.
     * @param settingsChangeRequest Settings state to create new with or replace existing settings with.
     */
    public configure(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.configure(appId, settingsChangeRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns the current state of webhook settings for the given app. These settings include the app's configured target URL and max concurrency limit.
     * Get webhook settings
     * @param appId The ID of the target app.
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
     * Permanently deletes a subscription. This cannot be undone.
     * Delete a subscription
     * @param subscriptionId The ID of subscription to delete.
     * @param appId The ID of the target app.
     */
    public archive(subscriptionId: number, appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(subscriptionId, appId, _options);
        return result.toPromise();
    }

    /**
     * Creates a new webhook subscription for the given app. Each subscription in an app must be unique.
     * Subscribe to an event
     * @param appId The ID of the target app.
     * @param subscriptionCreateRequest Details about the new subscription.
     */
    public create(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.create(appId, subscriptionCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns full details for all existing subscriptions for the given app.
     * Get subscription details
     * @param appId The ID of the target app.
     */
    public getAll(appId: number, _options?: Configuration): Promise<SubscriptionListResponse> {
        const result = this.api.getAll(appId, _options);
        return result.toPromise();
    }

    /**
     * Returns details about a subscription.
     * Get subscription
     * @param appId The ID of the target app.
     * @param subscriptionId The ID of the target subscription.
     */
    public getById(appId: number, subscriptionId: number, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.getById(appId, subscriptionId, _options);
        return result.toPromise();
    }

    /**
     * Updates the details for an existing subscription.
     * Update a subscription
     * @param subscriptionId The ID of the subscription to update.
     * @param appId The ID of the target app.
     * @param subscriptionPatchRequest Updated details for the subscription.
     */
    public update(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: Configuration): Promise<SubscriptionResponse> {
        const result = this.api.update(subscriptionId, appId, subscriptionPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * Activates or deactivates target app subscriptions.
     * Batch update subscriptions
     * @param appId The app ID of the target app.
     * @param batchInputSubscriptionBatchUpdateRequest Updated details for the specified subscriptions.
     */
    public updateBatch(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: Configuration): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors> {
        const result = this.api.updateBatch(appId, batchInputSubscriptionBatchUpdateRequest, _options);
        return result.toPromise();
    }


}



