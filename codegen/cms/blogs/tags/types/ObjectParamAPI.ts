import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchInputTag } from '../models/BatchInputTag';
import { BatchResponseTag } from '../models/BatchResponseTag';
import { BatchResponseTagWithErrors } from '../models/BatchResponseTagWithErrors';
import { CollectionResponseWithTotalTagForwardPaging } from '../models/CollectionResponseWithTotalTagForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { Tag } from '../models/Tag';
import { TagCloneRequestVNext } from '../models/TagCloneRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';

import { ObservableBlogTagsApi } from "./ObservableAPI";
import { BlogTagsApiRequestFactory, BlogTagsApiResponseProcessor} from "../apis/BlogTagsApi";

export interface BlogTagsApiArchiveRequest {
    /**
     * The Blog Tag id.
     * @type string
     * @memberof BlogTagsApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof BlogTagsApiarchive
     */
    archived?: boolean
}

export interface BlogTagsApiArchiveBatchRequest {
    /**
     * The JSON array of Blog Tag ids.
     * @type BatchInputString
     * @memberof BlogTagsApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface BlogTagsApiAttachToLangGroupRequest {
    /**
     * The JSON representation of the AttachToLangPrimaryRequest object.
     * @type AttachToLangPrimaryRequestVNext
     * @memberof BlogTagsApiattachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface BlogTagsApiCreateRequest {
    /**
     * The JSON representation of a new Blog Tag.
     * @type Tag
     * @memberof BlogTagsApicreate
     */
    tag: Tag
}

export interface BlogTagsApiCreateBatchRequest {
    /**
     * The JSON array of new Blog Tags to create.
     * @type BatchInputTag
     * @memberof BlogTagsApicreateBatch
     */
    batchInputTag: BatchInputTag
}

export interface BlogTagsApiCreateLangVariationRequest {
    /**
     * The JSON representation of the ContentLanguageCloneRequest object.
     * @type TagCloneRequestVNext
     * @memberof BlogTagsApicreateLangVariation
     */
    tagCloneRequestVNext: TagCloneRequestVNext
}

export interface BlogTagsApiDetachFromLangGroupRequest {
    /**
     * The JSON representation of the DetachFromLangGroupRequest object.
     * @type DetachFromLangGroupRequestVNext
     * @memberof BlogTagsApidetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface BlogTagsApiGetByIdRequest {
    /**
     * The Blog Tag id.
     * @type string
     * @memberof BlogTagsApigetById
     */
    objectId: string
    /**
     * Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogTagsApigetById
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof BlogTagsApigetById
     */
    property?: string
}

export interface BlogTagsApiGetPageRequest {
    /**
     * Only return Blog Tags created at exactly the specified time.
     * @type Date
     * @memberof BlogTagsApigetPage
     */
    createdAt?: Date
    /**
     * Only return Blog Tags created after the specified time.
     * @type Date
     * @memberof BlogTagsApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Blog Tags created before the specified time.
     * @type Date
     * @memberof BlogTagsApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Blog Tags last updated at exactly the specified time.
     * @type Date
     * @memberof BlogTagsApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Blog Tags last updated after the specified time.
     * @type Date
     * @memberof BlogTagsApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Blog Tags last updated before the specified time.
     * @type Date
     * @memberof BlogTagsApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof BlogTagsApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof BlogTagsApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof BlogTagsApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogTagsApigetPage
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof BlogTagsApigetPage
     */
    property?: string
}

export interface BlogTagsApiReadBatchRequest {
    /**
     * The JSON array of Blog Tag ids.
     * @type BatchInputString
     * @memberof BlogTagsApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogTagsApireadBatch
     */
    archived?: boolean
}

export interface BlogTagsApiSetLangPrimaryRequest {
    /**
     * The JSON representation of the SetNewLanguagePrimaryRequest object.
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof BlogTagsApisetLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface BlogTagsApiUpdateRequest {
    /**
     * The Blog Tag id.
     * @type string
     * @memberof BlogTagsApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Tag.
     * @type Tag
     * @memberof BlogTagsApiupdate
     */
    tag: Tag
    /**
     * Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogTagsApiupdate
     */
    archived?: boolean
}

export interface BlogTagsApiUpdateBatchRequest {
    /**
     * A JSON array of the JSON representations of the updated Blog Tags.
     * @type BatchInputJsonNode
     * @memberof BlogTagsApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof BlogTagsApiupdateBatch
     */
    archived?: boolean
}

