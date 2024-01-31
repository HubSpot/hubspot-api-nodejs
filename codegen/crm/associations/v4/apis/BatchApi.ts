// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BatchInputPublicAssociationMultiArchive } from '../models/BatchInputPublicAssociationMultiArchive';
import { BatchInputPublicAssociationMultiPost } from '../models/BatchInputPublicAssociationMultiPost';
import { BatchInputPublicDefaultAssociationMultiPost } from '../models/BatchInputPublicDefaultAssociationMultiPost';
import { BatchInputPublicFetchAssociationsBatchRequest } from '../models/BatchInputPublicFetchAssociationsBatchRequest';
import { BatchResponseLabelsBetweenObjectPair } from '../models/BatchResponseLabelsBetweenObjectPair';
import { BatchResponseLabelsBetweenObjectPairWithErrors } from '../models/BatchResponseLabelsBetweenObjectPairWithErrors';
import { BatchResponsePublicAssociationMultiWithLabel } from '../models/BatchResponsePublicAssociationMultiWithLabel';
import { BatchResponsePublicAssociationMultiWithLabelWithErrors } from '../models/BatchResponsePublicAssociationMultiWithLabelWithErrors';
import { BatchResponsePublicDefaultAssociation } from '../models/BatchResponsePublicDefaultAssociation';

/**
 * no description
 */
export class BatchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Batch delete associations for objects
     * Delete
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiArchive 
     */
    public async archive(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiArchive: BatchInputPublicAssociationMultiArchive, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError("BatchApi", "archive", "fromObjectType");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("BatchApi", "archive", "toObjectType");
        }


        // verify required parameter 'batchInputPublicAssociationMultiArchive' is not null or undefined
        if (batchInputPublicAssociationMultiArchive === null || batchInputPublicAssociationMultiArchive === undefined) {
            throw new RequiredError("BatchApi", "archive", "batchInputPublicAssociationMultiArchive");
        }


        // Path Params
        const localVarPath = '/crm/v4/associations/{fromObjectType}/{toObjectType}/batch/archive'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicAssociationMultiArchive, "BatchInputPublicAssociationMultiArchive", ""),
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
     * Batch delete specific association labels for objects. Deleting an unlabeled association will also delete all labeled associations between those two objects
     * Delete Specific Labels
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiPost 
     */
    public async archiveLabels(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError("BatchApi", "archiveLabels", "fromObjectType");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("BatchApi", "archiveLabels", "toObjectType");
        }


        // verify required parameter 'batchInputPublicAssociationMultiPost' is not null or undefined
        if (batchInputPublicAssociationMultiPost === null || batchInputPublicAssociationMultiPost === undefined) {
            throw new RequiredError("BatchApi", "archiveLabels", "batchInputPublicAssociationMultiPost");
        }


        // Path Params
        const localVarPath = '/crm/v4/associations/{fromObjectType}/{toObjectType}/batch/labels/archive'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicAssociationMultiPost, "BatchInputPublicAssociationMultiPost", ""),
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
     * Batch create associations for objects
     * Create
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociationMultiPost 
     */
    public async create(fromObjectType: string, toObjectType: string, batchInputPublicAssociationMultiPost: BatchInputPublicAssociationMultiPost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError("BatchApi", "create", "fromObjectType");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("BatchApi", "create", "toObjectType");
        }


        // verify required parameter 'batchInputPublicAssociationMultiPost' is not null or undefined
        if (batchInputPublicAssociationMultiPost === null || batchInputPublicAssociationMultiPost === undefined) {
            throw new RequiredError("BatchApi", "create", "batchInputPublicAssociationMultiPost");
        }


        // Path Params
        const localVarPath = '/crm/v4/associations/{fromObjectType}/{toObjectType}/batch/create'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicAssociationMultiPost, "BatchInputPublicAssociationMultiPost", ""),
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
     *  Create Default Associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicDefaultAssociationMultiPost 
     */
    public async createDefault(fromObjectType: string, toObjectType: string, batchInputPublicDefaultAssociationMultiPost: BatchInputPublicDefaultAssociationMultiPost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError("BatchApi", "createDefault", "fromObjectType");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("BatchApi", "createDefault", "toObjectType");
        }


        // verify required parameter 'batchInputPublicDefaultAssociationMultiPost' is not null or undefined
        if (batchInputPublicDefaultAssociationMultiPost === null || batchInputPublicDefaultAssociationMultiPost === undefined) {
            throw new RequiredError("BatchApi", "createDefault", "batchInputPublicDefaultAssociationMultiPost");
        }


        // Path Params
        const localVarPath = '/crm/v4/associations/{fromObjectType}/{toObjectType}/batch/associate/default'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicDefaultAssociationMultiPost, "BatchInputPublicDefaultAssociationMultiPost", ""),
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
     * Batch read associations for objects to specific object type. The \'after\' field in a returned paging object  can be added alongside the \'id\' to retrieve the next page of associations from that objectId. The \'link\' field is deprecated and should be ignored. 
     * Read
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicFetchAssociationsBatchRequest 
     */
    public async getPage(fromObjectType: string, toObjectType: string, batchInputPublicFetchAssociationsBatchRequest: BatchInputPublicFetchAssociationsBatchRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError("BatchApi", "getPage", "fromObjectType");
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError("BatchApi", "getPage", "toObjectType");
        }


        // verify required parameter 'batchInputPublicFetchAssociationsBatchRequest' is not null or undefined
        if (batchInputPublicFetchAssociationsBatchRequest === null || batchInputPublicFetchAssociationsBatchRequest === undefined) {
            throw new RequiredError("BatchApi", "getPage", "batchInputPublicFetchAssociationsBatchRequest");
        }


        // Path Params
        const localVarPath = '/crm/v4/associations/{fromObjectType}/{toObjectType}/batch/read'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicFetchAssociationsBatchRequest, "BatchInputPublicFetchAssociationsBatchRequest", ""),
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

export class BatchApiResponseProcessor {

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
     * @params response Response returned by the server for a request to archiveLabels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveLabelsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BatchResponseLabelsBetweenObjectPair = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseLabelsBetweenObjectPair", ""
            ) as BatchResponseLabelsBetweenObjectPair;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponseLabelsBetweenObjectPairWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseLabelsBetweenObjectPairWithErrors", ""
            ) as BatchResponseLabelsBetweenObjectPairWithErrors;
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
            const body: BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair", ""
            ) as BatchResponseLabelsBetweenObjectPairWithErrors | BatchResponseLabelsBetweenObjectPair;
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
     public async getPageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponsePublicAssociationMultiWithLabel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationMultiWithLabel", ""
            ) as BatchResponsePublicAssociationMultiWithLabel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponsePublicAssociationMultiWithLabelWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationMultiWithLabelWithErrors", ""
            ) as BatchResponsePublicAssociationMultiWithLabelWithErrors;
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
            const body: BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors", ""
            ) as BatchResponsePublicAssociationMultiWithLabel | BatchResponsePublicAssociationMultiWithLabelWithErrors;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
