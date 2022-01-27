import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { SettingsPatchRequest } from '../models/SettingsPatchRequest';
import { SettingsRequest } from '../models/SettingsRequest';
import { SettingsResponse } from '../models/SettingsResponse';

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiArchiveRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof SettingsApiarchive
     */
    appId: number
}

export interface SettingsApiCreateRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof SettingsApicreate
     */
    appId: number
    /**
     * Settings state to create with.
     * @type SettingsRequest
     * @memberof SettingsApicreate
     */
    settingsRequest: SettingsRequest
}

export interface SettingsApiGetByIdRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof SettingsApigetById
     */
    appId: number
}

export interface SettingsApiUpdateRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof SettingsApiupdate
     */
    appId: number
    /**
     * Updated details for the settings.
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
    public archive(param: SettingsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.appId,  options).toPromise();
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
    public getById(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<SettingsResponse> {
        return this.api.getById(param.appId,  options).toPromise();
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
