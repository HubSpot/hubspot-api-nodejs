var AutomationDiscovery_1 = require('./discovery/automation/AutomationDiscovery');
var CmsDiscovery_1 = require('./discovery/cms/CmsDiscovery');
var ConversationsDiscovery_1 = require('./discovery/conversations/ConversationsDiscovery');
var CrmDiscovery_1 = require('./discovery/crm/CrmDiscovery');
var EventsDiscovery_1 = require('./discovery/events/EventsDiscovery');
var MarketingDiscovery_1 = require('./discovery/marketing/MarketingDiscovery');
var OauthDiscovery_1 = require('./discovery/oauth/OauthDiscovery');
var hubspot = (function () {
    function hubspot(config) {
        this.automation = new AutomationDiscovery_1.AutomationDiscovery(config);
        this.cms = new CmsDiscovery_1.CmsDiscovery(config);
        this.conversations = new ConversationsDiscovery_1.ConversationsDiscovery(config);
        this.crm = new CrmDiscovery_1.CrmDiscovery(config);
        this.events = new EventsDiscovery_1.EventsDiscovery(config);
        this.marketing = new MarketingDiscovery_1.MarketingDiscovery(config);
        this.oauth = new OauthDiscovery_1.OauthDiscovery(config);
    }
    return hubspot;
})();
exports.hubspot = hubspot;
