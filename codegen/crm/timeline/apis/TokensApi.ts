// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { TimelineEventTemplateToken } from '../models/TimelineEventTemplateToken';
import { TimelineEventTemplateTokenUpdateRequest } from '../models/TimelineEventTemplateTokenUpdateRequest';

/**
 * no description
 */
export class TokensApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This will remove the token from an existing template. Existing events and CRM objects will still retain the token and its mapped object properties, but new ones will not.  The timeline will still display this property for older CRM objects if it\'s still referenced in the template `Markdown`. New events will not.  Any lists or reports referencing deleted tokens will no longer return new contacts, but old ones will still exist in the lists.
     * Removes a token from the event template
     * @param eventTemplateId The event template ID.
     * @param tokenName The token name.
     * @param appId The ID of the target app.
     */
    public async archive(eventTemplateId: string, tokenName: string, appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new RequiredError("TokensApi", "archive", "eventTemplateId");
        }


        // verify required parameter 'tokenName' is not null or undefined
        if (tokenName === null || tokenName === undefined) {
            throw new RequiredError("TokensApi", "archive", "tokenName");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("TokensApi", "archive", "appId");
        }


        // Path Params
        const localVarPath = '/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}/tokens/{tokenName}'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'tokenName' + '}', encodeURIComponent(String(tokenName)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
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
     * Once you\'ve defined an event template, it\'s likely that you\'ll want to define tokens for it as well. You can do this on the event template itself or update individual tokens here.  Event type tokens allow you to attach custom data to events displayed in a timeline or used for list segmentation.  You can also use `objectPropertyName` to associate any CRM object properties. This will allow you to fully build out CRM objects.  Token names should be unique across the template.
     * Adds a token to an existing event template
     * @param eventTemplateId The event template ID.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateToken The new token definition.
     */
    public async create(eventTemplateId: string, appId: number, timelineEventTemplateToken: TimelineEventTemplateToken, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new RequiredError("TokensApi", "create", "eventTemplateId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("TokensApi", "create", "appId");
        }


        // verify required parameter 'timelineEventTemplateToken' is not null or undefined
        if (timelineEventTemplateToken === null || timelineEventTemplateToken === undefined) {
            throw new RequiredError("TokensApi", "create", "timelineEventTemplateToken");
        }


        // Path Params
        const localVarPath = '/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}/tokens'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(timelineEventTemplateToken, "TimelineEventTemplateToken", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
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
     * This will update the existing token on an event template. Name and type can\'t be changed on existing tokens.
     * Updates an existing token on an event template
     * @param eventTemplateId The event template ID.
     * @param tokenName The token name.
     * @param appId The ID of the target app.
     * @param timelineEventTemplateTokenUpdateRequest The updated token definition.
     */
    public async update(eventTemplateId: string, tokenName: string, appId: number, timelineEventTemplateTokenUpdateRequest: TimelineEventTemplateTokenUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new RequiredError("TokensApi", "update", "eventTemplateId");
        }


        // verify required parameter 'tokenName' is not null or undefined
        if (tokenName === null || tokenName === undefined) {
            throw new RequiredError("TokensApi", "update", "tokenName");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("TokensApi", "update", "appId");
        }


        // verify required parameter 'timelineEventTemplateTokenUpdateRequest' is not null or undefined
        if (timelineEventTemplateTokenUpdateRequest === null || timelineEventTemplateTokenUpdateRequest === undefined) {
            throw new RequiredError("TokensApi", "update", "timelineEventTemplateTokenUpdateRequest");
        }


        // Path Params
        const localVarPath = '/crm/v3/timeline/{appId}/event-templates/{eventTemplateId}/tokens/{tokenName}'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'tokenName' + '}', encodeURIComponent(String(tokenName)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(timelineEventTemplateTokenUpdateRequest, "TimelineEventTemplateTokenUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["developer_hapikey"]
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

export class TokensApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimelineEventTemplateToken >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimelineEventTemplateToken = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineEventTemplateToken", ""
            ) as TimelineEventTemplateToken;
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
            const body: TimelineEventTemplateToken = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineEventTemplateToken", ""
            ) as TimelineEventTemplateToken;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to update
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimelineEventTemplateToken >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimelineEventTemplateToken = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineEventTemplateToken", ""
            ) as TimelineEventTemplateToken;
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
            const body: TimelineEventTemplateToken = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineEventTemplateToken", ""
            ) as TimelineEventTemplateToken;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
