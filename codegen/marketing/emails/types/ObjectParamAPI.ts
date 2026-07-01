import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiGetEmailsListRequest {
    /**
     * Filter by email IDs. Only include statistics of emails with these IDs.
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof BasicApigetEmailsList
     */
    emailIds?: Array<number>
    /**
     * The end timestamp of the time span, in ISO8601 representation.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetEmailsList
     */
    endTimestamp?: Date
    /**
     * Specifies which email properties should be returned. All properties will be returned by default.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetEmailsList
     */
    property?: string
    /**
     * The start timestamp of the time span, in ISO8601 representation.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetEmailsList
     */
    startTimestamp?: Date
}

export interface BasicApiGetHistogramRequest {
    /**
     * Filter by email IDs. Only include statistics of emails with these IDs.
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof BasicApigetHistogram
     */
    emailIds?: Array<number>
    /**
     * The end timestamp of the time span, in ISO8601 representation.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetHistogram
     */
    endTimestamp?: Date
    /**
     * The interval to aggregate statistics for.
     * Defaults to: undefined
     * @type &#39;DAY&#39; | &#39;HOUR&#39; | &#39;MINUTE&#39; | &#39;MONTH&#39; | &#39;QUARTER&#39; | &#39;QUARTER_HOUR&#39; | &#39;SECOND&#39; | &#39;WEEK&#39; | &#39;YEAR&#39;
     * @memberof BasicApigetHistogram
     */
    interval?: 'DAY' | 'HOUR' | 'MINUTE' | 'MONTH' | 'QUARTER' | 'QUARTER_HOUR' | 'SECOND' | 'WEEK' | 'YEAR'
    /**
     * The start timestamp of the time span, in ISO8601 representation.
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApigetHistogram
     */
    startTimestamp?: Date
}

export interface BasicApiMarketingV3EmailsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApimarketingV3Emails
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApimarketingV3Emails
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApimarketingV3Emails
     */
    campaign?: string
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApimarketingV3Emails
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApimarketingV3Emails
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApimarketingV3Emails
     */
    createdBefore?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApimarketingV3Emails
     */
    includedProperties?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApimarketingV3Emails
     */
    includeStats?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApimarketingV3Emails
     */
    isPublished?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApimarketingV3Emails
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApimarketingV3Emails
     */
    marketingCampaignNames?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApimarketingV3Emails
     */
    publishedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApimarketingV3Emails
     */
    publishedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApimarketingV3Emails
     */
    publishedBefore?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApimarketingV3Emails
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type &#39;AB_EMAIL&#39; | &#39;AUTOMATED_AB_EMAIL&#39; | &#39;AUTOMATED_EMAIL&#39; | &#39;BATCH_EMAIL&#39; | &#39;BLOG_EMAIL&#39; | &#39;BLOG_EMAIL_CHILD&#39; | &#39;FEEDBACK_CES_EMAIL&#39; | &#39;FEEDBACK_CUSTOM_EMAIL&#39; | &#39;FEEDBACK_CUSTOM_SURVEY_EMAIL&#39; | &#39;FEEDBACK_NPS_EMAIL&#39; | &#39;FOLLOWUP_EMAIL&#39; | &#39;LEADFLOW_EMAIL&#39; | &#39;LOCALTIME_EMAIL&#39; | &#39;MANAGE_PREFERENCES_EMAIL&#39; | &#39;MARKETING_SINGLE_SEND_API&#39; | &#39;MEMBERSHIP_EMAIL_VERIFICATION_EMAIL&#39; | &#39;MEMBERSHIP_FOLLOW_UP_EMAIL&#39; | &#39;MEMBERSHIP_OTP_LOGIN_EMAIL&#39; | &#39;MEMBERSHIP_PASSWORD_RESET_EMAIL&#39; | &#39;MEMBERSHIP_PASSWORD_SAVED_EMAIL&#39; | &#39;MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL&#39; | &#39;MEMBERSHIP_REGISTRATION_EMAIL&#39; | &#39;MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL&#39; | &#39;MEMBERSHIP_VERIFICATION_EMAIL&#39; | &#39;OPTIN_EMAIL&#39; | &#39;OPTIN_FOLLOWUP_EMAIL&#39; | &#39;RESUBSCRIBE_EMAIL&#39; | &#39;RSS_EMAIL&#39; | &#39;RSS_EMAIL_CHILD&#39; | &#39;SINGLE_SEND_API&#39; | &#39;SMTP_TOKEN&#39; | &#39;TICKET_EMAIL&#39;
     * @memberof BasicApimarketingV3Emails
     */
    type?: 'AB_EMAIL' | 'AUTOMATED_AB_EMAIL' | 'AUTOMATED_EMAIL' | 'BATCH_EMAIL' | 'BLOG_EMAIL' | 'BLOG_EMAIL_CHILD' | 'FEEDBACK_CES_EMAIL' | 'FEEDBACK_CUSTOM_EMAIL' | 'FEEDBACK_CUSTOM_SURVEY_EMAIL' | 'FEEDBACK_NPS_EMAIL' | 'FOLLOWUP_EMAIL' | 'LEADFLOW_EMAIL' | 'LOCALTIME_EMAIL' | 'MANAGE_PREFERENCES_EMAIL' | 'MARKETING_SINGLE_SEND_API' | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL' | 'MEMBERSHIP_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_OTP_LOGIN_EMAIL' | 'MEMBERSHIP_PASSWORD_RESET_EMAIL' | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL' | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL' | 'MEMBERSHIP_REGISTRATION_EMAIL' | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_VERIFICATION_EMAIL' | 'OPTIN_EMAIL' | 'OPTIN_FOLLOWUP_EMAIL' | 'RESUBSCRIBE_EMAIL' | 'RSS_EMAIL' | 'RSS_EMAIL_CHILD' | 'SINGLE_SEND_API' | 'SMTP_TOKEN' | 'TICKET_EMAIL'
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApimarketingV3Emails
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApimarketingV3Emails
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApimarketingV3Emails
     */
    updatedBefore?: Date
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApimarketingV3Emails
     */
    variantStats?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApimarketingV3Emails
     */
    workflowNames?: boolean
}

