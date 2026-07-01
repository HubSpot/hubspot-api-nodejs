import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { ActionResponseWithSingleResultURI } from '../models/ActionResponseWithSingleResultURI';
import { PublicExportRequest } from '../models/PublicExportRequest';
import { PublicExportResponse } from '../models/PublicExportResponse';
import { TaskLocator } from '../models/TaskLocator';

import { ObservableAdvancedApi } from "./ObservableAPI";
import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";

export interface AdvancedApiGetStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AdvancedApigetStatus
     */
    taskId: number
}

export interface AdvancedApiStartRequest {
    /**
     * 
     * @type PublicExportRequest
     * @memberof AdvancedApistart
     */
    publicExportRequest: PublicExportRequest
}

export class ObjectAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedApiRequestFactory, responseProcessor?: AdvancedApiResponseProcessor) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE
     * Get the status of the export including the URL to download the file
     * @param param the request object
     */
    public getStatusWithHttpInfo(param: AdvancedApiGetStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<ActionResponseWithSingleResultURI>> {
        return this.api.getStatusWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE
     * Get the status of the export including the URL to download the file
     * @param param the request object
     */
    public getStatus(param: AdvancedApiGetStatusRequest, options?: ConfigurationOptions): Promise<ActionResponseWithSingleResultURI> {
        return this.api.getStatus(param.taskId,  options).toPromise();
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param param the request object
     */
    public startWithHttpInfo(param: AdvancedApiStartRequest, options?: ConfigurationOptions): Promise<HttpInfo<TaskLocator>> {
        return this.api.startWithHttpInfo(param.publicExportRequest,  options).toPromise();
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param param the request object
     */
    public start(param: AdvancedApiStartRequest, options?: ConfigurationOptions): Promise<TaskLocator> {
        return this.api.start(param.publicExportRequest,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetById
     */
    exportId: number
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve detailed information about a specific CRM export, including its current state and properties.
     * Retrieve details of a specific export by its unique ID.
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicExportResponse>> {
        return this.api.getByIdWithHttpInfo(param.exportId,  options).toPromise();
    }

    /**
     * Retrieve detailed information about a specific CRM export, including its current state and properties.
     * Retrieve details of a specific export by its unique ID.
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicExportResponse> {
        return this.api.getById(param.exportId,  options).toPromise();
    }

}
