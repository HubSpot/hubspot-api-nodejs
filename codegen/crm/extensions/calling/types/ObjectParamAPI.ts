import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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

import { ObservableChannelConnectionSettingsApi } from "./ObservableAPI";
import { ChannelConnectionSettingsApiRequestFactory, ChannelConnectionSettingsApiResponseProcessor} from "../apis/ChannelConnectionSettingsApi";

export interface ChannelConnectionSettingsApiArchiveRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof ChannelConnectionSettingsApiarchive
     */
    appId: number
}

export interface ChannelConnectionSettingsApiCreateRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof ChannelConnectionSettingsApicreate
     */
    appId: number
    /**
     * 
     * @type ChannelConnectionSettingsRequest
     * @memberof ChannelConnectionSettingsApicreate
     */
    channelConnectionSettingsRequest: ChannelConnectionSettingsRequest
}

export interface ChannelConnectionSettingsApiGetByIdRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof ChannelConnectionSettingsApigetById
     */
    appId: number
}

export interface ChannelConnectionSettingsApiUpdateRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof ChannelConnectionSettingsApiupdate
     */
    appId: number
    /**
     * 
     * @type ChannelConnectionSettingsPatchRequest
     * @memberof ChannelConnectionSettingsApiupdate
     */
    channelConnectionSettingsPatchRequest: ChannelConnectionSettingsPatchRequest
}

export class ObjectChannelConnectionSettingsApi {
    private api: ObservableChannelConnectionSettingsApi

    public constructor(configuration: Configuration, requestFactory?: ChannelConnectionSettingsApiRequestFactory, responseProcessor?: ChannelConnectionSettingsApiResponseProcessor) {
        this.api = new ObservableChannelConnectionSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#delete-existing-channel-connection-settings) for the app.
     * Delete channel connection settings
     * @param param the request object
     */
    public archiveWithHttpInfo(param: ChannelConnectionSettingsApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Delete the [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#delete-existing-channel-connection-settings) for the app.
     * Delete channel connection settings
     * @param param the request object
     */
    public archive(param: ChannelConnectionSettingsApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.appId,  options).toPromise();
    }

    /**
     * Configure [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#create-channel-connection-settings) for the app. 
     * Configure channel connection settings
     * @param param the request object
     */
    public createWithHttpInfo(param: ChannelConnectionSettingsApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
        return this.api.createWithHttpInfo(param.appId, param.channelConnectionSettingsRequest,  options).toPromise();
    }

    /**
     * Configure [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#create-channel-connection-settings) for the app. 
     * Configure channel connection settings
     * @param param the request object
     */
    public create(param: ChannelConnectionSettingsApiCreateRequest, options?: ConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
        return this.api.create(param.appId, param.channelConnectionSettingsRequest,  options).toPromise();
    }

    /**
     * Retrieve the settings related to the app\'s [channel connection](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#fetch-existing-channel-connection-settings).
     * Retrieve channel connection settings
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: ChannelConnectionSettingsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
        return this.api.getByIdWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the settings related to the app\'s [channel connection](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#fetch-existing-channel-connection-settings).
     * Retrieve channel connection settings
     * @param param the request object
     */
    public getById(param: ChannelConnectionSettingsApiGetByIdRequest, options?: ConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
        return this.api.getById(param.appId,  options).toPromise();
    }

    /**
     * Update existing [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#manage-the-webhook-settings-for-channel-connection) for your app.
     * Update channel connection settings
     * @param param the request object
     */
    public updateWithHttpInfo(param: ChannelConnectionSettingsApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
        return this.api.updateWithHttpInfo(param.appId, param.channelConnectionSettingsPatchRequest,  options).toPromise();
    }

    /**
     * Update existing [channel connection settings](https://developers.hubspot.com/docs/guides/api/crm/extensions/third-party-calling#manage-the-webhook-settings-for-channel-connection) for your app.
     * Update channel connection settings
     * @param param the request object
     */
    public update(param: ChannelConnectionSettingsApiUpdateRequest, options?: ConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
        return this.api.update(param.appId, param.channelConnectionSettingsPatchRequest,  options).toPromise();
    }

}

import { ObservableRecordingSettingsApi } from "./ObservableAPI";
import { RecordingSettingsApiRequestFactory, RecordingSettingsApiResponseProcessor} from "../apis/RecordingSettingsApi";

export interface RecordingSettingsApiGetUrlFormatRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof RecordingSettingsApigetUrlFormat
     */
    appId: number
}

export interface RecordingSettingsApiMarkAsReadyRequest {
    /**
     * 
     * @type MarkRecordingAsReadyRequest
     * @memberof RecordingSettingsApimarkAsReady
     */
    markRecordingAsReadyRequest: MarkRecordingAsReadyRequest
}

export interface RecordingSettingsApiRegisterUrlFormatRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof RecordingSettingsApiregisterUrlFormat
     */
    appId: number
    /**
     * 
     * @type RecordingSettingsRequest
     * @memberof RecordingSettingsApiregisterUrlFormat
     */
    recordingSettingsRequest: RecordingSettingsRequest
}

export interface RecordingSettingsApiUpdateUrlFormatRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof RecordingSettingsApiupdateUrlFormat
     */
    appId: number
    /**
     * 
     * @type RecordingSettingsPatchRequest
     * @memberof RecordingSettingsApiupdateUrlFormat
     */
    recordingSettingsPatchRequest: RecordingSettingsPatchRequest
}

export class ObjectRecordingSettingsApi {
    private api: ObservableRecordingSettingsApi

