import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponseSmtpApiTokenView } from '../models/CollectionResponseSmtpApiTokenView';
import { EmailSendStatusView } from '../models/EmailSendStatusView';
import { ErrorDetail } from '../models/ErrorDetail';
import { EventIdView } from '../models/EventIdView';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PublicSingleSendEmail } from '../models/PublicSingleSendEmail';
import { PublicSingleSendRequestEgg } from '../models/PublicSingleSendRequestEgg';
import { SmtpApiTokenRequestEgg } from '../models/SmtpApiTokenRequestEgg';
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiArchiveTokenRequest {
    /**
     * Identifier generated when a token is created.
     * @type string
     * @memberof DefaultApiarchiveToken
     */
    tokenId: string
}

export interface DefaultApiCreateTokenRequest {
    /**
     * A request object that includes the campaign name tied to the token and whether contacts should be created for recipients of emails.
     * @type SmtpApiTokenRequestEgg
     * @memberof DefaultApicreateToken
     */
    smtpApiTokenRequestEgg?: SmtpApiTokenRequestEgg
}

export interface DefaultApiGetTokenByIdRequest {
    /**
     * Identifier generated when a token is created.
     * @type string
     * @memberof DefaultApigetTokenById
     */
    tokenId: string
}

export interface DefaultApiGetTokensPageRequest {
    /**
     * A name for the campaign tied to the SMTP API token.
     * @type string
     * @memberof DefaultApigetTokensPage
     */
    campaignName?: string
    /**
     * Identifier assigned to the campaign provided during the token creation.
     * @type string
     * @memberof DefaultApigetTokensPage
     */
    emailCampaignId?: string
    /**
     * Starting point to get the next set of results.
     * @type string
     * @memberof DefaultApigetTokensPage
     */
    after?: string
    /**
     * Maximum number of tokens to return.
     * @type number
     * @memberof DefaultApigetTokensPage
     */
    limit?: number
}

export interface DefaultApiResetPasswordRequest {
    /**
     * Identifier generated when a token is created.
     * @type string
     * @memberof DefaultApiresetPassword
     */
    tokenId: string
}

export interface DefaultApiSendEmailRequest {
    /**
     * A request object describing the email to send.
     * @type PublicSingleSendRequestEgg
     * @memberof DefaultApisendEmail
     */
    publicSingleSendRequestEgg?: PublicSingleSendRequestEgg
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param param the request object
     */
    public archiveToken(param: DefaultApiArchiveTokenRequest, options?: Configuration): Promise<void> {
        return this.api.archiveToken(param.tokenId,  options).toPromise();
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param param the request object
     */
    public createToken(param: DefaultApiCreateTokenRequest, options?: Configuration): Promise<SmtpApiTokenView> {
        return this.api.createToken(param.smtpApiTokenRequestEgg,  options).toPromise();
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param param the request object
     */
    public getTokenById(param: DefaultApiGetTokenByIdRequest, options?: Configuration): Promise<SmtpApiTokenView> {
        return this.api.getTokenById(param.tokenId,  options).toPromise();
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param param the request object
     */
    public getTokensPage(param: DefaultApiGetTokensPageRequest, options?: Configuration): Promise<CollectionResponseSmtpApiTokenView> {
        return this.api.getTokensPage(param.campaignName, param.emailCampaignId, param.after, param.limit,  options).toPromise();
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param param the request object
     */
    public resetPassword(param: DefaultApiResetPasswordRequest, options?: Configuration): Promise<SmtpApiTokenView> {
        return this.api.resetPassword(param.tokenId,  options).toPromise();
    }

    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single transactional email asynchronously.
     * @param param the request object
     */
    public sendEmail(param: DefaultApiSendEmailRequest, options?: Configuration): Promise<EmailSendStatusView> {
        return this.api.sendEmail(param.publicSingleSendRequestEgg,  options).toPromise();
    }

}
