// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchInputMarketingEventEmailSubscriber } from '../models/BatchInputMarketingEventEmailSubscriber';
import { BatchInputMarketingEventSubscriber } from '../models/BatchInputMarketingEventSubscriber';
import { BatchResponseSubscriberEmailResponse } from '../models/BatchResponseSubscriberEmailResponse';
import { BatchResponseSubscriberVidResponse } from '../models/BatchResponseSubscriberVidResponse';

/**
 * no description
 */
export class AttendanceSubscriberStateChangesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public async create(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("AttendanceSubscriberStateChangesApi", "create", "externalEventId");
        }


        // verify required parameter 'subscriberState' is not null or undefined
        if (subscriberState === null || subscriberState === undefined) {
            throw new RequiredError("AttendanceSubscriberStateChangesApi", "create", "subscriberState");
        }


        // verify required parameter 'batchInputMarketingEventSubscriber' is not null or undefined
        if (batchInputMarketingEventSubscriber === null || batchInputMarketingEventSubscriber === undefined) {
            throw new RequiredError("AttendanceSubscriberStateChangesApi", "create", "batchInputMarketingEventSubscriber");
        }



        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/create'
            .replace('{' + 'externalEventId' + '}', encodeURIComponent(String(externalEventId)))
            .replace('{' + 'subscriberState' + '}', encodeURIComponent(String(subscriberState)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (externalAccountId !== undefined) {
            requestContext.setQueryParam("externalAccountId", ObjectSerializer.serialize(externalAccountId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputMarketingEventSubscriber, "BatchInputMarketingEventSubscriber", ""),
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
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created.
     * Record
     * @param externalEventId The id of the marketing event
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
     * @param externalAccountId The account id associated with the marketing event
     */
    public async createByEmail(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("AttendanceSubscriberStateChangesApi", "createByEmail", "externalEventId");
        }


        // verify required parameter 'subscriberState' is not null or undefined
        if (subscriberState === null || subscriberState === undefined) {
            throw new RequiredError("AttendanceSubscriberStateChangesApi", "createByEmail", "subscriberState");
        }


        // verify required parameter 'batchInputMarketingEventEmailSubscriber' is not null or undefined
        if (batchInputMarketingEventEmailSubscriber === null || batchInputMarketingEventEmailSubscriber === undefined) {
            throw new RequiredError("AttendanceSubscriberStateChangesApi", "createByEmail", "batchInputMarketingEventEmailSubscriber");
        }



        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/email-create'
            .replace('{' + 'externalEventId' + '}', encodeURIComponent(String(externalEventId)))
            .replace('{' + 'subscriberState' + '}', encodeURIComponent(String(subscriberState)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (externalAccountId !== undefined) {
            requestContext.setQueryParam("externalAccountId", ObjectSerializer.serialize(externalAccountId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputMarketingEventEmailSubscriber, "BatchInputMarketingEventEmailSubscriber", ""),
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

export class AttendanceSubscriberStateChangesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseSubscriberVidResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseSubscriberVidResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSubscriberVidResponse", ""
            ) as BatchResponseSubscriberVidResponse;
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
            const body: BatchResponseSubscriberVidResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSubscriberVidResponse", ""
            ) as BatchResponseSubscriberVidResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createByEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createByEmailWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseSubscriberEmailResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponseSubscriberEmailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSubscriberEmailResponse", ""
            ) as BatchResponseSubscriberEmailResponse;
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
            const body: BatchResponseSubscriberEmailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseSubscriberEmailResponse", ""
            ) as BatchResponseSubscriberEmailResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
