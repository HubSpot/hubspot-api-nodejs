import { IConfiguration } from './configuration/IConfiguration'
import AutomationDiscovery from './discovery/automation/AutomationDiscovery'
import CmsDiscovery from './discovery/cms/CmsDiscovery'
import CommunicationPreferencesDiscovery from './discovery/communicationPreferences/CommunicationPreferencesDiscovery'
import ConversationsDiscovery from './discovery/conversations/ConversationsDiscovery'
import CrmDiscovery from './discovery/crm/CrmDiscovery'
import EventsDiscovery from './discovery/events/EventsDiscovery'
import FilesDiscovery from './discovery/files/FilesDiscovery'
import MarketingDiscovery from './discovery/marketing/MarketingDiscovery'
import OauthDiscovery from './discovery/oauth/OauthDiscovery'
import SettingsDiscovery from './discovery/settings/SettingsDiscovery'
import WebhooksDiscovery from './discovery/webhooks/WebhooksDiscovery'
import { HttpClient } from './services/http/HttpClient'
import { IHttpOptions } from './services/http/IHttpOptions'
import { Request } from './services/http/Request'

export class Client {
  public config: IConfiguration
  public automation: AutomationDiscovery = new AutomationDiscovery()
  public cms: CmsDiscovery = new CmsDiscovery()
  public communicationPreferences: CommunicationPreferencesDiscovery = new CommunicationPreferencesDiscovery()
  public conversations: ConversationsDiscovery = new ConversationsDiscovery()
  public crm: CrmDiscovery = new CrmDiscovery()
  public events: EventsDiscovery = new EventsDiscovery()
  public files: FilesDiscovery = new FilesDiscovery()
  public marketing: MarketingDiscovery = new MarketingDiscovery()
  public oauth: OauthDiscovery = new OauthDiscovery()
  public settings: SettingsDiscovery = new SettingsDiscovery()
  public webhooks: WebhooksDiscovery = new WebhooksDiscovery()

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
    this.files = new FilesDiscovery(this.config)
    this.marketing = new MarketingDiscovery(this.config)
    this.oauth = new OauthDiscovery(this.config)
    this.settings = new SettingsDiscovery(this.config)
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
    const request = new Request(this.config, opts)

    return await HttpClient.send(request)
  }
}
