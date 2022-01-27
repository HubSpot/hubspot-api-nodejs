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

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiClearRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof SettingsApiclear
     */
    appId: number
}

export interface SettingsApiConfigureRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof SettingsApiconfigure
     */
    appId: number
    /**
     * Settings state to create new with or replace existing settings with.
     * @type SettingsChangeRequest
     * @memberof SettingsApiconfigure
     */
    settingsChangeRequest: SettingsChangeRequest
}

export interface SettingsApiGetAllRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof SettingsApigetAll
     */
    appId: number
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Resets webhook target URL to empty, and max concurrency limit to `0` for the given app. This will effectively pause all webhook subscriptions until new settings are provided.
     * Clear webhook settings
     * @param param the request object
     */
    public clear(param: SettingsApiClearRequest, options?: Configuration): Promise<void> {
        return this.api.clear(param.appId,  options).toPromise();
    }

    /**
     * Used to set the webhook target URL and max concurrency limit for the given app.
     * Configure webhook settings
     * @param param the request object
     */
    public configure(param: SettingsApiConfigureRequest, options?: Configuration): Promise<SettingsResponse> {
        return this.api.configure(param.appId, param.settingsChangeRequest,  options).toPromise();
    }

    /**
     * Returns the current state of webhook settings for the given app. These settings include the app's configured target URL and max concurrency limit.
     * Get webhook settings
     * @param param the request object
     */
    public getAll(param: SettingsApiGetAllRequest, options?: Configuration): Promise<SettingsResponse> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

}

import { ObservableSubscriptionsApi } from "./ObservableAPI";
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";

export interface SubscriptionsApiArchiveRequest {
    /**
     * The ID of subscription to delete.
     * @type number
     * @memberof SubscriptionsApiarchive
     */
    subscriptionId: number
    /**
     * The ID of the target app.
     * @type number
     * @memberof SubscriptionsApiarchive
     */
    appId: number
}

export interface SubscriptionsApiCreateRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof SubscriptionsApicreate
     */
    appId: number
    /**
     * Details about the new subscription.
     * @type SubscriptionCreateRequest
     * @memberof SubscriptionsApicreate
     */
    subscriptionCreateRequest: SubscriptionCreateRequest
}

export interface SubscriptionsApiGetAllRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof SubscriptionsApigetAll
     */
    appId: number
}

export interface SubscriptionsApiGetByIdRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof SubscriptionsApigetById
     */
    appId: number
    /**
     * The ID of the target subscription.
     * @type number
     * @memberof SubscriptionsApigetById
     */
    subscriptionId: number
}

export interface SubscriptionsApiUpdateRequest {
    /**
     * The ID of the subscription to update.
     * @type number
     * @memberof SubscriptionsApiupdate
     */
    subscriptionId: number
    /**
     * The ID of the target app.
     * @type number
     * @memberof SubscriptionsApiupdate
     */
    appId: number
    /**
     * Updated details for the subscription.
     * @type SubscriptionPatchRequest
     * @memberof SubscriptionsApiupdate
     */
    subscriptionPatchRequest: SubscriptionPatchRequest
}

export interface SubscriptionsApiUpdateBatchRequest {
    /**
     * The app ID of the target app.
     * @type number
     * @memberof SubscriptionsApiupdateBatch
     */
    appId: number
    /**
     * Updated details for the specified subscriptions.
     * @type BatchInputSubscriptionBatchUpdateRequest
     * @memberof SubscriptionsApiupdateBatch
     */
    batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest
}

export class ObjectSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Permanently deletes a subscription. This cannot be undone.
     * Delete a subscription
     * @param param the request object
     */
    public archive(param: SubscriptionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.subscriptionId, param.appId,  options).toPromise();
    }

    /**
     * Creates a new webhook subscription for the given app. Each subscription in an app must be unique.
     * Subscribe to an event
     * @param param the request object
     */
    public create(param: SubscriptionsApiCreateRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.create(param.appId, param.subscriptionCreateRequest,  options).toPromise();
    }

    /**
     * Returns full details for all existing subscriptions for the given app.
     * Get subscription details
     * @param param the request object
     */
    public getAll(param: SubscriptionsApiGetAllRequest, options?: Configuration): Promise<SubscriptionListResponse> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * Returns details about a subscription.
     * Get subscription
     * @param param the request object
     */
    public getById(param: SubscriptionsApiGetByIdRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.getById(param.appId, param.subscriptionId,  options).toPromise();
    }

    /**
     * Updates the details for an existing subscription.
     * Update a subscription
     * @param param the request object
     */
    public update(param: SubscriptionsApiUpdateRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.update(param.subscriptionId, param.appId, param.subscriptionPatchRequest,  options).toPromise();
    }

    /**
     * Activates or deactivates target app subscriptions.
     * Batch update subscriptions
     * @param param the request object
     */
    public updateBatch(param: SubscriptionsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors> {
        return this.api.updateBatch(param.appId, param.batchInputSubscriptionBatchUpdateRequest,  options).toPromise();
    }

}