export interface BlogTagsApiUpdateLangsRequest {
    /**
     * The JSON representation of the UpdateLanguagesRequest object.
     * @type UpdateLanguagesRequestVNext
     * @memberof BlogTagsApiupdateLangs
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export class ObjectBlogTagsApi {
    private api: ObservableBlogTagsApi

    public constructor(configuration: Configuration, requestFactory?: BlogTagsApiRequestFactory, responseProcessor?: BlogTagsApiResponseProcessor) {
        this.api = new ObservableBlogTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Tag object identified by the id in the path.
     * Delete a Blog Tag
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BlogTagsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Tag object identified by the id in the path.
     * Delete a Blog Tag
     * @param param the request object
     */
    public archive(param: BlogTagsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Tag objects identified in the request body.
     * Delete a batch of Blog Tags
     * @param param the request object
     */
    public archiveBatchWithHttpInfo(param: BlogTagsApiArchiveBatchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveBatchWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete the Blog Tag objects identified in the request body.
     * Delete a batch of Blog Tags
     * @param param the request object
     */
    public archiveBatch(param: BlogTagsApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Attach a Blog Tag to a multi-language group.
     * Attach a Blog Tag to a multi-language group
     * @param param the request object
     */
    public attachToLangGroupWithHttpInfo(param: BlogTagsApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.attachToLangGroupWithHttpInfo(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a Blog Tag to a multi-language group.
     * Attach a Blog Tag to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup(param: BlogTagsApiAttachToLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.attachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Create a new Blog Tag.
     * Create a new Blog Tag
     * @param param the request object
     */
    public createWithHttpInfo(param: BlogTagsApiCreateRequest, options?: Configuration): Promise<HttpInfo<Tag>> {
        return this.api.createWithHttpInfo(param.tag,  options).toPromise();
    }

    /**
     * Create a new Blog Tag.
     * Create a new Blog Tag
     * @param param the request object
     */
    public create(param: BlogTagsApiCreateRequest, options?: Configuration): Promise<Tag> {
        return this.api.create(param.tag,  options).toPromise();
    }

    /**
     * Create the Blog Tag objects detailed in the request body.
     * Create a batch of Blog Tags
     * @param param the request object
     */
    public createBatchWithHttpInfo(param: BlogTagsApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        return this.api.createBatchWithHttpInfo(param.batchInputTag,  options).toPromise();
    }

    /**
     * Create the Blog Tag objects detailed in the request body.
     * Create a batch of Blog Tags
     * @param param the request object
     */
    public createBatch(param: BlogTagsApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        return this.api.createBatch(param.batchInputTag,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Tag
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariationWithHttpInfo(param: BlogTagsApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<Tag>> {
        return this.api.createLangVariationWithHttpInfo(param.tagCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Tag
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariation(param: BlogTagsApiCreateLangVariationRequest, options?: Configuration): Promise<Tag> {
        return this.api.createLangVariation(param.tagCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a Blog Tag from a multi-language group.
     * Detach a Blog Tag from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroupWithHttpInfo(param: BlogTagsApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.detachFromLangGroupWithHttpInfo(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a Blog Tag from a multi-language group.
     * Detach a Blog Tag from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup(param: BlogTagsApiDetachFromLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.detachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BlogTagsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<Tag>> {
        return this.api.getByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param param the request object
     */
    public getById(param: BlogTagsApiGetByIdRequest, options?: Configuration): Promise<Tag> {
        return this.api.getById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param param the request object
     */
    public getPageWithHttpInfo(param: BlogTagsApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalTagForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param param the request object
     */
    public getPage(param: BlogTagsApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseWithTotalTagForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param param the request object
     */
    public readBatchWithHttpInfo(param: BlogTagsApiReadBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        return this.api.readBatchWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param param the request object
     */
    public readBatch(param: BlogTagsApiReadBatchRequest, options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Set a Blog Tag as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimaryWithHttpInfo(param: BlogTagsApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setLangPrimaryWithHttpInfo(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Set a Blog Tag as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimary(param: BlogTagsApiSetLangPrimaryRequest, options?: Configuration): Promise<void> {
        return this.api.setLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param param the request object
     */
    public updateWithHttpInfo(param: BlogTagsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<Tag>> {
        return this.api.updateWithHttpInfo(param.objectId, param.tag, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param param the request object
     */
    public update(param: BlogTagsApiUpdateRequest, options?: Configuration): Promise<Tag> {
        return this.api.update(param.objectId, param.tag, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param param the request object
     */
    public updateBatchWithHttpInfo(param: BlogTagsApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        return this.api.updateBatchWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param param the request object
     */
    public updateBatch(param: BlogTagsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Tag in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangsWithHttpInfo(param: BlogTagsApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateLangsWithHttpInfo(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Tag in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs(param: BlogTagsApiUpdateLangsRequest, options?: Configuration): Promise<void> {
        return this.api.updateLangs(param.updateLanguagesRequestVNext,  options).toPromise();
    }

}
