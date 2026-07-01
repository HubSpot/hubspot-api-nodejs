import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponseFormDefinitionBaseForwardPaging } from '../models/CollectionResponseFormDefinitionBaseForwardPaging';
import { FormDefinitionBase } from '../models/FormDefinitionBase';
import { FormDefinitionCreateRequestBase } from '../models/FormDefinitionCreateRequestBase';
import { HubSpotFormDefinition } from '../models/HubSpotFormDefinition';
import { HubSpotFormDefinitionPatchRequest } from '../models/HubSpotFormDefinitionPatchRequest';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    formId: string
}

export interface BasicApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    formId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApigetById
     */
    archived?: boolean
}

export interface BasicApiMarketingV3FormsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApimarketingV3Forms
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApimarketingV3Forms
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;&#39;hubspot&#39; | &#39;captured&#39; | &#39;flow&#39; | &#39;blog_comment&#39; | &#39;all&#39;&gt;
     * @memberof BasicApimarketingV3Forms
     */
    formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApimarketingV3Forms
     */
    limit?: number
}

export interface BasicApiMarketingV3Forms0Request {
    /**
     * 
     * @type FormDefinitionCreateRequestBase
     * @memberof BasicApimarketingV3Forms_1
     */
    formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase
}

export interface BasicApiReplaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApireplace
     */
    formId: string
    /**
     * 
     * @type HubSpotFormDefinition
     * @memberof BasicApireplace
     */
    hubSpotFormDefinition: HubSpotFormDefinition
}

export interface BasicApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    formId: string
    /**
     * 
     * @type HubSpotFormDefinitionPatchRequest
     * @memberof BasicApiupdate
     */
    hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a form definition. New submissions will not be accepted and the form definition will be permanently deleted after 3 months.
     * Archive a form definition
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.formId,  options).toPromise();
    }

    /**
     * Archive a form definition. New submissions will not be accepted and the form definition will be permanently deleted after 3 months.
     * Archive a form definition
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.formId,  options).toPromise();
    }

    /**
     * Returns a form based on the form ID provided.
     * Get a form definition
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<FormDefinitionBase>> {
        return this.api.getByIdWithHttpInfo(param.formId, param.archived,  options).toPromise();
    }

    /**
     * Returns a form based on the form ID provided.
     * Get a form definition
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<FormDefinitionBase> {
        return this.api.getById(param.formId, param.archived,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public marketingV3FormsWithHttpInfo(param: BasicApiMarketingV3FormsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseFormDefinitionBaseForwardPaging>> {
        return this.api.marketingV3FormsWithHttpInfo(param.after, param.archived, param.formTypes, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public marketingV3Forms(param: BasicApiMarketingV3FormsRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseFormDefinitionBaseForwardPaging> {
        return this.api.marketingV3Forms(param.after, param.archived, param.formTypes, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public marketingV3Forms_1WithHttpInfo(param: BasicApiMarketingV3Forms0Request, options?: ConfigurationOptions): Promise<HttpInfo<FormDefinitionBase>> {
        return this.api.marketingV3Forms_1WithHttpInfo(param.formDefinitionCreateRequestBase,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public marketingV3Forms_1(param: BasicApiMarketingV3Forms0Request, options?: ConfigurationOptions): Promise<FormDefinitionBase> {
        return this.api.marketingV3Forms_1(param.formDefinitionCreateRequestBase,  options).toPromise();
    }

    /**
     * Update all fields of a hubspot form definition.
     * Update a form definition
     * @param param the request object
     */
    public replaceWithHttpInfo(param: BasicApiReplaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<FormDefinitionBase>> {
        return this.api.replaceWithHttpInfo(param.formId, param.hubSpotFormDefinition,  options).toPromise();
    }

    /**
     * Update all fields of a hubspot form definition.
     * Update a form definition
     * @param param the request object
     */
    public replace(param: BasicApiReplaceRequest, options?: ConfigurationOptions): Promise<FormDefinitionBase> {
        return this.api.replace(param.formId, param.hubSpotFormDefinition,  options).toPromise();
    }

    /**
     * Update some of the form definition components
     * Partially update a form definition
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<FormDefinitionBase>> {
        return this.api.updateWithHttpInfo(param.formId, param.hubSpotFormDefinitionPatchRequest,  options).toPromise();
    }

    /**
     * Update some of the form definition components
     * Partially update a form definition
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<FormDefinitionBase> {
        return this.api.update(param.formId, param.hubSpotFormDefinitionPatchRequest,  options).toPromise();
    }

}
