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
import IDecorator from './services/decorators/IDecorator'
import LimiterDecorator from './services/decorators/LimiterDecorator'
import RetryDecorator from './services/decorators/RetryDecorator'
import { HttpClient } from './services/http/HttpClient'
import { IHttpOptions } from './services/http/IHttpOptions'
import { Request } from './services/http/Request'

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
    ApiDecoratorService.getInstance().setDecorators(this.getDecorators())

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
      const requiredClass = require('./discovery/automation/AutomationDiscovery')
      this._automation = new requiredClass.default(this.config) as AutomationDiscovery
    }
    return this._automation
  }

  /**
   * Getter
   * @returns CmsDiscovery
   */
  get cms() {
    if (!this._cms) {
      const requiredClass = require('./discovery/cms/CmsDiscovery')
      this._cms = new requiredClass.default(this.config) as CmsDiscovery
    }
    return this._cms
  }

  /**
   * Getter
   * @returns CommunicationPreferencesDiscovery
   */
  get communicationPreferences() {
    if (!this._communicationPreferences) {
      const requiredClass = require('./discovery/communicationPreferences/CommunicationPreferencesDiscovery')
      this._communicationPreferences = new requiredClass.default(this.config) as CommunicationPreferencesDiscovery
    }
    return this._communicationPreferences
  }

  /**
   * Getter
   * @returns ConversationsDiscovery
   */
  get conversations() {
    if (!this._conversations) {
      const requiredClass = require('./discovery/conversations/ConversationsDiscovery')
      this._conversations = new requiredClass.default(this.config) as ConversationsDiscovery
    }

    return this._conversations
  }

  /**
   * Getter
   * @returns CrmDiscovery
   */
  get crm() {
    if (!this._crm) {
      const requiredClass = require('./discovery/crm/CrmDiscovery')
      this._crm = new requiredClass.default(this.config) as CrmDiscovery
    }
    return this._crm
  }

  /**
   * Getter
   * @returns EventsDiscovery
   */
  get events() {
    if (!this._events) {
      const requiredClass = require('./discovery/events/EventsDiscovery')
      this._events = new requiredClass.default(this.config) as EventsDiscovery
    }
    return this._events
  }

  /**
   * Getter
   * @returns FilesDiscovery
   */
  get files() {
    if (!this._files) {
      const requiredClass = require('./discovery/files/FilesDiscovery')
      this._files = new requiredClass.default(this.config) as FilesDiscovery
    }
    return this._files
  }

  /**
   * Getter
   * @returns MarketingDiscovery
   */
  get marketing() {
    if (!this._marketing) {
      const requiredClass = require('./discovery/marketing/MarketingDiscovery')
      this._marketing = new requiredClass.default(this.config) as MarketingDiscovery
    }

    return this._marketing
  }

  /**
   * Getter
   * @returns OauthDiscovery
   */
  get oauth() {
    if (!this._oauth) {
      const requiredClass = require('./discovery/oauth/OauthDiscovery')
      this._oauth = new requiredClass.default(this.config) as OauthDiscovery
    }

    return this._oauth
  }

  /**
   * Getter
   * @returns SettingsDiscovery
   */
  get settings() {
    if (!this._settings) {
      const requiredClass = require('./discovery/settings/SettingsDiscovery')
      this._settings = new requiredClass.default(this.config) as SettingsDiscovery
    }

    return this._settings
  }

  /**
   * Getter
   * @returns WebhooksDiscovery
   */
  get webhooks() {
    if (!this._webhooks) {
      const requiredClass = require('./discovery/webhooks/WebhooksDiscovery')
      this._webhooks = new requiredClass.default(this.config) as WebhooksDiscovery
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

  public apiRequest(opts: IHttpOptions = {}) {
    const request = new Request(this.config, opts)

    let { send } = HttpClient
    send = ApiDecoratorService.getInstance().applyToMethod(send)

    return send(request)
  }

  protected getDecorators(): IDecorator[] {
    const decorators = new Array()

    if (this.config.limiterOptions) {
      decorators.push(new LimiterDecorator(this.config.limiterOptions))
    }

    if (this.config.numberOfApiCallRetries && this.config.numberOfApiCallRetries > 0) {
      if (this.config.numberOfApiCallRetries > 6) {
        throw new Error('numberOfApiCallRetries can be set to a number from 0 - 6.')
      }
      decorators.push(new RetryDecorator(this.config.numberOfApiCallRetries))
    }

    return decorators
  }
}
