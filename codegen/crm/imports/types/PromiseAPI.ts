import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { ActionResponse } from '../models/ActionResponse';
import { CollectionResponsePublicImportErrorForwardPaging } from '../models/CollectionResponsePublicImportErrorForwardPaging';
import { CollectionResponsePublicImportResponse } from '../models/CollectionResponsePublicImportResponse';
import { PublicImportResponse } from '../models/PublicImportResponse';
import { ObservableCoreApi } from './ObservableAPI';

import { CoreApiRequestFactory, CoreApiResponseProcessor} from "../apis/CoreApi";
export class PromiseCoreApi {
    private api: ObservableCoreApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CoreApiRequestFactory,
        responseProcessor?: CoreApiResponseProcessor
    ) {
        this.api = new ObservableCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param importId
     */
    public cancelWithHttpInfo(importId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ActionResponse>> {
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
        const result = this.api.cancelWithHttpInfo(importId, observableOptions);
        return result.toPromise();
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param importId
     */
    public cancel(importId: number, _options?: PromiseConfigurationOptions): Promise<ActionResponse> {
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
        const result = this.api.cancel(importId, observableOptions);
        return result.toPromise();
    }

    /**
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param [files]
     * @param [importRequest]
     */
    public createWithHttpInfo(files?: HttpFile, importRequest?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicImportResponse>> {
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
        const result = this.api.createWithHttpInfo(files, importRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param [files]
     * @param [importRequest]
     */
    public create(files?: HttpFile, importRequest?: string, _options?: PromiseConfigurationOptions): Promise<PublicImportResponse> {
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
        const result = this.api.create(files, importRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param importId
     */
    public getByIdWithHttpInfo(importId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicImportResponse>> {
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
        const result = this.api.getByIdWithHttpInfo(importId, observableOptions);
        return result.toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param importId
     */
    public getById(importId: number, _options?: PromiseConfigurationOptions): Promise<PublicImportResponse> {
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
        const result = this.api.getById(importId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before]
     * @param [limit] The maximum number of results to display per page.
     */
    public getPageWithHttpInfo(after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicImportResponse>> {
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
        const result = this.api.getPageWithHttpInfo(after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before]
     * @param [limit] The maximum number of results to display per page.
     */
    public getPage(after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicImportResponse> {
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
        const result = this.api.getPage(after, before, limit, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePublicImportsApi } from './ObservableAPI';

import { PublicImportsApiRequestFactory, PublicImportsApiResponseProcessor} from "../apis/PublicImportsApi";
export class PromisePublicImportsApi {
    private api: ObservablePublicImportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicImportsApiRequestFactory,
        responseProcessor?: PublicImportsApiResponseProcessor
    ) {
        this.api = new ObservablePublicImportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param importId
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to display per page.
     * @param [includeErrorMessage] Set to True to receive a message explaining the error.
     * @param [includeRowData] Set to True to receive the data values for the errored row.
     */
    public getErrorsWithHttpInfo(importId: number, after?: string, limit?: number, includeErrorMessage?: boolean, includeRowData?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicImportErrorForwardPaging>> {
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
        const result = this.api.getErrorsWithHttpInfo(importId, after, limit, includeErrorMessage, includeRowData, observableOptions);
        return result.toPromise();
    }

    /**
     * @param importId
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to display per page.
     * @param [includeErrorMessage] Set to True to receive a message explaining the error.
     * @param [includeRowData] Set to True to receive the data values for the errored row.
     */
    public getErrors(importId: number, after?: string, limit?: number, includeErrorMessage?: boolean, includeRowData?: boolean, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicImportErrorForwardPaging> {
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
        const result = this.api.getErrors(importId, after, limit, includeErrorMessage, includeRowData, observableOptions);
        return result.toPromise();
    }


}



