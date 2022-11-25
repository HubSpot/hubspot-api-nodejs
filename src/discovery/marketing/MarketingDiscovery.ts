import { initObject } from '../../services/initObject'
import BaseDiscovery from '../BaseDiscovery'
import type EventsDiscovery from './events/EventsDiscovery'
import type TransactionalDiscovery from './transactional/TransactionalDiscovery'

export default class MarketingDiscovery extends BaseDiscovery {
  protected _events: EventsDiscovery | undefined
  protected _transactional: TransactionalDiscovery | undefined

  /**
   * Getter
   * @returns EventsDiscovery
   */
  get events() {
    if (!this._events) {
      this._events = initObject<EventsDiscovery>('marketing/events/EventsDiscovery', this.config)
    }

    return this._events
  }

  /**
   * Getter
   * @returns TransactionalDiscovery
   */
  get transactional() {
    if (!this._transactional) {
      this._transactional = initObject<TransactionalDiscovery>(
        'marketing/transactional/TransactionalDiscovery',
        this.config,
      )
    }

    return this._transactional
  }
}
