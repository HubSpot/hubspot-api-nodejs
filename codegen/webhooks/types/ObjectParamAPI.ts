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

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * The ID of the target app.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiarchive
     */
    appId: number
    /**
     * The ID of the subscription to delete.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiarchive
     */
    subscriptionId: number
}

export interface BasicApiClearRequest {
    /**
     * The ID of the target app.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiclear
     */
    appId: number
}

export interface BasicApiConfigureRequest {
    /**
     * The ID of the target app.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiconfigure
     */
    appId: number
    /**
     * New webhook settings to configure for the app, or updated settings to replace existing configuration.
     * @type SettingsChangeRequest
     * @memberof BasicApiconfigure
     */
    settingsChangeRequest: SettingsChangeRequest
}

export interface BasicApiCreateRequest {
    /**
     * The ID of the target app.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicreate
     */
    appId: number
    /**
     * Details about the new subscription.
     * @type SubscriptionCreateRequest
     * @memberof BasicApicreate
     */
    subscriptionCreateRequest: SubscriptionCreateRequest
}

export interface BasicApiGetAllRequest {
    /**
     * The ID of the target app.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetAll
     */
    appId: number
}

export interface BasicApiGetAll0Request {
    /**
     * The ID of the target app.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetAll_1
     */
    appId: number
}

export interface BasicApiGetByIdRequest {
    /**
     * The ID of the target app.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetById
     */
    appId: number
    /**
     * The ID of the target subscription.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetById
     */
    subscriptionId: number
}

export interface BasicApiUpdateRequest {
    /**
     * The ID of the target app.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiupdate
     */
    appId: number
    /**
     * The ID of the subscription to update.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiupdate
     */
    subscriptionId: number
    /**
     * Updated details for the subscription.
     * @type SubscriptionPatchRequest
     * @memberof BasicApiupdate
     */
    subscriptionPatchRequest: SubscriptionPatchRequest
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an existing event subscription by ID.
     * Delete event subscription
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.appId, param.subscriptionId,  options).toPromise();
    }

    /**
     * Delete an existing event subscription by ID.
     * Delete event subscription
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.appId, param.subscriptionId,  options).toPromise();
    }

    /**
     * Delete the webhook settings for the specified app. Event subscriptions will not be deleted, but will be paused until another webhook is created.
     * Delete webhook settings
     * @param param the request object
     */
    public clearWithHttpInfo(param: BasicApiClearRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.clearWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Delete the webhook settings for the specified app. Event subscriptions will not be deleted, but will be paused until another webhook is created.
     * Delete webhook settings
     * @param param the request object
     */
    public clear(param: BasicApiClearRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.clear(param.appId,  options).toPromise();
    }

    /**
     * Update webhook settings for the specified app.
     * Update webhook settings
     * @param param the request object
     */
    public configureWithHttpInfo(param: BasicApiConfigureRequest, options?: ConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
        return this.api.configureWithHttpInfo(param.appId, param.settingsChangeRequest,  options).toPromise();
    }

    /**
     * Update webhook settings for the specified app.
     * Update webhook settings
     * @param param the request object
     */
    public configure(param: BasicApiConfigureRequest, options?: ConfigurationOptions): Promise<SettingsResponse> {
        return this.api.configure(param.appId, param.settingsChangeRequest,  options).toPromise();
    }

    /**
     * Create new event subscription for the specified app.
     * Create an event subscription
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionResponse>> {
        return this.api.createWithHttpInfo(param.appId, param.subscriptionCreateRequest,  options).toPromise();
    }

    /**
     * Create new event subscription for the specified app.
     * Create an event subscription
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<SubscriptionResponse> {
        return this.api.create(param.appId, param.subscriptionCreateRequest,  options).toPromise();
    }

    /**
     * Retrieve the webhook settings for the specified app, including the webhook’s target URL, throttle configuration, and create/update date.
     * Read webhook settings
     * @param param the request object
     */
    public getAllWithHttpInfo(param: BasicApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the webhook settings for the specified app, including the webhook’s target URL, throttle configuration, and create/update date.
     * Read webhook settings
     * @param param the request object
     */
    public getAll(param: BasicApiGetAllRequest, options?: ConfigurationOptions): Promise<SettingsResponse> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * Retrieve event subscriptions for the specified app.
     * Read event subscriptions
     * @param param the request object
     */
    public getAll_1WithHttpInfo(param: BasicApiGetAll0Request, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionListResponse>> {
        return this.api.getAll_1WithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve event subscriptions for the specified app.
     * Read event subscriptions
     * @param param the request object
     */
    public getAll_1(param: BasicApiGetAll0Request, options?: ConfigurationOptions): Promise<SubscriptionListResponse> {
        return this.api.getAll_1(param.appId,  options).toPromise();
    }

    /**
     * Retrieve a specific event subscription by ID.
     * Read an event subscription
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionResponse>> {
        return this.api.getByIdWithHttpInfo(param.appId, param.subscriptionId,  options).toPromise();
    }

    /**
     * Retrieve a specific event subscription by ID.
     * Read an event subscription
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<SubscriptionResponse> {
        return this.api.getById(param.appId, param.subscriptionId,  options).toPromise();
    }

    /**
     * Update an existing event subscription by ID.
     * Update an event subscription
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubscriptionResponse>> {
        return this.api.updateWithHttpInfo(param.appId, param.subscriptionId, param.subscriptionPatchRequest,  options).toPromise();
    }

    /**
     * Update an existing event subscription by ID.
     * Update an event subscription
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<SubscriptionResponse> {
        return this.api.update(param.appId, param.subscriptionId, param.subscriptionPatchRequest,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiUpdateBatchRequest {
    /**
     * The ID of the target app.
     * Defaults to: undefined
     * @type number
     * @memberof BatchApiupdateBatch
     */
    appId: number
    /**
     * Updated details for the specified subscriptions.
     * @type BatchInputSubscriptionBatchUpdateRequest
     * @memberof BatchApiupdateBatch
     */
    batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Batch create event subscriptions for the specified app.
     * Batch create event subscriptions
     * @param param the request object
     */
    public updateBatchWithHttpInfo(param: BatchApiUpdateBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>> {
        return this.api.updateBatchWithHttpInfo(param.appId, param.batchInputSubscriptionBatchUpdateRequest,  options).toPromise();
    }

    /**
     * Batch create event subscriptions for the specified app.
     * Batch create event subscriptions
     * @param param the request object
     */
    public updateBatch(param: BatchApiUpdateBatchRequest, options?: ConfigurationOptions): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors> {
        return this.api.updateBatch(param.appId, param.batchInputSubscriptionBatchUpdateRequest,  options).toPromise();
    }

}
