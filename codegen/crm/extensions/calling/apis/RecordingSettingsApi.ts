// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { RecordingSettingsPatchRequest } from '../models/RecordingSettingsPatchRequest';
import { RecordingSettingsRequest } from '../models/RecordingSettingsRequest';
import { RecordingSettingsResponse } from '../models/RecordingSettingsResponse';

/**
 * no description
 */
export class RecordingSettingsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param appId 
     */
    public async getUrlFormat(appId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("RecordingSettingsApi", "getUrlFormat", "appId");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/calling/{appId}/settings/recording'
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
     * @param appId 
     * @param recordingSettingsRequest 
     */
    public async registerUrlFormat(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("RecordingSettingsApi", "registerUrlFormat", "appId");
        }


        // verify required parameter 'recordingSettingsRequest' is not null or undefined
        if (recordingSettingsRequest === null || recordingSettingsRequest === undefined) {
            throw new RequiredError("RecordingSettingsApi", "registerUrlFormat", "recordingSettingsRequest");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/calling/{appId}/settings/recording'
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
            ObjectSerializer.serialize(recordingSettingsRequest, "RecordingSettingsRequest", ""),
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
     * @param appId 
     * @param recordingSettingsPatchRequest 
     */
    public async updateUrlFormat(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError("RecordingSettingsApi", "updateUrlFormat", "appId");
        }


        // verify required parameter 'recordingSettingsPatchRequest' is not null or undefined
        if (recordingSettingsPatchRequest === null || recordingSettingsPatchRequest === undefined) {
            throw new RequiredError("RecordingSettingsApi", "updateUrlFormat", "recordingSettingsPatchRequest");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/calling/{appId}/settings/recording'
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
            ObjectSerializer.serialize(recordingSettingsPatchRequest, "RecordingSettingsPatchRequest", ""),
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

export class RecordingSettingsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUrlFormat
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUrlFormatWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecordingSettingsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RecordingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecordingSettingsResponse", ""
            ) as RecordingSettingsResponse;
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
            const body: RecordingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecordingSettingsResponse", ""
            ) as RecordingSettingsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to registerUrlFormat
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async registerUrlFormatWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecordingSettingsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RecordingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecordingSettingsResponse", ""
            ) as RecordingSettingsResponse;
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
            const body: RecordingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecordingSettingsResponse", ""
            ) as RecordingSettingsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUrlFormat
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateUrlFormatWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RecordingSettingsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RecordingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecordingSettingsResponse", ""
            ) as RecordingSettingsResponse;
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
            const body: RecordingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RecordingSettingsResponse", ""
            ) as RecordingSettingsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
