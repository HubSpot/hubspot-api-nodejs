// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AggregateEmailStatistics } from '../models/AggregateEmailStatistics';
import { CollectionResponseWithTotalEmailStatisticInterval } from '../models/CollectionResponseWithTotalEmailStatisticInterval';
import { CollectionResponseWithTotalPublicEmail } from '../models/CollectionResponseWithTotalPublicEmail';
import { EmailCreateRequest } from '../models/EmailCreateRequest';
import { PublicEmail } from '../models/PublicEmail';

/**
 * no description
 */
export class BasicApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics
     * @param emailIds Filter by email IDs. Only include statistics of emails with these IDs.
     * @param endTimestamp The end timestamp of the time span, in ISO8601 representation.
     * @param property Specifies which email properties should be returned. All properties will be returned by default.
     * @param startTimestamp The start timestamp of the time span, in ISO8601 representation.
     */
    public async getEmailsList(emailIds?: Array<number>, endTimestamp?: Date, property?: string, startTimestamp?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/marketing/v3/emails/statistics/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (emailIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(emailIds, "Array<number>", "int64");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("emailIds", serializedParam);
            }
        }

        // Query Params
        if (endTimestamp !== undefined) {
            requestContext.setQueryParam("endTimestamp", ObjectSerializer.serialize(endTimestamp, "Date", "date-time"));
        }

        // Query Params
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer.serialize(property, "string", ""));
        }

        // Query Params
        if (startTimestamp !== undefined) {
            requestContext.setQueryParam("startTimestamp", ObjectSerializer.serialize(startTimestamp, "Date", "date-time"));
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
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals
     * @param emailIds Filter by email IDs. Only include statistics of emails with these IDs.
     * @param endTimestamp The end timestamp of the time span, in ISO8601 representation.
     * @param interval The interval to aggregate statistics for.
     * @param startTimestamp The start timestamp of the time span, in ISO8601 representation.
     */
    public async getHistogram(emailIds?: Array<number>, endTimestamp?: Date, interval?: 'DAY' | 'HOUR' | 'MINUTE' | 'MONTH' | 'QUARTER' | 'QUARTER_HOUR' | 'SECOND' | 'WEEK' | 'YEAR', startTimestamp?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/marketing/v3/emails/statistics/histogram';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (emailIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(emailIds, "Array<number>", "int64");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("emailIds", serializedParam);
            }
        }

        // Query Params
        if (endTimestamp !== undefined) {
            requestContext.setQueryParam("endTimestamp", ObjectSerializer.serialize(endTimestamp, "Date", "date-time"));
        }

        // Query Params
        if (interval !== undefined) {
            requestContext.setQueryParam("interval", ObjectSerializer.serialize(interval, "'DAY' | 'HOUR' | 'MINUTE' | 'MONTH' | 'QUARTER' | 'QUARTER_HOUR' | 'SECOND' | 'WEEK' | 'YEAR'", ""));
        }

        // Query Params
        if (startTimestamp !== undefined) {
            requestContext.setQueryParam("startTimestamp", ObjectSerializer.serialize(startTimestamp, "Date", "date-time"));
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
     * @param after 
     * @param archived 
     * @param campaign 
     * @param createdAfter 
     * @param createdAt 
     * @param createdBefore 
     * @param includedProperties 
     * @param includeStats 
     * @param isPublished 
     * @param limit 
     * @param marketingCampaignNames 
     * @param publishedAfter 
     * @param publishedAt 
     * @param publishedBefore 
     * @param sort 
     * @param type 
     * @param updatedAfter 
     * @param updatedAt 
     * @param updatedBefore 
     * @param variantStats 
     * @param workflowNames 
     */
    public async marketingV3Emails(after?: string, archived?: boolean, campaign?: string, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, includedProperties?: Array<string>, includeStats?: boolean, isPublished?: boolean, limit?: number, marketingCampaignNames?: boolean, publishedAfter?: Date, publishedAt?: Date, publishedBefore?: Date, sort?: Array<string>, type?: 'AB_EMAIL' | 'AUTOMATED_AB_EMAIL' | 'AUTOMATED_EMAIL' | 'BATCH_EMAIL' | 'BLOG_EMAIL' | 'BLOG_EMAIL_CHILD' | 'FEEDBACK_CES_EMAIL' | 'FEEDBACK_CUSTOM_EMAIL' | 'FEEDBACK_CUSTOM_SURVEY_EMAIL' | 'FEEDBACK_NPS_EMAIL' | 'FOLLOWUP_EMAIL' | 'LEADFLOW_EMAIL' | 'LOCALTIME_EMAIL' | 'MANAGE_PREFERENCES_EMAIL' | 'MARKETING_SINGLE_SEND_API' | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL' | 'MEMBERSHIP_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_OTP_LOGIN_EMAIL' | 'MEMBERSHIP_PASSWORD_RESET_EMAIL' | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL' | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL' | 'MEMBERSHIP_REGISTRATION_EMAIL' | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_VERIFICATION_EMAIL' | 'OPTIN_EMAIL' | 'OPTIN_FOLLOWUP_EMAIL' | 'RESUBSCRIBE_EMAIL' | 'RSS_EMAIL' | 'RSS_EMAIL_CHILD' | 'SINGLE_SEND_API' | 'SMTP_TOKEN' | 'TICKET_EMAIL', updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, variantStats?: boolean, workflowNames?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






















        // Path Params
        const localVarPath = '/marketing/v3/emails';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }

        // Query Params
        if (campaign !== undefined) {
            requestContext.setQueryParam("campaign", ObjectSerializer.serialize(campaign, "string", ""));
        }

        // Query Params
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("createdAfter", ObjectSerializer.serialize(createdAfter, "Date", "date-time"));
        }

        // Query Params
        if (createdAt !== undefined) {
            requestContext.setQueryParam("createdAt", ObjectSerializer.serialize(createdAt, "Date", "date-time"));
        }

        // Query Params
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("createdBefore", ObjectSerializer.serialize(createdBefore, "Date", "date-time"));
        }

        // Query Params
        if (includedProperties !== undefined) {
            const serializedParams = ObjectSerializer.serialize(includedProperties, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("includedProperties", serializedParam);
            }
        }

        // Query Params
        if (includeStats !== undefined) {
            requestContext.setQueryParam("includeStats", ObjectSerializer.serialize(includeStats, "boolean", ""));
        }

        // Query Params
        if (isPublished !== undefined) {
            requestContext.setQueryParam("isPublished", ObjectSerializer.serialize(isPublished, "boolean", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (marketingCampaignNames !== undefined) {
            requestContext.setQueryParam("marketingCampaignNames", ObjectSerializer.serialize(marketingCampaignNames, "boolean", ""));
        }

        // Query Params
        if (publishedAfter !== undefined) {
            requestContext.setQueryParam("publishedAfter", ObjectSerializer.serialize(publishedAfter, "Date", "date-time"));
        }

        // Query Params
        if (publishedAt !== undefined) {
            requestContext.setQueryParam("publishedAt", ObjectSerializer.serialize(publishedAt, "Date", "date-time"));
        }

        // Query Params
        if (publishedBefore !== undefined) {
            requestContext.setQueryParam("publishedBefore", ObjectSerializer.serialize(publishedBefore, "Date", "date-time"));
        }

        // Query Params
        if (sort !== undefined) {
            const serializedParams = ObjectSerializer.serialize(sort, "Array<string>", "");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("sort", serializedParam);
            }
        }

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "'AB_EMAIL' | 'AUTOMATED_AB_EMAIL' | 'AUTOMATED_EMAIL' | 'BATCH_EMAIL' | 'BLOG_EMAIL' | 'BLOG_EMAIL_CHILD' | 'FEEDBACK_CES_EMAIL' | 'FEEDBACK_CUSTOM_EMAIL' | 'FEEDBACK_CUSTOM_SURVEY_EMAIL' | 'FEEDBACK_NPS_EMAIL' | 'FOLLOWUP_EMAIL' | 'LEADFLOW_EMAIL' | 'LOCALTIME_EMAIL' | 'MANAGE_PREFERENCES_EMAIL' | 'MARKETING_SINGLE_SEND_API' | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL' | 'MEMBERSHIP_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_OTP_LOGIN_EMAIL' | 'MEMBERSHIP_PASSWORD_RESET_EMAIL' | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL' | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL' | 'MEMBERSHIP_REGISTRATION_EMAIL' | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_VERIFICATION_EMAIL' | 'OPTIN_EMAIL' | 'OPTIN_FOLLOWUP_EMAIL' | 'RESUBSCRIBE_EMAIL' | 'RSS_EMAIL' | 'RSS_EMAIL_CHILD' | 'SINGLE_SEND_API' | 'SMTP_TOKEN' | 'TICKET_EMAIL'", ""));
        }

        // Query Params
        if (updatedAfter !== undefined) {
            requestContext.setQueryParam("updatedAfter", ObjectSerializer.serialize(updatedAfter, "Date", "date-time"));
        }

        // Query Params
        if (updatedAt !== undefined) {
            requestContext.setQueryParam("updatedAt", ObjectSerializer.serialize(updatedAt, "Date", "date-time"));
        }

        // Query Params
        if (updatedBefore !== undefined) {
            requestContext.setQueryParam("updatedBefore", ObjectSerializer.serialize(updatedBefore, "Date", "date-time"));
        }

        // Query Params
        if (variantStats !== undefined) {
            requestContext.setQueryParam("variantStats", ObjectSerializer.serialize(variantStats, "boolean", ""));
        }

        // Query Params
        if (workflowNames !== undefined) {
            requestContext.setQueryParam("workflowNames", ObjectSerializer.serialize(workflowNames, "boolean", ""));
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
     * @param emailCreateRequest 
     */
    public async marketingV3Emails_1(emailCreateRequest: EmailCreateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'emailCreateRequest' is not null or undefined
        if (emailCreateRequest === null || emailCreateRequest === undefined) {
            throw new RequiredError("BasicApi", "marketingV3Emails_1", "emailCreateRequest");
        }


        // Path Params
        const localVarPath = '/marketing/v3/emails';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(emailCreateRequest, "EmailCreateRequest", ""),
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

export class BasicApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailsListWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AggregateEmailStatistics >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AggregateEmailStatistics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AggregateEmailStatistics", ""
            ) as AggregateEmailStatistics;
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
            const body: AggregateEmailStatistics = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AggregateEmailStatistics", ""
            ) as AggregateEmailStatistics;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHistogram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHistogramWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseWithTotalEmailStatisticInterval >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalEmailStatisticInterval = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalEmailStatisticInterval", ""
            ) as CollectionResponseWithTotalEmailStatisticInterval;
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
            const body: CollectionResponseWithTotalEmailStatisticInterval = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalEmailStatisticInterval", ""
            ) as CollectionResponseWithTotalEmailStatisticInterval;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to marketingV3Emails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async marketingV3EmailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseWithTotalPublicEmail >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalPublicEmail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalPublicEmail", ""
            ) as CollectionResponseWithTotalPublicEmail;
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
            const body: CollectionResponseWithTotalPublicEmail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalPublicEmail", ""
            ) as CollectionResponseWithTotalPublicEmail;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to marketingV3Emails_1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async marketingV3Emails_1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<PublicEmail >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: PublicEmail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicEmail", ""
            ) as PublicEmail;
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
            const body: PublicEmail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicEmail", ""
            ) as PublicEmail;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
