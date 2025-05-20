import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { AbTestCreateRequestVNext } from '../models/AbTestCreateRequestVNext';
import { AggregateEmailStatistics } from '../models/AggregateEmailStatistics';
import { CollectionResponseWithTotalEmailStatisticIntervalNoPaging } from '../models/CollectionResponseWithTotalEmailStatisticIntervalNoPaging';
import { CollectionResponseWithTotalPublicEmailForwardPaging } from '../models/CollectionResponseWithTotalPublicEmailForwardPaging';
import { CollectionResponseWithTotalVersionPublicEmail } from '../models/CollectionResponseWithTotalVersionPublicEmail';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { EmailCreateRequest } from '../models/EmailCreateRequest';
import { EmailUpdateRequest } from '../models/EmailUpdateRequest';
import { PublicEmail } from '../models/PublicEmail';
import { VersionPublicEmail } from '../models/VersionPublicEmail';

import { ObservableMarketingEmailsApi } from "./ObservableAPI";
import { MarketingEmailsApiRequestFactory, MarketingEmailsApiResponseProcessor} from "../apis/MarketingEmailsApi";

export interface MarketingEmailsApiArchiveRequest {
    /**
     * The ID of the marketing email to delete.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApiarchive
     */
    emailId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApiarchive
     */
    archived?: boolean
}

export interface MarketingEmailsApiCloneRequest {
    /**
     * 
     * @type ContentCloneRequestVNext
     * @memberof MarketingEmailsApiclone
     */
    contentCloneRequestVNext: ContentCloneRequestVNext
}

export interface MarketingEmailsApiCreateRequest {
    /**
     * 
     * @type EmailCreateRequest
     * @memberof MarketingEmailsApicreate
     */
    emailCreateRequest: EmailCreateRequest
}

export interface MarketingEmailsApiCreateAbTestVariationRequest {
    /**
     * 
     * @type AbTestCreateRequestVNext
     * @memberof MarketingEmailsApicreateAbTestVariation
     */
    abTestCreateRequestVNext: AbTestCreateRequestVNext
}

export interface MarketingEmailsApiGetAbTestVariationRequest {
    /**
     * The ID of an A/B marketing email.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApigetAbTestVariation
     */
    emailId: string
}

export interface MarketingEmailsApiGetByIdRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApigetById
     */
    emailId: string
    /**
     * Include statistics with email
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApigetById
     */
    includeStats?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApigetById
     */
    marketingCampaignNames?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApigetById
     */
    workflowNames?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof MarketingEmailsApigetById
     */
    includedProperties?: Array<string>
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApigetById
     */
    archived?: boolean
}

export interface MarketingEmailsApiGetDraftRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApigetDraft
     */
    emailId: string
}

