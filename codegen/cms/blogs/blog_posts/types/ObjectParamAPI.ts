import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Angle } from '../models/Angle';
import { BackgroundImage } from '../models/BackgroundImage';
import { BatchInputBlogPost } from '../models/BatchInputBlogPost';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogPostWithErrors } from '../models/BatchResponseBlogPostWithErrors';
import { BlogPost } from '../models/BlogPost';
import { CollectionResponseWithTotalBlogPostForwardPaging } from '../models/CollectionResponseWithTotalBlogPostForwardPaging';
import { CollectionResponseWithTotalVersionBlogPost } from '../models/CollectionResponseWithTotalVersionBlogPost';
import { ColorStop } from '../models/ColorStop';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { Gradient } from '../models/Gradient';
import { LayoutSection } from '../models/LayoutSection';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PreviousPage } from '../models/PreviousPage';
import { RGBAColor } from '../models/RGBAColor';
import { RowMetaData } from '../models/RowMetaData';
import { SideOrCorner } from '../models/SideOrCorner';
import { StandardError } from '../models/StandardError';
import { Styles } from '../models/Styles';
import { VersionBlogPost } from '../models/VersionBlogPost';
import { VersionUser } from '../models/VersionUser';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiArchiveRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof DefaultApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof DefaultApiarchive
     */
    archived?: boolean
}

export interface DefaultApiArchiveBatchRequest {
    /**
     * The JSON array of Blog Post ids.
     * @type BatchInputString
     * @memberof DefaultApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface DefaultApiCloneRequest {
    /**
     * The JSON representation of the ContentCloneRequest object.
     * @type ContentCloneRequestVNext
     * @memberof DefaultApiclone
     */
    contentCloneRequestVNext: ContentCloneRequestVNext
}

export interface DefaultApiCreateRequest {
    /**
     * The JSON representation of a new Blog Post.
     * @type BlogPost
     * @memberof DefaultApicreate
     */
    blogPost: BlogPost
}

export interface DefaultApiCreateBatchRequest {
    /**
     * The JSON array of new Blog Posts to create.
     * @type BatchInputBlogPost
     * @memberof DefaultApicreateBatch
     */
    batchInputBlogPost: BatchInputBlogPost
}

export interface DefaultApiGetByIdRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof DefaultApigetById
     */
    objectId: string
    /**
     * Specifies whether to return archived Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof DefaultApigetById
     */
    archived?: boolean
}

export interface DefaultApiGetDraftByIdRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof DefaultApigetDraftById
     */
    objectId: string
}

export interface DefaultApiGetPageRequest {
    /**
     * Only return Blog Posts created at exactly the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    createdAt?: Date
    /**
     * Only return Blog Posts created after the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Blog Posts created before the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Blog Posts last updated at exactly the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Blog Posts last updated after the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Blog Posts last updated before the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof DefaultApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof DefaultApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof DefaultApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return archived Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof DefaultApigetPage
     */
    archived?: boolean
}

export interface DefaultApiGetPreviousVersionRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof DefaultApigetPreviousVersion
     */
    objectId: string
    /**
     * The Blog Post version id.
     * @type string
     * @memberof DefaultApigetPreviousVersion
     */
    revisionId: string
}

export interface DefaultApiGetPreviousVersionsRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof DefaultApigetPreviousVersions
     */
    objectId: string
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof DefaultApigetPreviousVersions
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof DefaultApigetPreviousVersions
     */
    limit?: number
}

export interface DefaultApiPushLiveRequest {
    /**
     * The id of the Blog Post for which it&#39;s draft will be pushed live.
     * @type string
     * @memberof DefaultApipushLive
     */
    objectId: string
}

export interface DefaultApiReadBatchRequest {
    /**
     * The JSON array of Blog Post ids.
     * @type BatchInputString
     * @memberof DefaultApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return archived Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof DefaultApireadBatch
     */
    archived?: boolean
}

export interface DefaultApiResetDraftRequest {
    /**
     * The id of the Blog Post for which it&#39;s draft will be reset.
     * @type string
     * @memberof DefaultApiresetDraft
     */
    objectId: string
}

export interface DefaultApiRestorePreviousVersionRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof DefaultApirestorePreviousVersion
     */
    objectId: string
    /**
     * The Blog Post version id to restore.
     * @type string
     * @memberof DefaultApirestorePreviousVersion
     */
    revisionId: string
}

export interface DefaultApiRestorePreviousVersionToDraftRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof DefaultApirestorePreviousVersionToDraft
     */
    objectId: string
    /**
     * The Blog Post version id to restore.
     * @type number
     * @memberof DefaultApirestorePreviousVersionToDraft
     */
    revisionId: number
}

export interface DefaultApiScheduleRequest {
    /**
     * The JSON representation of the ContentCloneRequestVNext object.
     * @type ContentScheduleRequestVNext
     * @memberof DefaultApischedule
     */
    contentScheduleRequestVNext: ContentScheduleRequestVNext
}

