// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CollectionResponseWithTotalPublicListNoPaging } from '../models/CollectionResponseWithTotalPublicListNoPaging';

/**
 * no description
 */
export class ListAssociationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Associates a list with a marketing event by external account id, external event id, and ILS list id
     * Associate a list with a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param listId The ILS ID of the list.
     */
    public async associateByExternalAccountAndEventIds(externalAccountId: string, externalEventId: string, listId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalAccountId' is not null or undefined
        if (externalAccountId === null || externalAccountId === undefined) {
            throw new RequiredError("ListAssociationsApi", "associateByExternalAccountAndEventIds", "externalAccountId");
        }


        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("ListAssociationsApi", "associateByExternalAccountAndEventIds", "externalEventId");
        }


        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListAssociationsApi", "associateByExternalAccountAndEventIds", "listId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/associations/{externalAccountId}/{externalEventId}/lists/{listId}'
            .replace('{' + 'externalAccountId' + '}', encodeURIComponent(String(externalAccountId)))
            .replace('{' + 'externalEventId' + '}', encodeURIComponent(String(externalEventId)))
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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

    /**
     * Associates a list with a marketing event by marketing event id and ILS list id
     * Associate a list with a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param listId The ILS ID of the list.
     */
    public async associateByMarketingEventId(marketingEventId: string, listId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketingEventId' is not null or undefined
        if (marketingEventId === null || marketingEventId === undefined) {
            throw new RequiredError("ListAssociationsApi", "associateByMarketingEventId", "marketingEventId");
        }


        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListAssociationsApi", "associateByMarketingEventId", "listId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/associations/{marketingEventId}/lists/{listId}'
            .replace('{' + 'marketingEventId' + '}', encodeURIComponent(String(marketingEventId)))
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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

    /**
     * Disassociates a list from a marketing event by external account id, external event id, and ILS list id
     * Disassociate a list from a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param listId The ILS ID of the list.
     */
    public async disassociateByExternalAccountAndEventIds(externalAccountId: string, externalEventId: string, listId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalAccountId' is not null or undefined
        if (externalAccountId === null || externalAccountId === undefined) {
            throw new RequiredError("ListAssociationsApi", "disassociateByExternalAccountAndEventIds", "externalAccountId");
        }


        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("ListAssociationsApi", "disassociateByExternalAccountAndEventIds", "externalEventId");
        }


        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListAssociationsApi", "disassociateByExternalAccountAndEventIds", "listId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/associations/{externalAccountId}/{externalEventId}/lists/{listId}'
            .replace('{' + 'externalAccountId' + '}', encodeURIComponent(String(externalAccountId)))
            .replace('{' + 'externalEventId' + '}', encodeURIComponent(String(externalEventId)))
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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

    /**
     * Disassociates a list from a marketing event by marketing event id and ILS list id
     * Disassociate a list from a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param listId The ILS ID of the list.
     */
    public async disassociateByMarketingEventId(marketingEventId: string, listId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketingEventId' is not null or undefined
        if (marketingEventId === null || marketingEventId === undefined) {
            throw new RequiredError("ListAssociationsApi", "disassociateByMarketingEventId", "marketingEventId");
        }


        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new RequiredError("ListAssociationsApi", "disassociateByMarketingEventId", "listId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/associations/{marketingEventId}/lists/{listId}'
            .replace('{' + 'marketingEventId' + '}', encodeURIComponent(String(marketingEventId)))
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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

    /**
     * Gets lists associated with a marketing event by external account id and external event id
     * Get lists associated with a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public async getAllByExternalAccountAndEventIds(externalAccountId: string, externalEventId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalAccountId' is not null or undefined
        if (externalAccountId === null || externalAccountId === undefined) {
            throw new RequiredError("ListAssociationsApi", "getAllByExternalAccountAndEventIds", "externalAccountId");
        }


        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("ListAssociationsApi", "getAllByExternalAccountAndEventIds", "externalEventId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/associations/{externalAccountId}/{externalEventId}/lists'
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
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets lists associated with a marketing event by marketing event id
     * Get lists associated with a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public async getAllByMarketingEventId(marketingEventId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marketingEventId' is not null or undefined
        if (marketingEventId === null || marketingEventId === undefined) {
            throw new RequiredError("ListAssociationsApi", "getAllByMarketingEventId", "marketingEventId");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/associations/{marketingEventId}/lists'
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
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ListAssociationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to associateByExternalAccountAndEventIds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async associateByExternalAccountAndEventIdsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to associateByMarketingEventId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async associateByMarketingEventIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to disassociateByExternalAccountAndEventIds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async disassociateByExternalAccountAndEventIdsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to disassociateByMarketingEventId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async disassociateByMarketingEventIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to getAllByExternalAccountAndEventIds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllByExternalAccountAndEventIdsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseWithTotalPublicListNoPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalPublicListNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalPublicListNoPaging", ""
            ) as CollectionResponseWithTotalPublicListNoPaging;
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
            const body: CollectionResponseWithTotalPublicListNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalPublicListNoPaging", ""
            ) as CollectionResponseWithTotalPublicListNoPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllByMarketingEventId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllByMarketingEventIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseWithTotalPublicListNoPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalPublicListNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalPublicListNoPaging", ""
            ) as CollectionResponseWithTotalPublicListNoPaging;
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
            const body: CollectionResponseWithTotalPublicListNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalPublicListNoPaging", ""
            ) as CollectionResponseWithTotalPublicListNoPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
