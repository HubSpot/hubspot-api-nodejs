// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { PublicCardListResponse } from '../models/PublicCardListResponse';
import { PublicCardResponse } from '../models/PublicCardResponse';

/**
 * no description
 */
export class CardsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param cardId The ID of the card to delete.
     * @param appId The ID of the target app.
     */
    public async archive(cardId: string, appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new RequiredError("CardsApi", "archive", "cardId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("CardsApi", "archive", "appId");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/cards-dev/{appId}/{cardId}'
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)))
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
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param appId The ID of the target app.
     * @param cardCreateRequest The new card definition.
     */
    public async create(appId: number, cardCreateRequest: CardCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("CardsApi", "create", "appId");
        }


        // verify required parameter 'cardCreateRequest' is not null or undefined
        if (cardCreateRequest === null || cardCreateRequest === undefined) {
            throw new RequiredError("CardsApi", "create", "cardCreateRequest");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/cards-dev/{appId}'
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
            ObjectSerializer.serialize(cardCreateRequest, "CardCreateRequest", ""),
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
     * Returns a list of cards for a given app.
     * Get all cards
     * @param appId The ID of the target app.
     */
    public async getAll(appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("CardsApi", "getAll", "appId");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/cards-dev/{appId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param cardId The ID of the target card.
     * @param appId The ID of the target app.
     */
    public async getById(cardId: string, appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new RequiredError("CardsApi", "getById", "cardId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("CardsApi", "getById", "appId");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/cards-dev/{appId}/{cardId}'
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Update a card definition with new details.
     * Update a card
     * @param cardId The ID of the card to update.
     * @param appId The ID of the target app.
     * @param cardPatchRequest Card definition fields to be updated.
     */
    public async update(cardId: string, appId: number, cardPatchRequest: CardPatchRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'cardId' is not null or undefined
        if (cardId === null || cardId === undefined) {
            throw new RequiredError("CardsApi", "update", "cardId");
        }


        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("CardsApi", "update", "appId");
        }


        // verify required parameter 'cardPatchRequest' is not null or undefined
        if (cardPatchRequest === null || cardPatchRequest === undefined) {
            throw new RequiredError("CardsApi", "update", "cardPatchRequest");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/cards-dev/{appId}/{cardId}'
            .replace('{' + 'cardId' + '}', encodeURIComponent(String(cardId)))
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(cardPatchRequest, "CardPatchRequest", ""),
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

export class CardsApiResponseProcessor {

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
     public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicCardResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: PublicCardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicCardResponse", ""
            ) as PublicCardResponse;
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
            const body: PublicCardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicCardResponse", ""
            ) as PublicCardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicCardListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicCardListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicCardListResponse", ""
            ) as PublicCardListResponse;
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
            const body: PublicCardListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicCardListResponse", ""
            ) as PublicCardListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicCardResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicCardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicCardResponse", ""
            ) as PublicCardResponse;
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
            const body: PublicCardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicCardResponse", ""
            ) as PublicCardResponse;
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
     public async updateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicCardResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicCardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicCardResponse", ""
            ) as PublicCardResponse;
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
            const body: PublicCardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicCardResponse", ""
            ) as PublicCardResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
