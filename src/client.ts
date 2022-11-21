import { IConfiguration } from './configuration/IConfiguration'
import { HttpClient } from './services/http/HttpClient'
import { IHttpOptions } from './services/http/IHttpOptions'
import { Request } from './services/http/Request'
import { initObject } from './services/initObject'

export class Client {
  public config: IConfiguration
  protected _automation: any
  protected _cms: any
  protected _communicationPreferences: any
  protected _conversations: any
  protected _crm: any
  protected _events: any
  protected _files: any
  protected _marketing: any
  protected _oauth: any
  protected _settings: any
  protected _webhooks: any

  constructor(config: IConfiguration = {}) {
    this.config = config
  }

  public resetDiscoveries() {
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
      this._automation = initObject('automation/AutomationDiscovery', this.config)
    }

    return this._automation
  }

  /**
   * Getter
   * @returns CmsDiscovery
   */
  get cms() {
    if (!this._cms) {
      this._cms = initObject('cms/CmsDiscovery', this.config)
    }

    return this._cms
  }

  /**
   * Getter
   * @returns CommunicationPreferencesDiscovery
   */
  get communicationPreferences() {
    if (!this._communicationPreferences) {
      this._communicationPreferences = initObject(
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
      this._conversations = initObject('conversations/ConversationsDiscovery', this.config)
    }

    return this._conversations
  }

  /**
   * Getter
   * @returns CrmDiscovery
   */
  get crm() {
    if (!this._crm) {
      this._crm = initObject('crm/CrmDiscovery', this.config)
    }

    return this._crm
  }

  /**
   * Getter
   * @returns EventsDiscovery
   */
  get events() {
    if (!this._events) {
      this._events = initObject('events/EventsDiscovery', this.config)
    }

    return this._events
  }

  /**
   * Getter
   * @returns FilesDiscovery
   */
  get files() {
    if (!this._files) {
      this._files = initObject('files/FilesDiscovery', this.config)
    }

    return this._files
  }

  /**
   * Getter
   * @returns MarketingDiscovery
   */
  get marketing() {
    if (!this._marketing) {
      this._marketing = initObject('marketing/MarketingDiscovery', this.config)
    }

    return this._marketing
  }

  /**
   * Getter
   * @returns OauthDiscovery
   */
  get oauth() {
    if (!this._oauth) {
      this._oauth = initObject('oauth/OauthDiscovery', this.config)
    }

    return this._oauth
  }

  /**
   * Getter
   * @returns SettingsDiscovery
   */
  get settings() {
    if (!this._settings) {
      this._settings = initObject('settings/SettingsDiscovery', this.config)
    }

    return this._settings
  }

  /**
   * Getter
   * @returns WebhooksDiscovery
   */
  get webhooks() {
    if (!this._webhooks) {
      this._webhooks = initObject('webhooks/WebhooksDiscovery', this.config)
    }

    return this._webhooks
  }

  public setAccessToken(token: string) {
    this.config.accessToken = token
    this.resetDiscoveries()
  }

  public setApiKey(apiKey: string) {
    this.config.apiKey = apiKey
    this.resetDiscoveries()
  }

  public setDeveloperApiKey(developerApiKey: string) {
    this.config.developerApiKey = developerApiKey
    this.resetDiscoveries()
  }

  public async apiRequest(opts: IHttpOptions = {}) {
    const request = new Request(this.config, opts)

    return await HttpClient.send(request)
  }
}
