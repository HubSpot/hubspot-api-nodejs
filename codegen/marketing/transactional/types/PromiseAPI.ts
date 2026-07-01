import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponseSmtpApiTokenViewForwardPaging } from '../models/CollectionResponseSmtpApiTokenViewForwardPaging';
import { EmailSendStatusView } from '../models/EmailSendStatusView';
import { PublicSingleSendRequestEgg } from '../models/PublicSingleSendRequestEgg';
import { SmtpApiTokenRequestEgg } from '../models/SmtpApiTokenRequestEgg';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';
import { ObservableSMTPTokensApi } from './ObservableAPI';

import { SMTPTokensApiRequestFactory, SMTPTokensApiResponseProcessor} from "../apis/SMTPTokensApi";
export class PromiseSMTPTokensApi {
    private api: ObservableSMTPTokensApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SMTPTokensApiRequestFactory,
        responseProcessor?: SMTPTokensApiResponseProcessor
    ) {
        this.api = new ObservableSMTPTokensApi(configuration, requestFactory, responseProcessor);
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
     * @param smtpApiTokenRequestEgg
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
     * @param smtpApiTokenRequestEgg
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
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [campaignName] A name for the campaign tied to the SMTP API token.
     * @param [emailCampaignId] Identifier assigned to the campaign provided during the token creation.
     * @param [limit] The maximum number of results to display per page.
     */
    public getTokensPageWithHttpInfo(after?: string, campaignName?: string, emailCampaignId?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseSmtpApiTokenViewForwardPaging>> {
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
        const result = this.api.getTokensPageWithHttpInfo(after, campaignName, emailCampaignId, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [campaignName] A name for the campaign tied to the SMTP API token.
     * @param [emailCampaignId] Identifier assigned to the campaign provided during the token creation.
     * @param [limit] The maximum number of results to display per page.
     */
    public getTokensPage(after?: string, campaignName?: string, emailCampaignId?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseSmtpApiTokenViewForwardPaging> {
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
        const result = this.api.getTokensPage(after, campaignName, emailCampaignId, limit, observableOptions);
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



import { ObservableSendTransactionalEmailApi } from './ObservableAPI';

import { SendTransactionalEmailApiRequestFactory, SendTransactionalEmailApiResponseProcessor} from "../apis/SendTransactionalEmailApi";
export class PromiseSendTransactionalEmailApi {
    private api: ObservableSendTransactionalEmailApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SendTransactionalEmailApiRequestFactory,
        responseProcessor?: SendTransactionalEmailApiResponseProcessor
    ) {
        this.api = new ObservableSendTransactionalEmailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single send transactional email asynchronously.
     * @param publicSingleSendRequestEgg
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
     * Send a single send transactional email asynchronously.
     * @param publicSingleSendRequestEgg
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



