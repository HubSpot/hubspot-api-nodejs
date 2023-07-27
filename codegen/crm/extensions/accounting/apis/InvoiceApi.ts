// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { InvoiceCreatePaymentRequest } from '../models/InvoiceCreatePaymentRequest';
import { InvoiceReadResponse } from '../models/InvoiceReadResponse';
import { InvoiceUpdateRequest } from '../models/InvoiceUpdateRequest';
import { InvoiceUpdateResponse } from '../models/InvoiceUpdateResponse';

/**
 * no description
 */
export class InvoiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Records an payment against an invoice.
     * Records an invoice payment
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param invoiceCreatePaymentRequest The payment information
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    public async createPayment(invoiceId: string, invoiceCreatePaymentRequest: InvoiceCreatePaymentRequest, accountId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoiceApi", "createPayment", "invoiceId");
        }


        // verify required parameter 'invoiceCreatePaymentRequest' is not null or undefined
        if (invoiceCreatePaymentRequest === null || invoiceCreatePaymentRequest === undefined) {
            throw new RequiredError("InvoiceApi", "createPayment", "invoiceCreatePaymentRequest");
        }



        // Path Params
        const localVarPath = '/crm/v3/extensions/accounting/invoice/{invoiceId}/payment'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accountId !== undefined) {
            requestContext.setQueryParam("accountId", ObjectSerializer.serialize(accountId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(invoiceCreatePaymentRequest, "InvoiceCreatePaymentRequest", ""),
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
     * Returns invoice data for an Accounting account from the specified ID
     * Get invoice data
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     */
    public async getById(invoiceId: string, accountId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoiceApi", "getById", "invoiceId");
        }


        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("InvoiceApi", "getById", "accountId");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/accounting/invoice/{invoiceId}'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accountId !== undefined) {
            requestContext.setQueryParam("accountId", ObjectSerializer.serialize(accountId, "string", ""));
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
     * Updates an Invoice by the given ID.
     * Update an invoice
     * @param invoiceId The ID of the invoice. This is the invoice ID from the external accounting system.
     * @param accountId The ID of the account that the invoice belongs to. This is the account ID from the external accounting system.
     * @param invoiceUpdateRequest The invoice data to update
     */
    public async update(invoiceId: string, accountId: string, invoiceUpdateRequest: InvoiceUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'invoiceId' is not null or undefined
        if (invoiceId === null || invoiceId === undefined) {
            throw new RequiredError("InvoiceApi", "update", "invoiceId");
        }


        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new RequiredError("InvoiceApi", "update", "accountId");
        }


        // verify required parameter 'invoiceUpdateRequest' is not null or undefined
        if (invoiceUpdateRequest === null || invoiceUpdateRequest === undefined) {
            throw new RequiredError("InvoiceApi", "update", "invoiceUpdateRequest");
        }


        // Path Params
        const localVarPath = '/crm/v3/extensions/accounting/invoice/{invoiceId}'
            .replace('{' + 'invoiceId' + '}', encodeURIComponent(String(invoiceId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accountId !== undefined) {
            requestContext.setQueryParam("accountId", ObjectSerializer.serialize(accountId, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(invoiceUpdateRequest, "InvoiceUpdateRequest", ""),
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

export class InvoiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPayment(response: ResponseContext): Promise<InvoiceUpdateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InvoiceUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceUpdateResponse", ""
            ) as InvoiceUpdateResponse;
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
            const body: InvoiceUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceUpdateResponse", ""
            ) as InvoiceUpdateResponse;
            return body;
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
     public async getById(response: ResponseContext): Promise<InvoiceReadResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InvoiceReadResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceReadResponse", ""
            ) as InvoiceReadResponse;
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
            const body: InvoiceReadResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceReadResponse", ""
            ) as InvoiceReadResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to update
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async update(response: ResponseContext): Promise<InvoiceUpdateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InvoiceUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceUpdateResponse", ""
            ) as InvoiceUpdateResponse;
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
            const body: InvoiceUpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceUpdateResponse", ""
            ) as InvoiceUpdateResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
