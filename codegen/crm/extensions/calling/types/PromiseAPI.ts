import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { ChannelConnectionSettingsPatchRequest } from '../models/ChannelConnectionSettingsPatchRequest';
import { ChannelConnectionSettingsRequest } from '../models/ChannelConnectionSettingsRequest';
import { ChannelConnectionSettingsResponse } from '../models/ChannelConnectionSettingsResponse';
import { MarkRecordingAsReadyRequest } from '../models/MarkRecordingAsReadyRequest';
import { RecordingSettingsPatchRequest } from '../models/RecordingSettingsPatchRequest';
import { RecordingSettingsRequest } from '../models/RecordingSettingsRequest';
import { RecordingSettingsResponse } from '../models/RecordingSettingsResponse';
import { SettingsPatchRequest } from '../models/SettingsPatchRequest';
import { SettingsRequest } from '../models/SettingsRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { ObservableChannelConnectionSettingsApi } from './ObservableAPI';

import { ChannelConnectionSettingsApiRequestFactory, ChannelConnectionSettingsApiResponseProcessor} from "../apis/ChannelConnectionSettingsApi";
export class PromiseChannelConnectionSettingsApi {
    private api: ObservableChannelConnectionSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChannelConnectionSettingsApiRequestFactory,
        responseProcessor?: ChannelConnectionSettingsApiResponseProcessor
    ) {
        this.api = new ObservableChannelConnectionSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#delete-existing-channel-connection-settings) for the app.
     * Delete channel connection settings
     * @param appId The ID of the app.
     */
    public archiveWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete the [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#delete-existing-channel-connection-settings) for the app.
     * Delete channel connection settings
     * @param appId The ID of the app.
     */
    public archive(appId: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Configure [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#create-channel-connection-settings) for the app. 
     * Configure channel connection settings
     * @param appId The ID of the app.
     * @param channelConnectionSettingsRequest
     */
    public createWithHttpInfo(appId: number, channelConnectionSettingsRequest: ChannelConnectionSettingsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
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
        const result = this.api.createWithHttpInfo(appId, channelConnectionSettingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Configure [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#create-channel-connection-settings) for the app. 
     * Configure channel connection settings
     * @param appId The ID of the app.
     * @param channelConnectionSettingsRequest
     */
    public create(appId: number, channelConnectionSettingsRequest: ChannelConnectionSettingsRequest, _options?: PromiseConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
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
        const result = this.api.create(appId, channelConnectionSettingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the settings related to the app\'s [channel connection](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#fetch-existing-channel-connection-settings).
     * Retrieve channel connection settings
     * @param appId The ID of the app.
     */
    public getByIdWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
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
        const result = this.api.getByIdWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the settings related to the app\'s [channel connection](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#fetch-existing-channel-connection-settings).
     * Retrieve channel connection settings
     * @param appId The ID of the app.
     */
    public getById(appId: number, _options?: PromiseConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
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
        const result = this.api.getById(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update existing [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#manage-the-webhook-settings-for-channel-connection) for your app.
     * Update channel connection settings
     * @param appId The ID of the app.
     * @param channelConnectionSettingsPatchRequest
     */
    public updateWithHttpInfo(appId: number, channelConnectionSettingsPatchRequest: ChannelConnectionSettingsPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
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
        const result = this.api.updateWithHttpInfo(appId, channelConnectionSettingsPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update existing [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#manage-the-webhook-settings-for-channel-connection) for your app.
     * Update channel connection settings
     * @param appId The ID of the app.
     * @param channelConnectionSettingsPatchRequest
     */
    public update(appId: number, channelConnectionSettingsPatchRequest: ChannelConnectionSettingsPatchRequest, _options?: PromiseConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
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
        const result = this.api.update(appId, channelConnectionSettingsPatchRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRecordingSettingsApi } from './ObservableAPI';

import { RecordingSettingsApiRequestFactory, RecordingSettingsApiResponseProcessor} from "../apis/RecordingSettingsApi";
export class PromiseRecordingSettingsApi {
    private api: ObservableRecordingSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RecordingSettingsApiRequestFactory,
        responseProcessor?: RecordingSettingsApiResponseProcessor
    ) {
        this.api = new ObservableRecordingSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the URL that is registered for [call recording](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Retrieve recording settings
     * @param appId The ID of the app.
     */
    public getUrlFormatWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
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
        const result = this.api.getUrlFormatWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the URL that is registered for [call recording](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Retrieve recording settings
     * @param appId The ID of the app.
     */
    public getUrlFormat(appId: number, _options?: PromiseConfigurationOptions): Promise<RecordingSettingsResponse> {
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
        const result = this.api.getUrlFormat(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Mark a call recording as ready for transcription, specifying the call by its ID (`engagementid`).
     * Mark recording as ready for transcription
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
     * Mark a call recording as ready for transcription, specifying the call by its ID (`engagementid`).
     * Mark recording as ready for transcription
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

    /**
     * Register an external URL that HubSpot will use to retrieve [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Enable the app for call recording
     * @param appId The ID of the app.
     * @param recordingSettingsRequest
     */
    public registerUrlFormatWithHttpInfo(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
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
        const result = this.api.registerUrlFormatWithHttpInfo(appId, recordingSettingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Register an external URL that HubSpot will use to retrieve [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Enable the app for call recording
     * @param appId The ID of the app.
     * @param recordingSettingsRequest
     */
    public registerUrlFormat(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: PromiseConfigurationOptions): Promise<RecordingSettingsResponse> {
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
        const result = this.api.registerUrlFormat(appId, recordingSettingsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the URL that HubSpot will use to retrieve [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Update recording settings
     * @param appId The ID of the app.
     * @param recordingSettingsPatchRequest
     */
    public updateUrlFormatWithHttpInfo(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
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
        const result = this.api.updateUrlFormatWithHttpInfo(appId, recordingSettingsPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the URL that HubSpot will use to retrieve [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Update recording settings
     * @param appId The ID of the app.
     * @param recordingSettingsPatchRequest
     */
    public updateUrlFormat(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: PromiseConfigurationOptions): Promise<RecordingSettingsResponse> {
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
        const result = this.api.updateUrlFormat(appId, recordingSettingsPatchRequest, observableOptions);
        return result.toPromise();
    }


}



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
     * Delete a calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param appId The ID of the app.
     */
    public archiveWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param appId The ID of the app.
     */
    public archive(appId: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param appId The ID of the app.
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
     * Set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param appId The ID of the app.
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
     * Retrieve the settings configured for the app.
     * Retrieve settings
     * @param appId The ID of the app.
     */
    public getByIdWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
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
        const result = this.api.getByIdWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the settings configured for the app.
     * Retrieve settings
     * @param appId The ID of the app.
     */
    public getById(appId: number, _options?: PromiseConfigurationOptions): Promise<SettingsResponse> {
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
        const result = this.api.getById(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update existing calling extension settings.
     * Update settings
     * @param appId The ID of the app.
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
     * Update existing calling extension settings.
     * Update settings
     * @param appId The ID of the app.
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


}



