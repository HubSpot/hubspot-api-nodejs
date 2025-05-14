import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponseSmtpApiTokenViewForwardPaging } from '../models/CollectionResponseSmtpApiTokenViewForwardPaging';
import { EmailSendStatusView } from '../models/EmailSendStatusView';
import { PublicSingleSendRequestEgg } from '../models/PublicSingleSendRequestEgg';
import { SmtpApiTokenRequestEgg } from '../models/SmtpApiTokenRequestEgg';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';

import { ObservablePublicSMTPTokensApi } from "./ObservableAPI";
import { PublicSMTPTokensApiRequestFactory, PublicSMTPTokensApiResponseProcessor} from "../apis/PublicSMTPTokensApi";

export interface PublicSMTPTokensApiArchiveTokenRequest {
    /**
     * Identifier generated when a token is created.
     * Defaults to: undefined
     * @type string
     * @memberof PublicSMTPTokensApiarchiveToken
     */
    tokenId: string
}

export interface PublicSMTPTokensApiCreateTokenRequest {
    /**
     * A request object that includes the campaign name tied to the token and whether contacts should be created for email recipients.
     * @type SmtpApiTokenRequestEgg
     * @memberof PublicSMTPTokensApicreateToken
     */
    smtpApiTokenRequestEgg: SmtpApiTokenRequestEgg
}

export interface PublicSMTPTokensApiGetTokenByIdRequest {
    /**
     * Identifier generated when a token is created.
     * Defaults to: undefined
     * @type string
     * @memberof PublicSMTPTokensApigetTokenById
     */
    tokenId: string
}

export interface PublicSMTPTokensApiGetTokensPageRequest {
    /**
     * A name for the campaign tied to the SMTP API token.
     * Defaults to: undefined
     * @type string
     * @memberof PublicSMTPTokensApigetTokensPage
     */
    campaignName?: string
    /**
     * Identifier assigned to the campaign provided during the token creation.
     * Defaults to: undefined
     * @type string
     * @memberof PublicSMTPTokensApigetTokensPage
     */
    emailCampaignId?: string
    /**
     * Starting point to get the next set of results.
     * Defaults to: undefined
     * @type string
     * @memberof PublicSMTPTokensApigetTokensPage
     */
    after?: string
    /**
     * Maximum number of tokens to return.
     * Defaults to: undefined
     * @type number
     * @memberof PublicSMTPTokensApigetTokensPage
     */
    limit?: number
}

export interface PublicSMTPTokensApiResetPasswordRequest {
    /**
     * Identifier generated when a token is created.
     * Defaults to: undefined
     * @type string
     * @memberof PublicSMTPTokensApiresetPassword
     */
    tokenId: string
}

export class ObjectPublicSMTPTokensApi {
    private api: ObservablePublicSMTPTokensApi

    public constructor(configuration: Configuration, requestFactory?: PublicSMTPTokensApiRequestFactory, responseProcessor?: PublicSMTPTokensApiResponseProcessor) {
        this.api = new ObservablePublicSMTPTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param param the request object
     */
    public archiveTokenWithHttpInfo(param: PublicSMTPTokensApiArchiveTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveTokenWithHttpInfo(param.tokenId,  options).toPromise();
    }

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param param the request object
     */
    public archiveToken(param: PublicSMTPTokensApiArchiveTokenRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveToken(param.tokenId,  options).toPromise();
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param param the request object
     */
    public createTokenWithHttpInfo(param: PublicSMTPTokensApiCreateTokenRequest, options?: ConfigurationOptions): Promise<HttpInfo<SmtpApiTokenView>> {
        return this.api.createTokenWithHttpInfo(param.smtpApiTokenRequestEgg,  options).toPromise();
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param param the request object
     */
    public createToken(param: PublicSMTPTokensApiCreateTokenRequest, options?: ConfigurationOptions): Promise<SmtpApiTokenView> {
        return this.api.createToken(param.smtpApiTokenRequestEgg,  options).toPromise();
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param param the request object
     */
    public getTokenByIdWithHttpInfo(param: PublicSMTPTokensApiGetTokenByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<SmtpApiTokenView>> {
        return this.api.getTokenByIdWithHttpInfo(param.tokenId,  options).toPromise();
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param param the request object
     */
    public getTokenById(param: PublicSMTPTokensApiGetTokenByIdRequest, options?: ConfigurationOptions): Promise<SmtpApiTokenView> {
        return this.api.getTokenById(param.tokenId,  options).toPromise();
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param param the request object
     */
    public getTokensPageWithHttpInfo(param: PublicSMTPTokensApiGetTokensPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseSmtpApiTokenViewForwardPaging>> {
        return this.api.getTokensPageWithHttpInfo(param.campaignName, param.emailCampaignId, param.after, param.limit,  options).toPromise();
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param param the request object
     */
    public getTokensPage(param: PublicSMTPTokensApiGetTokensPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseSmtpApiTokenViewForwardPaging> {
        return this.api.getTokensPage(param.campaignName, param.emailCampaignId, param.after, param.limit,  options).toPromise();
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param param the request object
     */
    public resetPasswordWithHttpInfo(param: PublicSMTPTokensApiResetPasswordRequest, options?: ConfigurationOptions): Promise<HttpInfo<SmtpApiTokenView>> {
        return this.api.resetPasswordWithHttpInfo(param.tokenId,  options).toPromise();
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param param the request object
     */
    public resetPassword(param: PublicSMTPTokensApiResetPasswordRequest, options?: ConfigurationOptions): Promise<SmtpApiTokenView> {
        return this.api.resetPassword(param.tokenId,  options).toPromise();
    }

}

import { ObservableSingleSendApi } from "./ObservableAPI";
import { SingleSendApiRequestFactory, SingleSendApiResponseProcessor} from "../apis/SingleSendApi";

export interface SingleSendApiSendEmailRequest {
    /**
     * A request object describing the email to send.
     * @type PublicSingleSendRequestEgg
     * @memberof SingleSendApisendEmail
     */
    publicSingleSendRequestEgg: PublicSingleSendRequestEgg
}

export class ObjectSingleSendApi {
    private api: ObservableSingleSendApi

    public constructor(configuration: Configuration, requestFactory?: SingleSendApiRequestFactory, responseProcessor?: SingleSendApiResponseProcessor) {
        this.api = new ObservableSingleSendApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single transactional email asynchronously.
     * @param param the request object
     */
    public sendEmailWithHttpInfo(param: SingleSendApiSendEmailRequest, options?: ConfigurationOptions): Promise<HttpInfo<EmailSendStatusView>> {
        return this.api.sendEmailWithHttpInfo(param.publicSingleSendRequestEgg,  options).toPromise();
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single transactional email asynchronously.
     * @param param the request object
     */
    public sendEmail(param: SingleSendApiSendEmailRequest, options?: ConfigurationOptions): Promise<EmailSendStatusView> {
        return this.api.sendEmail(param.publicSingleSendRequestEgg,  options).toPromise();
    }

}
