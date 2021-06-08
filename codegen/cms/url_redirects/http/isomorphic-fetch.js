var http_1 = require('./http');
var rxjsStub_1 = require('../rxjsStub');
var node_fetch_1 = require("node-fetch");
var IsomorphicFetchHttpLibrary = (function () {
    function IsomorphicFetchHttpLibrary() {
    }
    IsomorphicFetchHttpLibrary.prototype.send = function (request) {
        var method = request.getHttpMethod().toString();
        var body = request.getBody();
        var resultPromise = node_fetch_1["default"](request.getUrl(), {
            method: method,
            body: body, as: any,
            headers: request.getHeaders()
        }).then(function (resp) {
            var headers = {};
            resp.headers.forEach(function (value, name) {
                headers[name] = value;
            });
            var body = {
                text: function () { return resp.text(); },
                binary: function () { return resp.buffer(); }
            };
            return new http_1.ResponseContext(resp.status, headers, body);
        });
        return rxjsStub_1.from(resultPromise);
    };
    return IsomorphicFetchHttpLibrary;
})();
exports.IsomorphicFetchHttpLibrary = IsomorphicFetchHttpLibrary;
