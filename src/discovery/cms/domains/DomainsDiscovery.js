var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/cms/domains/index');
var configuration_1 = require('../../../../codegen/cms/domains/configuration');
var DomainsDiscovery = (function (_super) {
    __extends(DomainsDiscovery, _super);
    function DomainsDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.domainsApi = new index_1.DomainsApi(configuration);
    }
    return DomainsDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.DomainsDiscovery = DomainsDiscovery;
