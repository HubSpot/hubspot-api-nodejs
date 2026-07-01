// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchInputRecordIdInput } from '../models/BatchInputRecordIdInput';
import { BatchResponseRecordIdWithMemberships } from '../models/BatchResponseRecordIdWithMemberships';
import { BatchResponseRecordIdWithMembershipsWithErrors } from '../models/BatchResponseRecordIdWithMembershipsWithErrors';

/**
 * no description
 */
export class BatchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param batchInputRecordIdInput 
     */
    public async crmV3ListsRecordsMembershipsBatchRead(batchInputRecordIdInput: BatchInputRecordIdInput, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputRecordIdInput' is not null or undefined
        if (batchInputRecordIdInput === null || batchInputRecordIdInput === undefined) {
            throw new RequiredError("BatchApi", "crmV3ListsRecordsMembershipsBatchRead", "batchInputRecordIdInput");
        }


        // Path Params
        const localVarPath = '/crm/v3/lists/records/memberships/batch/read';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputRecordIdInput, "BatchInputRecordIdInput", ""),
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

export class BatchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to crmV3ListsRecordsMembershipsBatchRead
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async crmV3ListsRecordsMembershipsBatchReadWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseRecordIdWithMemberships = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseRecordIdWithMemberships", ""
            ) as BatchResponseRecordIdWithMemberships;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseRecordIdWithMembershipsWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseRecordIdWithMembershipsWithErrors", ""
            ) as BatchResponseRecordIdWithMembershipsWithErrors;
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
            const body: BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships", ""
            ) as BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
