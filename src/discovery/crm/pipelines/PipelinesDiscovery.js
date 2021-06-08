var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/crm/pipelines/index');
var configuration_1 = require('../../../../codegen/crm/pipelines/configuration');
var PipelinesDiscovery = (function (_super) {
    __extends(PipelinesDiscovery, _super);
    function PipelinesDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.pipelineStagesApi = new index_1.PipelineStagesApi(configuration);
        this.pipelinesApi = new index_1.PipelinesApi(configuration);
    }
    return PipelinesDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.PipelinesDiscovery = PipelinesDiscovery;
