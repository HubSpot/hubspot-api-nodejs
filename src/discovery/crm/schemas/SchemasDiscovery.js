var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/crm/schemas/index');
var configuration_1 = require('../../../../codegen/crm/schemas/configuration');
var SchemasDiscovery = (function (_super) {
    __extends(SchemasDiscovery, _super);
    function SchemasDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.coreApi = new index_1.CoreApi(configuration);
        this.defaultApi = new index_1.DefaultApi(configuration);
    }
    return SchemasDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.SchemasDiscovery = SchemasDiscovery;
