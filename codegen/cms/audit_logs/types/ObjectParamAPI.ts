import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PublicAuditLog } from '../models/PublicAuditLog';

import { ObservableAuditLogsApi } from "./ObservableAPI";
import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor} from "../apis/AuditLogsApi";

export interface AuditLogsApiGetPageRequest {
    /**
     * Comma separated list of object ids to filter by.
     * @type Array&lt;string&gt;
     * @memberof AuditLogsApigetPage
     */
    objectId?: Array<string>
    /**
     * Comma separated list of user ids to filter by.
     * @type Array&lt;string&gt;
     * @memberof AuditLogsApigetPage
     */
    userId?: Array<string>
    /**
     * Timestamp after which audit logs will be returned
     * @type string
     * @memberof AuditLogsApigetPage
     */
    after?: string
    /**
     * Timestamp before which audit logs will be returned
     * @type string
     * @memberof AuditLogsApigetPage
     */
    before?: string
    /**
     * The sort direction for the audit logs. (Can only sort by timestamp).
     * @type Array&lt;string&gt;
     * @memberof AuditLogsApigetPage
     */
    sort?: Array<string>
    /**
     * Comma separated list of event types to filter by (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).
     * @type Array&lt;string&gt;
     * @memberof AuditLogsApigetPage
     */
    eventType?: Array<string>
    /**
     * The number of logs to return.
     * @type number
     * @memberof AuditLogsApigetPage
     */
    limit?: number
    /**
     * Comma separated list of object types to filter by (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)
     * @type Array&lt;string&gt;
     * @memberof AuditLogsApigetPage
     */
    objectType?: Array<string>
}

export class ObjectAuditLogsApi {
    private api: ObservableAuditLogsApi

    public constructor(configuration: Configuration, requestFactory?: AuditLogsApiRequestFactory, responseProcessor?: AuditLogsApiResponseProcessor) {
        this.api = new ObservableAuditLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns audit logs based on filters.
     * Query audit logs
     * @param param the request object
     */
    public getPage(param: AuditLogsApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponsePublicAuditLog> {
        return this.api.getPage(param.objectId, param.userId, param.after, param.before, param.sort, param.eventType, param.limit, param.objectType,  options).toPromise();
    }

}
