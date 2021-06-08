var middleware_1 = require("./middleware");
var isomorphic_fetch_1 = require("./http/isomorphic-fetch");
var servers_1 = require("./servers");
var auth_1 = require("./auth/auth");
readonly;
baseServer: BaseServerConfiguration;
readonly;
httpApi: HttpLibrary;
readonly;
middleware: Middleware[];
readonly;
authMethods: AuthMethods;
/**
 * Configuration factory function
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: server1
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - middleware: []
 *    - promiseMiddleware: []
 *    - authMethods: {}
 *
 * @param conf partial configuration
 */
function createConfiguration(conf) {
    if (conf === void 0) { conf = {}; }
    var configuration = {
        baseServer: conf.baseServer !== undefined ? conf.baseServer : servers_1.server1,
        httpApi: conf.httpApi || new isomorphic_fetch_1.IsomorphicFetchHttpLibrary(),
        middleware: conf.middleware || [],
        authMethods: auth_1.configureAuthMethods(conf.authMethods)
    };
    if (conf.promiseMiddleware) {
        conf.promiseMiddleware.forEach(function (m) { return configuration.middleware.push(new middleware_1.PromiseMiddlewareWrapper(m)); });
    }
    return configuration;
}
exports.createConfiguration = createConfiguration;
