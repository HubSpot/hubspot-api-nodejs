import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
     * Deletes the settings for a video conference application with the specified ID.
     * Delete settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
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
     * Return the settings for a video conference application with the specified ID.
     * Get settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    public getByIdWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExternalSettings>> {
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
     * Return the settings for a video conference application with the specified ID.
     * Get settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    public getById(appId: number, _options?: PromiseConfigurationOptions): Promise<ExternalSettings> {
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
     * Updates the settings for a video conference application with the specified ID.
     * Update settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     * @param externalSettings
     */
    public replaceWithHttpInfo(appId: number, externalSettings: ExternalSettings, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExternalSettings>> {
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
        const result = this.api.replaceWithHttpInfo(appId, externalSettings, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the settings for a video conference application with the specified ID.
     * Update settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     * @param externalSettings
     */
    public replace(appId: number, externalSettings: ExternalSettings, _options?: PromiseConfigurationOptions): Promise<ExternalSettings> {
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
        const result = this.api.replace(appId, externalSettings, observableOptions);
        return result.toPromise();
    }


}



