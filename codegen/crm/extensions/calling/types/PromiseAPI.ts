import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { MarkRecordingAsReadyRequest } from '../models/MarkRecordingAsReadyRequest';
import { RecordingSettingsPatchRequest } from '../models/RecordingSettingsPatchRequest';
import { RecordingSettingsRequest } from '../models/RecordingSettingsRequest';
import { RecordingSettingsResponse } from '../models/RecordingSettingsResponse';
import { SettingsPatchRequest } from '../models/SettingsPatchRequest';
import { SettingsRequest } from '../models/SettingsRequest';
import { SettingsResponse } from '../models/SettingsResponse';
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
     * Retrieve the recording endpoint configured for a calling extension app.
     * Read calling app recording settings
     * @param appId The ID of the app.
     */
    public getUrlFormatWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>> {
        const result = this.api.getUrlFormatWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the recording endpoint configured for a calling extension app.
     * Read calling app recording settings
     * @param appId The ID of the app.
     */
    public getUrlFormat(appId: number, _options?: Configuration): Promise<RecordingSettingsResponse> {
        const result = this.api.getUrlFormat(appId, _options);
        return result.toPromise();
    }

    /**
     * Mark a call recording as ready for transcription, specifying the call by its ID (`engagementid`).
     * Mark recording as ready for transcription
     * @param markRecordingAsReadyRequest 
     */
    public markAsReadyWithHttpInfo(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.markAsReadyWithHttpInfo(markRecordingAsReadyRequest, _options);
        return result.toPromise();
    }

    /**
     * Mark a call recording as ready for transcription, specifying the call by its ID (`engagementid`).
     * Mark recording as ready for transcription
     * @param markRecordingAsReadyRequest 
     */
    public markAsReady(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: Configuration): Promise<void> {
        const result = this.api.markAsReady(markRecordingAsReadyRequest, _options);
        return result.toPromise();
    }

    /**
     * Configure a calling extension app with an external URL that HubSpot will use to retrieve call recordings.
     * Register calling app for recording
     * @param appId The ID of the app.
     * @param recordingSettingsRequest 
     */
    public registerUrlFormatWithHttpInfo(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>> {
        const result = this.api.registerUrlFormatWithHttpInfo(appId, recordingSettingsRequest, _options);
        return result.toPromise();
    }

    /**
     * Configure a calling extension app with an external URL that HubSpot will use to retrieve call recordings.
     * Register calling app for recording
     * @param appId The ID of the app.
     * @param recordingSettingsRequest 
     */
    public registerUrlFormat(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Promise<RecordingSettingsResponse> {
        const result = this.api.registerUrlFormat(appId, recordingSettingsRequest, _options);
        return result.toPromise();
    }

    /**
     * Update the URL that HubSpot will use to retrieve call recordings for a calling extension app.
     * Update calling app\'s recording settings
     * @param appId The ID of the app.
     * @param recordingSettingsPatchRequest 
     */
    public updateUrlFormatWithHttpInfo(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>> {
        const result = this.api.updateUrlFormatWithHttpInfo(appId, recordingSettingsPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * Update the URL that HubSpot will use to retrieve call recordings for a calling extension app.
     * Update calling app\'s recording settings
     * @param appId The ID of the app.
     * @param recordingSettingsPatchRequest 
     */
    public updateUrlFormat(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Promise<RecordingSettingsResponse> {
        const result = this.api.updateUrlFormat(appId, recordingSettingsPatchRequest, _options);
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
     * Deletes this calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param appId The ID of the app.
     */
    public archiveWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Deletes this calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param appId The ID of the app.
     */
    public archive(appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(appId, _options);
        return result.toPromise();
    }

    /**
     * Used to set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param appId The ID of the app.
     * @param settingsRequest 
     */
    public createWithHttpInfo(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        const result = this.api.createWithHttpInfo(appId, settingsRequest, _options);
        return result.toPromise();
    }

    /**
     * Used to set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param appId The ID of the app.
     * @param settingsRequest 
     */
    public create(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.create(appId, settingsRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns the calling extension settings configured for your app.
     * Get calling settings
     * @param appId The ID of the app.
     */
    public getByIdWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        const result = this.api.getByIdWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Returns the calling extension settings configured for your app.
     * Get calling settings
     * @param appId The ID of the app.
     */
    public getById(appId: number, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.getById(appId, _options);
        return result.toPromise();
    }

    /**
     * Updates existing calling extension settings.
     * Update settings
     * @param appId The ID of the app.
     * @param settingsPatchRequest 
     */
    public updateWithHttpInfo(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        const result = this.api.updateWithHttpInfo(appId, settingsPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates existing calling extension settings.
     * Update settings
     * @param appId The ID of the app.
     * @param settingsPatchRequest 
     */
    public update(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.update(appId, settingsPatchRequest, _options);
        return result.toPromise();
    }


}