export interface BasicApiMarketingV3Emails0Request {
    /**
     * 
     * @type EmailCreateRequest
     * @memberof BasicApimarketingV3Emails_1
     */
    emailCreateRequest: EmailCreateRequest
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics
     * @param param the request object
     */
    public getEmailsListWithHttpInfo(param: BasicApiGetEmailsListRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<AggregateEmailStatistics>> {
        return this.api.getEmailsListWithHttpInfo(param.emailIds, param.endTimestamp, param.property, param.startTimestamp,  options).toPromise();
    }

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics
     * @param param the request object
     */
    public getEmailsList(param: BasicApiGetEmailsListRequest = {}, options?: ConfigurationOptions): Promise<AggregateEmailStatistics> {
        return this.api.getEmailsList(param.emailIds, param.endTimestamp, param.property, param.startTimestamp,  options).toPromise();
    }

    /**
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals
     * @param param the request object
     */
    public getHistogramWithHttpInfo(param: BasicApiGetHistogramRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalEmailStatisticInterval>> {
        return this.api.getHistogramWithHttpInfo(param.emailIds, param.endTimestamp, param.interval, param.startTimestamp,  options).toPromise();
    }

    /**
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals
     * @param param the request object
     */
    public getHistogram(param: BasicApiGetHistogramRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalEmailStatisticInterval> {
        return this.api.getHistogram(param.emailIds, param.endTimestamp, param.interval, param.startTimestamp,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public marketingV3EmailsWithHttpInfo(param: BasicApiMarketingV3EmailsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPublicEmail>> {
        return this.api.marketingV3EmailsWithHttpInfo(param.after, param.archived, param.campaign, param.createdAfter, param.createdAt, param.createdBefore, param.includedProperties, param.includeStats, param.isPublished, param.limit, param.marketingCampaignNames, param.publishedAfter, param.publishedAt, param.publishedBefore, param.sort, param.type, param.updatedAfter, param.updatedAt, param.updatedBefore, param.variantStats, param.workflowNames,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public marketingV3Emails(param: BasicApiMarketingV3EmailsRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalPublicEmail> {
        return this.api.marketingV3Emails(param.after, param.archived, param.campaign, param.createdAfter, param.createdAt, param.createdBefore, param.includedProperties, param.includeStats, param.isPublished, param.limit, param.marketingCampaignNames, param.publishedAfter, param.publishedAt, param.publishedBefore, param.sort, param.type, param.updatedAfter, param.updatedAt, param.updatedBefore, param.variantStats, param.workflowNames,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public marketingV3Emails_1WithHttpInfo(param: BasicApiMarketingV3Emails0Request, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.marketingV3Emails_1WithHttpInfo(param.emailCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public marketingV3Emails_1(param: BasicApiMarketingV3Emails0Request, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.marketingV3Emails_1(param.emailCreateRequest,  options).toPromise();
    }

}

import { ObservableEmailsApi } from "./ObservableAPI";
import { EmailsApiRequestFactory, EmailsApiResponseProcessor} from "../apis/EmailsApi";

export interface EmailsApiArchiveRequest {
    /**
     * The ID of the marketing email to delete.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApiarchive
     */
    emailId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApiarchive
     */
    archived?: boolean
}

export interface EmailsApiCloneRequest {
    /**
     * 
     * @type EmailCloneRequestVNext
     * @memberof EmailsApiclone
     */
    emailCloneRequestVNext: EmailCloneRequestVNext
}

export interface EmailsApiCreateAbTestVariationRequest {
    /**
     * 
     * @type AbTestCreateRequestVNext
     * @memberof EmailsApicreateAbTestVariation
     */
    abTestCreateRequestVNext: AbTestCreateRequestVNext
}

export interface EmailsApiGetAbTestVariationRequest {
    /**
     * The ID of an A/B marketing email.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApigetAbTestVariation
     */
    emailId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApigetAbTestVariation
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof EmailsApigetAbTestVariation
     */
    includedProperties?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApigetAbTestVariation
     */
    includeStats?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApigetAbTestVariation
     */
    marketingCampaignNames?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApigetAbTestVariation
     */
    variantStats?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApigetAbTestVariation
     */
    workflowNames?: boolean
}

export interface EmailsApiGetByIdRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApigetById
     */
    emailId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApigetById
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof EmailsApigetById
     */
    includedProperties?: Array<string>
    /**
     * Include statistics with email
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApigetById
     */
    includeStats?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApigetById
     */
    marketingCampaignNames?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApigetById
     */
    variantStats?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApigetById
     */
    workflowNames?: boolean
}

export interface EmailsApiGetDraftRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApigetDraft
     */
    emailId: string
}

export interface EmailsApiGetRevisionByIdRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApigetRevisionById
     */
    emailId: string
    /**
     * The ID of a revision.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApigetRevisionById
     */
    revisionId: string
}

export interface EmailsApiGetRevisionsRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApigetRevisions
     */
    emailId: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApigetRevisions
     */
    after?: string
    /**
     * The cursor token value to get the previous set of results. You can get this from the &#x60;paging.prev.before&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApigetRevisions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof EmailsApigetRevisions
     */
    limit?: number
}

export interface EmailsApiPublishOrSendRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApipublishOrSend
     */
    emailId: string
}

export interface EmailsApiResetDraftRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApiresetDraft
     */
    emailId: string
}

export interface EmailsApiRestoreDraftRevisionRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApirestoreDraftRevision
     */
    emailId: string
    /**
     * The ID of a revision.
     * Defaults to: undefined
     * @type number
     * @memberof EmailsApirestoreDraftRevision
     */
    revisionId: number
}

export interface EmailsApiRestoreRevisionRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApirestoreRevision
     */
    emailId: string
    /**
     * The ID of a revision.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApirestoreRevision
     */
    revisionId: string
}

export interface EmailsApiUnpublishOrCancelRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApiunpublishOrCancel
     */
    emailId: string
}

export interface EmailsApiUpdateRequest {
    /**
     * The ID of the marketing email that should get updated
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApiupdate
     */
    emailId: string
    /**
     * 
     * @type EmailUpdateRequest
     * @memberof EmailsApiupdate
     */
    emailUpdateRequest: EmailUpdateRequest
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof EmailsApiupdate
     */
    archived?: boolean
}

export interface EmailsApiUpsertDraftRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof EmailsApiupsertDraft
     */
    emailId: string
    /**
     * 
     * @type EmailUpdateRequest
     * @memberof EmailsApiupsertDraft
     */
    emailUpdateRequest: EmailUpdateRequest
}

export class ObjectEmailsApi {
    private api: ObservableEmailsApi

    public constructor(configuration: Configuration, requestFactory?: EmailsApiRequestFactory, responseProcessor?: EmailsApiResponseProcessor) {
        this.api = new ObservableEmailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a marketing email by its ID
     * Delete a marketing email
     * @param param the request object
     */
    public archiveWithHttpInfo(param: EmailsApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.emailId, param.archived,  options).toPromise();
    }

    /**
     * Delete a marketing email by its ID
     * Delete a marketing email
     * @param param the request object
     */
    public archive(param: EmailsApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.emailId, param.archived,  options).toPromise();
    }

    /**
     * This will create a duplicate email with the same properties as the original, with the exception of a unique ID.
     * Clone a marketing email
     * @param param the request object
     */
    public cloneWithHttpInfo(param: EmailsApiCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.cloneWithHttpInfo(param.emailCloneRequestVNext,  options).toPromise();
    }

    /**
     * This will create a duplicate email with the same properties as the original, with the exception of a unique ID.
     * Clone a marketing email
     * @param param the request object
     */
    public clone(param: EmailsApiCloneRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.clone(param.emailCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won\'t be created.
     * Create an A/B test variation of a marketing email
     * @param param the request object
     */
    public createAbTestVariationWithHttpInfo(param: EmailsApiCreateAbTestVariationRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.createAbTestVariationWithHttpInfo(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won\'t be created.
     * Create an A/B test variation of a marketing email
     * @param param the request object
     */
    public createAbTestVariation(param: EmailsApiCreateAbTestVariationRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.createAbTestVariation(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * This endpoint lets you obtain the variation of an A/B marketing email. If the email is variation A (master) it will return variation B (variant) and vice versa.
     * Get the variation of a an A/B marketing email
     * @param param the request object
     */
    public getAbTestVariationWithHttpInfo(param: EmailsApiGetAbTestVariationRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.getAbTestVariationWithHttpInfo(param.emailId, param.archived, param.includedProperties, param.includeStats, param.marketingCampaignNames, param.variantStats, param.workflowNames,  options).toPromise();
    }

    /**
     * This endpoint lets you obtain the variation of an A/B marketing email. If the email is variation A (master) it will return variation B (variant) and vice versa.
     * Get the variation of a an A/B marketing email
     * @param param the request object
     */
    public getAbTestVariation(param: EmailsApiGetAbTestVariationRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.getAbTestVariation(param.emailId, param.archived, param.includedProperties, param.includeStats, param.marketingCampaignNames, param.variantStats, param.workflowNames,  options).toPromise();
    }

    /**
     * Get the details for a marketing email.
     * Get the details of a specified marketing email
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: EmailsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.getByIdWithHttpInfo(param.emailId, param.archived, param.includedProperties, param.includeStats, param.marketingCampaignNames, param.variantStats, param.workflowNames,  options).toPromise();
    }

    /**
     * Get the details for a marketing email.
     * Get the details of a specified marketing email
     * @param param the request object
     */
    public getById(param: EmailsApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.getById(param.emailId, param.archived, param.includedProperties, param.includeStats, param.marketingCampaignNames, param.variantStats, param.workflowNames,  options).toPromise();
    }

    /**
     * Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.
     * Get draft version of a marketing email
     * @param param the request object
     */
    public getDraftWithHttpInfo(param: EmailsApiGetDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.getDraftWithHttpInfo(param.emailId,  options).toPromise();
    }

    /**
     * Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.
     * Get draft version of a marketing email
     * @param param the request object
     */
    public getDraft(param: EmailsApiGetDraftRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.getDraft(param.emailId,  options).toPromise();
    }

    /**
     * Get a specific revision of a marketing email.
     * Get a revision of a marketing email
     * @param param the request object
     */
    public getRevisionByIdWithHttpInfo(param: EmailsApiGetRevisionByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmailVersion>> {
        return this.api.getRevisionByIdWithHttpInfo(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * Get a specific revision of a marketing email.
     * Get a revision of a marketing email
     * @param param the request object
     */
    public getRevisionById(param: EmailsApiGetRevisionByIdRequest, options?: ConfigurationOptions): Promise<PublicEmailVersion> {
        return this.api.getRevisionById(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * Get a list of all versions of a marketing email, with each entry including the full state of that particular version. To view the most recent version, sort by the updatedAt parameter. 
     * Get revisions of a marketing email
     * @param param the request object
     */
    public getRevisionsWithHttpInfo(param: EmailsApiGetRevisionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPublicEmailVersion>> {
        return this.api.getRevisionsWithHttpInfo(param.emailId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Get a list of all versions of a marketing email, with each entry including the full state of that particular version. To view the most recent version, sort by the updatedAt parameter. 
     * Get revisions of a marketing email
     * @param param the request object
     */
    public getRevisions(param: EmailsApiGetRevisionsRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalPublicEmailVersion> {
        return this.api.getRevisions(param.emailId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to publish an automated email or send/schedule a regular email.
     * Publish or send a marketing email
     * @param param the request object
     */
    public publishOrSendWithHttpInfo(param: EmailsApiPublishOrSendRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.publishOrSendWithHttpInfo(param.emailId,  options).toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to publish an automated email or send/schedule a regular email.
     * Publish or send a marketing email
     * @param param the request object
     */
    public publishOrSend(param: EmailsApiPublishOrSendRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.publishOrSend(param.emailId,  options).toPromise();
    }

    /**
     * Resets the draft back to a copy of the live object.
     * Reset the draft version
     * @param param the request object
     */
    public resetDraftWithHttpInfo(param: EmailsApiResetDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.resetDraftWithHttpInfo(param.emailId,  options).toPromise();
    }

    /**
     * Resets the draft back to a copy of the live object.
     * Reset the draft version
     * @param param the request object
     */
    public resetDraft(param: EmailsApiResetDraftRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.resetDraft(param.emailId,  options).toPromise();
    }

    /**
     * Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. 
     * Restore a revision of a marketing email to DRAFT state
     * @param param the request object
     */
    public restoreDraftRevisionWithHttpInfo(param: EmailsApiRestoreDraftRevisionRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.restoreDraftRevisionWithHttpInfo(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. 
     * Restore a revision of a marketing email to DRAFT state
     * @param param the request object
     */
    public restoreDraftRevision(param: EmailsApiRestoreDraftRevisionRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.restoreDraftRevision(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.
     * Restore a revision of a marketing email
     * @param param the request object
     */
    public restoreRevisionWithHttpInfo(param: EmailsApiRestoreRevisionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.restoreRevisionWithHttpInfo(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.
     * Restore a revision of a marketing email
     * @param param the request object
     */
    public restoreRevision(param: EmailsApiRestoreRevisionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.restoreRevision(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.
     * Unpublish or cancel a marketing email
     * @param param the request object
     */
    public unpublishOrCancelWithHttpInfo(param: EmailsApiUnpublishOrCancelRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.unpublishOrCancelWithHttpInfo(param.emailId,  options).toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.
     * Unpublish or cancel a marketing email
     * @param param the request object
     */
    public unpublishOrCancel(param: EmailsApiUnpublishOrCancelRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.unpublishOrCancel(param.emailId,  options).toPromise();
    }

    /**
     * Change properties of a marketing email.
     * Update a marketing email
     * @param param the request object
     */
    public updateWithHttpInfo(param: EmailsApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.updateWithHttpInfo(param.emailId, param.emailUpdateRequest, param.archived,  options).toPromise();
    }

    /**
     * Change properties of a marketing email.
     * Update a marketing email
     * @param param the request object
     */
    public update(param: EmailsApiUpdateRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.update(param.emailId, param.emailUpdateRequest, param.archived,  options).toPromise();
    }

    /**
     * Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.
     * Create or update draft version
     * @param param the request object
     */
    public upsertDraftWithHttpInfo(param: EmailsApiUpsertDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.upsertDraftWithHttpInfo(param.emailId, param.emailUpdateRequest,  options).toPromise();
    }

    /**
     * Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.
     * Create or update draft version
     * @param param the request object
     */
    public upsertDraft(param: EmailsApiUpsertDraftRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.upsertDraft(param.emailId, param.emailUpdateRequest,  options).toPromise();
    }

}
