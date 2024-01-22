// TODO: better import syntax?
import {BaseAPIRequestFactory} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';

/**
 * no description
 */
export class AuditLogsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns audit logs based on filters.
     * Query audit logs
     * @param userId Comma separated list of user ids to filter by.
     * @param eventType Comma separated list of event types to filter by (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).
     * @param objectType Comma separated list of object types to filter by (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)
     * @param objectId Comma separated list of object ids to filter by.
     * @param after Timestamp after which audit logs will be returned
     * @param before Timestamp before which audit logs will be returned
     * @param limit The number of logs to return.
     * @param sort The sort direction for the audit logs. (Can only sort by timestamp).
     */
    public async getPage(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/cms/v3/audit-logs/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userId !== undefined) {
            requestContext.setQueryParam("userId", ObjectSerializer.serialize(userId, "Array<string>", ""));
        }

        // Query Params
        if (eventType !== undefined) {
            requestContext.setQueryParam("eventType", ObjectSerializer.serialize(eventType, "Array<string>", ""));
        }

        // Query Params
        if (objectType !== undefined) {
            requestContext.setQueryParam("objectType", ObjectSerializer.serialize(objectType, "Array<string>", ""));
        }

        // Query Params
        if (objectId !== undefined) {
            requestContext.setQueryParam("objectId", ObjectSerializer.serialize(objectId, "Array<string>", ""));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AuditLogsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponsePublicAuditLog >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponsePublicAuditLog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicAuditLog", ""
            ) as CollectionResponsePublicAuditLog;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionResponsePublicAuditLog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicAuditLog", ""
            ) as CollectionResponsePublicAuditLog;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
