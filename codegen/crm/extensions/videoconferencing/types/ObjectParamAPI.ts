import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ExternalSettings } from '../models/ExternalSettings';

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiArchiveRequest {
    /**
     * The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     * @type number
     * @memberof SettingsApiarchive
     */
    appId: number
}

export interface SettingsApiGetByIdRequest {
    /**
     * The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     * @type number
     * @memberof SettingsApigetById
     */
    appId: number
}

export interface SettingsApiReplaceRequest {
    /**
     * The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     * @type number
     * @memberof SettingsApireplace
     */
    appId: number
    /**
     * 
     * @type ExternalSettings
     * @memberof SettingsApireplace
     */
    externalSettings: ExternalSettings
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes the settings for a video conference application with the specified ID.
     * Delete settings
     * @param param the request object
     */
    public archiveWithHttpInfo(param: SettingsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Deletes the settings for a video conference application with the specified ID.
     * Delete settings
     * @param param the request object
     */
    public archive(param: SettingsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.appId,  options).toPromise();
    }

    /**
     * Return the settings for a video conference application with the specified ID.
     * Get settings
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<ExternalSettings>> {
        return this.api.getByIdWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Return the settings for a video conference application with the specified ID.
     * Get settings
     * @param param the request object
     */
    public getById(param: SettingsApiGetByIdRequest, options?: Configuration): Promise<ExternalSettings> {
        return this.api.getById(param.appId,  options).toPromise();
    }

    /**
     * Updates the settings for a video conference application with the specified ID.
     * Update settings
     * @param param the request object
     */
    public replaceWithHttpInfo(param: SettingsApiReplaceRequest, options?: Configuration): Promise<HttpInfo<ExternalSettings>> {
        return this.api.replaceWithHttpInfo(param.appId, param.externalSettings,  options).toPromise();
    }

    /**
     * Updates the settings for a video conference application with the specified ID.
     * Update settings
     * @param param the request object
     */
    public replace(param: SettingsApiReplaceRequest, options?: Configuration): Promise<ExternalSettings> {
        return this.api.replace(param.appId, param.externalSettings,  options).toPromise();
    }

}
