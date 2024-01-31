// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { IdentificationTokenGenerationRequest } from '../models/IdentificationTokenGenerationRequest';
import { IdentificationTokenResponse } from '../models/IdentificationTokenResponse';

/**
 * no description
 */
export class GenerateApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
     * Generate a token
     * @param identificationTokenGenerationRequest 
     */
    public async generateToken(identificationTokenGenerationRequest: IdentificationTokenGenerationRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'identificationTokenGenerationRequest' is not null or undefined
        if (identificationTokenGenerationRequest === null || identificationTokenGenerationRequest === undefined) {
            throw new RequiredError("GenerateApi", "generateToken", "identificationTokenGenerationRequest");
        }


        // Path Params
        const localVarPath = '/conversations/v3/visitor-identification/tokens/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(identificationTokenGenerationRequest, "IdentificationTokenGenerationRequest", ""),
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

export class GenerateApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<IdentificationTokenResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IdentificationTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentificationTokenResponse", ""
            ) as IdentificationTokenResponse;
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
            const body: IdentificationTokenResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IdentificationTokenResponse", ""
            ) as IdentificationTokenResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
