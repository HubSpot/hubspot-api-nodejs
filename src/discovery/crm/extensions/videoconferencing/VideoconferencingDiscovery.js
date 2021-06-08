var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../../baseDiscovery');
var index_1 = require('../../../../../codegen/crm/extensions/videoconferencing/index');
var configuration_1 = require('../../../../../codegen/crm/extensions/videoconferencing/configuration');
var VideoconferencingDiscovery = (function (_super) {
    __extends(VideoconferencingDiscovery, _super);
    function VideoconferencingDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.settingsApi = new index_1.SettingsApi(configuration);
    }
    return VideoconferencingDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.VideoconferencingDiscovery = VideoconferencingDiscovery;
