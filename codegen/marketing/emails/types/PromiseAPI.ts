import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { AbTestCreateRequestVNext } from '../models/AbTestCreateRequestVNext';
import { AggregateEmailStatistics } from '../models/AggregateEmailStatistics';
import { CollectionResponseWithTotalEmailStatisticInterval } from '../models/CollectionResponseWithTotalEmailStatisticInterval';
import { CollectionResponseWithTotalPublicEmail } from '../models/CollectionResponseWithTotalPublicEmail';
import { CollectionResponseWithTotalPublicEmailVersion } from '../models/CollectionResponseWithTotalPublicEmailVersion';
import { EmailCloneRequestVNext } from '../models/EmailCloneRequestVNext';
import { EmailCreateRequest } from '../models/EmailCreateRequest';
import { EmailUpdateRequest } from '../models/EmailUpdateRequest';
import { PublicEmail } from '../models/PublicEmail';
import { PublicEmailVersion } from '../models/PublicEmailVersion';
import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics
     * @param [emailIds] Filter by email IDs. Only include statistics of emails with these IDs.
     * @param [endTimestamp] The end timestamp of the time span, in ISO8601 representation.
     * @param [property] Specifies which email properties should be returned. All properties will be returned by default.
     * @param [startTimestamp] The start timestamp of the time span, in ISO8601 representation.
     */
    public getEmailsListWithHttpInfo(emailIds?: Array<number>, endTimestamp?: Date, property?: string, startTimestamp?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AggregateEmailStatistics>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getEmailsListWithHttpInfo(emailIds, endTimestamp, property, startTimestamp, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics
     * @param [emailIds] Filter by email IDs. Only include statistics of emails with these IDs.
     * @param [endTimestamp] The end timestamp of the time span, in ISO8601 representation.
     * @param [property] Specifies which email properties should be returned. All properties will be returned by default.
     * @param [startTimestamp] The start timestamp of the time span, in ISO8601 representation.
     */
    public getEmailsList(emailIds?: Array<number>, endTimestamp?: Date, property?: string, startTimestamp?: Date, _options?: PromiseConfigurationOptions): Promise<AggregateEmailStatistics> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getEmailsList(emailIds, endTimestamp, property, startTimestamp, observableOptions);
        return result.toPromise();
    }

    /**
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals
     * @param [emailIds] Filter by email IDs. Only include statistics of emails with these IDs.
     * @param [endTimestamp] The end timestamp of the time span, in ISO8601 representation.
     * @param [interval] The interval to aggregate statistics for.
     * @param [startTimestamp] The start timestamp of the time span, in ISO8601 representation.
     */
    public getHistogramWithHttpInfo(emailIds?: Array<number>, endTimestamp?: Date, interval?: 'DAY' | 'HOUR' | 'MINUTE' | 'MONTH' | 'QUARTER' | 'QUARTER_HOUR' | 'SECOND' | 'WEEK' | 'YEAR', startTimestamp?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalEmailStatisticInterval>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getHistogramWithHttpInfo(emailIds, endTimestamp, interval, startTimestamp, observableOptions);
        return result.toPromise();
    }

    /**
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals
     * @param [emailIds] Filter by email IDs. Only include statistics of emails with these IDs.
     * @param [endTimestamp] The end timestamp of the time span, in ISO8601 representation.
     * @param [interval] The interval to aggregate statistics for.
     * @param [startTimestamp] The start timestamp of the time span, in ISO8601 representation.
     */
    public getHistogram(emailIds?: Array<number>, endTimestamp?: Date, interval?: 'DAY' | 'HOUR' | 'MINUTE' | 'MONTH' | 'QUARTER' | 'QUARTER_HOUR' | 'SECOND' | 'WEEK' | 'YEAR', startTimestamp?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalEmailStatisticInterval> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getHistogram(emailIds, endTimestamp, interval, startTimestamp, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after]
     * @param [archived]
     * @param [campaign]
     * @param [createdAfter]
     * @param [createdAt]
     * @param [createdBefore]
     * @param [includedProperties]
     * @param [includeStats]
     * @param [isPublished]
     * @param [limit]
     * @param [marketingCampaignNames]
     * @param [publishedAfter]
     * @param [publishedAt]
     * @param [publishedBefore]
     * @param [sort]
     * @param [type]
     * @param [updatedAfter]
     * @param [updatedAt]
     * @param [updatedBefore]
     * @param [variantStats]
     * @param [workflowNames]
     */
    public marketingV3EmailsWithHttpInfo(after?: string, archived?: boolean, campaign?: string, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, includedProperties?: Array<string>, includeStats?: boolean, isPublished?: boolean, limit?: number, marketingCampaignNames?: boolean, publishedAfter?: Date, publishedAt?: Date, publishedBefore?: Date, sort?: Array<string>, type?: 'AB_EMAIL' | 'AUTOMATED_AB_EMAIL' | 'AUTOMATED_EMAIL' | 'BATCH_EMAIL' | 'BLOG_EMAIL' | 'BLOG_EMAIL_CHILD' | 'FEEDBACK_CES_EMAIL' | 'FEEDBACK_CUSTOM_EMAIL' | 'FEEDBACK_CUSTOM_SURVEY_EMAIL' | 'FEEDBACK_NPS_EMAIL' | 'FOLLOWUP_EMAIL' | 'LEADFLOW_EMAIL' | 'LOCALTIME_EMAIL' | 'MANAGE_PREFERENCES_EMAIL' | 'MARKETING_SINGLE_SEND_API' | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL' | 'MEMBERSHIP_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_OTP_LOGIN_EMAIL' | 'MEMBERSHIP_PASSWORD_RESET_EMAIL' | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL' | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL' | 'MEMBERSHIP_REGISTRATION_EMAIL' | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_VERIFICATION_EMAIL' | 'OPTIN_EMAIL' | 'OPTIN_FOLLOWUP_EMAIL' | 'RESUBSCRIBE_EMAIL' | 'RSS_EMAIL' | 'RSS_EMAIL_CHILD' | 'SINGLE_SEND_API' | 'SMTP_TOKEN' | 'TICKET_EMAIL', updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, variantStats?: boolean, workflowNames?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPublicEmail>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.marketingV3EmailsWithHttpInfo(after, archived, campaign, createdAfter, createdAt, createdBefore, includedProperties, includeStats, isPublished, limit, marketingCampaignNames, publishedAfter, publishedAt, publishedBefore, sort, type, updatedAfter, updatedAt, updatedBefore, variantStats, workflowNames, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after]
     * @param [archived]
     * @param [campaign]
     * @param [createdAfter]
     * @param [createdAt]
     * @param [createdBefore]
     * @param [includedProperties]
     * @param [includeStats]
     * @param [isPublished]
     * @param [limit]
     * @param [marketingCampaignNames]
     * @param [publishedAfter]
     * @param [publishedAt]
     * @param [publishedBefore]
     * @param [sort]
     * @param [type]
     * @param [updatedAfter]
     * @param [updatedAt]
     * @param [updatedBefore]
     * @param [variantStats]
     * @param [workflowNames]
     */
    public marketingV3Emails(after?: string, archived?: boolean, campaign?: string, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, includedProperties?: Array<string>, includeStats?: boolean, isPublished?: boolean, limit?: number, marketingCampaignNames?: boolean, publishedAfter?: Date, publishedAt?: Date, publishedBefore?: Date, sort?: Array<string>, type?: 'AB_EMAIL' | 'AUTOMATED_AB_EMAIL' | 'AUTOMATED_EMAIL' | 'BATCH_EMAIL' | 'BLOG_EMAIL' | 'BLOG_EMAIL_CHILD' | 'FEEDBACK_CES_EMAIL' | 'FEEDBACK_CUSTOM_EMAIL' | 'FEEDBACK_CUSTOM_SURVEY_EMAIL' | 'FEEDBACK_NPS_EMAIL' | 'FOLLOWUP_EMAIL' | 'LEADFLOW_EMAIL' | 'LOCALTIME_EMAIL' | 'MANAGE_PREFERENCES_EMAIL' | 'MARKETING_SINGLE_SEND_API' | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL' | 'MEMBERSHIP_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_OTP_LOGIN_EMAIL' | 'MEMBERSHIP_PASSWORD_RESET_EMAIL' | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL' | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL' | 'MEMBERSHIP_REGISTRATION_EMAIL' | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_VERIFICATION_EMAIL' | 'OPTIN_EMAIL' | 'OPTIN_FOLLOWUP_EMAIL' | 'RESUBSCRIBE_EMAIL' | 'RSS_EMAIL' | 'RSS_EMAIL_CHILD' | 'SINGLE_SEND_API' | 'SMTP_TOKEN' | 'TICKET_EMAIL', updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, variantStats?: boolean, workflowNames?: boolean, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalPublicEmail> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.marketingV3Emails(after, archived, campaign, createdAfter, createdAt, createdBefore, includedProperties, includeStats, isPublished, limit, marketingCampaignNames, publishedAfter, publishedAt, publishedBefore, sort, type, updatedAfter, updatedAt, updatedBefore, variantStats, workflowNames, observableOptions);
        return result.toPromise();
    }

    /**
     * @param emailCreateRequest
     */
    public marketingV3Emails_1WithHttpInfo(emailCreateRequest: EmailCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.marketingV3Emails_1WithHttpInfo(emailCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param emailCreateRequest
     */
    public marketingV3Emails_1(emailCreateRequest: EmailCreateRequest, _options?: PromiseConfigurationOptions): Promise<PublicEmail> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.marketingV3Emails_1(emailCreateRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableEmailsApi } from './ObservableAPI';

import { EmailsApiRequestFactory, EmailsApiResponseProcessor} from "../apis/EmailsApi";
export class PromiseEmailsApi {
    private api: ObservableEmailsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailsApiRequestFactory,
        responseProcessor?: EmailsApiResponseProcessor
    ) {
        this.api = new ObservableEmailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a marketing email by its ID
     * Delete a marketing email
     * @param emailId The ID of the marketing email to delete.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(emailId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(emailId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a marketing email by its ID
     * Delete a marketing email
     * @param emailId The ID of the marketing email to delete.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archive(emailId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(emailId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * This will create a duplicate email with the same properties as the original, with the exception of a unique ID.
     * Clone a marketing email
     * @param emailCloneRequestVNext
     */
    public cloneWithHttpInfo(emailCloneRequestVNext: EmailCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cloneWithHttpInfo(emailCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * This will create a duplicate email with the same properties as the original, with the exception of a unique ID.
     * Clone a marketing email
     * @param emailCloneRequestVNext
     */
    public clone(emailCloneRequestVNext: EmailCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<PublicEmail> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.clone(emailCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won\'t be created.
     * Create an A/B test variation of a marketing email
     * @param abTestCreateRequestVNext
     */
    public createAbTestVariationWithHttpInfo(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createAbTestVariationWithHttpInfo(abTestCreateRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won\'t be created.
     * Create an A/B test variation of a marketing email
     * @param abTestCreateRequestVNext
     */
    public createAbTestVariation(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: PromiseConfigurationOptions): Promise<PublicEmail> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createAbTestVariation(abTestCreateRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint lets you obtain the variation of an A/B marketing email. If the email is variation A (master) it will return variation B (variant) and vice versa.
     * Get the variation of a an A/B marketing email
     * @param emailId The ID of an A/B marketing email.
     * @param [archived] Whether to return only results that have been archived.
     * @param [includedProperties] 
     * @param [includeStats] 
     * @param [marketingCampaignNames] 
     * @param [variantStats] 
     * @param [workflowNames] 
     */
    public getAbTestVariationWithHttpInfo(emailId: string, archived?: boolean, includedProperties?: Array<string>, includeStats?: boolean, marketingCampaignNames?: boolean, variantStats?: boolean, workflowNames?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAbTestVariationWithHttpInfo(emailId, archived, includedProperties, includeStats, marketingCampaignNames, variantStats, workflowNames, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint lets you obtain the variation of an A/B marketing email. If the email is variation A (master) it will return variation B (variant) and vice versa.
     * Get the variation of a an A/B marketing email
     * @param emailId The ID of an A/B marketing email.
     * @param [archived] Whether to return only results that have been archived.
     * @param [includedProperties] 
     * @param [includeStats] 
     * @param [marketingCampaignNames] 
     * @param [variantStats] 
     * @param [workflowNames] 
     */
    public getAbTestVariation(emailId: string, archived?: boolean, includedProperties?: Array<string>, includeStats?: boolean, marketingCampaignNames?: boolean, variantStats?: boolean, workflowNames?: boolean, _options?: PromiseConfigurationOptions): Promise<PublicEmail> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAbTestVariation(emailId, archived, includedProperties, includeStats, marketingCampaignNames, variantStats, workflowNames, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the details for a marketing email.
     * Get the details of a specified marketing email
     * @param emailId The marketing email ID.
     * @param [archived] Whether to return only results that have been archived.
     * @param [includedProperties] 
     * @param [includeStats] Include statistics with email
     * @param [marketingCampaignNames] 
     * @param [variantStats] 
     * @param [workflowNames] 
     */
    public getByIdWithHttpInfo(emailId: string, archived?: boolean, includedProperties?: Array<string>, includeStats?: boolean, marketingCampaignNames?: boolean, variantStats?: boolean, workflowNames?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByIdWithHttpInfo(emailId, archived, includedProperties, includeStats, marketingCampaignNames, variantStats, workflowNames, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the details for a marketing email.
     * Get the details of a specified marketing email
     * @param emailId The marketing email ID.
     * @param [archived] Whether to return only results that have been archived.
     * @param [includedProperties] 
     * @param [includeStats] Include statistics with email
     * @param [marketingCampaignNames] 
     * @param [variantStats] 
     * @param [workflowNames] 
     */
    public getById(emailId: string, archived?: boolean, includedProperties?: Array<string>, includeStats?: boolean, marketingCampaignNames?: boolean, variantStats?: boolean, workflowNames?: boolean, _options?: PromiseConfigurationOptions): Promise<PublicEmail> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById(emailId, archived, includedProperties, includeStats, marketingCampaignNames, variantStats, workflowNames, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.
     * Get draft version of a marketing email
     * @param emailId The marketing email ID.
     */
    public getDraftWithHttpInfo(emailId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getDraftWithHttpInfo(emailId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.
     * Get draft version of a marketing email
     * @param emailId The marketing email ID.
     */
    public getDraft(emailId: string, _options?: PromiseConfigurationOptions): Promise<PublicEmail> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getDraft(emailId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a specific revision of a marketing email.
     * Get a revision of a marketing email
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public getRevisionByIdWithHttpInfo(emailId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicEmailVersion>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRevisionByIdWithHttpInfo(emailId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a specific revision of a marketing email.
     * Get a revision of a marketing email
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public getRevisionById(emailId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<PublicEmailVersion> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRevisionById(emailId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of all versions of a marketing email, with each entry including the full state of that particular version. To view the most recent version, sort by the updatedAt parameter. 
     * Get revisions of a marketing email
     * @param emailId The marketing email ID.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] The cursor token value to get the previous set of results. You can get this from the &#x60;paging.prev.before&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getRevisionsWithHttpInfo(emailId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPublicEmailVersion>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRevisionsWithHttpInfo(emailId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of all versions of a marketing email, with each entry including the full state of that particular version. To view the most recent version, sort by the updatedAt parameter. 
     * Get revisions of a marketing email
     * @param emailId The marketing email ID.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] The cursor token value to get the previous set of results. You can get this from the &#x60;paging.prev.before&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getRevisions(emailId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalPublicEmailVersion> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRevisions(emailId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to publish an automated email or send/schedule a regular email.
     * Publish or send a marketing email
     * @param emailId 
     */
    public publishOrSendWithHttpInfo(emailId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.publishOrSendWithHttpInfo(emailId, observableOptions);
        return result.toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to publish an automated email or send/schedule a regular email.
     * Publish or send a marketing email
     * @param emailId 
     */
    public publishOrSend(emailId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.publishOrSend(emailId, observableOptions);
        return result.toPromise();
    }

    /**
     * Resets the draft back to a copy of the live object.
     * Reset the draft version
     * @param emailId The marketing email ID.
     */
    public resetDraftWithHttpInfo(emailId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.resetDraftWithHttpInfo(emailId, observableOptions);
        return result.toPromise();
    }

    /**
     * Resets the draft back to a copy of the live object.
     * Reset the draft version
     * @param emailId The marketing email ID.
     */
    public resetDraft(emailId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.resetDraft(emailId, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. 
     * Restore a revision of a marketing email to DRAFT state
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public restoreDraftRevisionWithHttpInfo(emailId: string, revisionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.restoreDraftRevisionWithHttpInfo(emailId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. 
     * Restore a revision of a marketing email to DRAFT state
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public restoreDraftRevision(emailId: string, revisionId: number, _options?: PromiseConfigurationOptions): Promise<PublicEmail> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.restoreDraftRevision(emailId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.
     * Restore a revision of a marketing email
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public restoreRevisionWithHttpInfo(emailId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.restoreRevisionWithHttpInfo(emailId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.
     * Restore a revision of a marketing email
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public restoreRevision(emailId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.restoreRevision(emailId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.
     * Unpublish or cancel a marketing email
     * @param emailId 
     */
    public unpublishOrCancelWithHttpInfo(emailId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.unpublishOrCancelWithHttpInfo(emailId, observableOptions);
        return result.toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.
     * Unpublish or cancel a marketing email
     * @param emailId 
     */
    public unpublishOrCancel(emailId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.unpublishOrCancel(emailId, observableOptions);
        return result.toPromise();
    }

    /**
     * Change properties of a marketing email.
     * Update a marketing email
     * @param emailId The ID of the marketing email that should get updated
     * @param emailUpdateRequest
     * @param [archived] Whether to return only results that have been archived.
     */
    public updateWithHttpInfo(emailId: string, emailUpdateRequest: EmailUpdateRequest, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateWithHttpInfo(emailId, emailUpdateRequest, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Change properties of a marketing email.
     * Update a marketing email
     * @param emailId The ID of the marketing email that should get updated
     * @param emailUpdateRequest
     * @param [archived] Whether to return only results that have been archived.
     */
    public update(emailId: string, emailUpdateRequest: EmailUpdateRequest, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<PublicEmail> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update(emailId, emailUpdateRequest, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.
     * Create or update draft version
     * @param emailId The marketing email ID.
     * @param emailUpdateRequest
     */
    public upsertDraftWithHttpInfo(emailId: string, emailUpdateRequest: EmailUpdateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upsertDraftWithHttpInfo(emailId, emailUpdateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.
     * Create or update draft version
     * @param emailId The marketing email ID.
     * @param emailUpdateRequest
     */
    public upsertDraft(emailId: string, emailUpdateRequest: EmailUpdateRequest, _options?: PromiseConfigurationOptions): Promise<PublicEmail> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upsertDraft(emailId, emailUpdateRequest, observableOptions);
        return result.toPromise();
    }


}



