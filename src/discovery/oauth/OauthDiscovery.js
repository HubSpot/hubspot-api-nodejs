var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../baseDiscovery');
var index_1 = require('../../../codegen/oauth/index');
var configuration_1 = require('../../../codegen/oauth/configuration');
var OauthDiscovery = (function (_super) {
    __extends(OauthDiscovery, _super);
    function OauthDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.defaultApi = new index_1.DefaultApi(configuration);
    }
    return OauthDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.OauthDiscovery = OauthDiscovery;
