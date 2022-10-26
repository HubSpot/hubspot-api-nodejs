import { initObject } from '../../services/initObject'
import BaseDiscovery from '../BaseDiscovery'

export class MarketingDiscovery extends BaseDiscovery {
  protected _events: any
  protected _transactional: any

  /**
   * Getter
   * @returns EventsDiscovery
   */
  get events() {
    if (!this._events) {
      this._events = initObject('marketing/events/EventsDiscovery', this.config)
    }

    return this._events
  }

  /**
   * Getter
   * @returns TransactionalDiscovery
   */
  get transactional() {
    if (!this._transactional) {
      this._transactional = initObject('marketing/transactional/TransactionalDiscovery', this.config)
    }

    return this._transactional
  }
}
