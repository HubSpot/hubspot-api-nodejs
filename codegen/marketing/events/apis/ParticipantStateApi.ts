// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AttendanceCounters } from '../models/AttendanceCounters';
import { CollectionResponseWithTotalParticipationBreakdownForwardPaging } from '../models/CollectionResponseWithTotalParticipationBreakdownForwardPaging';

/**
 * no description
 */
export class ParticipantStateApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public async getParticipationsBreakdownByContactId(contactIdentifier: string, state?: string, limit?: number, after?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'contactIdentifier' is not null or undefined
        if (contactIdentifier === null || contactIdentifier === undefined) {
            throw new RequiredError("ParticipantStateApi", "getParticipationsBreakdownByContactId", "contactIdentifier");
        }





        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/participations/contacts/{contactIdentifier}/breakdown'
            .replace('{' + 'contactIdentifier' + '}', encodeURIComponent(String(contactIdentifier)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (state !== undefined) {
            requestContext.setQueryParam("state", ObjectSerializer.serialize(state, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
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

    /**
     * Read Marketing event\'s participations breakdown with optional filters by externalAccountId and externalEventId pair.
     * Read participations breakdown by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public async getParticipationsBreakdownByExternalEventId(externalAccountId: string, externalEventId: string, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalAccountId' is not null or undefined
        if (externalAccountId === null || externalAccountId === undefined) {
            throw new RequiredError("ParticipantStateApi", "getParticipationsBreakdownByExternalEventId", "externalAccountId");
        }


        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("ParticipantStateApi", "getParticipationsBreakdownByExternalEventId", "externalEventId");
        }






        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/participations/{externalAccountId}/{externalEventId}/breakdown'
            .replace('{' + 'externalAccountId' + '}', encodeURIComponent(String(externalAccountId)))
            .replace('{' + 'externalEventId' + '}', encodeURIComponent(String(externalEventId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contactIdentifier !== undefined) {
            requestContext.setQueryParam("contactIdentifier", ObjectSerializer.serialize(contactIdentifier, "string", ""));
        }

        // Query Params
        if (state !== undefined) {
            requestContext.setQueryParam("state", ObjectSerializer.serialize(state, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
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

    /**
     * Read Marketing event\'s participations breakdown with optional filters by internal identifier marketingEventId.
     * Read participations breakdown by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param state The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param limit The limit for response size. The default value is 10, the max number is 100
     * @param after The cursor indicating the position of the last retrieved item.
     */
    public async getParticipationsBreakdownByMarketingEventId(marketingEventId: number, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketingEventId' is not null or undefined
        if (marketingEventId === null || marketingEventId === undefined) {
            throw new RequiredError("ParticipantStateApi", "getParticipationsBreakdownByMarketingEventId", "marketingEventId");
        }






        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/participations/{marketingEventId}/breakdown'
            .replace('{' + 'marketingEventId' + '}', encodeURIComponent(String(marketingEventId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contactIdentifier !== undefined) {
            requestContext.setQueryParam("contactIdentifier", ObjectSerializer.serialize(contactIdentifier, "string", ""));
        }

        // Query Params
        if (state !== undefined) {
            requestContext.setQueryParam("state", ObjectSerializer.serialize(state, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
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

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public async getParticipationsCountersByEventExternalId(externalAccountId: string, externalEventId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalAccountId' is not null or undefined
        if (externalAccountId === null || externalAccountId === undefined) {
            throw new RequiredError("ParticipantStateApi", "getParticipationsCountersByEventExternalId", "externalAccountId");
        }


        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("ParticipantStateApi", "getParticipationsCountersByEventExternalId", "externalEventId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/participations/{externalAccountId}/{externalEventId}'
            .replace('{' + 'externalAccountId' + '}', encodeURIComponent(String(externalAccountId)))
            .replace('{' + 'externalEventId' + '}', encodeURIComponent(String(externalEventId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public async getParticipationsCountersByMarketingEventId(marketingEventId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketingEventId' is not null or undefined
        if (marketingEventId === null || marketingEventId === undefined) {
            throw new RequiredError("ParticipantStateApi", "getParticipationsCountersByMarketingEventId", "marketingEventId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/participations/{marketingEventId}'
            .replace('{' + 'marketingEventId' + '}', encodeURIComponent(String(marketingEventId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

export class ParticipantStateApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getParticipationsBreakdownByContactId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getParticipationsBreakdownByContactIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalParticipationBreakdownForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalParticipationBreakdownForwardPaging", ""
            ) as CollectionResponseWithTotalParticipationBreakdownForwardPaging;
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
            const body: CollectionResponseWithTotalParticipationBreakdownForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalParticipationBreakdownForwardPaging", ""
            ) as CollectionResponseWithTotalParticipationBreakdownForwardPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getParticipationsBreakdownByExternalEventId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getParticipationsBreakdownByExternalEventIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalParticipationBreakdownForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalParticipationBreakdownForwardPaging", ""
            ) as CollectionResponseWithTotalParticipationBreakdownForwardPaging;
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
            const body: CollectionResponseWithTotalParticipationBreakdownForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalParticipationBreakdownForwardPaging", ""
            ) as CollectionResponseWithTotalParticipationBreakdownForwardPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getParticipationsBreakdownByMarketingEventId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getParticipationsBreakdownByMarketingEventIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalParticipationBreakdownForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalParticipationBreakdownForwardPaging", ""
            ) as CollectionResponseWithTotalParticipationBreakdownForwardPaging;
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
            const body: CollectionResponseWithTotalParticipationBreakdownForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalParticipationBreakdownForwardPaging", ""
            ) as CollectionResponseWithTotalParticipationBreakdownForwardPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getParticipationsCountersByEventExternalId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getParticipationsCountersByEventExternalIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttendanceCounters >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttendanceCounters = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttendanceCounters", ""
            ) as AttendanceCounters;
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
            const body: AttendanceCounters = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttendanceCounters", ""
            ) as AttendanceCounters;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getParticipationsCountersByMarketingEventId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getParticipationsCountersByMarketingEventIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AttendanceCounters >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttendanceCounters = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttendanceCounters", ""
            ) as AttendanceCounters;
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
            const body: AttendanceCounters = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttendanceCounters", ""
            ) as AttendanceCounters;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
