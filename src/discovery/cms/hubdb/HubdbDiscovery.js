var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/cms/hubdb/index');
var configuration_1 = require('../../../../codegen/cms/hubdb/configuration');
var HubdbDiscovery = (function (_super) {
    __extends(HubdbDiscovery, _super);
    function HubdbDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.rowsApi = new index_1.RowsApi(configuration);
        this.rowsBatchApi = new index_1.RowsBatchApi(configuration);
        this.tablesApi = new index_1.TablesApi(configuration);
    }
    return HubdbDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.HubdbDiscovery = HubdbDiscovery;
