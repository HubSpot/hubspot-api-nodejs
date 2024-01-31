// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchInputTimelineEvent } from '../models/BatchInputTimelineEvent';
import { BatchResponseTimelineEventResponse } from '../models/BatchResponseTimelineEventResponse';
import { BatchResponseTimelineEventResponseWithErrors } from '../models/BatchResponseTimelineEventResponseWithErrors';
import { EventDetail } from '../models/EventDetail';
import { TimelineEvent } from '../models/TimelineEvent';
import { TimelineEventResponse } from '../models/TimelineEventResponse';

/**
 * no description
 */
export class EventsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates an instance of a timeline event based on an event template. Once created, this event is immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Create a single event
     * @param timelineEvent The timeline event definition.
     */
    public async create(timelineEvent: TimelineEvent, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'timelineEvent' is not null or undefined
        if (timelineEvent === null || timelineEvent === undefined) {
            throw new RequiredError("EventsApi", "create", "timelineEvent");
        }


        // Path Params
        const localVarPath = '/crm/v3/timeline/events';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(timelineEvent, "TimelineEvent", ""),
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
     * Creates multiple instances of timeline events based on an event template. Once created, these event are immutable on the object timeline and cannot be modified. If the event template was configured to update object properties via `objectPropertyName`, this call will also attempt to updates those properties, or add them if they don\'t exist.
     * Creates multiple events
     * @param batchInputTimelineEvent The timeline event definition.
     */
    public async createBatch(batchInputTimelineEvent: BatchInputTimelineEvent, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'batchInputTimelineEvent' is not null or undefined
        if (batchInputTimelineEvent === null || batchInputTimelineEvent === undefined) {
            throw new RequiredError("EventsApi", "createBatch", "batchInputTimelineEvent");
        }


        // Path Params
        const localVarPath = '/crm/v3/timeline/events/batch/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputTimelineEvent, "BatchInputTimelineEvent", ""),
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
     * This returns the previously created event. It contains all existing info for the event, but not necessarily the CRM object.
     * Gets the event
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     */
    public async getById(eventTemplateId: string, eventId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new RequiredError("EventsApi", "getById", "eventTemplateId");
        }


        // verify required parameter 'eventId' is not null or undefined
        if (eventId === null || eventId === undefined) {
            throw new RequiredError("EventsApi", "getById", "eventId");
        }


        // Path Params
        const localVarPath = '/crm/v3/timeline/events/{eventTemplateId}/{eventId}'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'eventId' + '}', encodeURIComponent(String(eventId)));

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

    /**
     * This will take the `detailTemplate` from the event template and return an object rendering the specified event. If the template references `extraData` that isn\'t found in the event, it will be ignored and we\'ll render without it.
     * Gets the detailTemplate as rendered
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     */
    public async getDetailById(eventTemplateId: string, eventId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new RequiredError("EventsApi", "getDetailById", "eventTemplateId");
        }


        // verify required parameter 'eventId' is not null or undefined
        if (eventId === null || eventId === undefined) {
            throw new RequiredError("EventsApi", "getDetailById", "eventId");
        }


        // Path Params
        const localVarPath = '/crm/v3/timeline/events/{eventTemplateId}/{eventId}/detail'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'eventId' + '}', encodeURIComponent(String(eventId)));

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

    /**
     * This will take either the `headerTemplate` or `detailTemplate` from the event template and render for the specified event as HTML. If the template references `extraData` that isn\'t found in the event, it will be ignored and we\'ll render without it.
     * Renders the header or detail as HTML
     * @param eventTemplateId The event template ID.
     * @param eventId The event ID.
     * @param detail Set to \&#39;true\&#39;, we want to render the &#x60;detailTemplate&#x60; instead of the &#x60;headerTemplate&#x60;.
     */
    public async getRenderById(eventTemplateId: string, eventId: string, detail?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'eventTemplateId' is not null or undefined
        if (eventTemplateId === null || eventTemplateId === undefined) {
            throw new RequiredError("EventsApi", "getRenderById", "eventTemplateId");
        }


        // verify required parameter 'eventId' is not null or undefined
        if (eventId === null || eventId === undefined) {
            throw new RequiredError("EventsApi", "getRenderById", "eventId");
        }



        // Path Params
        const localVarPath = '/crm/v3/timeline/events/{eventTemplateId}/{eventId}/render'
            .replace('{' + 'eventTemplateId' + '}', encodeURIComponent(String(eventTemplateId)))
            .replace('{' + 'eventId' + '}', encodeURIComponent(String(eventId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (detail !== undefined) {
            requestContext.setQueryParam("detail", ObjectSerializer.serialize(detail, "boolean", ""));
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

export class EventsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimelineEventResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: TimelineEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineEventResponse", ""
            ) as TimelineEventResponse;
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
            const body: TimelineEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineEventResponse", ""
            ) as TimelineEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BatchResponseTimelineEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseTimelineEventResponse", ""
            ) as BatchResponseTimelineEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseTimelineEventResponseWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseTimelineEventResponseWithErrors", ""
            ) as BatchResponseTimelineEventResponseWithErrors;
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
            const body: BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors", ""
            ) as BatchResponseTimelineEventResponse | void | BatchResponseTimelineEventResponseWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimelineEventResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimelineEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineEventResponse", ""
            ) as TimelineEventResponse;
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
            const body: TimelineEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineEventResponse", ""
            ) as TimelineEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDetailById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDetailByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventDetail >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EventDetail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EventDetail", ""
            ) as EventDetail;
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
            const body: EventDetail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EventDetail", ""
            ) as EventDetail;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRenderById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRenderByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<string >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
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
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
