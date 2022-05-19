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

import { ObservablePublicSmtpTokensApi } from "./ObservableAPI";
import { PublicSmtpTokensApiRequestFactory, PublicSmtpTokensApiResponseProcessor} from "../apis/PublicSmtpTokensApi";

export interface PublicSmtpTokensApiArchiveTokenRequest {
    /**
     * Identifier generated when a token is created.
     * @type string
     * @memberof PublicSmtpTokensApiarchiveToken
     */
    tokenId: string
}

export interface PublicSmtpTokensApiCreateTokenRequest {
    /**
     * A request object that includes the campaign name tied to the token and whether contacts should be created for recipients of emails.
     * @type SmtpApiTokenRequestEgg
     * @memberof PublicSmtpTokensApicreateToken
     */
    smtpApiTokenRequestEgg?: SmtpApiTokenRequestEgg
}

export interface PublicSmtpTokensApiGetTokenByIdRequest {
    /**
     * Identifier generated when a token is created.
     * @type string
     * @memberof PublicSmtpTokensApigetTokenById
     */
    tokenId: string
}

export interface PublicSmtpTokensApiGetTokensPageRequest {
    /**
     * A name for the campaign tied to the SMTP API token.
     * @type string
     * @memberof PublicSmtpTokensApigetTokensPage
     */
    campaignName?: string
    /**
     * Identifier assigned to the campaign provided during the token creation.
     * @type string
     * @memberof PublicSmtpTokensApigetTokensPage
     */
    emailCampaignId?: string
    /**
     * Starting point to get the next set of results.
     * @type string
     * @memberof PublicSmtpTokensApigetTokensPage
     */
    after?: string
    /**
     * Maximum number of tokens to return.
     * @type number
     * @memberof PublicSmtpTokensApigetTokensPage
     */
    limit?: number
}

export interface PublicSmtpTokensApiResetPasswordRequest {
    /**
     * Identifier generated when a token is created.
     * @type string
     * @memberof PublicSmtpTokensApiresetPassword
     */
    tokenId: string
}

export class ObjectPublicSmtpTokensApi {
    private api: ObservablePublicSmtpTokensApi

    public constructor(configuration: Configuration, requestFactory?: PublicSmtpTokensApiRequestFactory, responseProcessor?: PublicSmtpTokensApiResponseProcessor) {
        this.api = new ObservablePublicSmtpTokensApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param param the request object
     */
    public archiveToken(param: PublicSmtpTokensApiArchiveTokenRequest, options?: Configuration): Promise<void> {
        return this.api.archiveToken(param.tokenId,  options).toPromise();
    }

    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param param the request object
     */
    public createToken(param: PublicSmtpTokensApiCreateTokenRequest = {}, options?: Configuration): Promise<SmtpApiTokenView> {
        return this.api.createToken(param.smtpApiTokenRequestEgg,  options).toPromise();
    }

    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param param the request object
     */
    public getTokenById(param: PublicSmtpTokensApiGetTokenByIdRequest, options?: Configuration): Promise<SmtpApiTokenView> {
        return this.api.getTokenById(param.tokenId,  options).toPromise();
    }

    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param param the request object
     */
    public getTokensPage(param: PublicSmtpTokensApiGetTokensPageRequest = {}, options?: Configuration): Promise<CollectionResponseSmtpApiTokenView> {
        return this.api.getTokensPage(param.campaignName, param.emailCampaignId, param.after, param.limit,  options).toPromise();
    }

    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param param the request object
     */
    public resetPassword(param: PublicSmtpTokensApiResetPasswordRequest, options?: Configuration): Promise<SmtpApiTokenView> {
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
    publicSingleSendRequestEgg?: PublicSingleSendRequestEgg
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
    public sendEmail(param: SingleSendApiSendEmailRequest = {}, options?: Configuration): Promise<EmailSendStatusView> {
        return this.api.sendEmail(param.publicSingleSendRequestEgg,  options).toPromise();
    }

}
