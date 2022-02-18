import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchInputTag } from '../models/BatchInputTag';
import { BatchResponseTag } from '../models/BatchResponseTag';
import { BatchResponseTagWithErrors } from '../models/BatchResponseTagWithErrors';
import { CollectionResponseWithTotalTagForwardPaging } from '../models/CollectionResponseWithTotalTagForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { StandardError } from '../models/StandardError';
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
}

export interface BlogTagsApiPostCmsV3BlogsTagsMultiLanguageAttachToLangGroupRequest {
    /**
     * The JSON representation of the AttachToLangPrimaryRequest object.
     * @type AttachToLangPrimaryRequestVNext
     * @memberof BlogTagsApipostCmsV3BlogsTagsMultiLanguageAttachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface BlogTagsApiPostCmsV3BlogsTagsMultiLanguageCreateLanguageVariationRequest {
    /**
     * The JSON representation of the ContentLanguageCloneRequest object.
     * @type TagCloneRequestVNext
     * @memberof BlogTagsApipostCmsV3BlogsTagsMultiLanguageCreateLanguageVariation
     */
    tagCloneRequestVNext: TagCloneRequestVNext
}

export interface BlogTagsApiPostCmsV3BlogsTagsMultiLanguageDetachFromLangGroupRequest {
    /**
     * The JSON representation of the DetachFromLangGroupRequest object.
     * @type DetachFromLangGroupRequestVNext
     * @memberof BlogTagsApipostCmsV3BlogsTagsMultiLanguageDetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface BlogTagsApiPostCmsV3BlogsTagsMultiLanguageUpdateLanguagesRequest {
    /**
     * The JSON representation of the UpdateLanguagesRequest object.
     * @type UpdateLanguagesRequestVNext
     * @memberof BlogTagsApipostCmsV3BlogsTagsMultiLanguageUpdateLanguages
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export interface BlogTagsApiPutCmsV3BlogsTagsMultiLanguageSetNewLangPrimaryRequest {
    /**
     * The JSON representation of the SetNewLanguagePrimaryRequest object.
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof BlogTagsApiputCmsV3BlogsTagsMultiLanguageSetNewLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
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
    public archive(param: BlogTagsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
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
    public createBatch(param: BlogTagsApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        return this.api.createBatch(param.batchInputTag,  options).toPromise();
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param param the request object
     */
    public getById(param: BlogTagsApiGetByIdRequest, options?: Configuration): Promise<Tag> {
        return this.api.getById(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param param the request object
     */
    public getPage(param: BlogTagsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalTagForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived,  options).toPromise();
    }

    /**
     * Attach a Blog Tag to a multi-language group.
     * Attach a Blog Tag to a multi-language group
     * @param param the request object
     */
    public postCmsV3BlogsTagsMultiLanguageAttachToLangGroup(param: BlogTagsApiPostCmsV3BlogsTagsMultiLanguageAttachToLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.postCmsV3BlogsTagsMultiLanguageAttachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Tag
     * Create a new language variation
     * @param param the request object
     */
    public postCmsV3BlogsTagsMultiLanguageCreateLanguageVariation(param: BlogTagsApiPostCmsV3BlogsTagsMultiLanguageCreateLanguageVariationRequest, options?: Configuration): Promise<Tag> {
        return this.api.postCmsV3BlogsTagsMultiLanguageCreateLanguageVariation(param.tagCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a Blog Tag from a multi-language group.
     * Detach a Blog Tag from a multi-language group
     * @param param the request object
     */
    public postCmsV3BlogsTagsMultiLanguageDetachFromLangGroup(param: BlogTagsApiPostCmsV3BlogsTagsMultiLanguageDetachFromLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.postCmsV3BlogsTagsMultiLanguageDetachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Tag in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public postCmsV3BlogsTagsMultiLanguageUpdateLanguages(param: BlogTagsApiPostCmsV3BlogsTagsMultiLanguageUpdateLanguagesRequest, options?: Configuration): Promise<void> {
        return this.api.postCmsV3BlogsTagsMultiLanguageUpdateLanguages(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Set a Blog Tag as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public putCmsV3BlogsTagsMultiLanguageSetNewLangPrimary(param: BlogTagsApiPutCmsV3BlogsTagsMultiLanguageSetNewLangPrimaryRequest, options?: Configuration): Promise<void> {
        return this.api.putCmsV3BlogsTagsMultiLanguageSetNewLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
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
    public updateBatch(param: BlogTagsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

}
