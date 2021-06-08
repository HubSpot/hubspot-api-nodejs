var ObservableAPI_1 = require('./ObservableAPI');
var PromiseSettingsApi = (function () {
    function PromiseSettingsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Deletes the settings for a video conference application with the specified ID.
     * Delete settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    PromiseSettingsApi.prototype.archive = function (appId, _options) {
        var result = this.api.archive(appId, _options);
        return result.toPromise();
    };
    /**
     * Return the settings for a video conference application with the specified ID.
     * Get settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    PromiseSettingsApi.prototype.getById = function (appId, _options) {
        var result = this.api.getById(appId, _options);
        return result.toPromise();
    };
    /**
     * Updates the settings for a video conference application with the specified ID.
     * Update settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     * @param externalSettings
     */
    PromiseSettingsApi.prototype.replace = function (appId, externalSettings, _options) {
        var result = this.api.replace(appId, externalSettings, _options);
        return result.toPromise();
    };
    return PromiseSettingsApi;
})();
exports.PromiseSettingsApi = PromiseSettingsApi;
