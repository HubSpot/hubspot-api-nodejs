import { Configuration} from '../configuration'

import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
import { ObservableAuditLogsApi } from './ObservableAPI';

import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor} from "../apis/AuditLogsApi";
export class PromiseAuditLogsApi {
    private api: ObservableAuditLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuditLogsApiRequestFactory,
        responseProcessor?: AuditLogsApiResponseProcessor
    ) {
        this.api = new ObservableAuditLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns audit logs based on filters.
     * Query audit logs
     * @param objectId Comma separated list of object ids to filter by.
     * @param userId Comma separated list of user ids to filter by.
     * @param after Timestamp after which audit logs will be returned
     * @param before Timestamp before which audit logs will be returned
     * @param sort The sort direction for the audit logs. (Can only sort by timestamp).
     * @param eventType Comma separated list of event types to filter by (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).
     * @param limit The number of logs to return.
     * @param objectType Comma separated list of object types to filter by (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)
     */
    public getPage(objectId?: Array<string>, userId?: Array<string>, after?: string, before?: string, sort?: Array<string>, eventType?: Array<string>, limit?: number, objectType?: Array<string>, _options?: Configuration): Promise<CollectionResponsePublicAuditLog> {
        const result = this.api.getPage(objectId, userId, after, before, sort, eventType, limit, objectType, _options);
        return result.toPromise();
    }


}



