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

/**
 * no description
 */
export class SubscriberStateChangesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param batchInputMarketingEventEmailSubscriber 
     */
    public async upsertByContactEmail(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("SubscriberStateChangesApi", "upsertByContactEmail", "externalEventId");
        }


        // verify required parameter 'subscriberState' is not null or undefined
        if (subscriberState === null || subscriberState === undefined) {
            throw new RequiredError("SubscriberStateChangesApi", "upsertByContactEmail", "subscriberState");
        }


        // verify required parameter 'externalAccountId' is not null or undefined
        if (externalAccountId === null || externalAccountId === undefined) {
            throw new RequiredError("SubscriberStateChangesApi", "upsertByContactEmail", "externalAccountId");
        }


        // verify required parameter 'batchInputMarketingEventEmailSubscriber' is not null or undefined
        if (batchInputMarketingEventEmailSubscriber === null || batchInputMarketingEventEmailSubscriber === undefined) {
            throw new RequiredError("SubscriberStateChangesApi", "upsertByContactEmail", "batchInputMarketingEventEmailSubscriber");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/events/{externalEventId}/{subscriberState}/email-upsert'
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
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param batchInputMarketingEventSubscriber 
     */
    public async upsertByContactId(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'externalEventId' is not null or undefined
        if (externalEventId === null || externalEventId === undefined) {
            throw new RequiredError("SubscriberStateChangesApi", "upsertByContactId", "externalEventId");
        }


        // verify required parameter 'subscriberState' is not null or undefined
        if (subscriberState === null || subscriberState === undefined) {
            throw new RequiredError("SubscriberStateChangesApi", "upsertByContactId", "subscriberState");
        }


        // verify required parameter 'externalAccountId' is not null or undefined
        if (externalAccountId === null || externalAccountId === undefined) {
            throw new RequiredError("SubscriberStateChangesApi", "upsertByContactId", "externalAccountId");
        }


        // verify required parameter 'batchInputMarketingEventSubscriber' is not null or undefined
        if (batchInputMarketingEventSubscriber === null || batchInputMarketingEventSubscriber === undefined) {
            throw new RequiredError("SubscriberStateChangesApi", "upsertByContactId", "batchInputMarketingEventSubscriber");
        }


        // Path Params
        const localVarPath = '/marketing/v3/marketing-events/events/{externalEventId}/{subscriberState}/upsert'
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
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SubscriberStateChangesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to upsertByContactEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async upsertByContactEmailWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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
     * @params response Response returned by the server for a request to upsertByContactId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async upsertByContactIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo< void>> {
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

}
