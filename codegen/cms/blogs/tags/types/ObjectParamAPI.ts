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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiArchiveRequest {
    /**
     * The Blog Tag id.
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
     * The JSON array of Blog Tag ids.
     * @type BatchInputString
     * @memberof DefaultApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface DefaultApiCreateRequest {
    /**
     * The JSON representation of a new Blog Tag.
     * @type Tag
     * @memberof DefaultApicreate
     */
    tag: Tag
}

export interface DefaultApiCreateBatchRequest {
    /**
     * The JSON array of new Blog Tags to create.
     * @type BatchInputTag
     * @memberof DefaultApicreateBatch
     */
    batchInputTag: BatchInputTag
}

export interface DefaultApiGetByIdRequest {
    /**
     * The Blog Tag id.
     * @type string
     * @memberof DefaultApigetById
     */
    objectId: string
    /**
     * Specifies whether to return archived Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof DefaultApigetById
     */
    archived?: boolean
}

export interface DefaultApiGetPageRequest {
    /**
     * Only return Blog Tags created at exactly the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    createdAt?: Date
    /**
     * Only return Blog Tags created after the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Blog Tags created before the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Blog Tags last updated at exactly the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Blog Tags last updated after the specified time.
     * @type Date
     * @memberof DefaultApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Blog Tags last updated before the specified time.
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
     * Specifies whether to return archived Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof DefaultApigetPage
     */
    archived?: boolean
}

export interface DefaultApiReadBatchRequest {
    /**
     * The JSON array of Blog Tag ids.
     * @type BatchInputString
     * @memberof DefaultApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return archived Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof DefaultApireadBatch
     */
    archived?: boolean
}

export interface DefaultApiUpdateRequest {
    /**
     * The Blog Tag id.
     * @type string
     * @memberof DefaultApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Blog Tag.
     * @type Tag
     * @memberof DefaultApiupdate
     */
    tag: Tag
    /**
     * Specifies whether to update archived Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof DefaultApiupdate
     */
    archived?: boolean
}

export interface DefaultApiUpdateBatchRequest {
    /**
     * A JSON array of the JSON representations of the updated Blog Tags.
     * @type BatchInputJsonNode
     * @memberof DefaultApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update archived Blog Tags. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof DefaultApiupdateBatch
     */
    archived?: boolean
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Tag object identified by the id in the path.
     * Delete a Blog Tag
     * @param param the request object
     */
    public archive(param: DefaultApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Blog Tag objects identified in the request body. Note: This is not the same as the in-app `archive` function.
     * Archive a batch of Blog Tags
     * @param param the request object
     */
    public archiveBatch(param: DefaultApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Create a new Blog Tag.
     * Create a new Blog Tag
     * @param param the request object
     */
    public create(param: DefaultApiCreateRequest, options?: Configuration): Promise<Tag> {
        return this.api.create(param.tag,  options).toPromise();
    }

    /**
     * Create the Blog Tag objects detailed in the request body.
     * Create a batch of Blog Tags
     * @param param the request object
     */
    public createBatch(param: DefaultApiCreateBatchRequest, options?: Configuration): Promise<BatchResponseTagWithErrors | any> {
        return this.api.createBatch(param.batchInputTag,  options).toPromise();
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param param the request object
     */
    public getById(param: DefaultApiGetByIdRequest, options?: Configuration): Promise<Tag> {
        return this.api.getById(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param param the request object
     */
    public getPage(param: DefaultApiGetPageRequest, options?: Configuration): Promise<CollectionResponseWithTotalTagForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param param the request object
     */
    public readBatch(param: DefaultApiReadBatchRequest, options?: Configuration): Promise<BatchResponseTagWithErrors | any> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param param the request object
     */
    public update(param: DefaultApiUpdateRequest, options?: Configuration): Promise<Tag> {
        return this.api.update(param.objectId, param.tag, param.archived,  options).toPromise();
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param param the request object
     */
    public updateBatch(param: DefaultApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseTagWithErrors | any> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

}
