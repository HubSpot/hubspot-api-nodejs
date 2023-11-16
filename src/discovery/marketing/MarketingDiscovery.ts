import BaseDiscovery from '../BaseDiscovery'
import type EventsDiscovery from './events/EventsDiscovery'
import type FormsDiscovery from './forms/FormsDiscovery'
import type TransactionalDiscovery from './transactional/TransactionalDiscovery'

export default class MarketingDiscovery extends BaseDiscovery {
  protected _events: EventsDiscovery | undefined
  protected _forms: FormsDiscovery | undefined
  protected _transactional: TransactionalDiscovery | undefined

  /**
   * Getter
   * @returns EventsDiscovery
   */
  get events() {
    if (!this._events) {
      const requiredClass = require('./events/EventsDiscovery')
      this._events = new requiredClass.default(this.config) as EventsDiscovery
    }

    return this._events
  }

  /**
   * Getter
   * @returns FormsDiscovery
   */
  get forms() {
    if (!this._forms) {
      const requiredClass = require('./forms/FormsDiscovery')
      this._forms = new requiredClass.default(this.config) as FormsDiscovery
    }

    return this._forms
  }

  /**
   * Getter
   * @returns TransactionalDiscovery
   */
  get transactional() {
    if (!this._transactional) {
      const requiredClass = require('./transactional/TransactionalDiscovery')
      this._transactional = new requiredClass.default(this.config) as TransactionalDiscovery
    }

    return this._transactional
  }
}
