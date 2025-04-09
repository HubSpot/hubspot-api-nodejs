import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { MarketingEmailsApiRequestFactory, MarketingEmailsApiResponseProcessor} from "../apis/MarketingEmailsApi";
export class ObservableMarketingEmailsApi {
    private requestFactory: MarketingEmailsApiRequestFactory;
    private responseProcessor: MarketingEmailsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MarketingEmailsApiRequestFactory,
        responseProcessor?: MarketingEmailsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MarketingEmailsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MarketingEmailsApiResponseProcessor();
    }

    /**
     * Delete a marketing email.
     * @param emailId The ID of the marketing email to delete.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(emailId: string, archived?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(emailId, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a marketing email.
     * @param emailId The ID of the marketing email to delete.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(emailId: string, archived?: boolean, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(emailId, archived, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This will create a duplicate email with the same properties as the original, with the exception of a unique ID.
     * Clone a marketing email.
     * @param contentCloneRequestVNext 
     */
    public cloneWithHttpInfo(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Observable<HttpInfo<PublicEmail>> {
        const requestContextPromise = this.requestFactory.clone(contentCloneRequestVNext, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneWithHttpInfo(rsp)));
            }));
    }

    /**
     * This will create a duplicate email with the same properties as the original, with the exception of a unique ID.
     * Clone a marketing email.
     * @param contentCloneRequestVNext 
     */
    public clone(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Observable<PublicEmail> {
        return this.cloneWithHttpInfo(contentCloneRequestVNext, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Use this endpoint to create a new marketing email.
     * Create a new marketing email.
     * @param emailCreateRequest 
     */
    public createWithHttpInfo(emailCreateRequest: EmailCreateRequest, _options?: Configuration): Observable<HttpInfo<PublicEmail>> {
        const requestContextPromise = this.requestFactory.create(emailCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to create a new marketing email.
     * Create a new marketing email.
     * @param emailCreateRequest 
     */
    public create(emailCreateRequest: EmailCreateRequest, _options?: Configuration): Observable<PublicEmail> {
        return this.createWithHttpInfo(emailCreateRequest, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won\'t be created.
     * Create an A/B test variation of a marketing email.
     * @param abTestCreateRequestVNext 
     */
    public createAbTestVariationWithHttpInfo(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: Configuration): Observable<HttpInfo<PublicEmail>> {
        const requestContextPromise = this.requestFactory.createAbTestVariation(abTestCreateRequestVNext, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAbTestVariationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won\'t be created.
     * Create an A/B test variation of a marketing email.
     * @param abTestCreateRequestVNext 
     */
    public createAbTestVariation(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: Configuration): Observable<PublicEmail> {
        return this.createAbTestVariationWithHttpInfo(abTestCreateRequestVNext, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * This endpoint lets you obtain the variation of an A/B marketing email. If the email is variation A (master) it will return variation B (variant) and vice versa.
     * Get the variation of a an A/B marketing email
     * @param emailId The ID of an A/B marketing email.
     */
    public getAbTestVariationWithHttpInfo(emailId: string, _options?: Configuration): Observable<HttpInfo<PublicEmail>> {
        const requestContextPromise = this.requestFactory.getAbTestVariation(emailId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAbTestVariationWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint lets you obtain the variation of an A/B marketing email. If the email is variation A (master) it will return variation B (variant) and vice versa.
     * Get the variation of a an A/B marketing email
     * @param emailId The ID of an A/B marketing email.
     */
    public getAbTestVariation(emailId: string, _options?: Configuration): Observable<PublicEmail> {
        return this.getAbTestVariationWithHttpInfo(emailId, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Get the details for a marketing email.
     * Get the details of a specified marketing email.
     * @param emailId The marketing email ID.
     * @param includeStats Include statistics with email
     * @param marketingCampaignNames 
     * @param workflowNames 
     * @param includedProperties 
     * @param archived Whether to return only results that have been archived.
     */
    public getByIdWithHttpInfo(emailId: string, includeStats?: boolean, marketingCampaignNames?: boolean, workflowNames?: boolean, includedProperties?: Array<string>, archived?: boolean, _options?: Configuration): Observable<HttpInfo<PublicEmail>> {
        const requestContextPromise = this.requestFactory.getById(emailId, includeStats, marketingCampaignNames, workflowNames, includedProperties, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the details for a marketing email.
     * Get the details of a specified marketing email.
     * @param emailId The marketing email ID.
     * @param includeStats Include statistics with email
     * @param marketingCampaignNames 
     * @param workflowNames 
     * @param includedProperties 
     * @param archived Whether to return only results that have been archived.
     */
    public getById(emailId: string, includeStats?: boolean, marketingCampaignNames?: boolean, workflowNames?: boolean, includedProperties?: Array<string>, archived?: boolean, _options?: Configuration): Observable<PublicEmail> {
        return this.getByIdWithHttpInfo(emailId, includeStats, marketingCampaignNames, workflowNames, includedProperties, archived, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.
     * Get draft version of a marketing email
     * @param emailId The marketing email ID.
     */
    public getDraftWithHttpInfo(emailId: string, _options?: Configuration): Observable<HttpInfo<PublicEmail>> {
        const requestContextPromise = this.requestFactory.getDraft(emailId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.
     * Get draft version of a marketing email
     * @param emailId The marketing email ID.
     */
    public getDraft(emailId: string, _options?: Configuration): Observable<PublicEmail> {
        return this.getDraftWithHttpInfo(emailId, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * The results can be filtered, allowing you to find a specific set of emails. See the table below for a full list of filtering options.
     * Get all marketing emails for a HubSpot account.
     * @param createdAt Only return emails created at exactly the specified time.
     * @param createdAfter Only return emails created after the specified time.
     * @param createdBefore Only return emails created before the specified time.
     * @param updatedAt Only return emails last updated at exactly the specified time.
     * @param updatedAfter Only return emails last updated after the specified time.
     * @param updatedBefore Only return emails last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param includeStats Include statistics with emails.
     * @param marketingCampaignNames 
     * @param workflowNames 
     * @param type Email types to be filtered by. Multiple types can be included. All emails will be returned if not present.
     * @param isPublished Filter by published/draft emails. All emails will be returned if not present.
     * @param includedProperties 
     * @param archived Specifies whether to return archived emails. Defaults to &#x60;false&#x60;.
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, includeStats?: boolean, marketingCampaignNames?: boolean, workflowNames?: boolean, type?: 'AB_EMAIL' | 'BATCH_EMAIL' | 'LOCALTIME_EMAIL' | 'AUTOMATED_AB_EMAIL' | 'BLOG_EMAIL' | 'BLOG_EMAIL_CHILD' | 'RSS_EMAIL' | 'RSS_EMAIL_CHILD' | 'RESUBSCRIBE_EMAIL' | 'OPTIN_EMAIL' | 'OPTIN_FOLLOWUP_EMAIL' | 'AUTOMATED_EMAIL' | 'FEEDBACK_CES_EMAIL' | 'FEEDBACK_CUSTOM_EMAIL' | 'FEEDBACK_CUSTOM_SURVEY_EMAIL' | 'FEEDBACK_NPS_EMAIL' | 'FOLLOWUP_EMAIL' | 'LEADFLOW_EMAIL' | 'SINGLE_SEND_API' | 'MARKETING_SINGLE_SEND_API' | 'SMTP_TOKEN' | 'TICKET_EMAIL' | 'MEMBERSHIP_REGISTRATION_EMAIL' | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL' | 'MEMBERSHIP_PASSWORD_RESET_EMAIL' | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL' | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL' | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_OTP_LOGIN_EMAIL' | 'MEMBERSHIP_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_VERIFICATION_EMAIL', isPublished?: boolean, includedProperties?: Array<string>, archived?: boolean, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalPublicEmailForwardPaging>> {
        const requestContextPromise = this.requestFactory.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, includeStats, marketingCampaignNames, workflowNames, type, isPublished, includedProperties, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * The results can be filtered, allowing you to find a specific set of emails. See the table below for a full list of filtering options.
     * Get all marketing emails for a HubSpot account.
     * @param createdAt Only return emails created at exactly the specified time.
     * @param createdAfter Only return emails created after the specified time.
     * @param createdBefore Only return emails created before the specified time.
     * @param updatedAt Only return emails last updated at exactly the specified time.
     * @param updatedAfter Only return emails last updated after the specified time.
     * @param updatedBefore Only return emails last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param includeStats Include statistics with emails.
     * @param marketingCampaignNames 
     * @param workflowNames 
     * @param type Email types to be filtered by. Multiple types can be included. All emails will be returned if not present.
     * @param isPublished Filter by published/draft emails. All emails will be returned if not present.
     * @param includedProperties 
     * @param archived Specifies whether to return archived emails. Defaults to &#x60;false&#x60;.
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, includeStats?: boolean, marketingCampaignNames?: boolean, workflowNames?: boolean, type?: 'AB_EMAIL' | 'BATCH_EMAIL' | 'LOCALTIME_EMAIL' | 'AUTOMATED_AB_EMAIL' | 'BLOG_EMAIL' | 'BLOG_EMAIL_CHILD' | 'RSS_EMAIL' | 'RSS_EMAIL_CHILD' | 'RESUBSCRIBE_EMAIL' | 'OPTIN_EMAIL' | 'OPTIN_FOLLOWUP_EMAIL' | 'AUTOMATED_EMAIL' | 'FEEDBACK_CES_EMAIL' | 'FEEDBACK_CUSTOM_EMAIL' | 'FEEDBACK_CUSTOM_SURVEY_EMAIL' | 'FEEDBACK_NPS_EMAIL' | 'FOLLOWUP_EMAIL' | 'LEADFLOW_EMAIL' | 'SINGLE_SEND_API' | 'MARKETING_SINGLE_SEND_API' | 'SMTP_TOKEN' | 'TICKET_EMAIL' | 'MEMBERSHIP_REGISTRATION_EMAIL' | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL' | 'MEMBERSHIP_PASSWORD_RESET_EMAIL' | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL' | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL' | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_OTP_LOGIN_EMAIL' | 'MEMBERSHIP_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_VERIFICATION_EMAIL', isPublished?: boolean, includedProperties?: Array<string>, archived?: boolean, _options?: Configuration): Observable<CollectionResponseWithTotalPublicEmailForwardPaging> {
        return this.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, includeStats, marketingCampaignNames, workflowNames, type, isPublished, includedProperties, archived, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalPublicEmailForwardPaging>) => apiResponse.data));
    }

    /**
     * Get a specific revision of a marketing email.
     * Get a revision of a marketing email.
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public getRevisionByIdWithHttpInfo(emailId: string, revisionId: string, _options?: Configuration): Observable<HttpInfo<VersionPublicEmail>> {
        const requestContextPromise = this.requestFactory.getRevisionById(emailId, revisionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRevisionByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a specific revision of a marketing email.
     * Get a revision of a marketing email.
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public getRevisionById(emailId: string, revisionId: string, _options?: Configuration): Observable<VersionPublicEmail> {
        return this.getRevisionByIdWithHttpInfo(emailId, revisionId, _options).pipe(map((apiResponse: HttpInfo<VersionPublicEmail>) => apiResponse.data));
    }

    /**
     * Get a list of all versions of a marketing email, with each entry including the full state of that particular version. The current revision has the ID -1.
     * Get revisions of a marketing email
     * @param emailId The marketing email ID.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before The cursor token value to get the previous set of results. You can get this from the &#x60;paging.prev.before&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getRevisionsWithHttpInfo(emailId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalVersionPublicEmail>> {
        const requestContextPromise = this.requestFactory.getRevisions(emailId, after, before, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRevisionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all versions of a marketing email, with each entry including the full state of that particular version. The current revision has the ID -1.
     * Get revisions of a marketing email
     * @param emailId The marketing email ID.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before The cursor token value to get the previous set of results. You can get this from the &#x60;paging.prev.before&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getRevisions(emailId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<CollectionResponseWithTotalVersionPublicEmail> {
        return this.getRevisionsWithHttpInfo(emailId, after, before, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalVersionPublicEmail>) => apiResponse.data));
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to publish an automated email or send/schedule a regular email.
     * Publish or send a marketing email.
     * @param emailId 
     */
    public publishOrSendWithHttpInfo(emailId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.publishOrSend(emailId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publishOrSendWithHttpInfo(rsp)));
            }));
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to publish an automated email or send/schedule a regular email.
     * Publish or send a marketing email.
     * @param emailId 
     */
    public publishOrSend(emailId: string, _options?: Configuration): Observable<void> {
        return this.publishOrSendWithHttpInfo(emailId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Resets the draft back to a copy of the live object.
     * Reset Draft
     * @param emailId The marketing email ID.
     */
    public resetDraftWithHttpInfo(emailId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resetDraft(emailId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resets the draft back to a copy of the live object.
     * Reset Draft
     * @param emailId The marketing email ID.
     */
    public resetDraft(emailId: string, _options?: Configuration): Observable<void> {
        return this.resetDraftWithHttpInfo(emailId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. 
     * Restore a revision of a marketing email to DRAFT state
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public restoreDraftRevisionWithHttpInfo(emailId: string, revisionId: number, _options?: Configuration): Observable<HttpInfo<PublicEmail>> {
        const requestContextPromise = this.requestFactory.restoreDraftRevision(emailId, revisionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreDraftRevisionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. 
     * Restore a revision of a marketing email to DRAFT state
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public restoreDraftRevision(emailId: string, revisionId: number, _options?: Configuration): Observable<PublicEmail> {
        return this.restoreDraftRevisionWithHttpInfo(emailId, revisionId, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.
     * Restore a revision of a marketing email
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public restoreRevisionWithHttpInfo(emailId: string, revisionId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.restoreRevision(emailId, revisionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreRevisionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.
     * Restore a revision of a marketing email
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public restoreRevision(emailId: string, revisionId: string, _options?: Configuration): Observable<void> {
        return this.restoreRevisionWithHttpInfo(emailId, revisionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.
     * Unpublish or cancel a marketing email.
     * @param emailId 
     */
    public unpublishOrCancelWithHttpInfo(emailId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.unpublishOrCancel(emailId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unpublishOrCancelWithHttpInfo(rsp)));
            }));
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.
     * Unpublish or cancel a marketing email.
     * @param emailId 
     */
    public unpublishOrCancel(emailId: string, _options?: Configuration): Observable<void> {
        return this.unpublishOrCancelWithHttpInfo(emailId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Change properties of a marketing email.
     * Update a marketing email.
     * @param emailId The ID of the marketing email that should get updated
     * @param emailUpdateRequest A marketing email object with properties that should overwrite the corresponding properties of the marketing email.
     * @param archived Whether to return only results that have been archived.
     */
    public updateWithHttpInfo(emailId: string, emailUpdateRequest: EmailUpdateRequest, archived?: boolean, _options?: Configuration): Observable<HttpInfo<PublicEmail>> {
        const requestContextPromise = this.requestFactory.update(emailId, emailUpdateRequest, archived, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Change properties of a marketing email.
     * Update a marketing email.
     * @param emailId The ID of the marketing email that should get updated
     * @param emailUpdateRequest A marketing email object with properties that should overwrite the corresponding properties of the marketing email.
     * @param archived Whether to return only results that have been archived.
     */
    public update(emailId: string, emailUpdateRequest: EmailUpdateRequest, archived?: boolean, _options?: Configuration): Observable<PublicEmail> {
        return this.updateWithHttpInfo(emailId, emailUpdateRequest, archived, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.
     * Create or update draft version
     * @param emailId The marketing email ID.
     * @param emailUpdateRequest A marketing email object with properties that should overwrite the corresponding properties in the email\&#39;s current draft.
     */
    public upsertDraftWithHttpInfo(emailId: string, emailUpdateRequest: EmailUpdateRequest, _options?: Configuration): Observable<HttpInfo<PublicEmail>> {
        const requestContextPromise = this.requestFactory.upsertDraft(emailId, emailUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upsertDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.
     * Create or update draft version
     * @param emailId The marketing email ID.
     * @param emailUpdateRequest A marketing email object with properties that should overwrite the corresponding properties in the email\&#39;s current draft.
     */
    public upsertDraft(emailId: string, emailUpdateRequest: EmailUpdateRequest, _options?: Configuration): Observable<PublicEmail> {
        return this.upsertDraftWithHttpInfo(emailId, emailUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

}

import { StatisticsApiRequestFactory, StatisticsApiResponseProcessor} from "../apis/StatisticsApi";
export class ObservableStatisticsApi {
    private requestFactory: StatisticsApiRequestFactory;
    private responseProcessor: StatisticsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatisticsApiRequestFactory,
        responseProcessor?: StatisticsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatisticsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatisticsApiResponseProcessor();
    }

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics.
     * @param startTimestamp The start timestamp of the time span, in ISO8601 representation.
     * @param endTimestamp The end timestamp of the time span, in ISO8601 representation.
     * @param emailIds Filter by email IDs. Only include statistics of emails with these IDs.
     * @param property Specifies which email properties should be returned. All properties will be returned by default.
     */
    public getEmailsListWithHttpInfo(startTimestamp?: string, endTimestamp?: string, emailIds?: Array<number>, property?: string, _options?: Configuration): Observable<HttpInfo<AggregateEmailStatistics>> {
        const requestContextPromise = this.requestFactory.getEmailsList(startTimestamp, endTimestamp, emailIds, property, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics.
     * @param startTimestamp The start timestamp of the time span, in ISO8601 representation.
     * @param endTimestamp The end timestamp of the time span, in ISO8601 representation.
     * @param emailIds Filter by email IDs. Only include statistics of emails with these IDs.
     * @param property Specifies which email properties should be returned. All properties will be returned by default.
     */
    public getEmailsList(startTimestamp?: string, endTimestamp?: string, emailIds?: Array<number>, property?: string, _options?: Configuration): Observable<AggregateEmailStatistics> {
        return this.getEmailsListWithHttpInfo(startTimestamp, endTimestamp, emailIds, property, _options).pipe(map((apiResponse: HttpInfo<AggregateEmailStatistics>) => apiResponse.data));
    }

    /**
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals.
     * @param interval The interval to aggregate statistics for.
     * @param startTimestamp The start timestamp of the time span, in ISO8601 representation.
     * @param endTimestamp The end timestamp of the time span, in ISO8601 representation.
     * @param emailIds Filter by email IDs. Only include statistics of emails with these IDs.
     */
    public getHistogramWithHttpInfo(interval?: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'QUARTER_HOUR' | 'MINUTE' | 'SECOND', startTimestamp?: string, endTimestamp?: string, emailIds?: Array<number>, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalEmailStatisticIntervalNoPaging>> {
        const requestContextPromise = this.requestFactory.getHistogram(interval, startTimestamp, endTimestamp, emailIds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHistogramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals.
     * @param interval The interval to aggregate statistics for.
     * @param startTimestamp The start timestamp of the time span, in ISO8601 representation.
     * @param endTimestamp The end timestamp of the time span, in ISO8601 representation.
     * @param emailIds Filter by email IDs. Only include statistics of emails with these IDs.
     */
    public getHistogram(interval?: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'HOUR' | 'QUARTER_HOUR' | 'MINUTE' | 'SECOND', startTimestamp?: string, endTimestamp?: string, emailIds?: Array<number>, _options?: Configuration): Observable<CollectionResponseWithTotalEmailStatisticIntervalNoPaging> {
        return this.getHistogramWithHttpInfo(interval, startTimestamp, endTimestamp, emailIds, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalEmailStatisticIntervalNoPaging>) => apiResponse.data));
    }

}
