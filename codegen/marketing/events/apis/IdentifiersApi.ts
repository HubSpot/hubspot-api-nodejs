// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CollectionResponseSearchPublicResponseWrapperNoPaging } from '../models/CollectionResponseSearchPublicResponseWrapperNoPaging';
import { CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging } from '../models/CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging';

/**
 * no description
 */
export class IdentifiersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieves Marketing Events where the externalEventId matches the value provided in the request, limited to events created by the app making the request.  Marketing Events created by other apps will not be included in the results.
     * Find App-Specific Marketing Events by External Event Id
     * @param q The id of the marketing event in the external event application (externalEventId)
     */
    public async doSearch(q: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'q' is not null or undefined
        if (q === null || q === undefined) {
            throw new RequiredError("IdentifiersApi", "doSearch", "q");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/events/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (q !== undefined) {
            requestContext.setQueryParam("q", ObjectSerializer.serialize(q, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint searches the portal for all Marketing Events whose externalEventId matches the value provided in the request.  It retrieves the objectId and additional event details for each matching Marketing Event.  Since multiple Marketing Events can have the same externalEventId, the endpoint returns all matching results.  Note: Marketing Events become searchable by externalEventId a few minutes after creation.
     * Find Marketing Events by External Event Id
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public async searchPortalEvents(externalEventId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("IdentifiersApi", "searchPortalEvents", "externalEventId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/{externalEventId}/identifiers'
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
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class IdentifiersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to doSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async doSearchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseSearchPublicResponseWrapperNoPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseSearchPublicResponseWrapperNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseSearchPublicResponseWrapperNoPaging", ""
            ) as CollectionResponseSearchPublicResponseWrapperNoPaging;
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
            const body: CollectionResponseSearchPublicResponseWrapperNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseSearchPublicResponseWrapperNoPaging", ""
            ) as CollectionResponseSearchPublicResponseWrapperNoPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchPortalEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchPortalEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging", ""
            ) as CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging;
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
            const body: CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging", ""
            ) as CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
