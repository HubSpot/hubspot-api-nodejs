// TODO: better import syntax?
import {BaseAPIRequestFactory} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import { isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AggregateEmailStatistics } from '../models/AggregateEmailStatistics';
import { CollectionResponseWithTotalEmailStatisticIntervalNoPaging } from '../models/CollectionResponseWithTotalEmailStatisticIntervalNoPaging';

/**
 * no description
 */
export class StatisticsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics.
     * @param startTimestamp The start timestamp of the time span, in ISO8601 representation.
     * @param endTimestamp The end timestamp of the time span, in ISO8601 representation.
     * @param emailIds Filter by email IDs. Only include statistics of emails with these IDs.
     * @param property Specifies which email properties should be returned. All properties will be returned by default.
     */
    public async getEmailsList(startTimestamp?: string, endTimestamp?: string, emailIds?: Array<number>, property?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/marketing/v3/emails/statistics/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startTimestamp !== undefined) {
            requestContext.setQueryParam("startTimestamp", ObjectSerializer.serialize(startTimestamp, "string", ""));
        }

        // Query Params
        if (endTimestamp !== undefined) {
            requestContext.setQueryParam("endTimestamp", ObjectSerializer.serialize(endTimestamp, "string", ""));
        }

        // Query Params
        if (emailIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(emailIds, "Array<number>", "int64");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("emailIds", serializedParam);
            }
        }

        // Query Params
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer.serialize(property, "string", ""));
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
     * Get aggregated statistic intervals.
     * @param interval The interval to aggregate statistics for.
     * @param startTimestamp The start timestamp of the time span, in ISO8601 representation.
     * @param endTimestamp The end timestamp of the time span, in ISO8601 representation.
     * @param emailIds Filter by email IDs. Only include statistics of emails with these IDs.
     */
    public async getHistogram(interval?: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'QUARTER_HOUR' | 'MINUTE' | 'SECOND', startTimestamp?: string, endTimestamp?: string, emailIds?: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/marketing/v3/emails/statistics/histogram';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (interval !== undefined) {
            requestContext.setQueryParam("interval", ObjectSerializer.serialize(interval, "'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'QUARTER_HOUR' | 'MINUTE' | 'SECOND'", ""));
        }

        // Query Params
        if (startTimestamp !== undefined) {
            requestContext.setQueryParam("startTimestamp", ObjectSerializer.serialize(startTimestamp, "string", ""));
        }

        // Query Params
        if (endTimestamp !== undefined) {
            requestContext.setQueryParam("endTimestamp", ObjectSerializer.serialize(endTimestamp, "string", ""));
        }

        // Query Params
        if (emailIds !== undefined) {
            const serializedParams = ObjectSerializer.serialize(emailIds, "Array<number>", "int64");
            for (const serializedParam of serializedParams) {
                requestContext.appendQueryParam("emailIds", serializedParam);
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

}

export class StatisticsApiResponseProcessor {

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
     public async getHistogramWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CollectionResponseWithTotalEmailStatisticIntervalNoPaging >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalEmailStatisticIntervalNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalEmailStatisticIntervalNoPaging", ""
            ) as CollectionResponseWithTotalEmailStatisticIntervalNoPaging;
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
            const body: CollectionResponseWithTotalEmailStatisticIntervalNoPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalEmailStatisticIntervalNoPaging", ""
            ) as CollectionResponseWithTotalEmailStatisticIntervalNoPaging;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
