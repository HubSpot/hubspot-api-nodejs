import { configuration } from './configuration'
import { AutomationDiscovery } from './discovery/automation/AutomationDiscovery'
import { CmsDiscovery } from './discovery/cms/CmsDiscovery'
import { ConversationsDiscovery } from './discovery/conversations/ConversationsDiscovery'
import { CrmDiscovery } from './discovery/crm/CrmDiscovery'
import { EventsDiscovery } from './discovery/events/EventsDiscovery'
import { MarketingDiscovery } from './discovery/marketing/MarketingDiscovery'
import { OauthDiscovery } from './discovery/oauth/OauthDiscovery'

export class hubspot {
    public automation: AutomationDiscovery
    public cms: CmsDiscovery
    public conversations: ConversationsDiscovery
    public crm: CrmDiscovery
    public events: EventsDiscovery
    public marketing: MarketingDiscovery
    public oauth: OauthDiscovery

    constructor(config: configuration) {
        this.automation = new AutomationDiscovery(config)
        this.cms = new CmsDiscovery(config)
        this.conversations = new ConversationsDiscovery(config)
        this.crm = new CrmDiscovery(config)
        this.events = new EventsDiscovery(config)
        this.marketing = new MarketingDiscovery(config)
        this.oauth = new OauthDiscovery(config)
    }
}