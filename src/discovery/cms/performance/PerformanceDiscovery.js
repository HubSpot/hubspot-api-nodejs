var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/cms/performance/index');
var configuration_1 = require('../../../../codegen/cms/performance/configuration');
var PerformanceDiscovery = (function (_super) {
    __extends(PerformanceDiscovery, _super);
    function PerformanceDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.defaultApi = new index_1.DefaultApi(configuration);
    }
    return PerformanceDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.PerformanceDiscovery = PerformanceDiscovery;
