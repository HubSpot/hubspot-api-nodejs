// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchInputPublicAssociationDefinitionConfigurationCreateRequest } from '../models/BatchInputPublicAssociationDefinitionConfigurationCreateRequest';
import { BatchInputPublicAssociationDefinitionConfigurationUpdateRequest } from '../models/BatchInputPublicAssociationDefinitionConfigurationUpdateRequest';
import { BatchInputPublicAssociationSpec } from '../models/BatchInputPublicAssociationSpec';
import { BatchResponsePublicAssociationDefinitionConfigurationUpdateResult } from '../models/BatchResponsePublicAssociationDefinitionConfigurationUpdateResult';
import { BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors } from '../models/BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors';
import { BatchResponsePublicAssociationDefinitionUserConfiguration } from '../models/BatchResponsePublicAssociationDefinitionUserConfiguration';
import { BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors } from '../models/BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors';
import { CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging';

/**
 * no description
 */
export class LimitsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Batch configure association limits between two object types.
     * Configure association limits
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationDefinitionConfigurationCreateRequest 
     */
    public async batchCreate(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationCreateRequest: BatchInputPublicAssociationDefinitionConfigurationCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError("LimitsApi", "batchCreate", "fromObjectType");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("LimitsApi", "batchCreate", "toObjectType");
        }


        // verify required parameter 'batchInputPublicAssociationDefinitionConfigurationCreateRequest' is not null or undefined
        if (batchInputPublicAssociationDefinitionConfigurationCreateRequest === null || batchInputPublicAssociationDefinitionConfigurationCreateRequest === undefined) {
            throw new RequiredError("LimitsApi", "batchCreate", "batchInputPublicAssociationDefinitionConfigurationCreateRequest");
        }


        // Path Params
        const localVarPath = '/crm/associations/v4/definitions/configurations/{fromObjectType}/{toObjectType}/batch/create'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicAssociationDefinitionConfigurationCreateRequest, "BatchInputPublicAssociationDefinitionConfigurationCreateRequest", ""),
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

    /**
     * Batch delete limits that have been defined for association types between two object types.
     * Remove association limits
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationSpec 
     */
    public async batchRemove(fromObjectType: string, toObjectType: string, batchInputPublicAssociationSpec: BatchInputPublicAssociationSpec, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError("LimitsApi", "batchRemove", "fromObjectType");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("LimitsApi", "batchRemove", "toObjectType");
        }


        // verify required parameter 'batchInputPublicAssociationSpec' is not null or undefined
        if (batchInputPublicAssociationSpec === null || batchInputPublicAssociationSpec === undefined) {
            throw new RequiredError("LimitsApi", "batchRemove", "batchInputPublicAssociationSpec");
        }


        // Path Params
        const localVarPath = '/crm/associations/v4/definitions/configurations/{fromObjectType}/{toObjectType}/batch/purge'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicAssociationSpec, "BatchInputPublicAssociationSpec", ""),
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

    /**
     * Batch update association limits that have been configured between two object types.
     * Update association limits
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationDefinitionConfigurationUpdateRequest 
     */
    public async batchUpdate(fromObjectType: string, toObjectType: string, batchInputPublicAssociationDefinitionConfigurationUpdateRequest: BatchInputPublicAssociationDefinitionConfigurationUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError("LimitsApi", "batchUpdate", "fromObjectType");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("LimitsApi", "batchUpdate", "toObjectType");
        }


        // verify required parameter 'batchInputPublicAssociationDefinitionConfigurationUpdateRequest' is not null or undefined
        if (batchInputPublicAssociationDefinitionConfigurationUpdateRequest === null || batchInputPublicAssociationDefinitionConfigurationUpdateRequest === undefined) {
            throw new RequiredError("LimitsApi", "batchUpdate", "batchInputPublicAssociationDefinitionConfigurationUpdateRequest");
        }


        // Path Params
        const localVarPath = '/crm/associations/v4/definitions/configurations/{fromObjectType}/{toObjectType}/batch/update'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicAssociationDefinitionConfigurationUpdateRequest, "BatchInputPublicAssociationDefinitionConfigurationUpdateRequest", ""),
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

    /**
     * Retrieve all configured association limits between objects, which include details about how different CRM object types are associated with each other.
     * Retrieve all association limits
     */
    public async getPage(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/crm/associations/v4/definitions/configurations/all';

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
     * Retrieve the configuration details for associations between two specified CRM object types. Use this endpoint to understand limits that have been set for specific association types.
     * Retrieve association limits
     * @param fromObjectType 
     * @param toObjectType 
     */
    public async getPageBetweenTwoObjectTypes(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError("LimitsApi", "getPageBetweenTwoObjectTypes", "fromObjectType");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("LimitsApi", "getPageBetweenTwoObjectTypes", "toObjectType");
        }


        // Path Params
        const localVarPath = '/crm/associations/v4/definitions/configurations/{fromObjectType}/{toObjectType}'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

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

export class LimitsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async batchCreateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BatchResponsePublicAssociationDefinitionUserConfiguration = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationDefinitionUserConfiguration", ""
            ) as BatchResponsePublicAssociationDefinitionUserConfiguration;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors", ""
            ) as BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors;
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
            const body: BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration", ""
            ) as BatchResponsePublicAssociationDefinitionUserConfigurationWithErrors | BatchResponsePublicAssociationDefinitionUserConfiguration;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to batchRemove
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async batchRemoveWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to batchUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async batchUpdateWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponsePublicAssociationDefinitionConfigurationUpdateResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationDefinitionConfigurationUpdateResult", ""
            ) as BatchResponsePublicAssociationDefinitionConfigurationUpdateResult;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors", ""
            ) as BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors;
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
            const body: BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors", ""
            ) as BatchResponsePublicAssociationDefinitionConfigurationUpdateResult | BatchResponsePublicAssociationDefinitionConfigurationUpdateResultWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging", ""
            ) as CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging;
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
            const body: CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging", ""
            ) as CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPageBetweenTwoObjectTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPageBetweenTwoObjectTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging", ""
            ) as CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging;
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
            const body: CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging", ""
            ) as CollectionResponsePublicAssociationDefinitionUserConfigurationNoPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
