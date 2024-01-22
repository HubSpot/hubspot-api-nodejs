// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CollectionResponsePublicBusinessUnitNoPaging } from '../models/CollectionResponsePublicBusinessUnitNoPaging';

/**
 * no description
 */
export class BusinessUnitApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
     * Get Business Units for a user
     * @param userId Identifier of user to retrieve.
     * @param properties The names of properties to optionally include in the response body. The only valid value is &#x60;logoMetadata&#x60;.
     * @param name The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.
     */
    public async getByUserID(userId: string, properties?: Array<string>, name?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("BusinessUnitApi", "getByUserID", "userId");
        }




        // Path Params
        const localVarPath = '/business-units/v3/business-units/user/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer.serialize(properties, "Array<string>", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "Array<string>", ""));
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

}

export class BusinessUnitApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getByUserID
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByUserIDWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponsePublicBusinessUnitNoPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponsePublicBusinessUnitNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicBusinessUnitNoPaging", ""
            ) as CollectionResponsePublicBusinessUnitNoPaging;
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
            const body: CollectionResponsePublicBusinessUnitNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicBusinessUnitNoPaging", ""
            ) as CollectionResponsePublicBusinessUnitNoPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
