/**
 * Applies apiKey authentication to the request context.
 */
var DeveloperHapikeyAuthentication = (function () {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    function DeveloperHapikeyAuthentication(apiKey) {
        this.apiKey = apiKey;
    }
    DeveloperHapikeyAuthentication.prototype.getName = function () {
        return "developer_hapikey";
    };
    DeveloperHapikeyAuthentication.prototype.applySecurityAuthentication = function (context) {
        context.setQueryParam("hapikey", this.apiKey);
    };
    return DeveloperHapikeyAuthentication;
})();
exports.DeveloperHapikeyAuthentication = DeveloperHapikeyAuthentication;
/**
 * Creates the authentication methods from a swagger description.
 *
 */
function configureAuthMethods(config) {
    var authMethods = {};
    if (!config) {
        return authMethods;
    }
    if (config["developer_hapikey"]) {
        authMethods["developer_hapikey"] = new DeveloperHapikeyAuthentication(config["developer_hapikey"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
