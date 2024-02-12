// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AssociationSpec } from '../models/AssociationSpec';
import { BatchResponsePublicDefaultAssociation } from '../models/BatchResponsePublicDefaultAssociation';
import { CollectionResponseMultiAssociatedObjectWithLabelForwardPaging } from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';

/**
 * no description
 */
export class BasicApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * deletes all associations between two records.
     * Delete
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param toObjectId 
     */
    public async archive(objectType: string, objectId: string, toObjectType: string, toObjectId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("BasicApi", "archive", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("BasicApi", "archive", "objectId");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("BasicApi", "archive", "toObjectType");
        }


        // verify required parameter 'toObjectId' is not null or undefined
        if (toObjectId === null || toObjectId === undefined) {
            throw new RequiredError("BasicApi", "archive", "toObjectId");
        }


        // Path Params
        const localVarPath = '/crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'objectId' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)))
            .replace('{' + 'toObjectId' + '}', encodeURIComponent(String(toObjectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Set association labels between two records.
     * Create
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param toObjectId 
     * @param associationSpec 
     */
    public async create(objectType: string, objectId: string, toObjectType: string, toObjectId: string, associationSpec: Array<AssociationSpec>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("BasicApi", "create", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("BasicApi", "create", "objectId");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("BasicApi", "create", "toObjectType");
        }


        // verify required parameter 'toObjectId' is not null or undefined
        if (toObjectId === null || toObjectId === undefined) {
            throw new RequiredError("BasicApi", "create", "toObjectId");
        }


        // verify required parameter 'associationSpec' is not null or undefined
        if (associationSpec === null || associationSpec === undefined) {
            throw new RequiredError("BasicApi", "create", "associationSpec");
        }


        // Path Params
        const localVarPath = '/crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'objectId' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)))
            .replace('{' + 'toObjectId' + '}', encodeURIComponent(String(toObjectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(associationSpec, "Array<AssociationSpec>", ""),
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
     * Create the default (most generic) association type between two object types
     * Create Default
     * @param fromObjectType 
     * @param fromObjectId 
     * @param toObjectType 
     * @param toObjectId 
     */
    public async createDefault(fromObjectType: string, fromObjectId: string, toObjectType: string, toObjectId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError("BasicApi", "createDefault", "fromObjectType");
        }


        // verify required parameter 'fromObjectId' is not null or undefined
        if (fromObjectId === null || fromObjectId === undefined) {
            throw new RequiredError("BasicApi", "createDefault", "fromObjectId");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("BasicApi", "createDefault", "toObjectType");
        }


        // verify required parameter 'toObjectId' is not null or undefined
        if (toObjectId === null || toObjectId === undefined) {
            throw new RequiredError("BasicApi", "createDefault", "toObjectId");
        }


        // Path Params
        const localVarPath = '/crm/v4/objects/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'fromObjectId' + '}', encodeURIComponent(String(fromObjectId)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)))
            .replace('{' + 'toObjectId' + '}', encodeURIComponent(String(toObjectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
     * List all associations of an object by object type. Limit 500 per call.
     * List
     * @param objectType 
     * @param objectId 
     * @param toObjectType 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public async getPage(objectType: string, objectId: string, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new RequiredError("BasicApi", "getPage", "objectType");
        }


        // verify required parameter 'objectId' is not null or undefined
        if (objectId === null || objectId === undefined) {
            throw new RequiredError("BasicApi", "getPage", "objectId");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("BasicApi", "getPage", "toObjectType");
        }




        // Path Params
        const localVarPath = '/crm/v4/objects/{objectType}/{objectId}/associations/{toObjectType}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'objectId' + '}', encodeURIComponent(String(objectId)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
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

export class BasicApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<LabelsBetweenObjectPair >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: LabelsBetweenObjectPair = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LabelsBetweenObjectPair", ""
            ) as LabelsBetweenObjectPair;
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
            const body: LabelsBetweenObjectPair = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LabelsBetweenObjectPair", ""
            ) as LabelsBetweenObjectPair;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDefault
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDefaultWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponsePublicDefaultAssociation >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponsePublicDefaultAssociation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicDefaultAssociation", ""
            ) as BatchResponsePublicDefaultAssociation;
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
            const body: BatchResponsePublicDefaultAssociation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicDefaultAssociation", ""
            ) as BatchResponsePublicDefaultAssociation;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseMultiAssociatedObjectWithLabelForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseMultiAssociatedObjectWithLabelForwardPaging", ""
            ) as CollectionResponseMultiAssociatedObjectWithLabelForwardPaging;
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
            const body: CollectionResponseMultiAssociatedObjectWithLabelForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseMultiAssociatedObjectWithLabelForwardPaging", ""
            ) as CollectionResponseMultiAssociatedObjectWithLabelForwardPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
