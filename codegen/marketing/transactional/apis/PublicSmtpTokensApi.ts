// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CollectionResponseSmtpApiTokenViewForwardPaging } from '../models/CollectionResponseSmtpApiTokenViewForwardPaging';
import { SmtpApiTokenRequestEgg } from '../models/SmtpApiTokenRequestEgg';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';

/**
 * no description
 */
export class PublicSmtpTokensApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public async archiveToken(tokenId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tokenId' is not null or undefined
        if (tokenId === null || tokenId === undefined) {
            throw new RequiredError("PublicSmtpTokensApi", "archiveToken", "tokenId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/transactional/smtp-tokens/{tokenId}'
            .replace('{' + 'tokenId' + '}', encodeURIComponent(String(tokenId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param smtpApiTokenRequestEgg A request object that includes the campaign name tied to the token and whether contacts should be created for email recipients.
     */
    public async createToken(smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'smtpApiTokenRequestEgg' is not null or undefined
        if (smtpApiTokenRequestEgg === null || smtpApiTokenRequestEgg === undefined) {
            throw new RequiredError("PublicSmtpTokensApi", "createToken", "smtpApiTokenRequestEgg");
        }


        // Path Params
        const localVarPath = '/marketing/v3/transactional/smtp-tokens';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(smtpApiTokenRequestEgg, "SmtpApiTokenRequestEgg", ""),
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

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public async getTokenById(tokenId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tokenId' is not null or undefined
        if (tokenId === null || tokenId === undefined) {
            throw new RequiredError("PublicSmtpTokensApi", "getTokenById", "tokenId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/transactional/smtp-tokens/{tokenId}'
            .replace('{' + 'tokenId' + '}', encodeURIComponent(String(tokenId)));

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
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param campaignName A name for the campaign tied to the SMTP API token.
     * @param emailCampaignId Identifier assigned to the campaign provided during the token creation.
     * @param after Starting point to get the next set of results.
     * @param limit Maximum number of tokens to return.
     */
    public async getTokensPage(campaignName?: string, emailCampaignId?: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/marketing/v3/transactional/smtp-tokens';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (campaignName !== undefined) {
            requestContext.setQueryParam("campaignName", ObjectSerializer.serialize(campaignName, "string", ""));
        }

        // Query Params
        if (emailCampaignId !== undefined) {
            requestContext.setQueryParam("emailCampaignId", ObjectSerializer.serialize(emailCampaignId, "string", ""));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
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
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param tokenId Identifier generated when a token is created.
     */
    public async resetPassword(tokenId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tokenId' is not null or undefined
        if (tokenId === null || tokenId === undefined) {
            throw new RequiredError("PublicSmtpTokensApi", "resetPassword", "tokenId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/transactional/smtp-tokens/{tokenId}/password-reset'
            .replace('{' + 'tokenId' + '}', encodeURIComponent(String(tokenId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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

export class PublicSmtpTokensApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archiveToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTokenWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SmtpApiTokenView >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SmtpApiTokenView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SmtpApiTokenView", ""
            ) as SmtpApiTokenView;
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
            const body: SmtpApiTokenView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SmtpApiTokenView", ""
            ) as SmtpApiTokenView;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTokenById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTokenByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SmtpApiTokenView >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SmtpApiTokenView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SmtpApiTokenView", ""
            ) as SmtpApiTokenView;
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
            const body: SmtpApiTokenView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SmtpApiTokenView", ""
            ) as SmtpApiTokenView;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTokensPage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTokensPageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseSmtpApiTokenViewForwardPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseSmtpApiTokenViewForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseSmtpApiTokenViewForwardPaging", ""
            ) as CollectionResponseSmtpApiTokenViewForwardPaging;
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
            const body: CollectionResponseSmtpApiTokenViewForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseSmtpApiTokenViewForwardPaging", ""
            ) as CollectionResponseSmtpApiTokenViewForwardPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resetPassword
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resetPasswordWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SmtpApiTokenView >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SmtpApiTokenView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SmtpApiTokenView", ""
            ) as SmtpApiTokenView;
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
            const body: SmtpApiTokenView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SmtpApiTokenView", ""
            ) as SmtpApiTokenView;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
