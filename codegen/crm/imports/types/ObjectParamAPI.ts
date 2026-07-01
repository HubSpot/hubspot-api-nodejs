import { HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { ActionResponse } from '../models/ActionResponse';
import { CollectionResponsePublicImportErrorForwardPaging } from '../models/CollectionResponsePublicImportErrorForwardPaging';
import { CollectionResponsePublicImportResponseForwardPaging } from '../models/CollectionResponsePublicImportResponseForwardPaging';
import { PublicImportResponse } from '../models/PublicImportResponse';

import { ObservableAdvancedApi } from "./ObservableAPI";
import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";

export interface AdvancedApiCrmV3ImportsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof AdvancedApicrmV3Imports
     */
    files?: HttpFile
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApicrmV3Imports
     */
    importRequest?: string
}

export interface AdvancedApiCrmV3ImportsImportIdCancelRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AdvancedApicrmV3ImportsImportIdCancel
     */
    importId: number
}

export class ObjectAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedApiRequestFactory, responseProcessor?: AdvancedApiResponseProcessor) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public crmV3ImportsWithHttpInfo(param: AdvancedApiCrmV3ImportsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PublicImportResponse>> {
        return this.api.crmV3ImportsWithHttpInfo(param.files, param.importRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public crmV3Imports(param: AdvancedApiCrmV3ImportsRequest = {}, options?: ConfigurationOptions): Promise<PublicImportResponse> {
        return this.api.crmV3Imports(param.files, param.importRequest,  options).toPromise();
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param param the request object
     */
    public crmV3ImportsImportIdCancelWithHttpInfo(param: AdvancedApiCrmV3ImportsImportIdCancelRequest, options?: ConfigurationOptions): Promise<HttpInfo<ActionResponse>> {
        return this.api.crmV3ImportsImportIdCancelWithHttpInfo(param.importId,  options).toPromise();
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param param the request object
     */
    public crmV3ImportsImportIdCancel(param: AdvancedApiCrmV3ImportsImportIdCancelRequest, options?: ConfigurationOptions): Promise<ActionResponse> {
        return this.api.crmV3ImportsImportIdCancel(param.importId,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiCrmV3ImportsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3Imports
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicrmV3Imports
     */
    limit?: number
}

export interface BasicApiCrmV3ImportsImportIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicrmV3ImportsImportId
     */
    importId: number
}

export interface BasicApiCrmV3ImportsImportIdErrorsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicrmV3ImportsImportIdErrors
     */
    importId: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ImportsImportIdErrors
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApicrmV3ImportsImportIdErrors
     */
    includeErrorMessage?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApicrmV3ImportsImportIdErrors
     */
    includeRowData?: boolean
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicrmV3ImportsImportIdErrors
     */
    limit?: number
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public crmV3ImportsWithHttpInfo(param: BasicApiCrmV3ImportsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicImportResponseForwardPaging>> {
        return this.api.crmV3ImportsWithHttpInfo(param.after, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public crmV3Imports(param: BasicApiCrmV3ImportsRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponsePublicImportResponseForwardPaging> {
        return this.api.crmV3Imports(param.after, param.limit,  options).toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param param the request object
     */
    public crmV3ImportsImportIdWithHttpInfo(param: BasicApiCrmV3ImportsImportIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicImportResponse>> {
        return this.api.crmV3ImportsImportIdWithHttpInfo(param.importId,  options).toPromise();
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param param the request object
     */
    public crmV3ImportsImportId(param: BasicApiCrmV3ImportsImportIdRequest, options?: ConfigurationOptions): Promise<PublicImportResponse> {
        return this.api.crmV3ImportsImportId(param.importId,  options).toPromise();
    }

    /**
     * Retrieves detailed error records for a specific import operation, enabling you to identify and troubleshoot records that failed during processing.
     * Retrieve errors for a specific import
     * @param param the request object
     */
    public crmV3ImportsImportIdErrorsWithHttpInfo(param: BasicApiCrmV3ImportsImportIdErrorsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicImportErrorForwardPaging>> {
        return this.api.crmV3ImportsImportIdErrorsWithHttpInfo(param.importId, param.after, param.includeErrorMessage, param.includeRowData, param.limit,  options).toPromise();
    }

    /**
     * Retrieves detailed error records for a specific import operation, enabling you to identify and troubleshoot records that failed during processing.
     * Retrieve errors for a specific import
     * @param param the request object
     */
    public crmV3ImportsImportIdErrors(param: BasicApiCrmV3ImportsImportIdErrorsRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicImportErrorForwardPaging> {
        return this.api.crmV3ImportsImportIdErrors(param.importId, param.after, param.includeErrorMessage, param.includeRowData, param.limit,  options).toPromise();
    }

}
