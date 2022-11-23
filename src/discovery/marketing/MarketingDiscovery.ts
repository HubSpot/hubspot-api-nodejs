import IConfiguration from '../../configuration/IConfiguration'
import EventsDiscovery from './events/EventsDiscovery'
import TransactionalDiscovery from './transactional/TransactionalDiscovery'

export default class MarketingDiscovery {
  public events: EventsDiscovery
  public transactional: TransactionalDiscovery

  constructor(config: IConfiguration = {}) {
    this.events = new EventsDiscovery(config)
    this.transactional = new TransactionalDiscovery(config)
  }
}
