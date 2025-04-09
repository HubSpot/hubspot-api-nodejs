import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ActionResponseWithSingleResultURI } from '../models/ActionResponseWithSingleResultURI';
import { PublicExportRequest } from '../models/PublicExportRequest';
import { TaskLocator } from '../models/TaskLocator';
import { ObservablePublicExportsApi } from './ObservableAPI';

import { PublicExportsApiRequestFactory, PublicExportsApiResponseProcessor} from "../apis/PublicExportsApi";
export class PromisePublicExportsApi {
    private api: ObservablePublicExportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicExportsApiRequestFactory,
        responseProcessor?: PublicExportsApiResponseProcessor
    ) {
        this.api = new ObservablePublicExportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE
     * Get the status of the export including the URL to download the file
     * @param taskId 
     */
    public getStatusWithHttpInfo(taskId: number, _options?: Configuration): Promise<HttpInfo<ActionResponseWithSingleResultURI>> {
        const result = this.api.getStatusWithHttpInfo(taskId, _options);
        return result.toPromise();
    }

    /**
     * Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE
     * Get the status of the export including the URL to download the file
     * @param taskId 
     */
    public getStatus(taskId: number, _options?: Configuration): Promise<ActionResponseWithSingleResultURI> {
        const result = this.api.getStatus(taskId, _options);
        return result.toPromise();
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param publicExportRequest 
     */
    public startWithHttpInfo(publicExportRequest: PublicExportRequest, _options?: Configuration): Promise<HttpInfo<TaskLocator>> {
        const result = this.api.startWithHttpInfo(publicExportRequest, _options);
        return result.toPromise();
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param publicExportRequest 
     */
    public start(publicExportRequest: PublicExportRequest, _options?: Configuration): Promise<TaskLocator> {
        const result = this.api.start(publicExportRequest, _options);
        return result.toPromise();
    }


}



