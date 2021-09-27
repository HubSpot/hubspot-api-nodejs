import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BatchInputBlogAuthor } from '../models/BatchInputBlogAuthor';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseBlogAuthorWithErrors } from '../models/BatchResponseBlogAuthorWithErrors';
import { BlogAuthor } from '../models/BlogAuthor';
import { CollectionResponseWithTotalBlogAuthorForwardPaging } from '../models/CollectionResponseWithTotalBlogAuthorForwardPaging';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { StandardError } from '../models/StandardError';

import { ObservableAuthorApi } from "./ObservableAPI";
import { AuthorApiRequestFactory, AuthorApiResponseProcessor} from "../apis/AuthorApi";

export interface AuthorApiArchiveRequest {
    /**
     * The Blog Author id.
     * @type string
     * @memberof AuthorApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof AuthorApiarchive
     */
    archived?: boolean
}

export interface AuthorApiArchiveBatchRequest {
    /**
     * The JSON array of Blog Author ids.
     * @type BatchInputString
     * @memberof AuthorApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface AuthorApiCreateRequest {
    /**
     * The JSON representation of a new Blog Author.
     * @type BlogAuthor
     * @memberof AuthorApicreate
     */
    blogAuthor: BlogAuthor
}

export interface AuthorApiCreateBatchRequest {
    /**
     * The JSON array of new Blog Authors to create.
     * @type BatchInputBlogAuthor
     * @memberof AuthorApicreateBatch
     */
    batchInputBlogAuthor: BatchInputBlogAuthor
}

export interface AuthorApiGetByIdRequest {
    /**
     * The Blog Author id.
     * @type string
     * @memberof AuthorApigetById
     */
    objectId: string
    /**
     * Specifies whether to return archived Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof AuthorApigetById
     */
    archived?: boolean
}

export interface AuthorApiGetPageRequest {
    /**
     * Only return Blog Authors created at exactly the specified time.
     * @type Date
     * @memberof AuthorApigetPage
     */
    createdAt?: Date
    /**
     * Only return Blog Authors created after the specified time.
     * @type Date
     * @memberof AuthorApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Blog Authors created before the specified time.
     * @type Date
     * @memberof AuthorApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Blog Authors last updated at exactly the specified time.
     * @type Date
     * @memberof AuthorApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Blog Authors last updated after the specified time.
     * @type Date
     * @memberof AuthorApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Blog Authors last updated before the specified time.
     * @type Date
     * @memberof AuthorApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof AuthorApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof AuthorApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof AuthorApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return archived Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof AuthorApigetPage
     */
    archived?: boolean
}

export interface AuthorApiReadBatchRequest {
    /**
     * The JSON array of Blog Author ids.
     * @type BatchInputString
     * @memberof AuthorApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return archived Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof AuthorApireadBatch
     */
    archived?: boolean
}

export interface AuthorApiUpdateRequest {
    /**
     * The Blog Author id.
     * @type string
     * @memberof AuthorApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Author.
     * @type BlogAuthor
     * @memberof AuthorApiupdate
     */
    blogAuthor: BlogAuthor
    /**
     * Specifies whether to update archived Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof AuthorApiupdate
     */
    archived?: boolean
}

export interface AuthorApiUpdateBatchRequest {
    /**
     * A JSON array of the JSON representations of the updated Blog Authors.
     * @type BatchInputJsonNode
     * @memberof AuthorApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update archived Blog Authors. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof AuthorApiupdateBatch
     */
    archived?: boolean
}

export class ObjectAuthorApi {
    private api: ObservableAuthorApi

    public constructor(configuration: Configuration, requestFactory?: AuthorApiRequestFactory, responseProcessor?: AuthorApiResponseProcessor) {
        this.api = new ObservableAuthorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Author object identified by the id in the path.
     * Delete a Blog Author
     * @param param the request object
     */
    public archive(param: AuthorApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Author objects identified in the request body. Note: This is not the same as the in-app `archive` function.
     * Archive a batch of Blog Authors
     * @param param the request object
     */
    public archiveBatch(param: AuthorApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Create a new Blog Author.
     * Create a new Blog Author
     * @param param the request object
     */
    public create(param: AuthorApiCreateRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.create(param.blogAuthor,  options).toPromise();
    }

    /**
     * Create the Blog Author objects detailed in the request body.
     * Create a batch of Blog Authors
     * @param param the request object
     */
    public createBatch(param: AuthorApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthorWithErrors | any> {
        return this.api.createBatch(param.batchInputBlogAuthor,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author object identified by the id in the path.
     * Retrieve a Blog Author
     * @param param the request object
     */
    public getById(param: AuthorApiGetByIdRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.getById(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Get the list of blog authors. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Authors
     * @param param the request object
     */
    public getPage(param: AuthorApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalBlogAuthorForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the Blog Author objects identified in the request body.
     * Retrieve a batch of Blog Authors
     * @param param the request object
     */
    public readBatch(param: AuthorApiReadBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthorWithErrors | any> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Author object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Author
     * @param param the request object
     */
    public update(param: AuthorApiUpdateRequest, options?: Configuration): Promise<BlogAuthor> {
        return this.api.update(param.objectId, param.blogAuthor, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Author objects identified in the request body.
     * Update a batch of Blog Authors
     * @param param the request object
     */
    public updateBatch(param: AuthorApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseBlogAuthorWithErrors | any> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

}
