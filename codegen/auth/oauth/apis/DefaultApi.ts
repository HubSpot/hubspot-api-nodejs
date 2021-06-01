// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { AccessTokenInfoResponse } from '../models/AccessTokenInfoResponse';
import { RefreshTokenInfoResponse } from '../models/RefreshTokenInfoResponse';
import { TokenResponseIF } from '../models/TokenResponseIF';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param token 
     */
    public async archiveRefreshToken(token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError('Required parameter token was null or undefined when calling archiveRefreshToken.');
        }


        // Path Params
        const localVarPath = '/oauth/v1/refresh-tokens/{token}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param grantType 
     * @param code 
     * @param redirectUri 
     * @param clientId 
     * @param clientSecret 
     * @param refreshToken 
     */
    public async createToken(grantType?: string, code?: string, redirectUri?: string, clientId?: string, clientSecret?: string, refreshToken?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/oauth/v1/token';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params
        let localVarFormParams = new FormData();

        if (grantType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('grant_type', grantType as any);
        }
        if (code !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code', code as any);
        }
        if (redirectUri !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('redirect_uri', redirectUri as any);
        }
        if (clientId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_id', clientId as any);
        }
        if (clientSecret !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_secret', clientSecret as any);
        }
        if (refreshToken !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('refresh_token', refreshToken as any);
        }
        requestContext.setBody(localVarFormParams);

        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param token 
     */
    public async getAccessToken(token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError('Required parameter token was null or undefined when calling getAccessToken.');
        }


        // Path Params
        const localVarPath = '/oauth/v1/access-tokens/{token}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param token 
     */
    public async getRefreshToken(token: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new RequiredError('Required parameter token was null or undefined when calling getRefreshToken.');
        }


        // Path Params
        const localVarPath = '/oauth/v1/refresh-tokens/{token}'
            .replace('{' + 'token' + '}', encodeURIComponent(String(token)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archiveRefreshToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveRefreshToken(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createToken(response: ResponseContext): Promise<TokenResponseIF > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TokenResponseIF = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TokenResponseIF", ""
            ) as TokenResponseIF;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TokenResponseIF = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TokenResponseIF", ""
            ) as TokenResponseIF;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAccessToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAccessToken(response: ResponseContext): Promise<AccessTokenInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccessTokenInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessTokenInfoResponse", ""
            ) as AccessTokenInfoResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccessTokenInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessTokenInfoResponse", ""
            ) as AccessTokenInfoResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRefreshToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRefreshToken(response: ResponseContext): Promise<RefreshTokenInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RefreshTokenInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RefreshTokenInfoResponse", ""
            ) as RefreshTokenInfoResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RefreshTokenInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RefreshTokenInfoResponse", ""
            ) as RefreshTokenInfoResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
