import { HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
    public cancelWithHttpInfo(importId: number, _options?: Configuration): Promise<HttpInfo<ActionResponse>> {
        const result = this.api.cancelWithHttpInfo(importId, _options);
        return result.toPromise();
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param importId 
     */
    public cancel(importId: number, _options?: Configuration): Promise<ActionResponse> {
        const result = this.api.cancel(importId, _options);
        return result.toPromise();
    }

    /**
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param files A list of files containing the data to import
     * @param importRequest JSON formatted metadata about the import. This includes a name for the import and the column mappings for each file. See the overview tab for more on the required format.
     */
    public createWithHttpInfo(files?: HttpFile, importRequest?: string, _options?: Configuration): Promise<HttpInfo<PublicImportResponse>> {
        const result = this.api.createWithHttpInfo(files, importRequest, _options);
        return result.toPromise();
    }

    /**
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param files A list of files containing the data to import
     * @param importRequest JSON formatted metadata about the import. This includes a name for the import and the column mappings for each file. See the overview tab for more on the required format.
     */
    public create(files?: HttpFile, importRequest?: string, _options?: Configuration): Promise<PublicImportResponse> {
        const result = this.api.create(files, importRequest, _options);
        return result.toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param importId 
     */
    public getByIdWithHttpInfo(importId: number, _options?: Configuration): Promise<HttpInfo<PublicImportResponse>> {
        const result = this.api.getByIdWithHttpInfo(importId, _options);
        return result.toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param importId 
     */
    public getById(importId: number, _options?: Configuration): Promise<PublicImportResponse> {
        const result = this.api.getById(importId, _options);
        return result.toPromise();
    }

    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     */
    public getPageWithHttpInfo(after?: string, before?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicImportResponse>> {
        const result = this.api.getPageWithHttpInfo(after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     */
    public getPage(after?: string, before?: string, limit?: number, _options?: Configuration): Promise<CollectionResponsePublicImportResponse> {
        const result = this.api.getPage(after, before, limit, _options);
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
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public getErrorsWithHttpInfo(importId: number, after?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicImportErrorForwardPaging>> {
        const result = this.api.getErrorsWithHttpInfo(importId, after, limit, _options);
        return result.toPromise();
    }

    /**
     * @param importId 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public getErrors(importId: number, after?: string, limit?: number, _options?: Configuration): Promise<CollectionResponsePublicImportErrorForwardPaging> {
        const result = this.api.getErrors(importId, after, limit, _options);
        return result.toPromise();
    }


}



