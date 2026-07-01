import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { ExternalSettings } from '../models/ExternalSettings';
import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete video conference extension settings for your app
     * Delete settings
     * @param appId 
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
     * Delete video conference extension settings for your app
     * Delete settings
     * @param appId 
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
     * Fetch video conference extension settings for your app
     * Get settings
     * @param appId 
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
     * Fetch video conference extension settings for your app
     * Get settings
     * @param appId 
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
     * Create or update video conference extension settings for your app
     * Create or update settings
     * @param appId 
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
     * Create or update video conference extension settings for your app
     * Create or update settings
     * @param appId 
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



