import { IConfiguration } from './configuration/IConfiguration'
import { AutomationDiscovery } from './discovery/automation/AutomationDiscovery'
import { CmsDiscovery } from './discovery/cms/CmsDiscovery'
import { CommunicationPreferencesDiscovery } from './discovery/communicationPreferences/CommunicationPreferencesDiscovery'
import { ConversationsDiscovery } from './discovery/conversations/ConversationsDiscovery'
import { CrmDiscovery } from './discovery/crm/CrmDiscovery'
import { EventsDiscovery } from './discovery/events/EventsDiscovery'
import { MarketingDiscovery } from './discovery/marketing/MarketingDiscovery'
import { OauthDiscovery } from './discovery/oauth/OauthDiscovery'
import { WebhooksDiscovery } from './discovery/webhooks/WebhooksDiscovery'
import { HttpClient } from './services/http/HttpClient'
import { IHttpOptions } from './services/http/IHttpOptions'

export class Client {
  public automation: AutomationDiscovery = new AutomationDiscovery()
  public cms: CmsDiscovery = new CmsDiscovery()
  public communicationPreferences: CommunicationPreferencesDiscovery = new CommunicationPreferencesDiscovery()
  public conversations: ConversationsDiscovery = new ConversationsDiscovery()
  public crm: CrmDiscovery = new CrmDiscovery()
  public events: EventsDiscovery = new EventsDiscovery()
  public marketing: MarketingDiscovery = new MarketingDiscovery()
  public oauth: OauthDiscovery = new OauthDiscovery()
  public webhooks: WebhooksDiscovery = new WebhooksDiscovery()
  public config: IConfiguration

  constructor(config: IConfiguration = {}) {
    this.config = config
    this.init()
  }

  public init() {
    this.automation = new AutomationDiscovery(this.config)
    this.cms = new CmsDiscovery(this.config)
    this.communicationPreferences = new CommunicationPreferencesDiscovery(this.config)
    this.conversations = new ConversationsDiscovery(this.config)
    this.crm = new CrmDiscovery(this.config)
    this.events = new EventsDiscovery(this.config)
    this.marketing = new MarketingDiscovery(this.config)
    this.oauth = new OauthDiscovery(this.config)
    this.webhooks = new WebhooksDiscovery(this.config)
  }

  public setAccessToken(token: string) {
    this.config.accessToken = token
    this.init()
  }

  public setApiKey(apiKey: string) {
    this.config.apiKey = apiKey
    this.init()
  }

  public setDeveloperApiKey(developerApiKey: string) {
    this.config.developerApiKey = developerApiKey
    this.init()
  }

  public async apiRequest(opts: IHttpOptions = {}) {
    return await HttpClient.send(this.config, opts)
  }
}
