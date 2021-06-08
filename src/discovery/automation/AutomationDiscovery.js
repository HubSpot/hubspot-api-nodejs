var ActionsDiscovery_1 = require('./actions/ActionsDiscovery');
var AutomationDiscovery = (function () {
    function AutomationDiscovery(config) {
        this.actions = new ActionsDiscovery_1.ActionsDiscovery(config);
    }
    return AutomationDiscovery;
})();
exports.AutomationDiscovery = AutomationDiscovery;
