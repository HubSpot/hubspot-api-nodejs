import IConfiguration from './configuration/IConfiguration'
import type AutomationDiscovery from './discovery/automation/AutomationDiscovery'
import type CmsDiscovery from './discovery/cms/CmsDiscovery'
import type CommunicationPreferencesDiscovery from './discovery/communicationPreferences/CommunicationPreferencesDiscovery'
import type ConversationsDiscovery from './discovery/conversations/ConversationsDiscovery'
import type CrmDiscovery from './discovery/crm/CrmDiscovery'
import type EventsDiscovery from './discovery/events/EventsDiscovery'
import type FilesDiscovery from './discovery/files/FilesDiscovery'
import type MarketingDiscovery from './discovery/marketing/MarketingDiscovery'
import type OauthDiscovery from './discovery/oauth/OauthDiscovery'
import type SettingsDiscovery from './discovery/settings/SettingsDiscovery'
import type WebhooksDiscovery from './discovery/webhooks/WebhooksDiscovery'
import ApiDecoratorService from './services/ApiDecoratorService'
import RetryDecorator from './services/decorators/RetryDecorator'
import { HttpClient } from './services/http/HttpClient'
import { IHttpOptions } from './services/http/IHttpOptions'
import { Request } from './services/http/Request'
import { initObject } from './services/initObject'
import { initObjectOld } from './services/initObjectOld'

export class Client {
  public config: IConfiguration
  protected _automation: AutomationDiscovery | undefined
  protected _cms: CmsDiscovery | undefined
  protected _communicationPreferences: CommunicationPreferencesDiscovery | undefined
  protected _conversations: ConversationsDiscovery | undefined
  protected _crm: CrmDiscovery | undefined
  protected _events: EventsDiscovery | undefined
  protected _files: FilesDiscovery | undefined
  protected _marketing: MarketingDiscovery | undefined
  protected _oauth: OauthDiscovery | undefined
  protected _settings: SettingsDiscovery | undefined
  protected _webhooks: WebhooksDiscovery | undefined

  constructor(config: IConfiguration = {}) {
    this.config = config
    this.init()
  }

  public init() {
    const decorators = new Array()
    if (this.config.numberOfApiCallRetries && this.config.numberOfApiCallRetries > 0) {
      if (this.config.numberOfApiCallRetries > 6) {
        throw new Error('numberOfApiCallRetries can be set to a number from 0 - 6.')
      }
      decorators.push(new RetryDecorator(this.config.numberOfApiCallRetries))
    }
    ApiDecoratorService.getInstance().setDecorators(decorators)

    this._automation = undefined
    this._cms = undefined
    this._communicationPreferences = undefined
    this._conversations = undefined
    this._crm = undefined
    this._events = undefined
    this._files = undefined
    this._marketing = undefined
    this._oauth = undefined
    this._settings = undefined
    this._webhooks = undefined
  }

  /**
   * Getter
   * @returns AutomationDiscovery
   */
  get automation() {
    if (!this._automation) {
      this._automation = initObjectOld<AutomationDiscovery>('automation/AutomationDiscovery', this.config)
    }
    return this._automation
  }

  /**
   * Getter
   * @returns CmsDiscovery
   */
  get cms() {
    if (!this._cms) {
      this._cms = initObjectOld<CmsDiscovery>('cms/CmsDiscovery', this.config)
    }
    return this._cms
  }

  /**
   * Getter
   * @returns CommunicationPreferencesDiscovery
   */
  get communicationPreferences() {
    if (!this._communicationPreferences) {
      this._communicationPreferences = initObjectOld<CommunicationPreferencesDiscovery>(
        'communicationPreferences/CommunicationPreferencesDiscovery',
        this.config,
      )
    }
    return this._communicationPreferences
  }

  /**
   * Getter
   * @returns ConversationsDiscovery
   */
  get conversations() {
    if (!this._conversations) {
      this._conversations = initObjectOld<ConversationsDiscovery>('conversations/ConversationsDiscovery', this.config)
    }

    return this._conversations
  }

  /**
   * Getter
   * @returns CrmDiscovery
   */
  get crm() {
    if (!this._crm) {
      this._crm = initObjectOld<CrmDiscovery>('crm/CrmDiscovery', this.config)
    }
    return this._crm
  }

  /**
   * Getter
   * @returns EventsDiscovery
   */
  get events() {
    if (!this._events) {
      this._events = initObjectOld<EventsDiscovery>('events/EventsDiscovery', this.config)
    }
    return this._events
  }

  /**
   * Getter
   * @returns FilesDiscovery
   */
  get files() {
    if (!this._files) {
      this._files = initObjectOld<FilesDiscovery>('files/FilesDiscovery', this.config)
    }
    return this._files
  }

  /**
   * Getter
   * @returns MarketingDiscovery
   */
  get marketing() {
    if (!this._marketing) {
      this._marketing = initObjectOld<MarketingDiscovery>('marketing/MarketingDiscovery', this.config)
    }

    return this._marketing
  }

  /**
   * Getter
   * @returns OauthDiscovery
   */
  get oauth() {
    if (!this._oauth) {
      this._oauth = initObjectOld<OauthDiscovery>('oauth/OauthDiscovery', this.config)
    }

    return this._oauth
  }

  /**
   * Getter
   * @returns SettingsDiscovery
   */
  get settings() {
    if (!this._settings) {
      this._settings = initObjectOld<SettingsDiscovery>('settings/SettingsDiscovery', this.config)
    }

    return this._settings
  }

  /**
   * Getter
   * @returns WebhooksDiscovery
   */
  get webhooks() {
    if (!this._webhooks) {
      this._webhooks = initObjectOld<WebhooksDiscovery>('webhooks/WebhooksDiscovery', this.config)
    }
    return this._webhooks
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
