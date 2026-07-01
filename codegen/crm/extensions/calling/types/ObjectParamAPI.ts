import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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

import { ObservableAdvancedApi } from "./ObservableAPI";
import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";

export interface AdvancedApiCrmV3ExtensionsCallingInboundCallRequest {
    /**
     * 
     * @type CompletedThirdPartyCallRequest
     * @memberof AdvancedApicrmV3ExtensionsCallingInboundCall
     */
    completedThirdPartyCallRequest: CompletedThirdPartyCallRequest
}

export interface AdvancedApiMarkAsReadyRequest {
    /**
     * 
     * @type MarkRecordingAsReadyRequest
     * @memberof AdvancedApimarkAsReady
     */
    markRecordingAsReadyRequest: MarkRecordingAsReadyRequest
}

export class ObjectAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedApiRequestFactory, responseProcessor?: AdvancedApiResponseProcessor) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to submit information about an inbound call to the CRM system. The request must include details such as the external call ID, call status, and involved phone numbers. This operation helps in logging and managing inbound call data within the CRM.
     * Submit details of an inbound call to the CRM.
     * @param param the request object
     */
    public crmV3ExtensionsCallingInboundCallWithHttpInfo(param: AdvancedApiCrmV3ExtensionsCallingInboundCallRequest, options?: ConfigurationOptions): Promise<HttpInfo<CompletedThirdPartyCallResponse>> {
        return this.api.crmV3ExtensionsCallingInboundCallWithHttpInfo(param.completedThirdPartyCallRequest,  options).toPromise();
    }

    /**
     * This endpoint allows you to submit information about an inbound call to the CRM system. The request must include details such as the external call ID, call status, and involved phone numbers. This operation helps in logging and managing inbound call data within the CRM.
     * Submit details of an inbound call to the CRM.
     * @param param the request object
     */
    public crmV3ExtensionsCallingInboundCall(param: AdvancedApiCrmV3ExtensionsCallingInboundCallRequest, options?: ConfigurationOptions): Promise<CompletedThirdPartyCallResponse> {
        return this.api.crmV3ExtensionsCallingInboundCall(param.completedThirdPartyCallRequest,  options).toPromise();
    }

    /**
     * This endpoint is used to mark a call recording as ready. It requires the engagementId to identify the specific recording.
     * Mark a call recording as ready for retrieval.
     * @param param the request object
     */
    public markAsReadyWithHttpInfo(param: AdvancedApiMarkAsReadyRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.markAsReadyWithHttpInfo(param.markRecordingAsReadyRequest,  options).toPromise();
    }

    /**
     * This endpoint is used to mark a call recording as ready. It requires the engagementId to identify the specific recording.
     * Mark a call recording as ready for retrieval.
     * @param param the request object
     */
    public markAsReady(param: AdvancedApiMarkAsReadyRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.markAsReady(param.markRecordingAsReadyRequest,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiCreateRequest {
    /**
     * The unique identifier for the app for which new calling extension settings are being created.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicreate
     */
    appId: number
    /**
     * 
     * @type SettingsRequest
     * @memberof BasicApicreate
     */
    settingsRequest: SettingsRequest
}

export interface BasicApiCreate0Request {
    /**
     * The unique identifier for the app for which new channel connection settings are to be created.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicreate_1
     */
    appId: number
    /**
     * 
     * @type ChannelConnectionSettingsRequest
     * @memberof BasicApicreate_1
     */
    channelConnectionSettingsRequest: ChannelConnectionSettingsRequest
}

export interface BasicApiCreate1Request {
    /**
     * The unique identifier for the app for which new recording settings are being created.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicreate_2
     */
    appId: number
    /**
     * 
     * @type RecordingSettingsRequest
     * @memberof BasicApicreate_2
     */
    recordingSettingsRequest: RecordingSettingsRequest
}

export interface BasicApiGetRequest {
    /**
     * The unique identifier for the app whose calling extension settings are being retrieved.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiget
     */
    appId: number
}

export interface BasicApiGet0Request {
    /**
     * The unique identifier for the app whose channel connection settings are to be retrieved.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiget_3
     */
    appId: number
}

export interface BasicApiGet1Request {
    /**
     * The unique identifier for the app whose recording settings are being retrieved.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiget_4
     */
    appId: number
}

export interface BasicApiRemoveRequest {
    /**
     * The unique identifier for the app whose calling extension settings are being deleted.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiremove
     */
    appId: number
}

export interface BasicApiRemove0Request {
    /**
     * The unique identifier for the app whose channel connection settings are to be deleted.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiremove_5
     */
    appId: number
}

export interface BasicApiUpdateRequest {
    /**
     * The unique identifier for the app whose calling extension settings are being updated.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiupdate
     */
    appId: number
    /**
     * 
     * @type SettingsPatchRequest
     * @memberof BasicApiupdate
     */
    settingsPatchRequest: SettingsPatchRequest
}

export interface BasicApiUpdate0Request {
    /**
     * The unique identifier for the app whose channel connection settings are to be updated.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiupdate_6
     */
    appId: number
    /**
     * 
     * @type ChannelConnectionSettingsPatchRequest
     * @memberof BasicApiupdate_6
     */
    channelConnectionSettingsPatchRequest: ChannelConnectionSettingsPatchRequest
}

export interface BasicApiUpdate1Request {
    /**
     * The unique identifier for the app whose recording settings are being updated.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiupdate_7
     */
    appId: number
    /**
     * 
     * @type RecordingSettingsPatchRequest
     * @memberof BasicApiupdate_7
     */
    recordingSettingsPatchRequest: RecordingSettingsPatchRequest
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new settings for the calling extension associated with the specified appId.
     * Create new calling extension settings for a specific app.
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
        return this.api.createWithHttpInfo(param.appId, param.settingsRequest,  options).toPromise();
    }

    /**
     * Create new settings for the calling extension associated with the specified appId.
     * Create new calling extension settings for a specific app.
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<SettingsResponse> {
        return this.api.create(param.appId, param.settingsRequest,  options).toPromise();
    }

    /**
     * Establish new channel connection settings for the specified app.
     * Create new channel connection settings for a specific app.
     * @param param the request object
     */
    public create_1WithHttpInfo(param: BasicApiCreate0Request, options?: ConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
        return this.api.create_1WithHttpInfo(param.appId, param.channelConnectionSettingsRequest,  options).toPromise();
    }

    /**
     * Establish new channel connection settings for the specified app.
     * Create new channel connection settings for a specific app.
     * @param param the request object
     */
    public create_1(param: BasicApiCreate0Request, options?: ConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
        return this.api.create_1(param.appId, param.channelConnectionSettingsRequest,  options).toPromise();
    }

    /**
     * Create new recording settings for a specific app using the provided app ID.
     * Create recording settings for an app.
     * @param param the request object
     */
    public create_2WithHttpInfo(param: BasicApiCreate1Request, options?: ConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
        return this.api.create_2WithHttpInfo(param.appId, param.recordingSettingsRequest,  options).toPromise();
    }

    /**
     * Create new recording settings for a specific app using the provided app ID.
     * Create recording settings for an app.
     * @param param the request object
     */
    public create_2(param: BasicApiCreate1Request, options?: ConfigurationOptions): Promise<RecordingSettingsResponse> {
        return this.api.create_2(param.appId, param.recordingSettingsRequest,  options).toPromise();
    }

    /**
     * Retrieve the current settings of the calling extension for the specified appId. 
     * Retrieve the calling extension settings for a specific app.
     * @param param the request object
     */
    public getWithHttpInfo(param: BasicApiGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
        return this.api.getWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the current settings of the calling extension for the specified appId. 
     * Retrieve the calling extension settings for a specific app.
     * @param param the request object
     */
    public get(param: BasicApiGetRequest, options?: ConfigurationOptions): Promise<SettingsResponse> {
        return this.api.get(param.appId,  options).toPromise();
    }

    /**
     * Access the current channel connection settings for the specified app.
     * Retrieve the channel connection settings for a specific app.
     * @param param the request object
     */
    public get_3WithHttpInfo(param: BasicApiGet0Request, options?: ConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
        return this.api.get_3WithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Access the current channel connection settings for the specified app.
     * Retrieve the channel connection settings for a specific app.
     * @param param the request object
     */
    public get_3(param: BasicApiGet0Request, options?: ConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
        return this.api.get_3(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the current recording settings for a specific app using the provided app ID.
     * Retrieve recording settings for an app.
     * @param param the request object
     */
    public get_4WithHttpInfo(param: BasicApiGet1Request, options?: ConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
        return this.api.get_4WithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the current recording settings for a specific app using the provided app ID.
     * Retrieve recording settings for an app.
     * @param param the request object
     */
    public get_4(param: BasicApiGet1Request, options?: ConfigurationOptions): Promise<RecordingSettingsResponse> {
        return this.api.get_4(param.appId,  options).toPromise();
    }

    /**
     * Remove the calling extension settings associated with the specified appId. This action cannot be undone.
     * Delete the calling extension settings for a specific app.
     * @param param the request object
     */
    public removeWithHttpInfo(param: BasicApiRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Remove the calling extension settings associated with the specified appId. This action cannot be undone.
     * Delete the calling extension settings for a specific app.
     * @param param the request object
     */
    public remove(param: BasicApiRemoveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.remove(param.appId,  options).toPromise();
    }

    /**
     * Delete the channel connection settings associated with the specified app.
     * Remove the channel connection settings for a specific app.
     * @param param the request object
     */
    public remove_5WithHttpInfo(param: BasicApiRemove0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.remove_5WithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Delete the channel connection settings associated with the specified app.
     * Remove the channel connection settings for a specific app.
     * @param param the request object
     */
    public remove_5(param: BasicApiRemove0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.remove_5(param.appId,  options).toPromise();
    }

    /**
     * Modify existing calling extension settings for the specified appId. Only the fields provided in the request will be updated.
     * Update the calling extension settings for a specific app.
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<SettingsResponse>> {
        return this.api.updateWithHttpInfo(param.appId, param.settingsPatchRequest,  options).toPromise();
    }

    /**
     * Modify existing calling extension settings for the specified appId. Only the fields provided in the request will be updated.
     * Update the calling extension settings for a specific app.
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<SettingsResponse> {
        return this.api.update(param.appId, param.settingsPatchRequest,  options).toPromise();
    }

    /**
     * Modify the existing channel connection settings for the specified app.
     * Update the channel connection settings for a specific app.
     * @param param the request object
     */
    public update_6WithHttpInfo(param: BasicApiUpdate0Request, options?: ConfigurationOptions): Promise<HttpInfo<ChannelConnectionSettingsResponse>> {
        return this.api.update_6WithHttpInfo(param.appId, param.channelConnectionSettingsPatchRequest,  options).toPromise();
    }

    /**
     * Modify the existing channel connection settings for the specified app.
     * Update the channel connection settings for a specific app.
     * @param param the request object
     */
    public update_6(param: BasicApiUpdate0Request, options?: ConfigurationOptions): Promise<ChannelConnectionSettingsResponse> {
        return this.api.update_6(param.appId, param.channelConnectionSettingsPatchRequest,  options).toPromise();
    }

    /**
     * Update the recording settings for a specific app using the provided app ID.
     * Update recording settings for an app.
     * @param param the request object
     */
    public update_7WithHttpInfo(param: BasicApiUpdate1Request, options?: ConfigurationOptions): Promise<HttpInfo<RecordingSettingsResponse>> {
        return this.api.update_7WithHttpInfo(param.appId, param.recordingSettingsPatchRequest,  options).toPromise();
    }

    /**
     * Update the recording settings for a specific app using the provided app ID.
     * Update recording settings for an app.
     * @param param the request object
     */
    public update_7(param: BasicApiUpdate1Request, options?: ConfigurationOptions): Promise<RecordingSettingsResponse> {
        return this.api.update_7(param.appId, param.recordingSettingsPatchRequest,  options).toPromise();
    }

}
