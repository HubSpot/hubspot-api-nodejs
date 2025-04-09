import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ActionResponseWithSingleResultURI } from '../models/ActionResponseWithSingleResultURI';
import { PublicExportRequest } from '../models/PublicExportRequest';
import { TaskLocator } from '../models/TaskLocator';

import { ObservablePublicExportsApi } from "./ObservableAPI";
import { PublicExportsApiRequestFactory, PublicExportsApiResponseProcessor} from "../apis/PublicExportsApi";

export interface PublicExportsApiGetStatusRequest {
    /**
     * 
     * @type number
     * @memberof PublicExportsApigetStatus
     */
    taskId: number
}

export interface PublicExportsApiStartRequest {
    /**
     * 
     * @type PublicExportRequest
     * @memberof PublicExportsApistart
     */
    publicExportRequest: PublicExportRequest
}

export class ObjectPublicExportsApi {
    private api: ObservablePublicExportsApi

    public constructor(configuration: Configuration, requestFactory?: PublicExportsApiRequestFactory, responseProcessor?: PublicExportsApiResponseProcessor) {
        this.api = new ObservablePublicExportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE
     * Get the status of the export including the URL to download the file
     * @param param the request object
     */
    public getStatusWithHttpInfo(param: PublicExportsApiGetStatusRequest, options?: Configuration): Promise<HttpInfo<ActionResponseWithSingleResultURI>> {
        return this.api.getStatusWithHttpInfo(param.taskId,  options).toPromise();
    }

    /**
     * Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE
     * Get the status of the export including the URL to download the file
     * @param param the request object
     */
    public getStatus(param: PublicExportsApiGetStatusRequest, options?: Configuration): Promise<ActionResponseWithSingleResultURI> {
        return this.api.getStatus(param.taskId,  options).toPromise();
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param param the request object
     */
    public startWithHttpInfo(param: PublicExportsApiStartRequest, options?: Configuration): Promise<HttpInfo<TaskLocator>> {
        return this.api.startWithHttpInfo(param.publicExportRequest,  options).toPromise();
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param param the request object
     */
    public start(param: PublicExportsApiStartRequest, options?: Configuration): Promise<TaskLocator> {
        return this.api.start(param.publicExportRequest,  options).toPromise();
    }

}
