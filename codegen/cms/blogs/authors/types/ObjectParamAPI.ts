import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputBlogAuthor } from '../models/BatchInputBlogAuthor';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogAuthor } from '../models/BatchResponseBlogAuthor';
import { BatchResponseBlogAuthorWithErrors } from '../models/BatchResponseBlogAuthorWithErrors';
import { BlogAuthor } from '../models/BlogAuthor';
import { BlogAuthorCloneRequestVNext } from '../models/BlogAuthorCloneRequestVNext';
import { CollectionResponseWithTotalBlogAuthorForwardPaging } from '../models/CollectionResponseWithTotalBlogAuthorForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * The Blog Author id.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApiarchive
     */
    archived?: boolean
}

export interface BasicApiCreateRequest {
    /**
     * 
     * @type BlogAuthor
     * @memberof BasicApicreate
     */
    blogAuthor: BlogAuthor
}

export interface BasicApiGetByIdRequest {
    /**
     * The Blog Author id.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    objectId: string
    /**
     * Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApigetById
     */
    archived?: boolean
    /**
     * Used to specify which properties of the Blog Authors to include in the response.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    property?: string
}

export interface BasicApiGetPageRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPage
     */
    after?: string
    /**
     * Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApigetPage
     */
    archived?: boolean
    /**
     * Only return Blog Authors created after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Blog Authors created at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    createdAt?: Date
    /**
     * Only return Blog Authors created before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    createdBefore?: Date
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetPage
     */
    limit?: number
    /**
     * Used to specify which properties of the Blog Authors to include in the response.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPage
     */
    property?: string
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;created&#x60;, &#x60;updated&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;created&#x60; will be used by default.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApigetPage
     */
    sort?: Array<string>
    /**
     * Only return Blog Authors last updated after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Blog Authors last updated at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Blog Authors last updated before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetPage
     */
    updatedBefore?: Date
}

export interface BasicApiUpdateRequest {
    /**
     * The Blog Author id.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    objectId: string
    /**
     * 
     * @type BlogAuthor
     * @memberof BasicApiupdate
     */
    blogAuthor: BlogAuthor
    /**
     * Specifies whether to update deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApiupdate
     */
    archived?: boolean
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Author object identified by the id in the path.
     * Delete a Blog Author
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Author object identified by the id in the path.
     * Delete a Blog Author
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Create a new Blog Author.
     * Create a new Blog Author
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogAuthor>> {
        return this.api.createWithHttpInfo(param.blogAuthor,  options).toPromise();
    }

