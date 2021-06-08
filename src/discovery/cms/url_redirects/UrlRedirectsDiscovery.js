var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/cms/url_redirects/index');
var configuration_1 = require('../../../../codegen/cms/url_redirects/configuration');
var UrlRedirectsDiscovery = (function (_super) {
    __extends(UrlRedirectsDiscovery, _super);
    function UrlRedirectsDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.redirectsApi = new index_1.RedirectsApi(configuration);
    }
    return UrlRedirectsDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.UrlRedirectsDiscovery = UrlRedirectsDiscovery;
