// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchInputMarketingEventCreateRequestParams } from '../models/BatchInputMarketingEventCreateRequestParams';
import { BatchInputMarketingEventExternalUniqueIdentifier } from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
import { BatchInputMarketingEventPublicObjectIdDeleteRequest } from '../models/BatchInputMarketingEventPublicObjectIdDeleteRequest';
import { BatchInputMarketingEventPublicUpdateRequestFullV2 } from '../models/BatchInputMarketingEventPublicUpdateRequestFullV2';
import { BatchResponseMarketingEventPublicDefaultResponse } from '../models/BatchResponseMarketingEventPublicDefaultResponse';
import { BatchResponseMarketingEventPublicDefaultResponseV2 } from '../models/BatchResponseMarketingEventPublicDefaultResponseV2';
import { BatchResponseMarketingEventPublicDefaultResponseV2WithErrors } from '../models/BatchResponseMarketingEventPublicDefaultResponseV2WithErrors';

/**
 * no description
 */
export class BatchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Deletes multiple Marketing Events based on externalAccountId, externalEventId, and appId.  Only Marketing Events created by the same apps will be deleted; events from other apps cannot be removed by this endpoint. 
     * Delete Multiple Marketing Events by External Ids
     * @param batchInputMarketingEventExternalUniqueIdentifier 
     */
    public async archive(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputMarketingEventExternalUniqueIdentifier' is not null or undefined
        if (batchInputMarketingEventExternalUniqueIdentifier === null || batchInputMarketingEventExternalUniqueIdentifier === undefined) {
            throw new RequiredError("BatchApi", "archive", "batchInputMarketingEventExternalUniqueIdentifier");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/events/delete';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputMarketingEventExternalUniqueIdentifier, "BatchInputMarketingEventExternalUniqueIdentifier", ""),
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
     * Deletes multiple Marketing Events from the portal based on their objectId, if they exist.  Responses: 204: Returned if all specified Marketing Events were successfully deleted. 207: Returned if some objectIds did not correspond to any existing Marketing Events.
     * Delete Multiple Marketing Events by ObjectId
     * @param batchInputMarketingEventPublicObjectIdDeleteRequest 
     */
    public async archiveByObjectId(batchInputMarketingEventPublicObjectIdDeleteRequest: BatchInputMarketingEventPublicObjectIdDeleteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputMarketingEventPublicObjectIdDeleteRequest' is not null or undefined
        if (batchInputMarketingEventPublicObjectIdDeleteRequest === null || batchInputMarketingEventPublicObjectIdDeleteRequest === undefined) {
            throw new RequiredError("BatchApi", "archiveByObjectId", "batchInputMarketingEventPublicObjectIdDeleteRequest");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/batch/archive';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputMarketingEventPublicObjectIdDeleteRequest, "BatchInputMarketingEventPublicObjectIdDeleteRequest", ""),
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
     * Updates multiple Marketing Events on the portal based on their objectId, if they exist.
     * Update Multiple Marketing Events by ObjectId
     * @param batchInputMarketingEventPublicUpdateRequestFullV2 
     */
    public async updateByObjectId(batchInputMarketingEventPublicUpdateRequestFullV2: BatchInputMarketingEventPublicUpdateRequestFullV2, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputMarketingEventPublicUpdateRequestFullV2' is not null or undefined
        if (batchInputMarketingEventPublicUpdateRequestFullV2 === null || batchInputMarketingEventPublicUpdateRequestFullV2 === undefined) {
            throw new RequiredError("BatchApi", "updateByObjectId", "batchInputMarketingEventPublicUpdateRequestFullV2");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/batch/update';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputMarketingEventPublicUpdateRequestFullV2, "BatchInputMarketingEventPublicUpdateRequestFullV2", ""),
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
     * Upserts multiple Marketing Events. If a Marketing Event with the specified ID already exists, it will be updated; otherwise, a new event will be created.  Only Marketing Events originally created by the same app can be updated.
     * Create or Update Multiple Marketing Events
     * @param batchInputMarketingEventCreateRequestParams 
     */
    public async upsert(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputMarketingEventCreateRequestParams' is not null or undefined
        if (batchInputMarketingEventCreateRequestParams === null || batchInputMarketingEventCreateRequestParams === undefined) {
            throw new RequiredError("BatchApi", "upsert", "batchInputMarketingEventCreateRequestParams");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/events/upsert';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputMarketingEventCreateRequestParams, "BatchInputMarketingEventCreateRequestParams", ""),
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

export class BatchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archiveByObjectId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveByObjectIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to updateByObjectId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateByObjectIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseMarketingEventPublicDefaultResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseMarketingEventPublicDefaultResponseV2", ""
            ) as BatchResponseMarketingEventPublicDefaultResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseMarketingEventPublicDefaultResponseV2WithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseMarketingEventPublicDefaultResponseV2WithErrors", ""
            ) as BatchResponseMarketingEventPublicDefaultResponseV2WithErrors;
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
            const body: BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2", ""
            ) as BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsert
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async upsertWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseMarketingEventPublicDefaultResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseMarketingEventPublicDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseMarketingEventPublicDefaultResponse", ""
            ) as BatchResponseMarketingEventPublicDefaultResponse;
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
            const body: BatchResponseMarketingEventPublicDefaultResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseMarketingEventPublicDefaultResponse", ""
            ) as BatchResponseMarketingEventPublicDefaultResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
