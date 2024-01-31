import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
     * @param appId 
     */
    public getUrlFormatWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>> {
        const result = this.api.getUrlFormatWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     */
    public getUrlFormat(appId: number, _options?: Configuration): Promise<RecordingSettingsResponse> {
        const result = this.api.getUrlFormat(appId, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     * @param recordingSettingsRequest 
     */
    public registerUrlFormatWithHttpInfo(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>> {
        const result = this.api.registerUrlFormatWithHttpInfo(appId, recordingSettingsRequest, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     * @param recordingSettingsRequest 
     */
    public registerUrlFormat(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Promise<RecordingSettingsResponse> {
        const result = this.api.registerUrlFormat(appId, recordingSettingsRequest, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
     * @param recordingSettingsPatchRequest 
     */
    public updateUrlFormatWithHttpInfo(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>> {
        const result = this.api.updateUrlFormatWithHttpInfo(appId, recordingSettingsPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * @param appId 
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
     * @param appId The ID of the target app.
     */
    public archiveWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Deletes this calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param appId The ID of the target app.
     */
    public archive(appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(appId, _options);
        return result.toPromise();
    }

    /**
     * Used to set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param appId The ID of the target app.
     * @param settingsRequest Settings state to create with.
     */
    public createWithHttpInfo(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        const result = this.api.createWithHttpInfo(appId, settingsRequest, _options);
        return result.toPromise();
    }

    /**
     * Used to set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param appId The ID of the target app.
     * @param settingsRequest Settings state to create with.
     */
    public create(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.create(appId, settingsRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns the calling extension settings configured for your app.
     * Get calling settings
     * @param appId The ID of the target app.
     */
    public getByIdWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        const result = this.api.getByIdWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Returns the calling extension settings configured for your app.
     * Get calling settings
     * @param appId The ID of the target app.
     */
    public getById(appId: number, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.getById(appId, _options);
        return result.toPromise();
    }

    /**
     * Updates existing calling extension settings.
     * Update settings
     * @param appId The ID of the target app.
     * @param settingsPatchRequest Updated details for the settings.
     */
    public updateWithHttpInfo(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        const result = this.api.updateWithHttpInfo(appId, settingsPatchRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates existing calling extension settings.
     * Update settings
     * @param appId The ID of the target app.
     * @param settingsPatchRequest Updated details for the settings.
     */
    public update(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.update(appId, settingsPatchRequest, _options);
        return result.toPromise();
    }


}



