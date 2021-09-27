import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchInputTag } from '../models/BatchInputTag';
import { BatchResponseTagWithErrors } from '../models/BatchResponseTagWithErrors';
import { CollectionResponseWithTotalTagForwardPaging } from '../models/CollectionResponseWithTotalTagForwardPaging';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { StandardError } from '../models/StandardError';
import { Tag } from '../models/Tag';

import { ObservableTagApi } from "./ObservableAPI";
import { TagApiRequestFactory, TagApiResponseProcessor} from "../apis/TagApi";

export interface TagApiArchiveRequest {
    /**
     * The Blog Tag id.
     * @type string
     * @memberof TagApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof TagApiarchive
     */
    archived?: boolean
}

export interface TagApiArchiveBatchRequest {
    /**
     * The JSON array of Blog Tag ids.
     * @type BatchInputString
     * @memberof TagApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface TagApiCreateRequest {
    /**
     * The JSON representation of a new Blog Tag.
     * @type Tag
     * @memberof TagApicreate
     */
    tag: Tag
}

export interface TagApiCreateBatchRequest {
    /**
     * The JSON array of new Blog Tags to create.
     * @type BatchInputTag
     * @memberof TagApicreateBatch
     */
    batchInputTag: BatchInputTag
}

export interface TagApiGetByIdRequest {
    /**
     * The Blog Tag id.
     * @type string
     * @memberof TagApigetById
     */
    objectId: string
    /**
     * Specifies whether to return archived Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof TagApigetById
     */
    archived?: boolean
}

export interface TagApiGetPageRequest {
    /**
     * Only return Blog Tags created at exactly the specified time.
     * @type Date
     * @memberof TagApigetPage
     */
    createdAt?: Date
    /**
     * Only return Blog Tags created after the specified time.
     * @type Date
     * @memberof TagApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Blog Tags created before the specified time.
     * @type Date
     * @memberof TagApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Blog Tags last updated at exactly the specified time.
     * @type Date
     * @memberof TagApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Blog Tags last updated after the specified time.
     * @type Date
     * @memberof TagApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Blog Tags last updated before the specified time.
     * @type Date
     * @memberof TagApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof TagApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof TagApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof TagApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return archived Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof TagApigetPage
     */
    archived?: boolean
}

export interface TagApiReadBatchRequest {
    /**
     * The JSON array of Blog Tag ids.
     * @type BatchInputString
     * @memberof TagApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return archived Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof TagApireadBatch
     */
    archived?: boolean
}

export interface TagApiUpdateRequest {
    /**
     * The Blog Tag id.
     * @type string
     * @memberof TagApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Tag.
     * @type Tag
     * @memberof TagApiupdate
     */
    tag: Tag
    /**
     * Specifies whether to update archived Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof TagApiupdate
     */
    archived?: boolean
}

export interface TagApiUpdateBatchRequest {
    /**
     * A JSON array of the JSON representations of the updated Blog Tags.
     * @type BatchInputJsonNode
     * @memberof TagApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update archived Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof TagApiupdateBatch
     */
    archived?: boolean
}

export class ObjectTagApi {
    private api: ObservableTagApi

    public constructor(configuration: Configuration, requestFactory?: TagApiRequestFactory, responseProcessor?: TagApiResponseProcessor) {
        this.api = new ObservableTagApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Tag object identified by the id in the path.
     * Delete a Blog Tag
     * @param param the request object
     */
    public archive(param: TagApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Tag objects identified in the request body. Note: This is not the same as the in-app `archive` function.
     * Archive a batch of Blog Tags
     * @param param the request object
     */
    public archiveBatch(param: TagApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Create a new Blog Tag.
     * Create a new Blog Tag
     * @param param the request object
     */
    public create(param: TagApiCreateRequest, options?: Configuration): Promise<Tag> {
        return this.api.create(param.tag,  options).toPromise();
    }

    /**
     * Create the Blog Tag objects detailed in the request body.
     * Create a batch of Blog Tags
     * @param param the request object
     */
    public createBatch(param: TagApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseTagWithErrors | any> {
        return this.api.createBatch(param.batchInputTag,  options).toPromise();
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param param the request object
     */
    public getById(param: TagApiGetByIdRequest, options?: Configuration): Promise<Tag> {
        return this.api.getById(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param param the request object
     */
    public getPage(param: TagApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalTagForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param param the request object
     */
    public readBatch(param: TagApiReadBatchRequest, options?: Configuration): Promise<BatchResponseTagWithErrors | any> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param param the request object
     */
    public update(param: TagApiUpdateRequest, options?: Configuration): Promise<Tag> {
        return this.api.update(param.objectId, param.tag, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param param the request object
     */
    public updateBatch(param: TagApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseTagWithErrors | any> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

}
