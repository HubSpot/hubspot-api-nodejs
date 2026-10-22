// TODO: better import syntax?
import {BaseAPIRequestFactory} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import  FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { TokenInfoResponseBaseIF } from '../models/TokenInfoResponseBaseIF';
import { TokenResponseIF } from '../models/TokenResponseIF';

/**
 * no description
 */
export class AdvancedApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Authenticates a client and returns access and refresh tokens.
     * OAuth token endpoint
     * @param assertion 
     * @param clientAssertion 
     * @param clientAssertionType 
     * @param clientId 
     * @param clientSecret 
     * @param code 
     * @param codeVerifier 
     * @param grantType 
     * @param redirectUri 
     * @param refreshToken 
     * @param scope 
     */
    public async getToken(assertion?: string, clientAssertion?: string, clientAssertionType?: string, clientId?: string, clientSecret?: string, code?: string, codeVerifier?: string, grantType?: string, redirectUri?: string, refreshToken?: string, scope?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/oauth/v3/token';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'application/x-www-form-urlencoded',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (assertion !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('assertion', assertion as any);
        }
        if (clientAssertion !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_assertion', clientAssertion as any);
        }
        if (clientAssertionType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_assertion_type', clientAssertionType as any);
        }
        if (clientId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_id', clientId as any);
        }
        if (clientSecret !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_secret', clientSecret as any);
        }
        if (code !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code', code as any);
        }
        if (codeVerifier !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code_verifier', codeVerifier as any);
        }
        if (grantType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('grant_type', grantType as any);
        }
        if (redirectUri !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('redirect_uri', redirectUri as any);
        }
        if (refreshToken !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('refresh_token', refreshToken as any);
        }
        if (scope !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('scope', scope as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/x-www-form-urlencoded"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns validity and metadata for access and refresh tokens.
     * Token introspection endpoint
     * @param clientId 
     * @param clientSecret 
     * @param token 
     * @param tokenTypeHint 
     */
    public async introspectToken(clientId?: string, clientSecret?: string, token?: string, tokenTypeHint?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/oauth/v3/token/introspect';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'application/x-www-form-urlencoded',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (clientId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_id', clientId as any);
        }
        if (clientSecret !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_secret', clientSecret as any);
        }
        if (token !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('token', token as any);
        }
        if (tokenTypeHint !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('token_type_hint', tokenTypeHint as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/x-www-form-urlencoded"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes/Revokes provided Refresh Token
     * Token Revocation endpoint
     * @param clientId 
     * @param clientSecret 
     * @param token 
     * @param tokenTypeHint 
     */
    public async revokeToken(clientId?: string, clientSecret?: string, token?: string, tokenTypeHint?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/oauth/v3/token/revoke';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'application/x-www-form-urlencoded',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (clientId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_id', clientId as any);
        }
        if (clientSecret !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_secret', clientSecret as any);
        }
        if (token !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('token', token as any);
        }
        if (tokenTypeHint !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('token_type_hint', tokenTypeHint as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/x-www-form-urlencoded"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AdvancedApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TokenResponseIF >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TokenResponseIF = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TokenResponseIF", ""
            ) as TokenResponseIF;
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
            const body: TokenResponseIF = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TokenResponseIF", ""
            ) as TokenResponseIF;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to introspectToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async introspectTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TokenInfoResponseBaseIF >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TokenInfoResponseBaseIF = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TokenInfoResponseBaseIF", ""
            ) as TokenInfoResponseBaseIF;
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
            const body: TokenInfoResponseBaseIF = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TokenInfoResponseBaseIF", ""
            ) as TokenInfoResponseBaseIF;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to revokeToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async revokeTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