export interface MarketingEmailsApiGetPageRequest {
    /**
     * Only return emails created at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof MarketingEmailsApigetPage
     */
    createdAt?: Date
    /**
     * Only return emails created after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof MarketingEmailsApigetPage
     */
    createdAfter?: Date
    /**
     * Only return emails created before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof MarketingEmailsApigetPage
     */
    createdBefore?: Date
    /**
     * Only return emails last updated at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof MarketingEmailsApigetPage
     */
    updatedAt?: Date
    /**
     * Only return emails last updated after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof MarketingEmailsApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return emails last updated before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof MarketingEmailsApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof MarketingEmailsApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof MarketingEmailsApigetPage
     */
    limit?: number
    /**
     * Include statistics with emails.
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApigetPage
     */
    includeStats?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApigetPage
     */
    marketingCampaignNames?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApigetPage
     */
    workflowNames?: boolean
    /**
     * Email types to be filtered by. Multiple types can be included. All emails will be returned if not present.
     * Defaults to: undefined
     * @type &#39;AB_EMAIL&#39; | &#39;BATCH_EMAIL&#39; | &#39;LOCALTIME_EMAIL&#39; | &#39;AUTOMATED_AB_EMAIL&#39; | &#39;BLOG_EMAIL&#39; | &#39;BLOG_EMAIL_CHILD&#39; | &#39;RSS_EMAIL&#39; | &#39;RSS_EMAIL_CHILD&#39; | &#39;RESUBSCRIBE_EMAIL&#39; | &#39;OPTIN_EMAIL&#39; | &#39;OPTIN_FOLLOWUP_EMAIL&#39; | &#39;AUTOMATED_EMAIL&#39; | &#39;FEEDBACK_CES_EMAIL&#39; | &#39;FEEDBACK_CUSTOM_EMAIL&#39; | &#39;FEEDBACK_CUSTOM_SURVEY_EMAIL&#39; | &#39;FEEDBACK_NPS_EMAIL&#39; | &#39;FOLLOWUP_EMAIL&#39; | &#39;LEADFLOW_EMAIL&#39; | &#39;SINGLE_SEND_API&#39; | &#39;MARKETING_SINGLE_SEND_API&#39; | &#39;SMTP_TOKEN&#39; | &#39;TICKET_EMAIL&#39; | &#39;MEMBERSHIP_REGISTRATION_EMAIL&#39; | &#39;MEMBERSHIP_PASSWORD_SAVED_EMAIL&#39; | &#39;MEMBERSHIP_PASSWORD_RESET_EMAIL&#39; | &#39;MEMBERSHIP_EMAIL_VERIFICATION_EMAIL&#39; | &#39;MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL&#39; | &#39;MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL&#39; | &#39;MEMBERSHIP_OTP_LOGIN_EMAIL&#39; | &#39;MEMBERSHIP_FOLLOW_UP_EMAIL&#39; | &#39;MEMBERSHIP_VERIFICATION_EMAIL&#39;
     * @memberof MarketingEmailsApigetPage
     */
    type?: 'AB_EMAIL' | 'BATCH_EMAIL' | 'LOCALTIME_EMAIL' | 'AUTOMATED_AB_EMAIL' | 'BLOG_EMAIL' | 'BLOG_EMAIL_CHILD' | 'RSS_EMAIL' | 'RSS_EMAIL_CHILD' | 'RESUBSCRIBE_EMAIL' | 'OPTIN_EMAIL' | 'OPTIN_FOLLOWUP_EMAIL' | 'AUTOMATED_EMAIL' | 'FEEDBACK_CES_EMAIL' | 'FEEDBACK_CUSTOM_EMAIL' | 'FEEDBACK_CUSTOM_SURVEY_EMAIL' | 'FEEDBACK_NPS_EMAIL' | 'FOLLOWUP_EMAIL' | 'LEADFLOW_EMAIL' | 'SINGLE_SEND_API' | 'MARKETING_SINGLE_SEND_API' | 'SMTP_TOKEN' | 'TICKET_EMAIL' | 'MEMBERSHIP_REGISTRATION_EMAIL' | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL' | 'MEMBERSHIP_PASSWORD_RESET_EMAIL' | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL' | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL' | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_OTP_LOGIN_EMAIL' | 'MEMBERSHIP_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_VERIFICATION_EMAIL'
    /**
     * Filter by published/draft emails. All emails will be returned if not present.
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApigetPage
     */
    isPublished?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof MarketingEmailsApigetPage
     */
    includedProperties?: Array<string>
    /**
     * Filter by campaign GUID. All emails will be returned if not present.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApigetPage
     */
    campaign?: string
    /**
     * Specifies whether to return archived emails. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApigetPage
     */
    archived?: boolean
}

export interface MarketingEmailsApiGetRevisionByIdRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApigetRevisionById
     */
    emailId: string
    /**
     * The ID of a revision.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApigetRevisionById
     */
    revisionId: string
}

export interface MarketingEmailsApiGetRevisionsRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApigetRevisions
     */
    emailId: string
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApigetRevisions
     */
    after?: string
    /**
     * The cursor token value to get the previous set of results. You can get this from the &#x60;paging.prev.before&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApigetRevisions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof MarketingEmailsApigetRevisions
     */
    limit?: number
}

export interface MarketingEmailsApiPublishOrSendRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApipublishOrSend
     */
    emailId: string
}

export interface MarketingEmailsApiResetDraftRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApiresetDraft
     */
    emailId: string
}

export interface MarketingEmailsApiRestoreDraftRevisionRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApirestoreDraftRevision
     */
    emailId: string
    /**
     * The ID of a revision.
     * Defaults to: undefined
     * @type number
     * @memberof MarketingEmailsApirestoreDraftRevision
     */
    revisionId: number
}

export interface MarketingEmailsApiRestoreRevisionRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApirestoreRevision
     */
    emailId: string
    /**
     * The ID of a revision.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApirestoreRevision
     */
    revisionId: string
}

export interface MarketingEmailsApiUnpublishOrCancelRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApiunpublishOrCancel
     */
    emailId: string
}

export interface MarketingEmailsApiUpdateRequest {
    /**
     * The ID of the marketing email that should get updated
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApiupdate
     */
    emailId: string
    /**
     * A marketing email object with properties that should overwrite the corresponding properties of the marketing email.
     * @type EmailUpdateRequest
     * @memberof MarketingEmailsApiupdate
     */
    emailUpdateRequest: EmailUpdateRequest
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof MarketingEmailsApiupdate
     */
    archived?: boolean
}

export interface MarketingEmailsApiUpsertDraftRequest {
    /**
     * The marketing email ID.
     * Defaults to: undefined
     * @type string
     * @memberof MarketingEmailsApiupsertDraft
     */
    emailId: string
    /**
     * A marketing email object with properties that should overwrite the corresponding properties in the email\&#39;s current draft.
     * @type EmailUpdateRequest
     * @memberof MarketingEmailsApiupsertDraft
     */
    emailUpdateRequest: EmailUpdateRequest
}

export class ObjectMarketingEmailsApi {
    private api: ObservableMarketingEmailsApi

    public constructor(configuration: Configuration, requestFactory?: MarketingEmailsApiRequestFactory, responseProcessor?: MarketingEmailsApiResponseProcessor) {
        this.api = new ObservableMarketingEmailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a marketing email.
     * @param param the request object
     */
    public archiveWithHttpInfo(param: MarketingEmailsApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.emailId, param.archived,  options).toPromise();
    }

