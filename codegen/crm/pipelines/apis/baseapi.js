var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|"
};
/**
 *
 * @export
 * @class BaseAPI
 */
var BaseAPIRequestFactory = (function () {
    function BaseAPIRequestFactory(configuration) {
        this.configuration = configuration;
    }
    return BaseAPIRequestFactory;
})();
exports.BaseAPIRequestFactory = BaseAPIRequestFactory;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
var RequiredError = (function (_super) {
    __extends(RequiredError, _super);
    function RequiredError(field, msg) {
        _super.call(this, msg);
        this.field = field;
        this.name = "RequiredError" = "RequiredError";
    }
    return RequiredError;
})(Error);
exports.RequiredError = RequiredError;
