var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/crm/deals/index');
var configuration_1 = require('../../../../codegen/crm/deals/configuration');
var DealsDiscovery = (function (_super) {
    __extends(DealsDiscovery, _super);
    function DealsDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.associationsApi = new index_1.AssociationsApi(configuration);
        this.basicApi = new index_1.BasicApi(configuration);
        this.batchApi = new index_1.BatchApi(configuration);
        this.searchApi = new index_1.SearchApi(configuration);
    }
    return DealsDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.DealsDiscovery = DealsDiscovery;