    /**
     * Create a new Blog Author.
     * Create a new Blog Author
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<BlogAuthor> {
        return this.api.create(param.blogAuthor,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author object identified by the id in the path.
     * Retrieve a Blog Author
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogAuthor>> {
        return this.api.getByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author object identified by the id in the path.
     * Retrieve a Blog Author
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<BlogAuthor> {
        return this.api.getById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Get the list of blog authors. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Authors
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BasicApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalBlogAuthorForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Get the list of blog authors. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Authors
     * @param param the request object
     */
    public getPage(param: BasicApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalBlogAuthorForwardPaging> {
        return this.api.getPage(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Author object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Author
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogAuthor>> {
        return this.api.updateWithHttpInfo(param.objectId, param.blogAuthor, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Author object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Author
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<BlogAuthor> {
        return this.api.update(param.objectId, param.blogAuthor, param.archived,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveBatchRequest {
    /**
     * 
     * @type BatchInputString
     * @memberof BatchApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface BatchApiCreateBatchRequest {
    /**
     * 
     * @type BatchInputBlogAuthor
     * @memberof BatchApicreateBatch
     */
    batchInputBlogAuthor: BatchInputBlogAuthor
}

export interface BatchApiReadBatchRequest {
    /**
     * 
     * @type BatchInputString
     * @memberof BatchApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BatchApireadBatch
     */
    archived?: boolean
}

export interface BatchApiUpdateBatchRequest {
    /**
     * 
     * @type BatchInputJsonNode
     * @memberof BatchApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BatchApiupdateBatch
     */
    archived?: boolean
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Author objects identified in the request body.
     * Delete a batch of Blog Authors
     * @param param the request object
     */
    public archiveBatchWithHttpInfo(param: BatchApiArchiveBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveBatchWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete the Blog Author objects identified in the request body.
     * Delete a batch of Blog Authors
     * @param param the request object
     */
    public archiveBatch(param: BatchApiArchiveBatchRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Create the Blog Author objects detailed in the request body.
     * Create a batch of Blog Authors
     * @param param the request object
     */
    public createBatchWithHttpInfo(param: BatchApiCreateBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>> {
        return this.api.createBatchWithHttpInfo(param.batchInputBlogAuthor,  options).toPromise();
    }

    /**
     * Create the Blog Author objects detailed in the request body.
     * Create a batch of Blog Authors
     * @param param the request object
     */
    public createBatch(param: BatchApiCreateBatchRequest, options?: ConfigurationOptions): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors> {
        return this.api.createBatch(param.batchInputBlogAuthor,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author objects identified in the request body.
     * Retrieve a batch of Blog Authors
     * @param param the request object
     */
    public readBatchWithHttpInfo(param: BatchApiReadBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>> {
        return this.api.readBatchWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author objects identified in the request body.
     * Retrieve a batch of Blog Authors
     * @param param the request object
     */
    public readBatch(param: BatchApiReadBatchRequest, options?: ConfigurationOptions): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Author objects identified in the request body.
     * Update a batch of Blog Authors
     * @param param the request object
     */
    public updateBatchWithHttpInfo(param: BatchApiUpdateBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>> {
        return this.api.updateBatchWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Author objects identified in the request body.
     * Update a batch of Blog Authors
     * @param param the request object
     */
    public updateBatch(param: BatchApiUpdateBatchRequest, options?: ConfigurationOptions): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

}

import { ObservableMultiLanguageApi } from "./ObservableAPI";
import { MultiLanguageApiRequestFactory, MultiLanguageApiResponseProcessor} from "../apis/MultiLanguageApi";

export interface MultiLanguageApiAttachToLangGroupRequest {
    /**
     * 
     * @type AttachToLangPrimaryRequestVNext
     * @memberof MultiLanguageApiattachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface MultiLanguageApiCreateLangVariationRequest {
    /**
     * 
     * @type BlogAuthorCloneRequestVNext
     * @memberof MultiLanguageApicreateLangVariation
     */
    blogAuthorCloneRequestVNext: BlogAuthorCloneRequestVNext
}

export interface MultiLanguageApiDetachFromLangGroupRequest {
    /**
     * 
     * @type DetachFromLangGroupRequestVNext
     * @memberof MultiLanguageApidetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface MultiLanguageApiSetLangPrimaryRequest {
    /**
     * 
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof MultiLanguageApisetLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface MultiLanguageApiUpdateLangsRequest {
    /**
     * 
     * @type UpdateLanguagesRequestVNext
     * @memberof MultiLanguageApiupdateLangs
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export class ObjectMultiLanguageApi {
    private api: ObservableMultiLanguageApi

    public constructor(configuration: Configuration, requestFactory?: MultiLanguageApiRequestFactory, responseProcessor?: MultiLanguageApiResponseProcessor) {
        this.api = new ObservableMultiLanguageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attach a Blog Author to a multi-language group.
     * Attach a Blog Author to a multi-language group
     * @param param the request object
     */
    public attachToLangGroupWithHttpInfo(param: MultiLanguageApiAttachToLangGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.attachToLangGroupWithHttpInfo(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a Blog Author to a multi-language group.
     * Attach a Blog Author to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup(param: MultiLanguageApiAttachToLangGroupRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.attachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Author.
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariationWithHttpInfo(param: MultiLanguageApiCreateLangVariationRequest, options?: ConfigurationOptions): Promise<HttpInfo<BlogAuthor>> {
        return this.api.createLangVariationWithHttpInfo(param.blogAuthorCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Author.
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariation(param: MultiLanguageApiCreateLangVariationRequest, options?: ConfigurationOptions): Promise<BlogAuthor> {
        return this.api.createLangVariation(param.blogAuthorCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a Blog Author from a multi-language group.
     * Detach a Blog Author from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroupWithHttpInfo(param: MultiLanguageApiDetachFromLangGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.detachFromLangGroupWithHttpInfo(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a Blog Author from a multi-language group.
     * Detach a Blog Author from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup(param: MultiLanguageApiDetachFromLangGroupRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.detachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Set a Blog Author as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimaryWithHttpInfo(param: MultiLanguageApiSetLangPrimaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.setLangPrimaryWithHttpInfo(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Set a Blog Author as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimary(param: MultiLanguageApiSetLangPrimaryRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.setLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Author in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangsWithHttpInfo(param: MultiLanguageApiUpdateLangsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateLangsWithHttpInfo(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Author in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs(param: MultiLanguageApiUpdateLangsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateLangs(param.updateLanguagesRequestVNext,  options).toPromise();
    }

}
