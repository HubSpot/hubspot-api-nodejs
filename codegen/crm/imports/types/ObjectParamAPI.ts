import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { ActionResponse } from '../models/ActionResponse';
import { CollectionResponsePublicImportErrorForwardPaging } from '../models/CollectionResponsePublicImportErrorForwardPaging';
import { CollectionResponsePublicImportResponse } from '../models/CollectionResponsePublicImportResponse';
import { PublicImportResponse } from '../models/PublicImportResponse';

import { ObservableCoreApi } from "./ObservableAPI";
import { CoreApiRequestFactory, CoreApiResponseProcessor} from "../apis/CoreApi";

export interface CoreApiCancelRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CoreApicancel
     */
    importId: number
}

export interface CoreApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof CoreApicreate
     */
    files?: HttpFile
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CoreApicreate
     */
    importRequest?: string
}

export interface CoreApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof CoreApigetById
     */
    importId: number
}

export interface CoreApiGetPageRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof CoreApigetPage
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CoreApigetPage
     */
    before?: string
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof CoreApigetPage
     */
    limit?: number
}

export class ObjectCoreApi {
    private api: ObservableCoreApi

    public constructor(configuration: Configuration, requestFactory?: CoreApiRequestFactory, responseProcessor?: CoreApiResponseProcessor) {
        this.api = new ObservableCoreApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param param the request object
     */
    public cancelWithHttpInfo(param: CoreApiCancelRequest, options?: ConfigurationOptions): Promise<HttpInfo<ActionResponse>> {
        return this.api.cancelWithHttpInfo(param.importId,  options).toPromise();
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param param the request object
     */
    public cancel(param: CoreApiCancelRequest, options?: ConfigurationOptions): Promise<ActionResponse> {
        return this.api.cancel(param.importId,  options).toPromise();
    }

    /**
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param param the request object
     */
    public createWithHttpInfo(param: CoreApiCreateRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PublicImportResponse>> {
        return this.api.createWithHttpInfo(param.files, param.importRequest,  options).toPromise();
    }

    /**
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param param the request object
     */
    public create(param: CoreApiCreateRequest = {}, options?: ConfigurationOptions): Promise<PublicImportResponse> {
        return this.api.create(param.files, param.importRequest,  options).toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: CoreApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicImportResponse>> {
        return this.api.getByIdWithHttpInfo(param.importId,  options).toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param param the request object
     */
    public getById(param: CoreApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicImportResponse> {
        return this.api.getById(param.importId,  options).toPromise();
    }

    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param param the request object
     */
    public getPageWithHttpInfo(param: CoreApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicImportResponse>> {
        return this.api.getPageWithHttpInfo(param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param param the request object
     */
    public getPage(param: CoreApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponsePublicImportResponse> {
        return this.api.getPage(param.after, param.before, param.limit,  options).toPromise();
    }

}

import { ObservablePublicImportsApi } from "./ObservableAPI";
import { PublicImportsApiRequestFactory, PublicImportsApiResponseProcessor} from "../apis/PublicImportsApi";

export interface PublicImportsApiGetErrorsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof PublicImportsApigetErrors
     */
    importId: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof PublicImportsApigetErrors
     */
    after?: string
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof PublicImportsApigetErrors
     */
    limit?: number
    /**
     * Set to True to receive a message explaining the error.
     * Defaults to: undefined
     * @type boolean
     * @memberof PublicImportsApigetErrors
     */
    includeErrorMessage?: boolean
    /**
     * Set to True to receive the data values for the errored row.
     * Defaults to: undefined
     * @type boolean
     * @memberof PublicImportsApigetErrors
     */
    includeRowData?: boolean
}

export class ObjectPublicImportsApi {
    private api: ObservablePublicImportsApi

    public constructor(configuration: Configuration, requestFactory?: PublicImportsApiRequestFactory, responseProcessor?: PublicImportsApiResponseProcessor) {
        this.api = new ObservablePublicImportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getErrorsWithHttpInfo(param: PublicImportsApiGetErrorsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicImportErrorForwardPaging>> {
        return this.api.getErrorsWithHttpInfo(param.importId, param.after, param.limit, param.includeErrorMessage, param.includeRowData,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getErrors(param: PublicImportsApiGetErrorsRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicImportErrorForwardPaging> {
        return this.api.getErrors(param.importId, param.after, param.limit, param.includeErrorMessage, param.includeRowData,  options).toPromise();
    }

}
