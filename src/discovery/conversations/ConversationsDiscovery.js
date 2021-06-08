var VisitorIdentificationDiscovery_1 = require('./visitor_identification/VisitorIdentificationDiscovery');
var ConversationsDiscovery = (function () {
    function ConversationsDiscovery(config) {
        this.visitorIdentification = new VisitorIdentificationDiscovery_1.VisitorIdentificationDiscovery(config);
    }
    return ConversationsDiscovery;
})();
exports.ConversationsDiscovery = ConversationsDiscovery;
