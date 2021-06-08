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
 * Applies oauth2 authentication to the request context.
 */
var Oauth2Authentication = (function () {
    /**
     * Configures OAuth2 with the necessary properties
     *
     * @param accessToken: The access token to be used for every request
     */
    function Oauth2Authentication(accessToken) {
        this.accessToken = accessToken;
    }
    Oauth2Authentication.prototype.getName = function () {
        return "oauth2";
    };
    Oauth2Authentication.prototype.applySecurityAuthentication = function (context) {
        context.setHeaderParam("Authorization", "Bearer " + this.accessToken);
    };
    return Oauth2Authentication;
})();
exports.Oauth2Authentication = Oauth2Authentication;
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
    if (config["hapikey"]) {
        authMethods["hapikey"] = new HapikeyAuthentication(config["hapikey"]);
    }
    if (config["oauth2"]) {
        authMethods["oauth2"] = new Oauth2Authentication(config["oauth2"]["accessToken"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
