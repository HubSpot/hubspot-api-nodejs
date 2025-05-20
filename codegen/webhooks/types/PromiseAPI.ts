import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
    public clearWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.clearWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete the webhook settings for the specified app. Event subscriptions will not be deleted, but will be paused until another webhook is created.
     * Delete webhook settings
     * @param appId The ID of the app.
     */
    public clear(appId: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.clear(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update webhook settings for the specified app.
     * Update webhook settings
     * @param appId The ID of the app.
     * @param settingsChangeRequest
     */
    public configureWithHttpInfo(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
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
        const result = this.api.configureWithHttpInfo(appId, settingsChangeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update webhook settings for the specified app.
     * Update webhook settings
     * @param appId The ID of the app.
     * @param settingsChangeRequest
     */
    public configure(appId: number, settingsChangeRequest: SettingsChangeRequest, _options?: PromiseConfigurationOptions): Promise<SettingsResponse> {
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
        const result = this.api.configure(appId, settingsChangeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the webhook settings for the specified app, including the webhook’s target URL, throttle configuration, and create/update date.
     * Read webhook settings
     * @param appId The ID of the app.
     */
    public getAllWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
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
        const result = this.api.getAllWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the webhook settings for the specified app, including the webhook’s target URL, throttle configuration, and create/update date.
     * Read webhook settings
     * @param appId The ID of the app.
     */
    public getAll(appId: number, _options?: PromiseConfigurationOptions): Promise<SettingsResponse> {
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
        const result = this.api.getAll(appId, observableOptions);
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
    public archiveWithHttpInfo(subscriptionId: number, appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(subscriptionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing event subscription by ID.
     * Delete event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     */
    public archive(subscriptionId: number, appId: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(subscriptionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create new event subscription for the specified app.
     * Create an event subscription
     * @param appId The ID of the app.
     * @param subscriptionCreateRequest
     */
    public createWithHttpInfo(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionResponse>> {
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
        const result = this.api.createWithHttpInfo(appId, subscriptionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create new event subscription for the specified app.
     * Create an event subscription
     * @param appId The ID of the app.
     * @param subscriptionCreateRequest
     */
    public create(appId: number, subscriptionCreateRequest: SubscriptionCreateRequest, _options?: PromiseConfigurationOptions): Promise<SubscriptionResponse> {
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
        const result = this.api.create(appId, subscriptionCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve event subscriptions for the specified app.
     * Read event subscriptions
     * @param appId The ID of the app.
     */
    public getAllWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionListResponse>> {
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
        const result = this.api.getAllWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve event subscriptions for the specified app.
     * Read event subscriptions
     * @param appId The ID of the app.
     */
    public getAll(appId: number, _options?: PromiseConfigurationOptions): Promise<SubscriptionListResponse> {
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
        const result = this.api.getAll(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific event subscription by ID.
     * Read an event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     */
    public getByIdWithHttpInfo(subscriptionId: number, appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionResponse>> {
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
        const result = this.api.getByIdWithHttpInfo(subscriptionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific event subscription by ID.
     * Read an event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     */
    public getById(subscriptionId: number, appId: number, _options?: PromiseConfigurationOptions): Promise<SubscriptionResponse> {
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
        const result = this.api.getById(subscriptionId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing event subscription by ID.
     * Update an event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     * @param subscriptionPatchRequest
     */
    public updateWithHttpInfo(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubscriptionResponse>> {
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
        const result = this.api.updateWithHttpInfo(subscriptionId, appId, subscriptionPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update an existing event subscription by ID.
     * Update an event subscription
     * @param subscriptionId The ID of the event subscription.
     * @param appId The ID of the app.
     * @param subscriptionPatchRequest
     */
    public update(subscriptionId: number, appId: number, subscriptionPatchRequest: SubscriptionPatchRequest, _options?: PromiseConfigurationOptions): Promise<SubscriptionResponse> {
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
        const result = this.api.update(subscriptionId, appId, subscriptionPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch create event subscriptions for the specified app.
     * Batch create event subscriptions
     * @param appId The ID of the app.
     * @param batchInputSubscriptionBatchUpdateRequest
     */
    public updateBatchWithHttpInfo(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>> {
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
        const result = this.api.updateBatchWithHttpInfo(appId, batchInputSubscriptionBatchUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Batch create event subscriptions for the specified app.
     * Batch create event subscriptions
     * @param appId The ID of the app.
     * @param batchInputSubscriptionBatchUpdateRequest
     */
    public updateBatch(appId: number, batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest, _options?: PromiseConfigurationOptions): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors> {
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
        const result = this.api.updateBatch(appId, batchInputSubscriptionBatchUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



