var baseDiscovery = (function () {
    function baseDiscovery(config) {
        this.config = config;
    }
    /**
     * getParams
     */
    baseDiscovery.prototype.getParams = function () {
        var params = {};
        if (this.config.apiKey) {
            params = {
                authMethods: {
                    hapikey: this.config.apiKey
                }
            };
        }
        else if (this.config.accessToken) {
            params = {
                authMethods: {
                    oauth2: {
                        accessToken: this.config.accessToken
                    }
                }
            };
        }
        return params;
    };
    return baseDiscovery;
})();
exports.baseDiscovery = baseDiscovery;
