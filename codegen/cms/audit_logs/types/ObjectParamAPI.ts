import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PublicAuditLog } from '../models/PublicAuditLog';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetPageRequest {
    /**
     * Comma separated list of object ids to filter by.
     * @type Array&lt;string&gt;
     * @memberof DefaultApigetPage
     */
    objectId?: Array<string>
    /**
     * Comma separated list of user ids to filter by.
     * @type Array&lt;string&gt;
     * @memberof DefaultApigetPage
     */
    userId?: Array<string>
    /**
     * Timestamp after which audit logs will be returned
     * @type string
     * @memberof DefaultApigetPage
     */
    after?: string
    /**
     * Timestamp before which audit logs will be returned
     * @type string
     * @memberof DefaultApigetPage
     */
    before?: string
    /**
     * The sort direction for the audit logs. (Can only sort by timestamp).
     * @type Array&lt;string&gt;
     * @memberof DefaultApigetPage
     */
    sort?: Array<string>
    /**
     * Comma separated list of event types to filter by (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).
     * @type Array&lt;string&gt;
     * @memberof DefaultApigetPage
     */
    eventType?: Array<string>
    /**
     * The number of logs to return.
     * @type number
     * @memberof DefaultApigetPage
     */
    limit?: number
    /**
     * Comma separated list of object types to filter by (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)
     * @type Array&lt;string&gt;
     * @memberof DefaultApigetPage
     */
    objectType?: Array<string>
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns audit logs based on filters.
     * Query audit logs
     * @param param the request object
     */
    public getPage(param: DefaultApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicAuditLog> {
        return this.api.getPage(param.objectId, param.userId, param.after, param.before, param.sort, param.eventType, param.limit, param.objectType,  options).toPromise();
    }

}
