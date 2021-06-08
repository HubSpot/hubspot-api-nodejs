var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/crm/associations/index');
var configuration_1 = require('../../../../codegen/crm/associations/configuration');
var AssociationsDiscovery = (function (_super) {
    __extends(AssociationsDiscovery, _super);
    function AssociationsDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.batchApi = new index_1.BatchApi(configuration);
        this.typesApi = new index_1.TypesApi(configuration);
    }
    return AssociationsDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.AssociationsDiscovery = AssociationsDiscovery;
