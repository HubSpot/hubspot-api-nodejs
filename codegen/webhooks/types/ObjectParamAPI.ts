import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { BatchInputSubscriptionBatchUpdateRequest } from '../models/BatchInputSubscriptionBatchUpdateRequest';
import { BatchResponseSubscriptionResponse } from '../models/BatchResponseSubscriptionResponse';
import { BatchResponseSubscriptionResponseWithErrors } from '../models/BatchResponseSubscriptionResponseWithErrors';
import { SettingsChangeRequest } from '../models/SettingsChangeRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionPatchRequest } from '../models/SubscriptionPatchRequest';
import { SubscriptionResponse } from '../models/SubscriptionResponse';

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiClearRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SettingsApiclear
     */
    appId: number
}

export interface SettingsApiConfigureRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SettingsApiconfigure
     */
    appId: number
    /**
     * 
     * @type SettingsChangeRequest
     * @memberof SettingsApiconfigure
     */
    settingsChangeRequest: SettingsChangeRequest
}

export interface SettingsApiGetAllRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
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
     * Delete the webhook settings for the specified app. Event subscriptions will not be deleted, but will be paused until another webhook is created.
     * Delete webhook settings
     * @param param the request object
     */
    public clearWithHttpInfo(param: SettingsApiClearRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.clearWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Delete the webhook settings for the specified app. Event subscriptions will not be deleted, but will be paused until another webhook is created.
     * Delete webhook settings
     * @param param the request object
     */
    public clear(param: SettingsApiClearRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.clear(param.appId,  options).toPromise();
    }

    /**
     * Update webhook settings for the specified app.
     * Update webhook settings
     * @param param the request object
     */
    public configureWithHttpInfo(param: SettingsApiConfigureRequest, options?: ConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
        return this.api.configureWithHttpInfo(param.appId, param.settingsChangeRequest,  options).toPromise();
    }

    /**
     * Update webhook settings for the specified app.
     * Update webhook settings
     * @param param the request object
     */
    public configure(param: SettingsApiConfigureRequest, options?: ConfigurationOptions): Promise<SettingsResponse> {
        return this.api.configure(param.appId, param.settingsChangeRequest,  options).toPromise();
    }

    /**
     * Retrieve the webhook settings for the specified app, including the webhook’s target URL, throttle configuration, and create/update date.
     * Read webhook settings
     * @param param the request object
     */
    public getAllWithHttpInfo(param: SettingsApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the webhook settings for the specified app, including the webhook’s target URL, throttle configuration, and create/update date.
     * Read webhook settings
     * @param param the request object
     */
    public getAll(param: SettingsApiGetAllRequest, options?: ConfigurationOptions): Promise<SettingsResponse> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

}

import { ObservableSubscriptionsApi } from "./ObservableAPI";
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";

export interface SubscriptionsApiArchiveRequest {
    /**
     * The ID of the event subscription.
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApiarchive
     */
    subscriptionId: number
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApiarchive
     */
    appId: number
}

export interface SubscriptionsApiCreateRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApicreate
     */
    appId: number
    /**
     * 
     * @type SubscriptionCreateRequest
     * @memberof SubscriptionsApicreate
     */
    subscriptionCreateRequest: SubscriptionCreateRequest
}

export interface SubscriptionsApiGetAllRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApigetAll
     */
    appId: number
}

export interface SubscriptionsApiGetByIdRequest {
    /**
     * The ID of the event subscription.
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApigetById
     */
    subscriptionId: number
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApigetById
     */
    appId: number
}

export interface SubscriptionsApiUpdateRequest {
    /**
     * The ID of the event subscription.
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApiupdate
     */
    subscriptionId: number
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApiupdate
     */
    appId: number
    /**
     * 
     * @type SubscriptionPatchRequest
     * @memberof SubscriptionsApiupdate
     */
    subscriptionPatchRequest: SubscriptionPatchRequest
}

export interface SubscriptionsApiUpdateBatchRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SubscriptionsApiupdateBatch
     */
    appId: number
    /**
     * 
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
     * Delete an existing event subscription by ID.
     * Delete event subscription
     * @param param the request object
     */
    public archiveWithHttpInfo(param: SubscriptionsApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.subscriptionId, param.appId,  options).toPromise();
    }

    /**
     * Delete an existing event subscription by ID.
     * Delete event subscription
     * @param param the request object
     */
    public archive(param: SubscriptionsApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.subscriptionId, param.appId,  options).toPromise();
    }

    /**
     * Create new event subscription for the specified app.
     * Create an event subscription
     * @param param the request object
     */
    public createWithHttpInfo(param: SubscriptionsApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionResponse>> {
        return this.api.createWithHttpInfo(param.appId, param.subscriptionCreateRequest,  options).toPromise();
    }

    /**
     * Create new event subscription for the specified app.
     * Create an event subscription
     * @param param the request object
     */
    public create(param: SubscriptionsApiCreateRequest, options?: ConfigurationOptions): Promise<SubscriptionResponse> {
        return this.api.create(param.appId, param.subscriptionCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve event subscriptions for the specified app.
     * Read event subscriptions
     * @param param the request object
     */
    public getAllWithHttpInfo(param: SubscriptionsApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionListResponse>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve event subscriptions for the specified app.
     * Read event subscriptions
     * @param param the request object
     */
    public getAll(param: SubscriptionsApiGetAllRequest, options?: ConfigurationOptions): Promise<SubscriptionListResponse> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * Retrieve a specific event subscription by ID.
     * Read an event subscription
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: SubscriptionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionResponse>> {
        return this.api.getByIdWithHttpInfo(param.subscriptionId, param.appId,  options).toPromise();
    }

    /**
     * Retrieve a specific event subscription by ID.
     * Read an event subscription
     * @param param the request object
     */
    public getById(param: SubscriptionsApiGetByIdRequest, options?: ConfigurationOptions): Promise<SubscriptionResponse> {
        return this.api.getById(param.subscriptionId, param.appId,  options).toPromise();
    }

    /**
     * Update an existing event subscription by ID.
     * Update an event subscription
     * @param param the request object
     */
    public updateWithHttpInfo(param: SubscriptionsApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionResponse>> {
        return this.api.updateWithHttpInfo(param.subscriptionId, param.appId, param.subscriptionPatchRequest,  options).toPromise();
    }

    /**
     * Update an existing event subscription by ID.
     * Update an event subscription
     * @param param the request object
     */
    public update(param: SubscriptionsApiUpdateRequest, options?: ConfigurationOptions): Promise<SubscriptionResponse> {
        return this.api.update(param.subscriptionId, param.appId, param.subscriptionPatchRequest,  options).toPromise();
    }

    /**
     * Batch create event subscriptions for the specified app.
     * Batch create event subscriptions
     * @param param the request object
     */
    public updateBatchWithHttpInfo(param: SubscriptionsApiUpdateBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>> {
        return this.api.updateBatchWithHttpInfo(param.appId, param.batchInputSubscriptionBatchUpdateRequest,  options).toPromise();
    }

    /**
     * Batch create event subscriptions for the specified app.
     * Batch create event subscriptions
     * @param param the request object
     */
    public updateBatch(param: SubscriptionsApiUpdateBatchRequest, options?: ConfigurationOptions): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors> {
        return this.api.updateBatch(param.appId, param.batchInputSubscriptionBatchUpdateRequest,  options).toPromise();
    }

}