    /**
     * Delete a marketing email.
     * @param param the request object
     */
    public archive(param: MarketingEmailsApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.emailId, param.archived,  options).toPromise();
    }

    /**
     * This will create a duplicate email with the same properties as the original, with the exception of a unique ID.
     * Clone a marketing email.
     * @param param the request object
     */
    public cloneWithHttpInfo(param: MarketingEmailsApiCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.cloneWithHttpInfo(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * This will create a duplicate email with the same properties as the original, with the exception of a unique ID.
     * Clone a marketing email.
     * @param param the request object
     */
    public clone(param: MarketingEmailsApiCloneRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.clone(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Use this endpoint to create a new marketing email.
     * Create a new marketing email.
     * @param param the request object
     */
    public createWithHttpInfo(param: MarketingEmailsApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.createWithHttpInfo(param.emailCreateRequest,  options).toPromise();
    }

    /**
     * Use this endpoint to create a new marketing email.
     * Create a new marketing email.
     * @param param the request object
     */
    public create(param: MarketingEmailsApiCreateRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.create(param.emailCreateRequest,  options).toPromise();
    }

    /**
     * Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won\'t be created.
     * Create an A/B test variation of a marketing email.
     * @param param the request object
     */
    public createAbTestVariationWithHttpInfo(param: MarketingEmailsApiCreateAbTestVariationRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.createAbTestVariationWithHttpInfo(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won\'t be created.
     * Create an A/B test variation of a marketing email.
     * @param param the request object
     */
    public createAbTestVariation(param: MarketingEmailsApiCreateAbTestVariationRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.createAbTestVariation(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * This endpoint lets you obtain the variation of an A/B marketing email. If the email is variation A (master) it will return variation B (variant) and vice versa.
     * Get the variation of a an A/B marketing email
     * @param param the request object
     */
    public getAbTestVariationWithHttpInfo(param: MarketingEmailsApiGetAbTestVariationRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.getAbTestVariationWithHttpInfo(param.emailId,  options).toPromise();
    }

    /**
     * This endpoint lets you obtain the variation of an A/B marketing email. If the email is variation A (master) it will return variation B (variant) and vice versa.
     * Get the variation of a an A/B marketing email
     * @param param the request object
     */
    public getAbTestVariation(param: MarketingEmailsApiGetAbTestVariationRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.getAbTestVariation(param.emailId,  options).toPromise();
    }

    /**
     * Get the details for a marketing email.
     * Get the details of a specified marketing email.
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: MarketingEmailsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.getByIdWithHttpInfo(param.emailId, param.includeStats, param.marketingCampaignNames, param.workflowNames, param.includedProperties, param.archived,  options).toPromise();
    }

    /**
     * Get the details for a marketing email.
     * Get the details of a specified marketing email.
     * @param param the request object
     */
    public getById(param: MarketingEmailsApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.getById(param.emailId, param.includeStats, param.marketingCampaignNames, param.workflowNames, param.includedProperties, param.archived,  options).toPromise();
    }

    /**
     * Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.
     * Get draft version of a marketing email
     * @param param the request object
     */
    public getDraftWithHttpInfo(param: MarketingEmailsApiGetDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.getDraftWithHttpInfo(param.emailId,  options).toPromise();
    }

    /**
     * Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.
     * Get draft version of a marketing email
     * @param param the request object
     */
    public getDraft(param: MarketingEmailsApiGetDraftRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.getDraft(param.emailId,  options).toPromise();
    }

    /**
     * The results can be filtered, allowing you to find a specific set of emails. See the table below for a full list of filtering options.
     * Get all marketing emails for a HubSpot account.
     * @param param the request object
     */
    public getPageWithHttpInfo(param: MarketingEmailsApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPublicEmailForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.includeStats, param.marketingCampaignNames, param.workflowNames, param.type, param.isPublished, param.includedProperties, param.campaign, param.archived,  options).toPromise();
    }

    /**
     * The results can be filtered, allowing you to find a specific set of emails. See the table below for a full list of filtering options.
     * Get all marketing emails for a HubSpot account.
     * @param param the request object
     */
    public getPage(param: MarketingEmailsApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalPublicEmailForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.includeStats, param.marketingCampaignNames, param.workflowNames, param.type, param.isPublished, param.includedProperties, param.campaign, param.archived,  options).toPromise();
    }

    /**
     * Get a specific revision of a marketing email.
     * Get a revision of a marketing email.
     * @param param the request object
     */
    public getRevisionByIdWithHttpInfo(param: MarketingEmailsApiGetRevisionByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<VersionPublicEmail>> {
        return this.api.getRevisionByIdWithHttpInfo(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * Get a specific revision of a marketing email.
     * Get a revision of a marketing email.
     * @param param the request object
     */
    public getRevisionById(param: MarketingEmailsApiGetRevisionByIdRequest, options?: ConfigurationOptions): Promise<VersionPublicEmail> {
        return this.api.getRevisionById(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * Get a list of all versions of a marketing email, with each entry including the full state of that particular version. The current revision has the ID -1.
     * Get revisions of a marketing email
     * @param param the request object
     */
    public getRevisionsWithHttpInfo(param: MarketingEmailsApiGetRevisionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalVersionPublicEmail>> {
        return this.api.getRevisionsWithHttpInfo(param.emailId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Get a list of all versions of a marketing email, with each entry including the full state of that particular version. The current revision has the ID -1.
     * Get revisions of a marketing email
     * @param param the request object
     */
    public getRevisions(param: MarketingEmailsApiGetRevisionsRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalVersionPublicEmail> {
        return this.api.getRevisions(param.emailId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to publish an automated email or send/schedule a regular email.
     * Publish or send a marketing email.
     * @param param the request object
     */
    public publishOrSendWithHttpInfo(param: MarketingEmailsApiPublishOrSendRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.publishOrSendWithHttpInfo(param.emailId,  options).toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to publish an automated email or send/schedule a regular email.
     * Publish or send a marketing email.
     * @param param the request object
     */
    public publishOrSend(param: MarketingEmailsApiPublishOrSendRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.publishOrSend(param.emailId,  options).toPromise();
    }

    /**
     * Resets the draft back to a copy of the live object.
     * Reset Draft
     * @param param the request object
     */
    public resetDraftWithHttpInfo(param: MarketingEmailsApiResetDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.resetDraftWithHttpInfo(param.emailId,  options).toPromise();
    }

    /**
     * Resets the draft back to a copy of the live object.
     * Reset Draft
     * @param param the request object
     */
    public resetDraft(param: MarketingEmailsApiResetDraftRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.resetDraft(param.emailId,  options).toPromise();
    }

    /**
     * Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. 
     * Restore a revision of a marketing email to DRAFT state
     * @param param the request object
     */
    public restoreDraftRevisionWithHttpInfo(param: MarketingEmailsApiRestoreDraftRevisionRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.restoreDraftRevisionWithHttpInfo(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. 
     * Restore a revision of a marketing email to DRAFT state
     * @param param the request object
     */
    public restoreDraftRevision(param: MarketingEmailsApiRestoreDraftRevisionRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.restoreDraftRevision(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.
     * Restore a revision of a marketing email
     * @param param the request object
     */
    public restoreRevisionWithHttpInfo(param: MarketingEmailsApiRestoreRevisionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.restoreRevisionWithHttpInfo(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.
     * Restore a revision of a marketing email
     * @param param the request object
     */
    public restoreRevision(param: MarketingEmailsApiRestoreRevisionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.restoreRevision(param.emailId, param.revisionId,  options).toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.
     * Unpublish or cancel a marketing email.
     * @param param the request object
     */
    public unpublishOrCancelWithHttpInfo(param: MarketingEmailsApiUnpublishOrCancelRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.unpublishOrCancelWithHttpInfo(param.emailId,  options).toPromise();
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.
     * Unpublish or cancel a marketing email.
     * @param param the request object
     */
    public unpublishOrCancel(param: MarketingEmailsApiUnpublishOrCancelRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.unpublishOrCancel(param.emailId,  options).toPromise();
    }

    /**
     * Change properties of a marketing email.
     * Update a marketing email.
     * @param param the request object
     */
    public updateWithHttpInfo(param: MarketingEmailsApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.updateWithHttpInfo(param.emailId, param.emailUpdateRequest, param.archived,  options).toPromise();
    }

    /**
     * Change properties of a marketing email.
     * Update a marketing email.
     * @param param the request object
     */
    public update(param: MarketingEmailsApiUpdateRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.update(param.emailId, param.emailUpdateRequest, param.archived,  options).toPromise();
    }

    /**
     * Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.
     * Create or update draft version
     * @param param the request object
     */
    public upsertDraftWithHttpInfo(param: MarketingEmailsApiUpsertDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicEmail>> {
        return this.api.upsertDraftWithHttpInfo(param.emailId, param.emailUpdateRequest,  options).toPromise();
    }

    /**
     * Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.
     * Create or update draft version
     * @param param the request object
     */
    public upsertDraft(param: MarketingEmailsApiUpsertDraftRequest, options?: ConfigurationOptions): Promise<PublicEmail> {
        return this.api.upsertDraft(param.emailId, param.emailUpdateRequest,  options).toPromise();
    }

}

import { ObservableStatisticsApi } from "./ObservableAPI";
import { StatisticsApiRequestFactory, StatisticsApiResponseProcessor} from "../apis/StatisticsApi";

export interface StatisticsApiGetEmailsListRequest {
    /**
     * The start timestamp of the time span, in ISO8601 representation.
     * Defaults to: undefined
     * @type string
     * @memberof StatisticsApigetEmailsList
     */
    startTimestamp?: string
    /**
     * The end timestamp of the time span, in ISO8601 representation.
     * Defaults to: undefined
     * @type string
     * @memberof StatisticsApigetEmailsList
     */
    endTimestamp?: string
    /**
     * Filter by email IDs. Only include statistics of emails with these IDs.
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof StatisticsApigetEmailsList
     */
    emailIds?: Array<number>
    /**
     * Specifies which email properties should be returned. All properties will be returned by default.
     * Defaults to: undefined
     * @type string
     * @memberof StatisticsApigetEmailsList
     */
    property?: string
}

export interface StatisticsApiGetHistogramRequest {
    /**
     * The interval to aggregate statistics for.
     * Defaults to: undefined
     * @type &#39;YEAR&#39; | &#39;QUARTER&#39; | &#39;MONTH&#39; | &#39;WEEK&#39; | &#39;DAY&#39; | &#39;HOUR&#39; | &#39;QUARTER_HOUR&#39; | &#39;MINUTE&#39; | &#39;SECOND&#39;
     * @memberof StatisticsApigetHistogram
     */
    interval?: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'QUARTER_HOUR' | 'MINUTE' | 'SECOND'
    /**
     * The start timestamp of the time span, in ISO8601 representation.
     * Defaults to: undefined
     * @type string
     * @memberof StatisticsApigetHistogram
     */
    startTimestamp?: string
    /**
     * The end timestamp of the time span, in ISO8601 representation.
     * Defaults to: undefined
     * @type string
     * @memberof StatisticsApigetHistogram
     */
    endTimestamp?: string
    /**
     * Filter by email IDs. Only include statistics of emails with these IDs.
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof StatisticsApigetHistogram
     */
    emailIds?: Array<number>
}

export class ObjectStatisticsApi {
    private api: ObservableStatisticsApi

    public constructor(configuration: Configuration, requestFactory?: StatisticsApiRequestFactory, responseProcessor?: StatisticsApiResponseProcessor) {
        this.api = new ObservableStatisticsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics.
     * @param param the request object
     */
    public getEmailsListWithHttpInfo(param: StatisticsApiGetEmailsListRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<AggregateEmailStatistics>> {
        return this.api.getEmailsListWithHttpInfo(param.startTimestamp, param.endTimestamp, param.emailIds, param.property,  options).toPromise();
    }

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics.
     * @param param the request object
     */
    public getEmailsList(param: StatisticsApiGetEmailsListRequest = {}, options?: ConfigurationOptions): Promise<AggregateEmailStatistics> {
        return this.api.getEmailsList(param.startTimestamp, param.endTimestamp, param.emailIds, param.property,  options).toPromise();
    }

    /**
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals.
     * @param param the request object
     */
    public getHistogramWithHttpInfo(param: StatisticsApiGetHistogramRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalEmailStatisticIntervalNoPaging>> {
        return this.api.getHistogramWithHttpInfo(param.interval, param.startTimestamp, param.endTimestamp, param.emailIds,  options).toPromise();
    }

    /**
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals.
     * @param param the request object
     */
    public getHistogram(param: StatisticsApiGetHistogramRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalEmailStatisticIntervalNoPaging> {
        return this.api.getHistogram(param.interval, param.startTimestamp, param.endTimestamp, param.emailIds,  options).toPromise();
    }

}
