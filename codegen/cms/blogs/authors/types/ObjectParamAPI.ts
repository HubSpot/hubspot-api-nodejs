import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableBlogAuthorsApi } from "./ObservableAPI";
import { BlogAuthorsApiRequestFactory, BlogAuthorsApiResponseProcessor} from "../apis/BlogAuthorsApi";

export interface BlogAuthorsApiArchiveRequest {
    /**
     * The Blog Author id.
     * @type string
     * @memberof BlogAuthorsApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BlogAuthorsApiarchive
     */
    archived?: boolean
}

export interface BlogAuthorsApiArchiveBatchRequest {
    /**
     * The JSON array of Blog Author ids.
     * @type BatchInputString
     * @memberof BlogAuthorsApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface BlogAuthorsApiAttachToLangGroupRequest {
    /**
     * The JSON representation of the AttachToLangPrimaryRequest object.
     * @type AttachToLangPrimaryRequestVNext
     * @memberof BlogAuthorsApiattachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface BlogAuthorsApiCreateRequest {
    /**
     * The JSON representation of a new Blog Author.
     * @type BlogAuthor
     * @memberof BlogAuthorsApicreate
     */
    blogAuthor: BlogAuthor
}

export interface BlogAuthorsApiCreateBatchRequest {
    /**
     * The JSON array of new Blog Authors to create.
     * @type BatchInputBlogAuthor
     * @memberof BlogAuthorsApicreateBatch
     */
    batchInputBlogAuthor: BatchInputBlogAuthor
}

export interface BlogAuthorsApiCreateLangVariationRequest {
    /**
     * The JSON representation of the ContentLanguageCloneRequest object.
     * @type BlogAuthorCloneRequestVNext
     * @memberof BlogAuthorsApicreateLangVariation
     */
    blogAuthorCloneRequestVNext: BlogAuthorCloneRequestVNext
}

export interface BlogAuthorsApiDetachFromLangGroupRequest {
    /**
     * The JSON representation of the DetachFromLangGroupRequest object.
     * @type DetachFromLangGroupRequestVNext
     * @memberof BlogAuthorsApidetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface BlogAuthorsApiGetByIdRequest {
    /**
     * The Blog Author id.
     * @type string
     * @memberof BlogAuthorsApigetById
     */
    objectId: string
    /**
     * Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogAuthorsApigetById
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof BlogAuthorsApigetById
     */
    property?: string
}

export interface BlogAuthorsApiGetPageRequest {
    /**
     * Only return Blog Authors created at exactly the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    createdAt?: Date
    /**
     * Only return Blog Authors created after the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Blog Authors created before the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Blog Authors last updated at exactly the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Blog Authors last updated after the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Blog Authors last updated before the specified time.
     * @type Date
     * @memberof BlogAuthorsApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof BlogAuthorsApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BlogAuthorsApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof BlogAuthorsApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogAuthorsApigetPage
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof BlogAuthorsApigetPage
     */
    property?: string
}

export interface BlogAuthorsApiReadBatchRequest {
    /**
     * The JSON array of Blog Author ids.
     * @type BatchInputString
     * @memberof BlogAuthorsApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogAuthorsApireadBatch
     */
    archived?: boolean
}

export interface BlogAuthorsApiSetLangPrimaryRequest {
    /**
     * The JSON representation of the SetNewLanguagePrimaryRequest object.
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof BlogAuthorsApisetLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface BlogAuthorsApiUpdateRequest {
    /**
     * The Blog Author id.
     * @type string
     * @memberof BlogAuthorsApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Author.
     * @type BlogAuthor
     * @memberof BlogAuthorsApiupdate
     */
    blogAuthor: BlogAuthor
    /**
     * Specifies whether to update deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogAuthorsApiupdate
     */
    archived?: boolean
}

export interface BlogAuthorsApiUpdateBatchRequest {
    /**
     * A JSON array of the JSON representations of the updated Blog Authors.
     * @type BatchInputJsonNode
     * @memberof BlogAuthorsApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update deleted Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogAuthorsApiupdateBatch
     */
    archived?: boolean
}