export interface DefaultApiUpdateRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof DefaultApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Post.
     * @type BlogPost
     * @memberof DefaultApiupdate
     */
    blogPost: BlogPost
    /**
     * Specifies whether to update archived Blog Posts. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof DefaultApiupdate
     */
    archived?: boolean
}

export interface DefaultApiUpdateBatchRequest {
    /**
     * 
     * @type BatchInputJsonNode
     * @memberof DefaultApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof DefaultApiupdateBatch
     */
    archived?: boolean
}

export interface DefaultApiUpdateDraftRequest {
    /**
     * The Blog Post id.
     * @type string
     * @memberof DefaultApiupdateDraft
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Post to be applied to the draft.
     * @type BlogPost
     * @memberof DefaultApiupdateDraft
     */
    blogPost: BlogPost
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Post object identified by the id in the path.
     * Delete a Blog Post
     * @param param the request object
     */
    public archive(param: DefaultApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Post objects identified in the request body. Note: This is not the same as the in-app `archive` function. To perform an in-app `archive` send an normal update with the `archived` field set to true.
     * Archive a batch of Blog Posts
     * @param param the request object
     */
    public archiveBatch(param: DefaultApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Clone a Blog.
     * Clone a Blog Post
     * @param param the request object
     */
    public clone(param: DefaultApiCloneRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.clone(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new Blog Post.
     * Create a new Blog Post
     * @param param the request object
     */
    public create(param: DefaultApiCreateRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.create(param.blogPost,  options).toPromise();
    }

    /**
     * Create the Blog Post objects detailed in the request body.
     * Create a batch of Blog Posts
     * @param param the request object
     */
    public createBatch(param: DefaultApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | any> {
        return this.api.createBatch(param.batchInputBlogPost,  options).toPromise();
    }

    /**
     * Retrieve the Blog Post object identified by the id in the path.
     * Retrieve a Blog Post
     * @param param the request object
     */
    public getById(param: DefaultApiGetByIdRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.getById(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of the Blog Post.
     * Retrieve the full draft version of the Blog Post
     * @param param the request object
     */
    public getDraftById(param: DefaultApiGetDraftByIdRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.getDraftById(param.objectId,  options).toPromise();
    }

    /**
     * Get the list of blog posts. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Posts
     * @param param the request object
     */
    public getPage(param: DefaultApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalBlogPostForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived,  options).toPromise();
    }

    /**
     * Retrieves a previous version of a blog post.
     * Retrieves a previous version of a blog post
     * @param param the request object
     */
    public getPreviousVersion(param: DefaultApiGetPreviousVersionRequest, options?: Configuration): Promise<VersionBlogPost> {
        return this.api.getPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a blog post.
     * Retrieves all the previous versions of a blog post
     * @param param the request object
     */
    public getPreviousVersions(param: DefaultApiGetPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionBlogPost> {
        return this.api.getPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the Blog Post and apply them to the live version.
     * Push Blog Post draft edits live
     * @param param the request object
     */
    public pushLive(param: DefaultApiPushLiveRequest, options?: Configuration): Promise<void> {
        return this.api.pushLive(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the Blog Post objects identified in the request body.
     * Retrieve a batch of Blog Posts
     * @param param the request object
     */
    public readBatch(param: DefaultApiReadBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | any> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Blog Post draft to the live version
     * @param param the request object
     */
    public resetDraft(param: DefaultApiResetDraftRequest, options?: Configuration): Promise<void> {
        return this.api.resetDraft(param.objectId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post and restores it.
     * Restore a previous version of a blog post
     * @param param the request object
     */
    public restorePreviousVersion(param: DefaultApiRestorePreviousVersionRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.restorePreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a blog post, sets it as the new draft version of the blog post.
     * Restore a previous version of a blog post, to the draft version of the blog post
     * @param param the request object
     */
    public restorePreviousVersionToDraft(param: DefaultApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.restorePreviousVersionToDraft(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Schedule a Blog Post to be Published.
     * Schedule a Blog Post to be Published
     * @param param the request object
     */
    public schedule(param: DefaultApiScheduleRequest, options?: Configuration): Promise<void> {
        return this.api.schedule(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post
     * @param param the request object
     */
    public update(param: DefaultApiUpdateRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.update(param.objectId, param.blogPost, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Post objects identified in the request body.
     * Update a batch of Blog Posts
     * @param param the request object
     */
    public updateBatch(param: DefaultApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseBlogPostWithErrors | any> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates the draft version of a single Blog Post object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Post draft
     * @param param the request object
     */
    public updateDraft(param: DefaultApiUpdateDraftRequest, options?: Configuration): Promise<BlogPost> {
        return this.api.updateDraft(param.objectId, param.blogPost,  options).toPromise();
    }

}
