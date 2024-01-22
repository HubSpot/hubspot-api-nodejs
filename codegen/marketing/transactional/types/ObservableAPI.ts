import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseSmtpApiTokenViewForwardPaging } from '../models/CollectionResponseSmtpApiTokenViewForwardPaging';
import { EmailSendStatusView } from '../models/EmailSendStatusView';
import { PublicSingleSendRequestEgg } from '../models/PublicSingleSendRequestEgg';
import { SmtpApiTokenRequestEgg } from '../models/SmtpApiTokenRequestEgg';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';

import { PublicSmtpTokensApiRequestFactory, PublicSmtpTokensApiResponseProcessor} from "../apis/PublicSmtpTokensApi";
export class ObservablePublicSmtpTokensApi {
    private requestFactory: PublicSmtpTokensApiRequestFactory;
    private responseProcessor: PublicSmtpTokensApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicSmtpTokensApiRequestFactory,
        responseProcessor?: PublicSmtpTokensApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicSmtpTokensApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicSmtpTokensApiResponseProcessor();
    }

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public archiveTokenWithHttpInfo(tokenId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveToken(tokenId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public archiveToken(tokenId: string, _options?: Configuration): Observable<void> {
        return this.archiveTokenWithHttpInfo(tokenId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param smtpApiTokenRequestEgg A request object that includes the campaign name tied to the token and whether contacts should be created for email recipients.
     */
    public createTokenWithHttpInfo(smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg, _options?: Configuration): Observable<HttpInfo<SmtpApiTokenView>> {
        const requestContextPromise = this.requestFactory.createToken(smtpApiTokenRequestEgg, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param smtpApiTokenRequestEgg A request object that includes the campaign name tied to the token and whether contacts should be created for email recipients.
     */
    public createToken(smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg, _options?: Configuration): Observable<SmtpApiTokenView> {
        return this.createTokenWithHttpInfo(smtpApiTokenRequestEgg, _options).pipe(map((apiResponse: HttpInfo<SmtpApiTokenView>) => apiResponse.data));
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public getTokenByIdWithHttpInfo(tokenId: string, _options?: Configuration): Observable<HttpInfo<SmtpApiTokenView>> {
        const requestContextPromise = this.requestFactory.getTokenById(tokenId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTokenByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public getTokenById(tokenId: string, _options?: Configuration): Observable<SmtpApiTokenView> {
        return this.getTokenByIdWithHttpInfo(tokenId, _options).pipe(map((apiResponse: HttpInfo<SmtpApiTokenView>) => apiResponse.data));
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param campaignName A name for the campaign tied to the SMTP API token.
     * @param emailCampaignId Identifier assigned to the campaign provided during the token creation.
     * @param after Starting point to get the next set of results.
     * @param limit Maximum number of tokens to return.
     */
    public getTokensPageWithHttpInfo(campaignName?: string, emailCampaignId?: string, after?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseSmtpApiTokenViewForwardPaging>> {
        const requestContextPromise = this.requestFactory.getTokensPage(campaignName, emailCampaignId, after, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTokensPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param campaignName A name for the campaign tied to the SMTP API token.
     * @param emailCampaignId Identifier assigned to the campaign provided during the token creation.
     * @param after Starting point to get the next set of results.
     * @param limit Maximum number of tokens to return.
     */
    public getTokensPage(campaignName?: string, emailCampaignId?: string, after?: string, limit?: number, _options?: Configuration): Observable<CollectionResponseSmtpApiTokenViewForwardPaging> {
        return this.getTokensPageWithHttpInfo(campaignName, emailCampaignId, after, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseSmtpApiTokenViewForwardPaging>) => apiResponse.data));
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param tokenId Identifier generated when a token is created.
     */
    public resetPasswordWithHttpInfo(tokenId: string, _options?: Configuration): Observable<HttpInfo<SmtpApiTokenView>> {
        const requestContextPromise = this.requestFactory.resetPassword(tokenId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetPasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param tokenId Identifier generated when a token is created.
     */
    public resetPassword(tokenId: string, _options?: Configuration): Observable<SmtpApiTokenView> {
        return this.resetPasswordWithHttpInfo(tokenId, _options).pipe(map((apiResponse: HttpInfo<SmtpApiTokenView>) => apiResponse.data));
    }

}

import { SingleSendApiRequestFactory, SingleSendApiResponseProcessor} from "../apis/SingleSendApi";
export class ObservableSingleSendApi {
    private requestFactory: SingleSendApiRequestFactory;
    private responseProcessor: SingleSendApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SingleSendApiRequestFactory,
        responseProcessor?: SingleSendApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SingleSendApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SingleSendApiResponseProcessor();
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single transactional email asynchronously.
     * @param publicSingleSendRequestEgg A request object describing the email to send.
     */
    public sendEmailWithHttpInfo(publicSingleSendRequestEgg: PublicSingleSendRequestEgg, _options?: Configuration): Observable<HttpInfo<EmailSendStatusView>> {
        const requestContextPromise = this.requestFactory.sendEmail(publicSingleSendRequestEgg, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single transactional email asynchronously.
     * @param publicSingleSendRequestEgg A request object describing the email to send.
     */
    public sendEmail(publicSingleSendRequestEgg: PublicSingleSendRequestEgg, _options?: Configuration): Observable<EmailSendStatusView> {
        return this.sendEmailWithHttpInfo(publicSingleSendRequestEgg, _options).pipe(map((apiResponse: HttpInfo<EmailSendStatusView>) => apiResponse.data));
    }

}