    public constructor(configuration: Configuration, requestFactory?: RecordingSettingsApiRequestFactory, responseProcessor?: RecordingSettingsApiResponseProcessor) {
        this.api = new ObservableRecordingSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the URL that is registered for [call recording](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Retrieve recording settings
     * @param param the request object
     */
    public getUrlFormatWithHttpInfo(param: RecordingSettingsApiGetUrlFormatRequest, options?: ConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
        return this.api.getUrlFormatWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the URL that is registered for [call recording](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Retrieve recording settings
     * @param param the request object
     */
    public getUrlFormat(param: RecordingSettingsApiGetUrlFormatRequest, options?: ConfigurationOptions): Promise<RecordingSettingsResponse> {
        return this.api.getUrlFormat(param.appId,  options).toPromise();
    }

    /**
     * Mark a call recording as ready for transcription, specifying the call by its ID (`engagementid`).
     * Mark recording as ready for transcription
     * @param param the request object
     */
    public markAsReadyWithHttpInfo(param: RecordingSettingsApiMarkAsReadyRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.markAsReadyWithHttpInfo(param.markRecordingAsReadyRequest,  options).toPromise();
    }

    /**
     * Mark a call recording as ready for transcription, specifying the call by its ID (`engagementid`).
     * Mark recording as ready for transcription
     * @param param the request object
     */
    public markAsReady(param: RecordingSettingsApiMarkAsReadyRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.markAsReady(param.markRecordingAsReadyRequest,  options).toPromise();
    }

    /**
     * Register an external URL that HubSpot will use to retrieve [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Enable the app for call recording
     * @param param the request object
     */
    public registerUrlFormatWithHttpInfo(param: RecordingSettingsApiRegisterUrlFormatRequest, options?: ConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
        return this.api.registerUrlFormatWithHttpInfo(param.appId, param.recordingSettingsRequest,  options).toPromise();
    }

    /**
     * Register an external URL that HubSpot will use to retrieve [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Enable the app for call recording
     * @param param the request object
     */
    public registerUrlFormat(param: RecordingSettingsApiRegisterUrlFormatRequest, options?: ConfigurationOptions): Promise<RecordingSettingsResponse> {
        return this.api.registerUrlFormat(param.appId, param.recordingSettingsRequest,  options).toPromise();
    }

    /**
     * Update the URL that HubSpot will use to retrieve [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Update recording settings
     * @param param the request object
     */
    public updateUrlFormatWithHttpInfo(param: RecordingSettingsApiUpdateUrlFormatRequest, options?: ConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
        return this.api.updateUrlFormatWithHttpInfo(param.appId, param.recordingSettingsPatchRequest,  options).toPromise();
    }

    /**
     * Update the URL that HubSpot will use to retrieve [call recordings](https://developers.hubspot.com/docs/guides/apps/extensions/calling-extensions/recordings-and-transcriptions#register-your-app-s-endpoint-with-hubspot-using-the-calling-settings-api).
     * Update recording settings
     * @param param the request object
     */
    public updateUrlFormat(param: RecordingSettingsApiUpdateUrlFormatRequest, options?: ConfigurationOptions): Promise<RecordingSettingsResponse> {
        return this.api.updateUrlFormat(param.appId, param.recordingSettingsPatchRequest,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiArchiveRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SettingsApiarchive
     */
    appId: number
}

export interface SettingsApiCreateRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SettingsApicreate
     */
    appId: number
    /**
     * 
     * @type SettingsRequest
     * @memberof SettingsApicreate
     */
    settingsRequest: SettingsRequest
}

export interface SettingsApiGetByIdRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SettingsApigetById
     */
    appId: number
}

export interface SettingsApiUpdateRequest {
    /**
     * The ID of the app.
     * Defaults to: undefined
     * @type number
     * @memberof SettingsApiupdate
     */
    appId: number
    /**
     * 
     * @type SettingsPatchRequest
     * @memberof SettingsApiupdate
     */
    settingsPatchRequest: SettingsPatchRequest
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param param the request object
     */
    public archiveWithHttpInfo(param: SettingsApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Delete a calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param param the request object
     */
    public archive(param: SettingsApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.appId,  options).toPromise();
    }

    /**
     * Set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param param the request object
     */
    public createWithHttpInfo(param: SettingsApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
        return this.api.createWithHttpInfo(param.appId, param.settingsRequest,  options).toPromise();
    }

    /**
     * Set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param param the request object
     */
    public create(param: SettingsApiCreateRequest, options?: ConfigurationOptions): Promise<SettingsResponse> {
        return this.api.create(param.appId, param.settingsRequest,  options).toPromise();
    }

    /**
     * Retrieve the settings configured for the app.
     * Retrieve settings
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: SettingsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
        return this.api.getByIdWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the settings configured for the app.
     * Retrieve settings
     * @param param the request object
     */
    public getById(param: SettingsApiGetByIdRequest, options?: ConfigurationOptions): Promise<SettingsResponse> {
        return this.api.getById(param.appId,  options).toPromise();
    }

    /**
     * Update existing calling extension settings.
     * Update settings
     * @param param the request object
     */
    public updateWithHttpInfo(param: SettingsApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
        return this.api.updateWithHttpInfo(param.appId, param.settingsPatchRequest,  options).toPromise();
    }

    /**
     * Update existing calling extension settings.
     * Update settings
     * @param param the request object
     */
    public update(param: SettingsApiUpdateRequest, options?: ConfigurationOptions): Promise<SettingsResponse> {
        return this.api.update(param.appId, param.settingsPatchRequest,  options).toPromise();
    }

}
