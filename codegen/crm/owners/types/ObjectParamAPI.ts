import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponsePublicOwnerForwardPaging } from '../models/CollectionResponsePublicOwnerForwardPaging';
import { PublicOwner } from '../models/PublicOwner';

import { ObservableOwnersApi } from "./ObservableAPI";
import { OwnersApiRequestFactory, OwnersApiResponseProcessor} from "../apis/OwnersApi";

export interface OwnersApiGetByIdRequest {
    /**
     * 
     * @type number
     * @memberof OwnersApigetById
     */
    ownerId: number
    /**
     * 
     * @type &#39;id&#39; | &#39;userId&#39;
     * @memberof OwnersApigetById
     */
    idProperty?: 'id' | 'userId'
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof OwnersApigetById
     */
    archived?: boolean
}

export interface OwnersApiGetPageRequest {
    /**
     * Filter by email address (optional)
     * @type string
     * @memberof OwnersApigetPage
     */
    email?: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof OwnersApigetPage
     */
    after?: string
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof OwnersApigetPage
     */
    limit?: number
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof OwnersApigetPage
     */
    archived?: boolean
}

export class ObjectOwnersApi {
    private api: ObservableOwnersApi

    public constructor(configuration: Configuration, requestFactory?: OwnersApiRequestFactory, responseProcessor?: OwnersApiResponseProcessor) {
        this.api = new ObservableOwnersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read an owner by given `id` or `userId`
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: OwnersApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicOwner>> {
        return this.api.getByIdWithHttpInfo(param.ownerId, param.idProperty, param.archived,  options).toPromise();
    }

    /**
     * Read an owner by given `id` or `userId`
     * @param param the request object
     */
    public getById(param: OwnersApiGetByIdRequest, options?: Configuration): Promise<PublicOwner> {
        return this.api.getById(param.ownerId, param.idProperty, param.archived,  options).toPromise();
    }

    /**
     * Get a page of owners
     * @param param the request object
     */
    public getPageWithHttpInfo(param: OwnersApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicOwnerForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.email, param.after, param.limit, param.archived,  options).toPromise();
    }

    /**
     * Get a page of owners
     * @param param the request object
     */
    public getPage(param: OwnersApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponsePublicOwnerForwardPaging> {
        return this.api.getPage(param.email, param.after, param.limit, param.archived,  options).toPromise();
    }

}
