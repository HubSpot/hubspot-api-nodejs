var TransactionalDiscovery_1 = require('./transactional/TransactionalDiscovery');
var MarketingDiscovery = (function () {
    function MarketingDiscovery(config) {
        this.transactional = new TransactionalDiscovery_1.TransactionalDiscovery(config);
    }
    return MarketingDiscovery;
})();
exports.MarketingDiscovery = MarketingDiscovery;
