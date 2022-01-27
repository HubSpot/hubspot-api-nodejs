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
import { ObservableOwnersApi } from './ObservableAPI';

import { OwnersApiRequestFactory, OwnersApiResponseProcessor} from "../apis/OwnersApi";
export class PromiseOwnersApi {
    private api: ObservableOwnersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OwnersApiRequestFactory,
        responseProcessor?: OwnersApiResponseProcessor
    ) {
        this.api = new ObservableOwnersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read an owner by given `id` or `userId`
     * @param ownerId 
     * @param idProperty 
     * @param archived Whether to return only results that have been archived.
     */
    public getById(ownerId: number, idProperty?: 'id' | 'userId', archived?: boolean, _options?: Configuration): Promise<PublicOwner> {
        const result = this.api.getById(ownerId, idProperty, archived, _options);
        return result.toPromise();
    }

    /**
     * Get a page of owners
     * @param email Filter by email address (optional)
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     * @param archived Whether to return only results that have been archived.
     */
    public getPage(email?: string, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Promise<CollectionResponsePublicOwnerForwardPaging> {
        const result = this.api.getPage(email, after, limit, archived, _options);
        return result.toPromise();
    }


}



