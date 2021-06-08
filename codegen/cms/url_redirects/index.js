function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./http/http"));
__export(require("./auth/auth"));
__export(require("./models/all"));
var configuration_1 = require("./configuration");
exports.createConfiguration = configuration_1.createConfiguration;
__export(require("./apis/exception"));
__export(require("./servers"));
var PromiseAPI_1 = require('./types/PromiseAPI');
exports.RedirectsApi = PromiseAPI_1.PromiseRedirectsApi;
