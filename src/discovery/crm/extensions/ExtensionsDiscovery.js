var AccountingDiscovery_1 = require('./accounting/AccountingDiscovery');
var CallingDiscovery_1 = require('./calling/CallingDiscovery');
var CardsDiscovery_1 = require('./cards/CardsDiscovery');
var VideoconferencingDiscovery_1 = require('./videoconferencing/VideoconferencingDiscovery');
var ExtensionsDiscovery = (function () {
    function ExtensionsDiscovery(config) {
        this.accounting = new AccountingDiscovery_1.AccountingDiscovery(config);
        this.calling = new CallingDiscovery_1.CallingDiscovery(config);
        this.cards = new CardsDiscovery_1.CardsDiscovery(config);
        this.videoconferencing = new VideoconferencingDiscovery_1.VideoconferencingDiscovery(config);
    }
    return ExtensionsDiscovery;
})();
exports.ExtensionsDiscovery = ExtensionsDiscovery;
