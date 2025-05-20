// TODO: better import syntax?
import {BaseAPIRequestFactory} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CollectionResponseExternalUnifiedEvent } from '../models/CollectionResponseExternalUnifiedEvent';
import { VisibleExternalEventTypeNames } from '../models/VisibleExternalEventTypeNames';

/**
 * no description
 */
export class EventsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve instances of event completion data. For example, retrieve all event completions associated with a specific contact.
     * Retrieve event data
     * @param objectType The type of CRM object to filter event instances on (e.g., &#x60;contact&#x60;). To retrieve event data for a specific CRM record, include the additional &#x60;objectId&#x60; query parameter (below). 
     * @param eventType The event type name. You can retrieve available event types using the [event types endpoint](#get-%2Fevents%2Fv3%2Fevents%2Fevent-types).
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     * @param sort Sort direction based on the timestamp of the event instance, &#x60;ASCENDING&#x60; or &#x60;DESCENDING&#x60;.
     * @param occurredAfter Filter for event data that occurred after a specific datetime.
     * @param occurredBefore Filter for event data that occurred before a specific datetime.
     * @param objectId The ID of the CRM Object to filter event instances on. When including this parameter, you must also include the &#x60;objectType&#x60; parameter.
     * @param objectPropertyPropname Instead of retrieving event data for a specific object by its ID, you can specify a unique identifier property. For contacts, you can use the &#x60;email&#x60; property. (e.g., &#x60;objectProperty.email&#x3D;name@domain.com&#x60;).
     * @param propertyPropname Filter for event completions that contain a specific value for an event property (e.g., &#x60;property.hs_city&#x3D;portland&#x60;). For properties values with spaces, replaces spaces with &#x60;%20&#x60; or &#x60;+&#x60; (e.g., &#x60;property.hs_city&#x3D;new+york&#x60;).
     * @param id ID of an event instance. IDs are 1:1 with event instances. If you provide this filter and additional filters, the other filters must match the values on the event instance to yield results.
     */
    public async getPage(objectType?: string, eventType?: string, after?: string, before?: string, limit?: number, sort?: Array<string>, occurredAfter?: Date, occurredBefore?: Date, objectId?: number, objectPropertyPropname?: any, propertyPropname?: any, id?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/events/v3/events/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (objectType !== undefined) {
            requestContext.setQueryParam("objectType", ObjectSerializer.serialize(objectType, "string", ""));
        }

        // Query Params
        if (eventType !== undefined) {
            requestContext.setQueryParam("eventType", ObjectSerializer.serialize(eventType, "string", ""));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (sort !== undefined) {
            const serializedParams = ObjectSerializer.serialize(sort, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("sort", serializedParam);
            }
        }

        // Query Params
        if (occurredAfter !== undefined) {
            requestContext.setQueryParam("occurredAfter", ObjectSerializer.serialize(occurredAfter, "Date", "date-time"));
        }

        // Query Params
        if (occurredBefore !== undefined) {
            requestContext.setQueryParam("occurredBefore", ObjectSerializer.serialize(occurredBefore, "Date", "date-time"));
        }

        // Query Params
        if (objectId !== undefined) {
            requestContext.setQueryParam("objectId", ObjectSerializer.serialize(objectId, "number", "int64"));
        }

        // Query Params
        if (objectPropertyPropname !== undefined) {
            const serializedParams = ObjectSerializer.serialize(objectPropertyPropname, "any", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (propertyPropname !== undefined) {
            const serializedParams = ObjectSerializer.serialize(propertyPropname, "any", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (id !== undefined) {
            const serializedParams = ObjectSerializer.serialize(id, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("id", serializedParam);
            }
        }


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
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.  Note: the `get_types` method is only supported in the Python SDK version `12.0.0-beta.1` or later. 
     * Event Types
     */
    public async getTypes(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/events/v3/events/event-types';

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

export class EventsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseExternalUnifiedEvent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseExternalUnifiedEvent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseExternalUnifiedEvent", ""
            ) as CollectionResponseExternalUnifiedEvent;
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
            const body: CollectionResponseExternalUnifiedEvent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseExternalUnifiedEvent", ""
            ) as CollectionResponseExternalUnifiedEvent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTypesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VisibleExternalEventTypeNames >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VisibleExternalEventTypeNames = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VisibleExternalEventTypeNames", ""
            ) as VisibleExternalEventTypeNames;
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
            const body: VisibleExternalEventTypeNames = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VisibleExternalEventTypeNames", ""
            ) as VisibleExternalEventTypeNames;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
