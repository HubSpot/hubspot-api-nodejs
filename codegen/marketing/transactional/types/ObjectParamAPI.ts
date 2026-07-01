import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponseSmtpApiTokenViewForwardPaging } from '../models/CollectionResponseSmtpApiTokenViewForwardPaging';
import { EmailSendStatusView } from '../models/EmailSendStatusView';
import { PublicSingleSendRequestEgg } from '../models/PublicSingleSendRequestEgg';
import { SmtpApiTokenRequestEgg } from '../models/SmtpApiTokenRequestEgg';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';

import { ObservableSMTPTokensApi } from "./ObservableAPI";
import { SMTPTokensApiRequestFactory, SMTPTokensApiResponseProcessor} from "../apis/SMTPTokensApi";

export interface SMTPTokensApiArchiveTokenRequest {
    /**
     * Identifier generated when a token is created.
     * Defaults to: undefined
     * @type string
     * @memberof SMTPTokensApiarchiveToken
     */
    tokenId: string
}

export interface SMTPTokensApiCreateTokenRequest {
    /**
     * 
     * @type SmtpApiTokenRequestEgg
     * @memberof SMTPTokensApicreateToken
     */
    smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg
}

export interface SMTPTokensApiGetTokenByIdRequest {
    /**
     * Identifier generated when a token is created.
     * Defaults to: undefined
     * @type string
     * @memberof SMTPTokensApigetTokenById
     */
    tokenId: string
}

export interface SMTPTokensApiGetTokensPageRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof SMTPTokensApigetTokensPage
     */
    after?: string
    /**
     * A name for the campaign tied to the SMTP API token.
     * Defaults to: undefined
     * @type string
     * @memberof SMTPTokensApigetTokensPage
     */
    campaignName?: string
    /**
     * Identifier assigned to the campaign provided during the token creation.
     * Defaults to: undefined
     * @type string
     * @memberof SMTPTokensApigetTokensPage
     */
    emailCampaignId?: string
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof SMTPTokensApigetTokensPage
     */
    limit?: number
}

export interface SMTPTokensApiResetPasswordRequest {
    /**
     * Identifier generated when a token is created.
     * Defaults to: undefined
     * @type string
     * @memberof SMTPTokensApiresetPassword
     */
    tokenId: string
}

export class ObjectSMTPTokensApi {
    private api: ObservableSMTPTokensApi

    public constructor(configuration: Configuration, requestFactory?: SMTPTokensApiRequestFactory, responseProcessor?: SMTPTokensApiResponseProcessor) {
        this.api = new ObservableSMTPTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param param the request object
     */
    public archiveTokenWithHttpInfo(param: SMTPTokensApiArchiveTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveTokenWithHttpInfo(param.tokenId,  options).toPromise();
    }

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param param the request object
     */
    public archiveToken(param: SMTPTokensApiArchiveTokenRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveToken(param.tokenId,  options).toPromise();
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param param the request object
     */
    public createTokenWithHttpInfo(param: SMTPTokensApiCreateTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<SmtpApiTokenView>> {
        return this.api.createTokenWithHttpInfo(param.smtpApiTokenRequestEgg,  options).toPromise();
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param param the request object
     */
    public createToken(param: SMTPTokensApiCreateTokenRequest, options?: ConfigurationOptions): Promise<SmtpApiTokenView> {
        return this.api.createToken(param.smtpApiTokenRequestEgg,  options).toPromise();
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param param the request object
     */
    public getTokenByIdWithHttpInfo(param: SMTPTokensApiGetTokenByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<SmtpApiTokenView>> {
        return this.api.getTokenByIdWithHttpInfo(param.tokenId,  options).toPromise();
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param param the request object
     */
    public getTokenById(param: SMTPTokensApiGetTokenByIdRequest, options?: ConfigurationOptions): Promise<SmtpApiTokenView> {
        return this.api.getTokenById(param.tokenId,  options).toPromise();
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param param the request object
     */
    public getTokensPageWithHttpInfo(param: SMTPTokensApiGetTokensPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseSmtpApiTokenViewForwardPaging>> {
        return this.api.getTokensPageWithHttpInfo(param.after, param.campaignName, param.emailCampaignId, param.limit,  options).toPromise();
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param param the request object
     */
    public getTokensPage(param: SMTPTokensApiGetTokensPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseSmtpApiTokenViewForwardPaging> {
        return this.api.getTokensPage(param.after, param.campaignName, param.emailCampaignId, param.limit,  options).toPromise();
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param param the request object
     */
    public resetPasswordWithHttpInfo(param: SMTPTokensApiResetPasswordRequest, options?: ConfigurationOptions): Promise<HttpInfo<SmtpApiTokenView>> {
        return this.api.resetPasswordWithHttpInfo(param.tokenId,  options).toPromise();
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param param the request object
     */
    public resetPassword(param: SMTPTokensApiResetPasswordRequest, options?: ConfigurationOptions): Promise<SmtpApiTokenView> {
        return this.api.resetPassword(param.tokenId,  options).toPromise();
    }

}

import { ObservableSendTransactionalEmailApi } from "./ObservableAPI";
import { SendTransactionalEmailApiRequestFactory, SendTransactionalEmailApiResponseProcessor} from "../apis/SendTransactionalEmailApi";

export interface SendTransactionalEmailApiSendEmailRequest {
    /**
     * 
     * @type PublicSingleSendRequestEgg
     * @memberof SendTransactionalEmailApisendEmail
     */
    publicSingleSendRequestEgg: PublicSingleSendRequestEgg
}

export class ObjectSendTransactionalEmailApi {
    private api: ObservableSendTransactionalEmailApi

    public constructor(configuration: Configuration, requestFactory?: SendTransactionalEmailApiRequestFactory, responseProcessor?: SendTransactionalEmailApiResponseProcessor) {
        this.api = new ObservableSendTransactionalEmailApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single send transactional email asynchronously.
     * @param param the request object
     */
    public sendEmailWithHttpInfo(param: SendTransactionalEmailApiSendEmailRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailSendStatusView>> {
        return this.api.sendEmailWithHttpInfo(param.publicSingleSendRequestEgg,  options).toPromise();
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single send transactional email asynchronously.
     * @param param the request object
     */
    public sendEmail(param: SendTransactionalEmailApiSendEmailRequest, options?: ConfigurationOptions): Promise<EmailSendStatusView> {
        return this.api.sendEmail(param.publicSingleSendRequestEgg,  options).toPromise();
    }

}
