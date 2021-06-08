/**
 * Applies apiKey authentication to the request context.
 */
var HapikeyAuthentication = (function () {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    function HapikeyAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    HapikeyAuthentication.prototype.getName = function () {
        return "hapikey";
    };
    HapikeyAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setQueryParam("hapikey", this.apiKey);
    };
    return HapikeyAuthentication;
})();
exports.HapikeyAuthentication = HapikeyAuthentication;
/**
 * Creates the authentication methods from a swagger description.
 *
 */
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    if (config["hapikey"]) {
        authMethods["hapikey"] = new HapikeyAuthentication(config["hapikey"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
