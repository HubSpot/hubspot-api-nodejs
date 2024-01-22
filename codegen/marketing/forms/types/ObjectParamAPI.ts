import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseFormDefinitionBaseForwardPaging } from '../models/CollectionResponseFormDefinitionBaseForwardPaging';
import { FormDefinitionBase } from '../models/FormDefinitionBase';
import { FormDefinitionCreateRequestBase } from '../models/FormDefinitionCreateRequestBase';
import { HubSpotFormDefinition } from '../models/HubSpotFormDefinition';
import { HubSpotFormDefinitionPatchRequest } from '../models/HubSpotFormDefinitionPatchRequest';

import { ObservableFormsApi } from "./ObservableAPI";
import { FormsApiRequestFactory, FormsApiResponseProcessor} from "../apis/FormsApi";

export interface FormsApiArchiveRequest {
    /**
     * The ID of the form to archive.
     * @type string
     * @memberof FormsApiarchive
     */
    formId: string
}

export interface FormsApiCreateRequest {
    /**
     * 
     * @type FormDefinitionCreateRequestBase
     * @memberof FormsApicreate
     */
    formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase
}

export interface FormsApiGetByIdRequest {
    /**
     * The unique identifier of the form
     * @type string
     * @memberof FormsApigetById
     */
    formId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof FormsApigetById
     */
    archived?: boolean
}

export interface FormsApiGetPageRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof FormsApigetPage
     */
    after?: string
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof FormsApigetPage
     */
    limit?: number
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof FormsApigetPage
     */
    archived?: boolean
    /**
     * The form types to be included in the results.
     * @type Array&lt;&#39;hubspot&#39; | &#39;captured&#39; | &#39;flow&#39; | &#39;blog_comment&#39; | &#39;all&#39;&gt;
     * @memberof FormsApigetPage
     */
    formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>
}

export interface FormsApiReplaceRequest {
    /**
     * 
     * @type string
     * @memberof FormsApireplace
     */
    formId: string
    /**
     * 
     * @type HubSpotFormDefinition
     * @memberof FormsApireplace
     */
    hubSpotFormDefinition: HubSpotFormDefinition
}

export interface FormsApiUpdateRequest {
    /**
     * The ID of the form to update.
     * @type string
     * @memberof FormsApiupdate
     */
    formId: string
    /**
     * 
     * @type HubSpotFormDefinitionPatchRequest
     * @memberof FormsApiupdate
     */
    hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest
}

export class ObjectFormsApi {
    private api: ObservableFormsApi

    public constructor(configuration: Configuration, requestFactory?: FormsApiRequestFactory, responseProcessor?: FormsApiResponseProcessor) {
        this.api = new ObservableFormsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a form definition. New submissions will not be accepted and the form definition will be permanently deleted after 3 months.
     * Archive a form definition
     * @param param the request object
     */
    public archiveWithHttpInfo(param: FormsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.formId,  options).toPromise();
    }

    /**
     * Archive a form definition. New submissions will not be accepted and the form definition will be permanently deleted after 3 months.
     * Archive a form definition
     * @param param the request object
     */
    public archive(param: FormsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.formId,  options).toPromise();
    }

    /**
     * Add a new `hubspot` form
     * Create a form
     * @param param the request object
     */
    public createWithHttpInfo(param: FormsApiCreateRequest, options?: Configuration): Promise<HttpInfo<FormDefinitionBase>> {
        return this.api.createWithHttpInfo(param.formDefinitionCreateRequestBase,  options).toPromise();
    }

    /**
     * Add a new `hubspot` form
     * Create a form
     * @param param the request object
     */
    public create(param: FormsApiCreateRequest, options?: Configuration): Promise<FormDefinitionBase> {
        return this.api.create(param.formDefinitionCreateRequestBase,  options).toPromise();
    }

    /**
     * Returns a form based on the form ID provided.
     * Get a form definition
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: FormsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<FormDefinitionBase>> {
        return this.api.getByIdWithHttpInfo(param.formId, param.archived,  options).toPromise();
    }

    /**
     * Returns a form based on the form ID provided.
     * Get a form definition
     * @param param the request object
     */
    public getById(param: FormsApiGetByIdRequest, options?: Configuration): Promise<FormDefinitionBase> {
        return this.api.getById(param.formId, param.archived,  options).toPromise();
    }

    /**
     * Returns a list of forms based on the search filters. By default, it returns the first 20 `hubspot` forms
     * Get a list of forms
     * @param param the request object
     */
    public getPageWithHttpInfo(param: FormsApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseFormDefinitionBaseForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.after, param.limit, param.archived, param.formTypes,  options).toPromise();
    }

    /**
     * Returns a list of forms based on the search filters. By default, it returns the first 20 `hubspot` forms
     * Get a list of forms
     * @param param the request object
     */
    public getPage(param: FormsApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseFormDefinitionBaseForwardPaging> {
        return this.api.getPage(param.after, param.limit, param.archived, param.formTypes,  options).toPromise();
    }

    /**
     * Update all fields of a hubspot form definition.
     * Update a form definition
     * @param param the request object
     */
    public replaceWithHttpInfo(param: FormsApiReplaceRequest, options?: Configuration): Promise<HttpInfo<FormDefinitionBase>> {
        return this.api.replaceWithHttpInfo(param.formId, param.hubSpotFormDefinition,  options).toPromise();
    }

    /**
     * Update all fields of a hubspot form definition.
     * Update a form definition
     * @param param the request object
     */
    public replace(param: FormsApiReplaceRequest, options?: Configuration): Promise<FormDefinitionBase> {
        return this.api.replace(param.formId, param.hubSpotFormDefinition,  options).toPromise();
    }

    /**
     * Update some of the form definition components
     * Partially update a form definition
     * @param param the request object
     */
    public updateWithHttpInfo(param: FormsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<FormDefinitionBase>> {
        return this.api.updateWithHttpInfo(param.formId, param.hubSpotFormDefinitionPatchRequest,  options).toPromise();
    }

    /**
     * Update some of the form definition components
     * Partially update a form definition
     * @param param the request object
     */
    public update(param: FormsApiUpdateRequest, options?: Configuration): Promise<FormDefinitionBase> {
        return this.api.update(param.formId, param.hubSpotFormDefinitionPatchRequest,  options).toPromise();
    }

}
