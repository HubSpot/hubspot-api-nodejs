var ObservableAPI_1 = require('./ObservableAPI');
var PromiseCardsApi = (function () {
    function PromiseCardsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCardsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.
     * Delete a card
     * @param appId The ID of the target app.
     * @param cardId The ID of the card to delete.
     */
    PromiseCardsApi.prototype.archive = function (appId, cardId, _options) {
        var result = this.api.archive(appId, cardId, _options);
        return result.toPromise();
    };
    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param appId The ID of the target app.
     * @param cardCreateRequest The new card definition.
     */
    PromiseCardsApi.prototype.create = function (appId, cardCreateRequest, _options) {
        var result = this.api.create(appId, cardCreateRequest, _options);
        return result.toPromise();
    };
    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param appId The ID of the target app.
     */
    PromiseCardsApi.prototype.getAll = function (appId, _options) {
        var result = this.api.getAll(appId, _options);
        return result.toPromise();
    };
    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param appId The ID of the target app.
     * @param cardId The ID of the target card.
     */
    PromiseCardsApi.prototype.getById = function (appId, cardId, _options) {
        var result = this.api.getById(appId, cardId, _options);
        return result.toPromise();
    };
    /**
     * Update a card definition with new details.
     * Update a card
     * @param appId The ID of the target app.
     * @param cardId The ID of the card to update.
     * @param cardPatchRequest Card definition fields to be updated.
     */
    PromiseCardsApi.prototype.update = function (appId, cardId, cardPatchRequest, _options) {
        var result = this.api.update(appId, cardId, cardPatchRequest, _options);
        return result.toPromise();
    };
    return PromiseCardsApi;
})();
exports.PromiseCardsApi = PromiseCardsApi;
var ObservableAPI_2 = require('./ObservableAPI');
var PromiseSampleResponseApi = (function () {
    function PromiseSampleResponseApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableSampleResponseApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
     * Get sample card detail response
     */
    PromiseSampleResponseApi.prototype.getCardsSampleResponse = function (_options) {
        var result = this.api.getCardsSampleResponse(_options);
        return result.toPromise();
    };
    return PromiseSampleResponseApi;
})();
exports.PromiseSampleResponseApi = PromiseSampleResponseApi;
