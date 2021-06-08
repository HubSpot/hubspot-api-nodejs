var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../baseDiscovery');
var index_1 = require('../../../../codegen/crm/timeline/index');
var configuration_1 = require('../../../../codegen/crm/timeline/configuration');
var TimelineDiscovery = (function (_super) {
    __extends(TimelineDiscovery, _super);
    function TimelineDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.eventsApi = new index_1.EventsApi(configuration);
        this.templatesApi = new index_1.TemplatesApi(configuration);
        this.tokensApi = new index_1.TokensApi(configuration);
    }
    return TimelineDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.TimelineDiscovery = TimelineDiscovery;
