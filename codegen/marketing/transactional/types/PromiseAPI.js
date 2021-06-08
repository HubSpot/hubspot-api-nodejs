var ObservableAPI_1 = require('./ObservableAPI');
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Delete a single token by ID.
     * Delete a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    PromiseDefaultApi.prototype.archiveToken = function (tokenId, _options) {
        var result = this.api.archiveToken(tokenId, _options);
        return result.toPromise();
    };
    /**
     * Create a SMTP API token.
     * Create a SMTP API token.
     * @param smtpApiTokenRequestEgg A request object that includes the campaign name tied to the token and whether contacts should be created for recipients of emails.
     */
    PromiseDefaultApi.prototype.createToken = function (smtpApiTokenRequestEgg, _options) {
        var result = this.api.createToken(smtpApiTokenRequestEgg, _options);
        return result.toPromise();
    };
    /**
     * Query a single token by ID.
     * Query a single token by ID.
     * @param tokenId Identifier generated when a token is created.
     */
    PromiseDefaultApi.prototype.getTokenById = function (tokenId, _options) {
        var result = this.api.getTokenById(tokenId, _options);
        return result.toPromise();
    };
    /**
     * Query multiple SMTP API tokens by campaign name or a single token by emailCampaignId.
     * Query SMTP API tokens by campaign name or an emailCampaignId.
     * @param campaignName A name for the campaign tied to the SMTP API token.
     * @param emailCampaignId Identifier assigned to the campaign provided during the token creation.
     * @param after Starting point to get the next set of results.
     * @param limit Maximum number of tokens to return.
     */
    PromiseDefaultApi.prototype.getTokensPage = function (campaignName, emailCampaignId, after, limit, _options) {
        var result = this.api.getTokensPage(campaignName, emailCampaignId, after, limit, _options);
        return result.toPromise();
    };
    /**
     * Allows the creation of a replacement password for a given token. Once the password is successfully reset, the old password for the token will be invalid.
     * Reset the password of an existing token.
     * @param tokenId Identifier generated when a token is created.
     */
    PromiseDefaultApi.prototype.resetPassword = function (tokenId, _options) {
        var result = this.api.resetPassword(tokenId, _options);
        return result.toPromise();
    };
    /**
     * Asynchronously send a transactional email. Returns the status of the email send with a statusId that can be used to continuously query for the status using the Email Send Status API.
     * Send a single transactional email asynchronously.
     * @param publicSingleSendRequestEgg A request object describing the email to send.
     */
    PromiseDefaultApi.prototype.sendEmail = function (publicSingleSendRequestEgg, _options) {
        var result = this.api.sendEmail(publicSingleSendRequestEgg, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
})();
exports.PromiseDefaultApi = PromiseDefaultApi;
