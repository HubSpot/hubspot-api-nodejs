import { Client } from '../../../index'
import EventsDiscovery from '../../../src/discovery/marketing/events/EventsDiscovery'
import FormsDiscovery from '../../../src/discovery/marketing/forms/FormsDiscovery'
import TransactionalDiscovery from '../../../src/discovery/marketing/transactional/TransactionalDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing
    expect(EventsDiscovery.name).toBe(client.events.constructor.name)
    expect(FormsDiscovery.name).toBe(client.forms.constructor.name)
    expect(TransactionalDiscovery.name).toBe(client.transactional.constructor.name)
  })
})
