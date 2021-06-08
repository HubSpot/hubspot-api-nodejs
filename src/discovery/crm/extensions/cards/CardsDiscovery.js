var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../../baseDiscovery');
var index_1 = require('../../../../../codegen/crm/extensions/cards/index');
var configuration_1 = require('../../../../../codegen/crm/extensions/cards/configuration');
var CardsDiscovery = (function (_super) {
    __extends(CardsDiscovery, _super);
    function CardsDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.cardsApi = new index_1.CardsApi(configuration);
        this.sampleResponseApi = new index_1.SampleResponseApi(configuration);
    }
    return CardsDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.CardsDiscovery = CardsDiscovery;
