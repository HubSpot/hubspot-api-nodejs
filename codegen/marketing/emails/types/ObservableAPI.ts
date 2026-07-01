import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class ObservableBasicApi {
    private requestFactory: BasicApiRequestFactory;
    private responseProcessor: BasicApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicApiResponseProcessor();
    }

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics
     * @param [emailIds] Filter by email IDs. Only include statistics of emails with these IDs.
     * @param [endTimestamp] The end timestamp of the time span, in ISO8601 representation.
     * @param [property] Specifies which email properties should be returned. All properties will be returned by default.
     * @param [startTimestamp] The start timestamp of the time span, in ISO8601 representation.
     */
    public getEmailsListWithHttpInfo(emailIds?: Array<number>, endTimestamp?: Date, property?: string, startTimestamp?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<AggregateEmailStatistics>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getEmailsList(emailIds, endTimestamp, property, startTimestamp, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to get aggregated statistics of emails sent in a specified time span. It also returns the list of emails that were sent during the time span.
     * Get aggregated statistics
     * @param [emailIds] Filter by email IDs. Only include statistics of emails with these IDs.
     * @param [endTimestamp] The end timestamp of the time span, in ISO8601 representation.
     * @param [property] Specifies which email properties should be returned. All properties will be returned by default.
     * @param [startTimestamp] The start timestamp of the time span, in ISO8601 representation.
     */
    public getEmailsList(emailIds?: Array<number>, endTimestamp?: Date, property?: string, startTimestamp?: Date, _options?: ConfigurationOptions): Observable<AggregateEmailStatistics> {
        return this.getEmailsListWithHttpInfo(emailIds, endTimestamp, property, startTimestamp, _options).pipe(map((apiResponse: HttpInfo<AggregateEmailStatistics>) => apiResponse.data));
    }

    /**
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals
     * @param [emailIds] Filter by email IDs. Only include statistics of emails with these IDs.
     * @param [endTimestamp] The end timestamp of the time span, in ISO8601 representation.
     * @param [interval] The interval to aggregate statistics for.
     * @param [startTimestamp] The start timestamp of the time span, in ISO8601 representation.
     */
    public getHistogramWithHttpInfo(emailIds?: Array<number>, endTimestamp?: Date, interval?: 'DAY' | 'HOUR' | 'MINUTE' | 'MONTH' | 'QUARTER' | 'QUARTER_HOUR' | 'SECOND' | 'WEEK' | 'YEAR', startTimestamp?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponseWithTotalEmailStatisticInterval>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getHistogram(emailIds, endTimestamp, interval, startTimestamp, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHistogramWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get aggregated statistics in intervals for a specified time span. Each interval contains aggregated statistics of the emails that were sent in that time.
     * Get aggregated statistic intervals
     * @param [emailIds] Filter by email IDs. Only include statistics of emails with these IDs.
     * @param [endTimestamp] The end timestamp of the time span, in ISO8601 representation.
     * @param [interval] The interval to aggregate statistics for.
     * @param [startTimestamp] The start timestamp of the time span, in ISO8601 representation.
     */
    public getHistogram(emailIds?: Array<number>, endTimestamp?: Date, interval?: 'DAY' | 'HOUR' | 'MINUTE' | 'MONTH' | 'QUARTER' | 'QUARTER_HOUR' | 'SECOND' | 'WEEK' | 'YEAR', startTimestamp?: Date, _options?: ConfigurationOptions): Observable<CollectionResponseWithTotalEmailStatisticInterval> {
        return this.getHistogramWithHttpInfo(emailIds, endTimestamp, interval, startTimestamp, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalEmailStatisticInterval>) => apiResponse.data));
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
    public marketingV3EmailsWithHttpInfo(after?: string, archived?: boolean, campaign?: string, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, includedProperties?: Array<string>, includeStats?: boolean, isPublished?: boolean, limit?: number, marketingCampaignNames?: boolean, publishedAfter?: Date, publishedAt?: Date, publishedBefore?: Date, sort?: Array<string>, type?: 'AB_EMAIL' | 'AUTOMATED_AB_EMAIL' | 'AUTOMATED_EMAIL' | 'BATCH_EMAIL' | 'BLOG_EMAIL' | 'BLOG_EMAIL_CHILD' | 'FEEDBACK_CES_EMAIL' | 'FEEDBACK_CUSTOM_EMAIL' | 'FEEDBACK_CUSTOM_SURVEY_EMAIL' | 'FEEDBACK_NPS_EMAIL' | 'FOLLOWUP_EMAIL' | 'LEADFLOW_EMAIL' | 'LOCALTIME_EMAIL' | 'MANAGE_PREFERENCES_EMAIL' | 'MARKETING_SINGLE_SEND_API' | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL' | 'MEMBERSHIP_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_OTP_LOGIN_EMAIL' | 'MEMBERSHIP_PASSWORD_RESET_EMAIL' | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL' | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL' | 'MEMBERSHIP_REGISTRATION_EMAIL' | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_VERIFICATION_EMAIL' | 'OPTIN_EMAIL' | 'OPTIN_FOLLOWUP_EMAIL' | 'RESUBSCRIBE_EMAIL' | 'RSS_EMAIL' | 'RSS_EMAIL_CHILD' | 'SINGLE_SEND_API' | 'SMTP_TOKEN' | 'TICKET_EMAIL', updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, variantStats?: boolean, workflowNames?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponseWithTotalPublicEmail>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.marketingV3Emails(after, archived, campaign, createdAfter, createdAt, createdBefore, includedProperties, includeStats, isPublished, limit, marketingCampaignNames, publishedAfter, publishedAt, publishedBefore, sort, type, updatedAfter, updatedAt, updatedBefore, variantStats, workflowNames, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.marketingV3EmailsWithHttpInfo(rsp)));
            }));
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
    public marketingV3Emails(after?: string, archived?: boolean, campaign?: string, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, includedProperties?: Array<string>, includeStats?: boolean, isPublished?: boolean, limit?: number, marketingCampaignNames?: boolean, publishedAfter?: Date, publishedAt?: Date, publishedBefore?: Date, sort?: Array<string>, type?: 'AB_EMAIL' | 'AUTOMATED_AB_EMAIL' | 'AUTOMATED_EMAIL' | 'BATCH_EMAIL' | 'BLOG_EMAIL' | 'BLOG_EMAIL_CHILD' | 'FEEDBACK_CES_EMAIL' | 'FEEDBACK_CUSTOM_EMAIL' | 'FEEDBACK_CUSTOM_SURVEY_EMAIL' | 'FEEDBACK_NPS_EMAIL' | 'FOLLOWUP_EMAIL' | 'LEADFLOW_EMAIL' | 'LOCALTIME_EMAIL' | 'MANAGE_PREFERENCES_EMAIL' | 'MARKETING_SINGLE_SEND_API' | 'MEMBERSHIP_EMAIL_VERIFICATION_EMAIL' | 'MEMBERSHIP_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_OTP_LOGIN_EMAIL' | 'MEMBERSHIP_PASSWORD_RESET_EMAIL' | 'MEMBERSHIP_PASSWORD_SAVED_EMAIL' | 'MEMBERSHIP_PASSWORDLESS_AUTH_EMAIL' | 'MEMBERSHIP_REGISTRATION_EMAIL' | 'MEMBERSHIP_REGISTRATION_FOLLOW_UP_EMAIL' | 'MEMBERSHIP_VERIFICATION_EMAIL' | 'OPTIN_EMAIL' | 'OPTIN_FOLLOWUP_EMAIL' | 'RESUBSCRIBE_EMAIL' | 'RSS_EMAIL' | 'RSS_EMAIL_CHILD' | 'SINGLE_SEND_API' | 'SMTP_TOKEN' | 'TICKET_EMAIL', updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, variantStats?: boolean, workflowNames?: boolean, _options?: ConfigurationOptions): Observable<CollectionResponseWithTotalPublicEmail> {
        return this.marketingV3EmailsWithHttpInfo(after, archived, campaign, createdAfter, createdAt, createdBefore, includedProperties, includeStats, isPublished, limit, marketingCampaignNames, publishedAfter, publishedAt, publishedBefore, sort, type, updatedAfter, updatedAt, updatedBefore, variantStats, workflowNames, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalPublicEmail>) => apiResponse.data));
    }

    /**
     * @param emailCreateRequest
     */
    public marketingV3Emails_1WithHttpInfo(emailCreateRequest: EmailCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PublicEmail>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.marketingV3Emails_1(emailCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.marketingV3Emails_1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param emailCreateRequest
     */
    public marketingV3Emails_1(emailCreateRequest: EmailCreateRequest, _options?: ConfigurationOptions): Observable<PublicEmail> {
        return this.marketingV3Emails_1WithHttpInfo(emailCreateRequest, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

}

import { EmailsApiRequestFactory, EmailsApiResponseProcessor} from "../apis/EmailsApi";
export class ObservableEmailsApi {
    private requestFactory: EmailsApiRequestFactory;
    private responseProcessor: EmailsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailsApiRequestFactory,
        responseProcessor?: EmailsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailsApiResponseProcessor();
    }

    /**
     * Delete a marketing email by its ID
     * Delete a marketing email
     * @param emailId The ID of the marketing email to delete.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(emailId: string, archived?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.archive(emailId, archived, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a marketing email by its ID
     * Delete a marketing email
     * @param emailId The ID of the marketing email to delete.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archive(emailId: string, archived?: boolean, _options?: ConfigurationOptions): Observable<void> {
        return this.archiveWithHttpInfo(emailId, archived, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This will create a duplicate email with the same properties as the original, with the exception of a unique ID.
     * Clone a marketing email
     * @param emailCloneRequestVNext
     */
    public cloneWithHttpInfo(emailCloneRequestVNext: EmailCloneRequestVNext, _options?: ConfigurationOptions): Observable<HttpInfo<PublicEmail>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.clone(emailCloneRequestVNext, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneWithHttpInfo(rsp)));
            }));
    }

    /**
     * This will create a duplicate email with the same properties as the original, with the exception of a unique ID.
     * Clone a marketing email
     * @param emailCloneRequestVNext
     */
    public clone(emailCloneRequestVNext: EmailCloneRequestVNext, _options?: ConfigurationOptions): Observable<PublicEmail> {
        return this.cloneWithHttpInfo(emailCloneRequestVNext, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won\'t be created.
     * Create an A/B test variation of a marketing email
     * @param abTestCreateRequestVNext
     */
    public createAbTestVariationWithHttpInfo(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: ConfigurationOptions): Observable<HttpInfo<PublicEmail>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.createAbTestVariation(abTestCreateRequestVNext, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAbTestVariationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a variation of a marketing email for an A/B test. The new variation will be created as a draft. If an active variation already exists, a new one won\'t be created.
     * Create an A/B test variation of a marketing email
     * @param abTestCreateRequestVNext
     */
    public createAbTestVariation(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: ConfigurationOptions): Observable<PublicEmail> {
        return this.createAbTestVariationWithHttpInfo(abTestCreateRequestVNext, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
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
    public getAbTestVariationWithHttpInfo(emailId: string, archived?: boolean, includedProperties?: Array<string>, includeStats?: boolean, marketingCampaignNames?: boolean, variantStats?: boolean, workflowNames?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<PublicEmail>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getAbTestVariation(emailId, archived, includedProperties, includeStats, marketingCampaignNames, variantStats, workflowNames, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAbTestVariationWithHttpInfo(rsp)));
            }));
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
    public getAbTestVariation(emailId: string, archived?: boolean, includedProperties?: Array<string>, includeStats?: boolean, marketingCampaignNames?: boolean, variantStats?: boolean, workflowNames?: boolean, _options?: ConfigurationOptions): Observable<PublicEmail> {
        return this.getAbTestVariationWithHttpInfo(emailId, archived, includedProperties, includeStats, marketingCampaignNames, variantStats, workflowNames, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
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
    public getByIdWithHttpInfo(emailId: string, archived?: boolean, includedProperties?: Array<string>, includeStats?: boolean, marketingCampaignNames?: boolean, variantStats?: boolean, workflowNames?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<PublicEmail>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getById(emailId, archived, includedProperties, includeStats, marketingCampaignNames, variantStats, workflowNames, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
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
    public getById(emailId: string, archived?: boolean, includedProperties?: Array<string>, includeStats?: boolean, marketingCampaignNames?: boolean, variantStats?: boolean, workflowNames?: boolean, _options?: ConfigurationOptions): Observable<PublicEmail> {
        return this.getByIdWithHttpInfo(emailId, archived, includedProperties, includeStats, marketingCampaignNames, variantStats, workflowNames, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Get the draft version of an email (if it exists). If no draft version exists, the published email is returned.
     * Get draft version of a marketing email
     * @param emailId The marketing email ID.
     */
    public getDraftWithHttpInfo(emailId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicEmail>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getDraft(emailId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
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
    public getDraft(emailId: string, _options?: ConfigurationOptions): Observable<PublicEmail> {
        return this.getDraftWithHttpInfo(emailId, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Get a specific revision of a marketing email.
     * Get a revision of a marketing email
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public getRevisionByIdWithHttpInfo(emailId: string, revisionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicEmailVersion>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getRevisionById(emailId, revisionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRevisionByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a specific revision of a marketing email.
     * Get a revision of a marketing email
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public getRevisionById(emailId: string, revisionId: string, _options?: ConfigurationOptions): Observable<PublicEmailVersion> {
        return this.getRevisionByIdWithHttpInfo(emailId, revisionId, _options).pipe(map((apiResponse: HttpInfo<PublicEmailVersion>) => apiResponse.data));
    }

    /**
     * Get a list of all versions of a marketing email, with each entry including the full state of that particular version. To view the most recent version, sort by the updatedAt parameter. 
     * Get revisions of a marketing email
     * @param emailId The marketing email ID.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] The cursor token value to get the previous set of results. You can get this from the &#x60;paging.prev.before&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getRevisionsWithHttpInfo(emailId: string, after?: string, before?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponseWithTotalPublicEmailVersion>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getRevisions(emailId, after, before, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRevisionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all versions of a marketing email, with each entry including the full state of that particular version. To view the most recent version, sort by the updatedAt parameter. 
     * Get revisions of a marketing email
     * @param emailId The marketing email ID.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] The cursor token value to get the previous set of results. You can get this from the &#x60;paging.prev.before&#x60; JSON property of a paged response containing more results.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getRevisions(emailId: string, after?: string, before?: string, limit?: number, _options?: ConfigurationOptions): Observable<CollectionResponseWithTotalPublicEmailVersion> {
        return this.getRevisionsWithHttpInfo(emailId, after, before, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalPublicEmailVersion>) => apiResponse.data));
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to publish an automated email or send/schedule a regular email.
     * Publish or send a marketing email
     * @param emailId 
     */
    public publishOrSendWithHttpInfo(emailId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.publishOrSend(emailId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.publishOrSendWithHttpInfo(rsp)));
            }));
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to publish an automated email or send/schedule a regular email.
     * Publish or send a marketing email
     * @param emailId 
     */
    public publishOrSend(emailId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.publishOrSendWithHttpInfo(emailId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Resets the draft back to a copy of the live object.
     * Reset the draft version
     * @param emailId The marketing email ID.
     */
    public resetDraftWithHttpInfo(emailId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.resetDraft(emailId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resets the draft back to a copy of the live object.
     * Reset the draft version
     * @param emailId The marketing email ID.
     */
    public resetDraft(emailId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.resetDraftWithHttpInfo(emailId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Restores a previous revision of a marketing email to DRAFT state. If there is currently something in the draft for that object, it is overwritten. 
     * Restore a revision of a marketing email to DRAFT state
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public restoreDraftRevisionWithHttpInfo(emailId: string, revisionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<PublicEmail>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.restoreDraftRevision(emailId, revisionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
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
    public restoreDraftRevision(emailId: string, revisionId: number, _options?: ConfigurationOptions): Observable<PublicEmail> {
        return this.restoreDraftRevisionWithHttpInfo(emailId, revisionId, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Restores a previous revision of a marketing email. The current revision becomes old, and the restored revision is given a new version number.
     * Restore a revision of a marketing email
     * @param emailId The marketing email ID.
     * @param revisionId The ID of a revision.
     */
    public restoreRevisionWithHttpInfo(emailId: string, revisionId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.restoreRevision(emailId, revisionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
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
    public restoreRevision(emailId: string, revisionId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.restoreRevisionWithHttpInfo(emailId, revisionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.
     * Unpublish or cancel a marketing email
     * @param emailId 
     */
    public unpublishOrCancelWithHttpInfo(emailId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.unpublishOrCancel(emailId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unpublishOrCancelWithHttpInfo(rsp)));
            }));
    }

    /**
     * If you have a Marketing Hub Enterprise account or the transactional email add-on, you can use this endpoint to unpublish an automated email or cancel a regular email. If the email is already in the process of being sent, canceling might not be possible.
     * Unpublish or cancel a marketing email
     * @param emailId 
     */
    public unpublishOrCancel(emailId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.unpublishOrCancelWithHttpInfo(emailId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Change properties of a marketing email.
     * Update a marketing email
     * @param emailId The ID of the marketing email that should get updated
     * @param emailUpdateRequest
     * @param [archived] Whether to return only results that have been archived.
     */
    public updateWithHttpInfo(emailId: string, emailUpdateRequest: EmailUpdateRequest, archived?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<PublicEmail>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.update(emailId, emailUpdateRequest, archived, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Change properties of a marketing email.
     * Update a marketing email
     * @param emailId The ID of the marketing email that should get updated
     * @param emailUpdateRequest
     * @param [archived] Whether to return only results that have been archived.
     */
    public update(emailId: string, emailUpdateRequest: EmailUpdateRequest, archived?: boolean, _options?: ConfigurationOptions): Observable<PublicEmail> {
        return this.updateWithHttpInfo(emailId, emailUpdateRequest, archived, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

    /**
     * Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.
     * Create or update draft version
     * @param emailId The marketing email ID.
     * @param emailUpdateRequest
     */
    public upsertDraftWithHttpInfo(emailId: string, emailUpdateRequest: EmailUpdateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PublicEmail>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.upsertDraft(emailId, emailUpdateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upsertDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create or update the draft version of a marketing email. If no draft exists, the system creates a draft from the current “live” email then applies the request body to that draft. The draft version only lives on the buffer—the email is not cloned.
     * Create or update draft version
     * @param emailId The marketing email ID.
     * @param emailUpdateRequest
     */
    public upsertDraft(emailId: string, emailUpdateRequest: EmailUpdateRequest, _options?: ConfigurationOptions): Observable<PublicEmail> {
        return this.upsertDraftWithHttpInfo(emailId, emailUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<PublicEmail>) => apiResponse.data));
    }

}
