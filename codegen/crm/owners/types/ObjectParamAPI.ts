import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponsePublicOwnerForwardPaging } from '../models/CollectionResponsePublicOwnerForwardPaging';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { PublicOwner } from '../models/PublicOwner';
import { PublicTeam } from '../models/PublicTeam';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetByIdRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApigetById
     */
    ownerId: number
    /**
     * 
     * @type &#39;id&#39; | &#39;userId&#39;
     * @memberof DefaultApigetById
     */
    idProperty?: 'id' | 'userId'
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof DefaultApigetById
     */
    archived?: boolean
}

export interface DefaultApiGetPageRequest {
    /**
     * Filter by email address (optional)
     * @type string
     * @memberof DefaultApigetPage
     */
    email?: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof DefaultApigetPage
     */
    after?: string
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof DefaultApigetPage
     */
    limit?: number
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof DefaultApigetPage
     */
    archived?: boolean
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read an owner by given `id` or `userId`
     * @param param the request object
     */
    public getById(param: DefaultApiGetByIdRequest, options?: Configuration): Promise<PublicOwner> {
        return this.api.getById(param.ownerId, param.idProperty, param.archived,  options).toPromise();
    }

    /**
     * Get a page of owners
     * @param param the request object
     */
    public getPage(param: DefaultApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicOwnerForwardPaging> {
        return this.api.getPage(param.email, param.after, param.limit, param.archived,  options).toPromise();
    }

}
