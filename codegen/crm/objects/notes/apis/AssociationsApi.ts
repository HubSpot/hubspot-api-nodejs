// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import  FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AssociationSpec } from '../models/AssociationSpec';
import { CollectionResponseMultiAssociatedObjectWithLabelForwardPaging } from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';

/**
 * no description
 */
export class AssociationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <span style='display: flex; justify-content: space-between;'><span style='flex: 1'><span style='display: inline-block;'>deletes all associations between two records.<br />Auth Level: external ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) | [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=PublicObjectResource&defs=deleteAllAssociations) | <a href='#operations-Associations-delete-%2Fcrm%2Fv4%2Fnotes%2F%7BobjectType%7D%2F%7BnoteId%7D%2Fassociations%2F%7BtoObjectType%7D%2F%7BtoObjectId%7D'>Permalink</a> | [API Goggles](https://tools.hubteam.com/api/delete/api.hubapi.com%2Fcrm%2Fv4%2Fnotes%2F%28%28%7BobjectType%7D%29%29%2F%28%28%7BnoteId%7D%29%29%2Fassociations%2F%28%28%7BtoObjectType%7D%29%29%2F%28%28%7BtoObjectId%7D%29%29?showRequestDetails=true&body=&authType=external)</span></span><span style='padding-left: 12px'><a href='https://looker.hubspotcentral.net/dashboards/4566?DeployConfig=CrmPublicObjects-Service-web&Resource=PublicObjectResource&Method=deleteAllAssociations&API%20Version=v4&Timeframe=90%20days%20ago%20for%2090%20days'>**7,481,227** external calls in the last 90 days</a></span></span>
     * Delete
     * @param noteId 
     * @param toObjectType 
     * @param toObjectId 
     */
    public async archive(noteId: number, toObjectType: string, toObjectId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'noteId' is not null or undefined
        if (noteId === null || noteId === undefined) {
            throw new RequiredError("AssociationsApi", "archive", "noteId");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("AssociationsApi", "archive", "toObjectType");
        }


        // verify required parameter 'toObjectId' is not null or undefined
        if (toObjectId === null || toObjectId === undefined) {
            throw new RequiredError("AssociationsApi", "archive", "toObjectId");
        }


        // Path Params
        const localVarPath = '/crm/v4/objects/notes/{noteId}/associations/{toObjectType}/{toObjectId}'
            .replace('{' + 'noteId' + '}', encodeURIComponent(String(noteId)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)))
            .replace('{' + 'toObjectId' + '}', encodeURIComponent(String(toObjectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
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
     * <span style='display: flex; justify-content: space-between;'><span style='flex: 1'><span style='display: inline-block;'>Set association labels between two records.<br />Auth Level: external ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) | [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=PublicObjectResource&defs=setAssociationLabels) | <a href='#operations-Associations-put-%2Fcrm%2Fv4%2Fnotes%2F%7BobjectType%7D%2F%7BnoteId%7D%2Fassociations%2F%7BtoObjectType%7D%2F%7BtoObjectId%7D'>Permalink</a> | [API Goggles](https://tools.hubteam.com/api/put/api.hubapi.com%2Fcrm%2Fv4%2Fnotes%2F%28%28%7BobjectType%7D%29%29%2F%28%28%7BnoteId%7D%29%29%2Fassociations%2F%28%28%7BtoObjectType%7D%29%29%2F%28%28%7BtoObjectId%7D%29%29?showRequestDetails=true&body=&authType=external)</span></span><span style='padding-left: 12px'><a href='https://looker.hubspotcentral.net/dashboards/4566?DeployConfig=CrmPublicObjects-Service-web&Resource=PublicObjectResource&Method=setAssociationLabels&API%20Version=v4&Timeframe=90%20days%20ago%20for%2090%20days'>**84,046,482** external calls in the last 90 days</a></span></span>
     * Create
     * @param noteId 
     * @param toObjectType 
     * @param toObjectId 
     * @param associationSpec 
     */
    public async create(noteId: number, toObjectType: string, toObjectId: number, associationSpec: Array<AssociationSpec>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'noteId' is not null or undefined
        if (noteId === null || noteId === undefined) {
            throw new RequiredError("AssociationsApi", "create", "noteId");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("AssociationsApi", "create", "toObjectType");
        }


        // verify required parameter 'toObjectId' is not null or undefined
        if (toObjectId === null || toObjectId === undefined) {
            throw new RequiredError("AssociationsApi", "create", "toObjectId");
        }


        // verify required parameter 'associationSpec' is not null or undefined
        if (associationSpec === null || associationSpec === undefined) {
            throw new RequiredError("AssociationsApi", "create", "associationSpec");
        }


        // Path Params
        const localVarPath = '/crm/v4/objects/notes/{noteId}/associations/{toObjectType}/{toObjectId}'
            .replace('{' + 'noteId' + '}', encodeURIComponent(String(noteId)))
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
        authMethod = _config.authMethods["hapikey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
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
     * <span style='display: flex; justify-content: space-between;'><span style='flex: 1'><span style='display: inline-block;'>List all associations of a note by object type. Limit 1000 per call.<br />Auth Level: external ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) | [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=PublicObjectResource&defs=getAllAssociationsForObject) | <a href='#operations-Associations-get-%2Fcrm%2Fv4%2Fnotes%2F%7BobjectType%7D%2F%7BnoteId%7D%2Fassociations%2F%7BtoObjectType%7D'>Permalink</a> | [API Goggles](https://tools.hubteam.com/api/get/api.hubapi.com%2Fcrm%2Fv4%2Fnotes%2F%28%28%7BobjectType%7D%29%29%2F%28%28%7BnoteId%7D%29%29%2Fassociations%2F%28%28%7BtoObjectType%7D%29%29?showRequestDetails=true&body=&authType=external)</span></span><span style='padding-left: 12px'><a href='https://looker.hubspotcentral.net/dashboards/4566?DeployConfig=CrmPublicObjects-Service-web&Resource=PublicObjectResource&Method=getAllAssociationsForObject&API%20Version=v4&Timeframe=90%20days%20ago%20for%2090%20days'>**101,011,935** external calls in the last 90 days</a></span></span>
     * List
     * @param noteId 
     * @param toObjectType 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public async getAll(noteId: number, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'noteId' is not null or undefined
        if (noteId === null || noteId === undefined) {
            throw new RequiredError("AssociationsApi", "getAll", "noteId");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("AssociationsApi", "getAll", "toObjectType");
        }




        // Path Params
        const localVarPath = '/crm/v4/objects/notes/{noteId}/associations/{toObjectType}'
            .replace('{' + 'noteId' + '}', encodeURIComponent(String(noteId)))
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
        authMethod = _config.authMethods["hapikey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
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

export class AssociationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archive(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
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
            return body;
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
     public async create(response: ResponseContext): Promise<LabelsBetweenObjectPair > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: LabelsBetweenObjectPair = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LabelsBetweenObjectPair", ""
            ) as LabelsBetweenObjectPair;
            return body;
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
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAll
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAll(response: ResponseContext): Promise<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseMultiAssociatedObjectWithLabelForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseMultiAssociatedObjectWithLabelForwardPaging", ""
            ) as CollectionResponseMultiAssociatedObjectWithLabelForwardPaging;
            return body;
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
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
