// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';

/**
 * no description
 */
export class BasicApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Read an Object identified by `{feedbackSubmissionId}`. `{feedbackSubmissionId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param feedbackSubmissionId 
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public async getById(feedbackSubmissionId: string, properties?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'feedbackSubmissionId' is not null or undefined
        if (feedbackSubmissionId === null || feedbackSubmissionId === undefined) {
            throw new RequiredError('Required parameter feedbackSubmissionId was null or undefined when calling getById.');
        }






        // Path Params
        const localVarPath = '/crm/v3/objects/feedback_submissions/{feedbackSubmissionId}'
            .replace('{' + 'feedbackSubmissionId' + '}', encodeURIComponent(String(feedbackSubmissionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer.serialize(properties, "Array<string>", ""));
        }

        // Query Params
        if (associations !== undefined) {
            requestContext.setQueryParam("associations", ObjectSerializer.serialize(associations, "Array<string>", ""));
        }

        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }

        // Query Params
        if (idProperty !== undefined) {
            requestContext.setQueryParam("idProperty", ObjectSerializer.serialize(idProperty, "string", ""));
        }


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Read a page of feedback submissions. Control what is returned via the `properties` query param.
     * List
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     */
    public async getPage(limit?: number, after?: string, properties?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/crm/v3/objects/feedback_submissions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (properties !== undefined) {
            requestContext.setQueryParam("properties", ObjectSerializer.serialize(properties, "Array<string>", ""));
        }

        // Query Params
        if (associations !== undefined) {
            requestContext.setQueryParam("associations", ObjectSerializer.serialize(associations, "Array<string>", ""));
        }

        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class BasicApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getById(response: ResponseContext): Promise<SimplePublicObjectWithAssociations > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimplePublicObjectWithAssociations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimplePublicObjectWithAssociations", ""
            ) as SimplePublicObjectWithAssociations;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SimplePublicObjectWithAssociations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimplePublicObjectWithAssociations", ""
            ) as SimplePublicObjectWithAssociations;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPage(response: ResponseContext): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseSimplePublicObjectWithAssociationsForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseSimplePublicObjectWithAssociationsForwardPaging", ""
            ) as CollectionResponseSimplePublicObjectWithAssociationsForwardPaging;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionResponseSimplePublicObjectWithAssociationsForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseSimplePublicObjectWithAssociationsForwardPaging", ""
            ) as CollectionResponseSimplePublicObjectWithAssociationsForwardPaging;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
