import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponseSmtpApiTokenViewForwardPaging } from '../models/CollectionResponseSmtpApiTokenViewForwardPaging';
import { EmailSendStatusView } from '../models/EmailSendStatusView';
import { PublicSingleSendRequestEgg } from '../models/PublicSingleSendRequestEgg';
import { SmtpApiTokenRequestEgg } from '../models/SmtpApiTokenRequestEgg';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';
import { ObservablePublicSMTPTokensApi } from './ObservableAPI';

import { PublicSMTPTokensApiRequestFactory, PublicSMTPTokensApiResponseProcessor} from "../apis/PublicSMTPTokensApi";
export class PromisePublicSMTPTokensApi {
    private api: ObservablePublicSMTPTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicSMTPTokensApiRequestFactory,
        responseProcessor?: PublicSMTPTokensApiResponseProcessor
    ) {
        this.api = new ObservablePublicSMTPTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public archiveTokenWithHttpInfo(tokenId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveTokenWithHttpInfo(tokenId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public archiveToken(tokenId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archiveToken(tokenId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param smtpApiTokenRequestEgg A request object that includes the campaign name tied to the token and whether contacts should be created for email recipients.
     */
    public createTokenWithHttpInfo(smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SmtpApiTokenView>> {
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
        const result = this.api.createTokenWithHttpInfo(smtpApiTokenRequestEgg, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param smtpApiTokenRequestEgg A request object that includes the campaign name tied to the token and whether contacts should be created for email recipients.
     */
    public createToken(smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg, _options?: PromiseConfigurationOptions): Promise<SmtpApiTokenView> {
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
        const result = this.api.createToken(smtpApiTokenRequestEgg, observableOptions);
        return result.toPromise();
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public getTokenByIdWithHttpInfo(tokenId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SmtpApiTokenView>> {
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
        const result = this.api.getTokenByIdWithHttpInfo(tokenId, observableOptions);
        return result.toPromise();
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    public getTokenById(tokenId: string, _options?: PromiseConfigurationOptions): Promise<SmtpApiTokenView> {
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
        const result = this.api.getTokenById(tokenId, observableOptions);
        return result.toPromise();
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param [campaignName] A name for the campaign tied to the SMTP API token.
     * @param [emailCampaignId] Identifier assigned to the campaign provided during the token creation.
     * @param [after] Starting point to get the next set of results.
     * @param [limit] Maximum number of tokens to return.
     */
    public getTokensPageWithHttpInfo(campaignName?: string, emailCampaignId?: string, after?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseSmtpApiTokenViewForwardPaging>> {
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
        const result = this.api.getTokensPageWithHttpInfo(campaignName, emailCampaignId, after, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param [campaignName] A name for the campaign tied to the SMTP API token.
     * @param [emailCampaignId] Identifier assigned to the campaign provided during the token creation.
     * @param [after] Starting point to get the next set of results.
     * @param [limit] Maximum number of tokens to return.
     */
    public getTokensPage(campaignName?: string, emailCampaignId?: string, after?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseSmtpApiTokenViewForwardPaging> {
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
        const result = this.api.getTokensPage(campaignName, emailCampaignId, after, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param tokenId Identifier generated when a token is created.
     */
    public resetPasswordWithHttpInfo(tokenId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SmtpApiTokenView>> {
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
        const result = this.api.resetPasswordWithHttpInfo(tokenId, observableOptions);
        return result.toPromise();
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param tokenId Identifier generated when a token is created.
     */
    public resetPassword(tokenId: string, _options?: PromiseConfigurationOptions): Promise<SmtpApiTokenView> {
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
        const result = this.api.resetPassword(tokenId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSingleSendApi } from './ObservableAPI';

import { SingleSendApiRequestFactory, SingleSendApiResponseProcessor} from "../apis/SingleSendApi";
export class PromiseSingleSendApi {
    private api: ObservableSingleSendApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SingleSendApiRequestFactory,
        responseProcessor?: SingleSendApiResponseProcessor
    ) {
        this.api = new ObservableSingleSendApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single transactional email asynchronously.
     * @param publicSingleSendRequestEgg A request object describing the email to send.
     */
    public sendEmailWithHttpInfo(publicSingleSendRequestEgg: PublicSingleSendRequestEgg, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EmailSendStatusView>> {
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
        const result = this.api.sendEmailWithHttpInfo(publicSingleSendRequestEgg, observableOptions);
        return result.toPromise();
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single transactional email asynchronously.
     * @param publicSingleSendRequestEgg A request object describing the email to send.
     */
    public sendEmail(publicSingleSendRequestEgg: PublicSingleSendRequestEgg, _options?: PromiseConfigurationOptions): Promise<EmailSendStatusView> {
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
        const result = this.api.sendEmail(publicSingleSendRequestEgg, observableOptions);
        return result.toPromise();
    }


}



