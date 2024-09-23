import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { MarkRecordingAsReadyRequest } from '../models/MarkRecordingAsReadyRequest';
import { RecordingSettingsPatchRequest } from '../models/RecordingSettingsPatchRequest';
import { RecordingSettingsRequest } from '../models/RecordingSettingsRequest';
import { RecordingSettingsResponse } from '../models/RecordingSettingsResponse';
import { SettingsPatchRequest } from '../models/SettingsPatchRequest';
import { SettingsRequest } from '../models/SettingsRequest';
import { SettingsResponse } from '../models/SettingsResponse';

import { ObservableRecordingSettingsApi } from "./ObservableAPI";
import { RecordingSettingsApiRequestFactory, RecordingSettingsApiResponseProcessor} from "../apis/RecordingSettingsApi";

export interface RecordingSettingsApiGetUrlFormatRequest {
    /**
     * The ID of the app.
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
     * Retrieve the recording endpoint configured for a calling extension app.
     * Read calling app recording settings
     * @param param the request object
     */
    public getUrlFormatWithHttpInfo(param: RecordingSettingsApiGetUrlFormatRequest, options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>> {
        return this.api.getUrlFormatWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the recording endpoint configured for a calling extension app.
     * Read calling app recording settings
     * @param param the request object
     */
    public getUrlFormat(param: RecordingSettingsApiGetUrlFormatRequest, options?: Configuration): Promise<RecordingSettingsResponse> {
        return this.api.getUrlFormat(param.appId,  options).toPromise();
    }

    /**
     * Mark a call recording as ready for transcription, specifying the call by its ID (`engagementid`).
     * Mark recording as ready for transcription
     * @param param the request object
     */
    public markAsReadyWithHttpInfo(param: RecordingSettingsApiMarkAsReadyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.markAsReadyWithHttpInfo(param.markRecordingAsReadyRequest,  options).toPromise();
    }

    /**
     * Mark a call recording as ready for transcription, specifying the call by its ID (`engagementid`).
     * Mark recording as ready for transcription
     * @param param the request object
     */
    public markAsReady(param: RecordingSettingsApiMarkAsReadyRequest, options?: Configuration): Promise<void> {
        return this.api.markAsReady(param.markRecordingAsReadyRequest,  options).toPromise();
    }

    /**
     * Configure a calling extension app with an external URL that HubSpot will use to retrieve call recordings.
     * Register calling app for recording
     * @param param the request object
     */
    public registerUrlFormatWithHttpInfo(param: RecordingSettingsApiRegisterUrlFormatRequest, options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>> {
        return this.api.registerUrlFormatWithHttpInfo(param.appId, param.recordingSettingsRequest,  options).toPromise();
    }

    /**
     * Configure a calling extension app with an external URL that HubSpot will use to retrieve call recordings.
     * Register calling app for recording
     * @param param the request object
     */
    public registerUrlFormat(param: RecordingSettingsApiRegisterUrlFormatRequest, options?: Configuration): Promise<RecordingSettingsResponse> {
        return this.api.registerUrlFormat(param.appId, param.recordingSettingsRequest,  options).toPromise();
    }

    /**
     * Update the URL that HubSpot will use to retrieve call recordings for a calling extension app.
     * Update calling app\'s recording settings
     * @param param the request object
     */
    public updateUrlFormatWithHttpInfo(param: RecordingSettingsApiUpdateUrlFormatRequest, options?: Configuration): Promise<HttpInfo<RecordingSettingsResponse>> {
        return this.api.updateUrlFormatWithHttpInfo(param.appId, param.recordingSettingsPatchRequest,  options).toPromise();
    }

    /**
     * Update the URL that HubSpot will use to retrieve call recordings for a calling extension app.
     * Update calling app\'s recording settings
     * @param param the request object
     */
    public updateUrlFormat(param: RecordingSettingsApiUpdateUrlFormatRequest, options?: Configuration): Promise<RecordingSettingsResponse> {
        return this.api.updateUrlFormat(param.appId, param.recordingSettingsPatchRequest,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiArchiveRequest {
    /**
     * The ID of the app.
     * @type number
     * @memberof SettingsApiarchive
     */
    appId: number
}

export interface SettingsApiCreateRequest {
    /**
     * The ID of the app.
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
     * @type number
     * @memberof SettingsApigetById
     */
    appId: number
}

export interface SettingsApiUpdateRequest {
    /**
     * The ID of the app.
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
     * Deletes this calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param param the request object
     */
    public archiveWithHttpInfo(param: SettingsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Deletes this calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param param the request object
     */
    public archive(param: SettingsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.appId,  options).toPromise();
    }

    /**
     * Used to set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param param the request object
     */
    public createWithHttpInfo(param: SettingsApiCreateRequest, options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        return this.api.createWithHttpInfo(param.appId, param.settingsRequest,  options).toPromise();
    }

    /**
     * Used to set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param param the request object
     */
    public create(param: SettingsApiCreateRequest, options?: Configuration): Promise<SettingsResponse> {
        return this.api.create(param.appId, param.settingsRequest,  options).toPromise();
    }

    /**
     * Returns the calling extension settings configured for your app.
     * Get calling settings
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        return this.api.getByIdWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Returns the calling extension settings configured for your app.
     * Get calling settings
     * @param param the request object
     */
    public getById(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<SettingsResponse> {
        return this.api.getById(param.appId,  options).toPromise();
    }

    /**
     * Updates existing calling extension settings.
     * Update settings
     * @param param the request object
     */
    public updateWithHttpInfo(param: SettingsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        return this.api.updateWithHttpInfo(param.appId, param.settingsPatchRequest,  options).toPromise();
    }

    /**
     * Updates existing calling extension settings.
     * Update settings
     * @param param the request object
     */
    public update(param: SettingsApiUpdateRequest, options?: Configuration): Promise<SettingsResponse> {
        return this.api.update(param.appId, param.settingsPatchRequest,  options).toPromise();
    }

}
