// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponseDealToDealSplits } from '../models/BatchResponseDealToDealSplits';
import { BatchResponseDealToDealSplitsWithErrors } from '../models/BatchResponseDealToDealSplitsWithErrors';
import { PublicDealSplitsBatchCreateRequest } from '../models/PublicDealSplitsBatchCreateRequest';

/**
 * no description
 */
export class BatchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Read a batch of deal split objects by their associated deal object internal ID
     * @param batchInputPublicObjectId 
     */
    public async read(batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputPublicObjectId' is not null or undefined
        if (batchInputPublicObjectId === null || batchInputPublicObjectId === undefined) {
            throw new RequiredError("BatchApi", "read", "batchInputPublicObjectId");
        }


        // Path Params
        const localVarPath = '/crm/v3/objects/deals/splits/batch/read';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicObjectId, "BatchInputPublicObjectId", ""),
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
     * Create or replace deal splits for deals with the provided IDs. Deal split percentages for each deal must sum up to 1.0 (100%) and may have up to 8 decimal places
     * @param publicDealSplitsBatchCreateRequest 
     */
    public async upsert(publicDealSplitsBatchCreateRequest: PublicDealSplitsBatchCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'publicDealSplitsBatchCreateRequest' is not null or undefined
        if (publicDealSplitsBatchCreateRequest === null || publicDealSplitsBatchCreateRequest === undefined) {
            throw new RequiredError("BatchApi", "upsert", "publicDealSplitsBatchCreateRequest");
        }


        // Path Params
        const localVarPath = '/crm/v3/objects/deals/splits/batch/upsert';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(publicDealSplitsBatchCreateRequest, "PublicDealSplitsBatchCreateRequest", ""),
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
     * @params response Response returned by the server for a request to read
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async readWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseDealToDealSplits = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseDealToDealSplits", ""
            ) as BatchResponseDealToDealSplits;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseDealToDealSplitsWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseDealToDealSplitsWithErrors", ""
            ) as BatchResponseDealToDealSplitsWithErrors;
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
            const body: BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors", ""
            ) as BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors;
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
     public async upsertWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseDealToDealSplits = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseDealToDealSplits", ""
            ) as BatchResponseDealToDealSplits;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseDealToDealSplitsWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseDealToDealSplitsWithErrors", ""
            ) as BatchResponseDealToDealSplitsWithErrors;
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
            const body: BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors", ""
            ) as BatchResponseDealToDealSplits | BatchResponseDealToDealSplitsWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
