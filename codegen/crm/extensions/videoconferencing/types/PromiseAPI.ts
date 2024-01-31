import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ExternalSettings } from '../models/ExternalSettings';
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
     * Deletes the settings for a video conference application with the specified ID.
     * Delete settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    public archiveWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the settings for a video conference application with the specified ID.
     * Delete settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    public archive(appId: number, _options?: Configuration): Promise<void> {
        const result = this.api.archive(appId, _options);
        return result.toPromise();
    }

    /**
     * Return the settings for a video conference application with the specified ID.
     * Get settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    public getByIdWithHttpInfo(appId: number, _options?: Configuration): Promise<HttpInfo<ExternalSettings>> {
        const result = this.api.getByIdWithHttpInfo(appId, _options);
        return result.toPromise();
    }

    /**
     * Return the settings for a video conference application with the specified ID.
     * Get settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    public getById(appId: number, _options?: Configuration): Promise<ExternalSettings> {
        const result = this.api.getById(appId, _options);
        return result.toPromise();
    }

    /**
     * Updates the settings for a video conference application with the specified ID.
     * Update settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     * @param externalSettings 
     */
    public replaceWithHttpInfo(appId: number, externalSettings: ExternalSettings, _options?: Configuration): Promise<HttpInfo<ExternalSettings>> {
        const result = this.api.replaceWithHttpInfo(appId, externalSettings, _options);
        return result.toPromise();
    }

    /**
     * Updates the settings for a video conference application with the specified ID.
     * Update settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     * @param externalSettings 
     */
    public replace(appId: number, externalSettings: ExternalSettings, _options?: Configuration): Promise<ExternalSettings> {
        const result = this.api.replace(appId, externalSettings, _options);
        return result.toPromise();
    }


}



