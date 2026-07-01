import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { ActionResponse } from '../models/ActionResponse';
import { CollectionResponsePublicImportErrorForwardPaging } from '../models/CollectionResponsePublicImportErrorForwardPaging';
import { CollectionResponsePublicImportResponseForwardPaging } from '../models/CollectionResponsePublicImportResponseForwardPaging';
import { PublicImportResponse } from '../models/PublicImportResponse';
import { ObservableAdvancedApi } from './ObservableAPI';

import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";
export class PromiseAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedApiRequestFactory,
        responseProcessor?: AdvancedApiResponseProcessor
    ) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [files]
     * @param [importRequest]
     */
    public crmV3ImportsWithHttpInfo(files?: HttpFile, importRequest?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicImportResponse>> {
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
        const result = this.api.crmV3ImportsWithHttpInfo(files, importRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [files]
     * @param [importRequest]
     */
    public crmV3Imports(files?: HttpFile, importRequest?: string, _options?: PromiseConfigurationOptions): Promise<PublicImportResponse> {
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
        const result = this.api.crmV3Imports(files, importRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param importId 
     */
    public crmV3ImportsImportIdCancelWithHttpInfo(importId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ActionResponse>> {
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
        const result = this.api.crmV3ImportsImportIdCancelWithHttpInfo(importId, observableOptions);
        return result.toPromise();
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param importId 
     */
    public crmV3ImportsImportIdCancel(importId: number, _options?: PromiseConfigurationOptions): Promise<ActionResponse> {
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
        const result = this.api.crmV3ImportsImportIdCancel(importId, observableOptions);
        return result.toPromise();
    }


}



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
     * @param [after]
     * @param [limit]
     */
    public crmV3ImportsWithHttpInfo(after?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicImportResponseForwardPaging>> {
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
        const result = this.api.crmV3ImportsWithHttpInfo(after, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after]
     * @param [limit]
     */
    public crmV3Imports(after?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicImportResponseForwardPaging> {
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
        const result = this.api.crmV3Imports(after, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param importId 
     */
    public crmV3ImportsImportIdWithHttpInfo(importId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicImportResponse>> {
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
        const result = this.api.crmV3ImportsImportIdWithHttpInfo(importId, observableOptions);
        return result.toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param importId 
     */
    public crmV3ImportsImportId(importId: number, _options?: PromiseConfigurationOptions): Promise<PublicImportResponse> {
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
        const result = this.api.crmV3ImportsImportId(importId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves detailed error records for a specific import operation, enabling you to identify and troubleshoot records that failed during processing.
     * Retrieve errors for a specific import
     * @param importId 
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [includeErrorMessage] 
     * @param [includeRowData] 
     * @param [limit] The maximum number of results to display per page.
     */
    public crmV3ImportsImportIdErrorsWithHttpInfo(importId: number, after?: string, includeErrorMessage?: boolean, includeRowData?: boolean, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicImportErrorForwardPaging>> {
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
        const result = this.api.crmV3ImportsImportIdErrorsWithHttpInfo(importId, after, includeErrorMessage, includeRowData, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves detailed error records for a specific import operation, enabling you to identify and troubleshoot records that failed during processing.
     * Retrieve errors for a specific import
     * @param importId 
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [includeErrorMessage] 
     * @param [includeRowData] 
     * @param [limit] The maximum number of results to display per page.
     */
    public crmV3ImportsImportIdErrors(importId: number, after?: string, includeErrorMessage?: boolean, includeRowData?: boolean, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicImportErrorForwardPaging> {
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
        const result = this.api.crmV3ImportsImportIdErrors(importId, after, includeErrorMessage, includeRowData, limit, observableOptions);
        return result.toPromise();
    }


}



