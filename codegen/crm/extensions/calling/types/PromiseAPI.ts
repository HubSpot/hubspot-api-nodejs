import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { ChannelConnectionSettingsPatchRequest } from '../models/ChannelConnectionSettingsPatchRequest';
import { ChannelConnectionSettingsRequest } from '../models/ChannelConnectionSettingsRequest';
import { ChannelConnectionSettingsResponse } from '../models/ChannelConnectionSettingsResponse';
import { CompletedThirdPartyCallRequest } from '../models/CompletedThirdPartyCallRequest';
import { CompletedThirdPartyCallResponse } from '../models/CompletedThirdPartyCallResponse';
import { MarkRecordingAsReadyRequest } from '../models/MarkRecordingAsReadyRequest';
import { RecordingSettingsPatchRequest } from '../models/RecordingSettingsPatchRequest';
import { RecordingSettingsRequest } from '../models/RecordingSettingsRequest';
import { RecordingSettingsResponse } from '../models/RecordingSettingsResponse';
import { SettingsPatchRequest } from '../models/SettingsPatchRequest';
import { SettingsRequest } from '../models/SettingsRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { ObservableAdvancedApi } from './ObservableAPI';

import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";
export class PromiseAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedApiRequestFactory,
        responseProcessor?: AdvancedApiResponseProcessor
    ) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to submit information about an inbound call to the CRM system. The request must include details such as the external call ID, call status, and involved phone numbers. This operation helps in logging and managing inbound call data within the CRM.
     * Submit details of an inbound call to the CRM.
     * @param completedThirdPartyCallRequest
     */
    public crmV3ExtensionsCallingInboundCallWithHttpInfo(completedThirdPartyCallRequest: CompletedThirdPartyCallRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CompletedThirdPartyCallResponse>> {
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
        const result = this.api.crmV3ExtensionsCallingInboundCallWithHttpInfo(completedThirdPartyCallRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to submit information about an inbound call to the CRM system. The request must include details such as the external call ID, call status, and involved phone numbers. This operation helps in logging and managing inbound call data within the CRM.
     * Submit details of an inbound call to the CRM.
     * @param completedThirdPartyCallRequest
     */
    public crmV3ExtensionsCallingInboundCall(completedThirdPartyCallRequest: CompletedThirdPartyCallRequest, _options?: PromiseConfigurationOptions): Promise<CompletedThirdPartyCallResponse> {
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
        const result = this.api.crmV3ExtensionsCallingInboundCall(completedThirdPartyCallRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is used to mark a call recording as ready. It requires the engagementId to identify the specific recording.
     * Mark a call recording as ready for retrieval.
     * @param markRecordingAsReadyRequest
     */
    public markAsReadyWithHttpInfo(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.markAsReadyWithHttpInfo(markRecordingAsReadyRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is used to mark a call recording as ready. It requires the engagementId to identify the specific recording.
     * Mark a call recording as ready for retrieval.
     * @param markRecordingAsReadyRequest
     */
    public markAsReady(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.markAsReady(markRecordingAsReadyRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new settings for the calling extension associated with the specified appId.
     * Create new calling extension settings for a specific app.
     * @param appId The unique identifier for the app for which new calling extension settings are being created.
     * @param settingsRequest
     */
    public createWithHttpInfo(appId: number, settingsRequest: SettingsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
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
        const result = this.api.createWithHttpInfo(appId, settingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create new settings for the calling extension associated with the specified appId.
     * Create new calling extension settings for a specific app.
     * @param appId The unique identifier for the app for which new calling extension settings are being created.
     * @param settingsRequest
     */
    public create(appId: number, settingsRequest: SettingsRequest, _options?: PromiseConfigurationOptions): Promise<SettingsResponse> {
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
        const result = this.api.create(appId, settingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Establish new channel connection settings for the specified app.
     * Create new channel connection settings for a specific app.
     * @param appId The unique identifier for the app for which new channel connection settings are to be created.
     * @param channelConnectionSettingsRequest
     */
    public create_1WithHttpInfo(appId: number, channelConnectionSettingsRequest: ChannelConnectionSettingsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
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
        const result = this.api.create_1WithHttpInfo(appId, channelConnectionSettingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Establish new channel connection settings for the specified app.
     * Create new channel connection settings for a specific app.
     * @param appId The unique identifier for the app for which new channel connection settings are to be created.
     * @param channelConnectionSettingsRequest
     */
    public create_1(appId: number, channelConnectionSettingsRequest: ChannelConnectionSettingsRequest, _options?: PromiseConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
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
        const result = this.api.create_1(appId, channelConnectionSettingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create new recording settings for a specific app using the provided app ID.
     * Create recording settings for an app.
     * @param appId The unique identifier for the app for which new recording settings are being created.
     * @param recordingSettingsRequest
     */
    public create_2WithHttpInfo(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
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
        const result = this.api.create_2WithHttpInfo(appId, recordingSettingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create new recording settings for a specific app using the provided app ID.
     * Create recording settings for an app.
     * @param appId The unique identifier for the app for which new recording settings are being created.
     * @param recordingSettingsRequest
     */
    public create_2(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: PromiseConfigurationOptions): Promise<RecordingSettingsResponse> {
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
        const result = this.api.create_2(appId, recordingSettingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the current settings of the calling extension for the specified appId. 
     * Retrieve the calling extension settings for a specific app.
     * @param appId The unique identifier for the app whose calling extension settings are being retrieved.
     */
    public getWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
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
        const result = this.api.getWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the current settings of the calling extension for the specified appId. 
     * Retrieve the calling extension settings for a specific app.
     * @param appId The unique identifier for the app whose calling extension settings are being retrieved.
     */
    public get(appId: number, _options?: PromiseConfigurationOptions): Promise<SettingsResponse> {
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
        const result = this.api.get(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Access the current channel connection settings for the specified app.
     * Retrieve the channel connection settings for a specific app.
     * @param appId The unique identifier for the app whose channel connection settings are to be retrieved.
     */
    public get_3WithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
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
        const result = this.api.get_3WithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Access the current channel connection settings for the specified app.
     * Retrieve the channel connection settings for a specific app.
     * @param appId The unique identifier for the app whose channel connection settings are to be retrieved.
     */
    public get_3(appId: number, _options?: PromiseConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
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
        const result = this.api.get_3(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the current recording settings for a specific app using the provided app ID.
     * Retrieve recording settings for an app.
     * @param appId The unique identifier for the app whose recording settings are being retrieved.
     */
    public get_4WithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
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
        const result = this.api.get_4WithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the current recording settings for a specific app using the provided app ID.
     * Retrieve recording settings for an app.
     * @param appId The unique identifier for the app whose recording settings are being retrieved.
     */
    public get_4(appId: number, _options?: PromiseConfigurationOptions): Promise<RecordingSettingsResponse> {
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
        const result = this.api.get_4(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove the calling extension settings associated with the specified appId. This action cannot be undone.
     * Delete the calling extension settings for a specific app.
     * @param appId The unique identifier for the app whose calling extension settings are being deleted.
     */
    public removeWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.removeWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove the calling extension settings associated with the specified appId. This action cannot be undone.
     * Delete the calling extension settings for a specific app.
     * @param appId The unique identifier for the app whose calling extension settings are being deleted.
     */
    public remove(appId: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.remove(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete the channel connection settings associated with the specified app.
     * Remove the channel connection settings for a specific app.
     * @param appId The unique identifier for the app whose channel connection settings are to be deleted.
     */
    public remove_5WithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.remove_5WithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete the channel connection settings associated with the specified app.
     * Remove the channel connection settings for a specific app.
     * @param appId The unique identifier for the app whose channel connection settings are to be deleted.
     */
    public remove_5(appId: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.remove_5(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Modify existing calling extension settings for the specified appId. Only the fields provided in the request will be updated.
     * Update the calling extension settings for a specific app.
     * @param appId The unique identifier for the app whose calling extension settings are being updated.
     * @param settingsPatchRequest
     */
    public updateWithHttpInfo(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
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
        const result = this.api.updateWithHttpInfo(appId, settingsPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Modify existing calling extension settings for the specified appId. Only the fields provided in the request will be updated.
     * Update the calling extension settings for a specific app.
     * @param appId The unique identifier for the app whose calling extension settings are being updated.
     * @param settingsPatchRequest
     */
    public update(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: PromiseConfigurationOptions): Promise<SettingsResponse> {
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
        const result = this.api.update(appId, settingsPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Modify the existing channel connection settings for the specified app.
     * Update the channel connection settings for a specific app.
     * @param appId The unique identifier for the app whose channel connection settings are to be updated.
     * @param channelConnectionSettingsPatchRequest
     */
    public update_6WithHttpInfo(appId: number, channelConnectionSettingsPatchRequest: ChannelConnectionSettingsPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
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
        const result = this.api.update_6WithHttpInfo(appId, channelConnectionSettingsPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Modify the existing channel connection settings for the specified app.
     * Update the channel connection settings for a specific app.
     * @param appId The unique identifier for the app whose channel connection settings are to be updated.
     * @param channelConnectionSettingsPatchRequest
     */
    public update_6(appId: number, channelConnectionSettingsPatchRequest: ChannelConnectionSettingsPatchRequest, _options?: PromiseConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
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
        const result = this.api.update_6(appId, channelConnectionSettingsPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the recording settings for a specific app using the provided app ID.
     * Update recording settings for an app.
     * @param appId The unique identifier for the app whose recording settings are being updated.
     * @param recordingSettingsPatchRequest
     */
    public update_7WithHttpInfo(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
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
        const result = this.api.update_7WithHttpInfo(appId, recordingSettingsPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the recording settings for a specific app using the provided app ID.
     * Update recording settings for an app.
     * @param appId The unique identifier for the app whose recording settings are being updated.
     * @param recordingSettingsPatchRequest
     */
    public update_7(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: PromiseConfigurationOptions): Promise<RecordingSettingsResponse> {
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
        const result = this.api.update_7(appId, recordingSettingsPatchRequest, observableOptions);
        return result.toPromise();
    }


}



