import { HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ActionResponse } from '../models/ActionResponse';
import { CollectionResponsePublicImportErrorForwardPaging } from '../models/CollectionResponsePublicImportErrorForwardPaging';
import { CollectionResponsePublicImportResponse } from '../models/CollectionResponsePublicImportResponse';
import { PublicImportResponse } from '../models/PublicImportResponse';

import { ObservableCoreApi } from "./ObservableAPI";
import { CoreApiRequestFactory, CoreApiResponseProcessor} from "../apis/CoreApi";

export interface CoreApiCancelRequest {
    /**
     * 
     * @type number
     * @memberof CoreApicancel
     */
    importId: number
}

export interface CoreApiCreateRequest {
    /**
     * A list of files containing the data to import
     * @type HttpFile
     * @memberof CoreApicreate
     */
    files?: HttpFile
    /**
     * JSON formatted metadata about the import. This includes a name for the import and the column mappings for each file. See the overview tab for more on the required format.
     * @type string
     * @memberof CoreApicreate
     */
    importRequest?: string
}

export interface CoreApiGetByIdRequest {
    /**
     * 
     * @type number
     * @memberof CoreApigetById
     */
    importId: number
}

export interface CoreApiGetPageRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof CoreApigetPage
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof CoreApigetPage
     */
    before?: string
    /**
     * The maximum number of results to display per page.
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
    public cancelWithHttpInfo(param: CoreApiCancelRequest, options?: Configuration): Promise<HttpInfo<ActionResponse>> {
        return this.api.cancelWithHttpInfo(param.importId,  options).toPromise();
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param param the request object
     */
    public cancel(param: CoreApiCancelRequest, options?: Configuration): Promise<ActionResponse> {
        return this.api.cancel(param.importId,  options).toPromise();
    }

    /**
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param param the request object
     */
    public createWithHttpInfo(param: CoreApiCreateRequest = {}, options?: Configuration): Promise<HttpInfo<PublicImportResponse>> {
        return this.api.createWithHttpInfo(param.files, param.importRequest,  options).toPromise();
    }

    /**
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param param the request object
     */
    public create(param: CoreApiCreateRequest = {}, options?: Configuration): Promise<PublicImportResponse> {
        return this.api.create(param.files, param.importRequest,  options).toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: CoreApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicImportResponse>> {
        return this.api.getByIdWithHttpInfo(param.importId,  options).toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param param the request object
     */
    public getById(param: CoreApiGetByIdRequest, options?: Configuration): Promise<PublicImportResponse> {
        return this.api.getById(param.importId,  options).toPromise();
    }

    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param param the request object
     */
    public getPageWithHttpInfo(param: CoreApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicImportResponse>> {
        return this.api.getPageWithHttpInfo(param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param param the request object
     */
    public getPage(param: CoreApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponsePublicImportResponse> {
        return this.api.getPage(param.after, param.before, param.limit,  options).toPromise();
    }

}

import { ObservablePublicImportsApi } from "./ObservableAPI";
import { PublicImportsApiRequestFactory, PublicImportsApiResponseProcessor} from "../apis/PublicImportsApi";

export interface PublicImportsApiGetErrorsRequest {
    /**
     * 
     * @type number
     * @memberof PublicImportsApigetErrors
     */
    importId: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof PublicImportsApigetErrors
     */
    after?: string
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof PublicImportsApigetErrors
     */
    limit?: number
}

export class ObjectPublicImportsApi {
    private api: ObservablePublicImportsApi

    public constructor(configuration: Configuration, requestFactory?: PublicImportsApiRequestFactory, responseProcessor?: PublicImportsApiResponseProcessor) {
        this.api = new ObservablePublicImportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getErrorsWithHttpInfo(param: PublicImportsApiGetErrorsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicImportErrorForwardPaging>> {
        return this.api.getErrorsWithHttpInfo(param.importId, param.after, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getErrors(param: PublicImportsApiGetErrorsRequest, options?: Configuration): Promise<CollectionResponsePublicImportErrorForwardPaging> {
        return this.api.getErrors(param.importId, param.after, param.limit,  options).toPromise();
    }

}