export interface BlogAuthorsApiUpdateLangsRequest {
    /**
     * The JSON representation of the UpdateLanguagesRequest object.
     * @type UpdateLanguagesRequestVNext
     * @memberof BlogAuthorsApiupdateLangs
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export class ObjectBlogAuthorsApi {
    private api: ObservableBlogAuthorsApi

    public constructor(configuration: Configuration, requestFactory?: BlogAuthorsApiRequestFactory, responseProcessor?: BlogAuthorsApiResponseProcessor) {
        this.api = new ObservableBlogAuthorsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Author object identified by the id in the path.
     * Delete a Blog Author
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BlogAuthorsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Author object identified by the id in the path.
     * Delete a Blog Author
     * @param param the request object
     */
    public archive(param: BlogAuthorsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Author objects identified in the request body.
     * Delete a batch of Blog Authors
     * @param param the request object
     */
    public archiveBatchWithHttpInfo(param: BlogAuthorsApiArchiveBatchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveBatchWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete the Blog Author objects identified in the request body.
     * Delete a batch of Blog Authors
     * @param param the request object
     */
    public archiveBatch(param: BlogAuthorsApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Attach a Blog Author to a multi-language group.
     * Attach a Blog Author to a multi-language group
     * @param param the request object
     */
    public attachToLangGroupWithHttpInfo(param: BlogAuthorsApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.attachToLangGroupWithHttpInfo(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a Blog Author to a multi-language group.
     * Attach a Blog Author to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup(param: BlogAuthorsApiAttachToLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.attachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Create a new Blog Author.
     * Create a new Blog Author
     * @param param the request object
     */
    public createWithHttpInfo(param: BlogAuthorsApiCreateRequest, options?: Configuration): Promise<HttpInfo<BlogAuthor>> {
        return this.api.createWithHttpInfo(param.blogAuthor,  options).toPromise();
    }

    /**
     * Create a new Blog Author.
     * Create a new Blog Author
     * @param param the request object
     */
    public create(param: BlogAuthorsApiCreateRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.create(param.blogAuthor,  options).toPromise();
    }

    /**
     * Create the Blog Author objects detailed in the request body.
     * Create a batch of Blog Authors
     * @param param the request object
     */
    public createBatchWithHttpInfo(param: BlogAuthorsApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>> {
        return this.api.createBatchWithHttpInfo(param.batchInputBlogAuthor,  options).toPromise();
    }

    /**
     * Create the Blog Author objects detailed in the request body.
     * Create a batch of Blog Authors
     * @param param the request object
     */
    public createBatch(param: BlogAuthorsApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors> {
        return this.api.createBatch(param.batchInputBlogAuthor,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Author.
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariationWithHttpInfo(param: BlogAuthorsApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<BlogAuthor>> {
        return this.api.createLangVariationWithHttpInfo(param.blogAuthorCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Author.
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariation(param: BlogAuthorsApiCreateLangVariationRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.createLangVariation(param.blogAuthorCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a Blog Author from a multi-language group.
     * Detach a Blog Author from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroupWithHttpInfo(param: BlogAuthorsApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.detachFromLangGroupWithHttpInfo(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a Blog Author from a multi-language group.
     * Detach a Blog Author from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup(param: BlogAuthorsApiDetachFromLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.detachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author object identified by the id in the path.
     * Retrieve a Blog Author
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BlogAuthorsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<BlogAuthor>> {
        return this.api.getByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author object identified by the id in the path.
     * Retrieve a Blog Author
     * @param param the request object
     */
    public getById(param: BlogAuthorsApiGetByIdRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.getById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Get the list of blog authors. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Authors
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BlogAuthorsApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalBlogAuthorForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Get the list of blog authors. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Authors
     * @param param the request object
     */
    public getPage(param: BlogAuthorsApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseWithTotalBlogAuthorForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author objects identified in the request body.
     * Retrieve a batch of Blog Authors
     * @param param the request object
     */
    public readBatchWithHttpInfo(param: BlogAuthorsApiReadBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>> {
        return this.api.readBatchWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author objects identified in the request body.
     * Retrieve a batch of Blog Authors
     * @param param the request object
     */
    public readBatch(param: BlogAuthorsApiReadBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Set a Blog Author as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimaryWithHttpInfo(param: BlogAuthorsApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setLangPrimaryWithHttpInfo(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Set a Blog Author as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimary(param: BlogAuthorsApiSetLangPrimaryRequest, options?: Configuration): Promise<void> {
        return this.api.setLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Author object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Author
     * @param param the request object
     */
    public updateWithHttpInfo(param: BlogAuthorsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<BlogAuthor>> {
        return this.api.updateWithHttpInfo(param.objectId, param.blogAuthor, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Author object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Author
     * @param param the request object
     */
    public update(param: BlogAuthorsApiUpdateRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.update(param.objectId, param.blogAuthor, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Author objects identified in the request body.
     * Update a batch of Blog Authors
     * @param param the request object
     */
    public updateBatchWithHttpInfo(param: BlogAuthorsApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors>> {
        return this.api.updateBatchWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Author objects identified in the request body.
     * Update a batch of Blog Authors
     * @param param the request object
     */
    public updateBatch(param: BlogAuthorsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthor | BatchResponseBlogAuthorWithErrors> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Author in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangsWithHttpInfo(param: BlogAuthorsApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateLangsWithHttpInfo(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Author in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs(param: BlogAuthorsApiUpdateLangsRequest, options?: Configuration): Promise<void> {
        return this.api.updateLangs(param.updateLanguagesRequestVNext,  options).toPromise();
    }

}
