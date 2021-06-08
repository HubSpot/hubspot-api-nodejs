var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/automation/actions/index');
var configuration_1 = require('../../../../codegen/automation/actions/configuration');
var ActionsDiscovery = (function (_super) {
    __extends(ActionsDiscovery, _super);
    function ActionsDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.callbacksApi = new index_1.CallbacksApi(configuration);
        this.definitionsApi = new index_1.DefinitionsApi(configuration);
        this.functionsApi = new index_1.FunctionsApi(configuration);
        this.revisionsApi = new index_1.RevisionsApi(configuration);
    }
    return ActionsDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.ActionsDiscovery = ActionsDiscovery;
