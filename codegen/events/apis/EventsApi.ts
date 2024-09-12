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
     * This endpoint allows you to query for event instances using filter criteria. 
     * Event Instance Query
     * @param objectType The CRM Object type name to filter event instances on. Optionally, you can also provide an objectId in another param to filter to a specific CRM Object instance.
     * @param eventType The event type name. A list of available event type names can be obtained from another API call.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     * @param sort Sort direction based on the timestamp of the event instance, ASCENDING or DESCENDING.
     * @param occurredAfter 
     * @param occurredBefore 
     * @param objectId The ID of the CRM Object to filter event instances on. If filtering on objectId, you must also provide an objectType.
     * @param objectPropertyPropname 
     * @param propertyPropname 
     * @param id ID of an event instance. IDs are 1:1 with event instances. If you. provide this filter and additional filters, the other filters must match the values on the event instance to yield results.
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
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
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
            requestContext.setQueryParam("objectProperty.{propname}", ObjectSerializer.serialize(objectPropertyPropname, "any", ""));
        }

        // Query Params
        if (propertyPropname !== undefined) {
            requestContext.setQueryParam("property.{propname}", ObjectSerializer.serialize(propertyPropname, "any", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "Array<string>", ""));
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

    /**
     * This endpoint returns a list of event type names which are visible to you. You may use these event type names to query the API for specific event instances of a desired type.
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
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
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
