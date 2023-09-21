// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { MarketingEventCompleteRequestParams } from '../models/MarketingEventCompleteRequestParams';
import { MarketingEventDefaultResponse } from '../models/MarketingEventDefaultResponse';

/**
 * no description
 */
export class MarketingEventsExternalApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param externalEventId 
     * @param externalAccountId 
     * @param marketingEventCompleteRequestParams 
     */
    public async complete(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("MarketingEventsExternalApi", "complete", "externalEventId");
        }


        // verify required parameter 'externalAccountId' is not null or undefined
        if (externalAccountId === null || externalAccountId === undefined) {
            throw new RequiredError("MarketingEventsExternalApi", "complete", "externalAccountId");
        }


        // verify required parameter 'marketingEventCompleteRequestParams' is not null or undefined
        if (marketingEventCompleteRequestParams === null || marketingEventCompleteRequestParams === undefined) {
            throw new RequiredError("MarketingEventsExternalApi", "complete", "marketingEventCompleteRequestParams");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/events/{externalEventId}/complete'
            .replace('{' + 'externalEventId' + '}', encodeURIComponent(String(externalEventId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (externalAccountId !== undefined) {
            requestContext.setQueryParam("externalAccountId", ObjectSerializer.serialize(externalAccountId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(marketingEventCompleteRequestParams, "MarketingEventCompleteRequestParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class MarketingEventsExternalApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to complete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async complete(response: ResponseContext): Promise<MarketingEventDefaultResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MarketingEventDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MarketingEventDefaultResponse", ""
            ) as MarketingEventDefaultResponse;
            return body;
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
            const body: MarketingEventDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MarketingEventDefaultResponse", ""
            ) as MarketingEventDefaultResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
