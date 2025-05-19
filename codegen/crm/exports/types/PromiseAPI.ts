import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
    public getStatusWithHttpInfo(taskId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ActionResponseWithSingleResultURI>> {
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
        const result = this.api.getStatusWithHttpInfo(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the status of the export with taskId, including the URL of the resulting file if the export status is COMPLETE
     * Get the status of the export including the URL to download the file
     * @param taskId
     */
    public getStatus(taskId: number, _options?: PromiseConfigurationOptions): Promise<ActionResponseWithSingleResultURI> {
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
        const result = this.api.getStatus(taskId, observableOptions);
        return result.toPromise();
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param publicExportRequest
     */
    public startWithHttpInfo(publicExportRequest: PublicExportRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TaskLocator>> {
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
        const result = this.api.startWithHttpInfo(publicExportRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Begins exporting CRM data for the portal as specified in the request body
     * Start an export
     * @param publicExportRequest
     */
    public start(publicExportRequest: PublicExportRequest, _options?: PromiseConfigurationOptions): Promise<TaskLocator> {
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
        const result = this.api.start(publicExportRequest, observableOptions);
        return result.toPromise();
    }


}



