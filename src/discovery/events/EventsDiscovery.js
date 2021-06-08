var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../baseDiscovery');
var index_1 = require('../../../codegen/events/index');
var configuration_1 = require('../../../codegen/events/configuration');
var EventsDiscovery = (function (_super) {
    __extends(EventsDiscovery, _super);
    function EventsDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.eventsApi = new index_1.EventsApi(configuration);
    }
    return EventsDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.EventsDiscovery = EventsDiscovery;
