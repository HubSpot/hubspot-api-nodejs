import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { ExternalSettings } from '../models/ExternalSettings';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiarchive
     */
    appId: number
}

export interface BasicApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetById
     */
    appId: number
}

export interface BasicApiReplaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApireplace
     */
    appId: number
    /**
     * 
     * @type ExternalSettings
     * @memberof BasicApireplace
     */
    externalSettings: ExternalSettings
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete video conference extension settings for your app
     * Delete settings
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Delete video conference extension settings for your app
     * Delete settings
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.appId,  options).toPromise();
    }

    /**
     * Fetch video conference extension settings for your app
     * Get settings
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExternalSettings>> {
        return this.api.getByIdWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Fetch video conference extension settings for your app
     * Get settings
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<ExternalSettings> {
        return this.api.getById(param.appId,  options).toPromise();
    }

    /**
     * Create or update video conference extension settings for your app
     * Create or update settings
     * @param param the request object
     */
    public replaceWithHttpInfo(param: BasicApiReplaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExternalSettings>> {
        return this.api.replaceWithHttpInfo(param.appId, param.externalSettings,  options).toPromise();
    }

    /**
     * Create or update video conference extension settings for your app
     * Create or update settings
     * @param param the request object
     */
    public replace(param: BasicApiReplaceRequest, options?: ConfigurationOptions): Promise<ExternalSettings> {
        return this.api.replace(param.appId, param.externalSettings,  options).toPromise();
    }

}
