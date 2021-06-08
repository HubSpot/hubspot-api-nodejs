var ObservableAPI_1 = require('./ObservableAPI');
var PromiseSettingsApi = (function () {
    function PromiseSettingsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Deletes this calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param appId The ID of the target app.
     */
    PromiseSettingsApi.prototype.archive = function (appId, _options) {
        var result = this.api.archive(appId, _options);
        return result.toPromise();
    };
    /**
     * Used to set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param appId The ID of the target app.
     * @param settingsRequest Settings state to create with.
     */
    PromiseSettingsApi.prototype.create = function (appId, settingsRequest, _options) {
        var result = this.api.create(appId, settingsRequest, _options);
        return result.toPromise();
    };
    /**
     * Returns the calling extension settings configured for your app.
     * Get calling settings
     * @param appId The ID of the target app.
     */
    PromiseSettingsApi.prototype.getById = function (appId, _options) {
        var result = this.api.getById(appId, _options);
        return result.toPromise();
    };
    /**
     * Updates existing calling extension settings.
     * Update settings
     * @param appId The ID of the target app.
     * @param settingsPatchRequest Updated details for the settings.
     */
    PromiseSettingsApi.prototype.update = function (appId, settingsPatchRequest, _options) {
        var result = this.api.update(appId, settingsPatchRequest, _options);
        return result.toPromise();
    };
    return PromiseSettingsApi;
})();
exports.PromiseSettingsApi = PromiseSettingsApi;
