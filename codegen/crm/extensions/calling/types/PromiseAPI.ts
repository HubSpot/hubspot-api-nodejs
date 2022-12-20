import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { SettingsPatchRequest } from '../models/SettingsPatchRequest';
import { SettingsRequest } from '../models/SettingsRequest';
import { SettingsResponse } from '../models/SettingsResponse';
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
    public create(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.create(appId, settingsRequest, _options);
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
    public update(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Promise<SettingsResponse> {
        const result = this.api.update(appId, settingsPatchRequest, _options);
        return result.toPromise();
    }


}



