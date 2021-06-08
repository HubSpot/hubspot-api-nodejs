var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Represents an error caused by an api call i.e. it has attributes for a HTTP status code
 * and the returned body object.
 *
 * Example
 * API returns a ErrorMessageObject whenever HTTP status code is not in [200, 299]
 * => ApiException(404, someErrorMessageObject)
 *
 */
var ApiException = (function (_super) {
    __extends(ApiException, _super);
    function ApiException(code, body) {
        _super.call(this, "HTTP-Code: " + code + "\nMessage: " + JSON.stringify(body));
        this.code = code;
        this.body = body;
    }
    return ApiException;
})(Error);
exports.ApiException = ApiException;
