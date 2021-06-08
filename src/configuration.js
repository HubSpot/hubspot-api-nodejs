var configuration = (function () {
    function configuration(config) {
        if (config.apiKey) {
            this.apiKey = config.apiKey;
        }
        if (config.accessToken) {
            this.accessToken = config.accessToken;
        }
    }
    return configuration;
})();
exports.configuration = configuration;
