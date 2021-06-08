var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/crm/properties/index');
var configuration_1 = require('../../../../codegen/crm/properties/configuration');
var PropertiesDiscovery = (function (_super) {
    __extends(PropertiesDiscovery, _super);
    function PropertiesDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.batchApi = new index_1.BatchApi(configuration);
        this.coreApi = new index_1.CoreApi(configuration);
        this.groupsApi = new index_1.GroupsApi(configuration);
    }
    return PropertiesDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.PropertiesDiscovery = PropertiesDiscovery;
