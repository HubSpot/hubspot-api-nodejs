// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CardMigrateViewsRequest } from '../models/CardMigrateViewsRequest';
import { CardMigrateViewsResponse } from '../models/CardMigrateViewsResponse';

/**
 * no description
 */
export class AdvancedApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Swaps a Legacy CRM Card with an App Card in views. Reference the \"Migrate a legacy CRM card to an app card\" docs for more information
     * Migrate Card In Views
     * @param appId The id of the app containing the Legacy CRM Card
     * @param cardMigrateViewsRequest 
     */
    public async crmV3ExtensionsCardsDevAppIdViewsMigrate(appId: number, cardMigrateViewsRequest: CardMigrateViewsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("AdvancedApi", "crmV3ExtensionsCardsDevAppIdViewsMigrate", "appId");
        }


        // verify required parameter 'cardMigrateViewsRequest' is not null or undefined
        if (cardMigrateViewsRequest === null || cardMigrateViewsRequest === undefined) {
            throw new RequiredError("AdvancedApi", "crmV3ExtensionsCardsDevAppIdViewsMigrate", "cardMigrateViewsRequest");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/cards-dev/{appId}/views/migrate'
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
            ObjectSerializer.serialize(cardMigrateViewsRequest, "CardMigrateViewsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class AdvancedApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to crmV3ExtensionsCardsDevAppIdViewsMigrate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async crmV3ExtensionsCardsDevAppIdViewsMigrateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CardMigrateViewsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CardMigrateViewsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CardMigrateViewsResponse", ""
            ) as CardMigrateViewsResponse;
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
            const body: CardMigrateViewsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CardMigrateViewsResponse", ""
            ) as CardMigrateViewsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
