import { Client } from '../../../index'
import EmailsDiscovery from '../../../src/discovery/marketing/emails/EmailsDiscovery'
import EventsDiscovery from '../../../src/discovery/marketing/events/EventsDiscovery'
import FormsDiscovery from '../../../src/discovery/marketing/forms/FormsDiscovery'
import TransactionalDiscovery from '../../../src/discovery/marketing/transactional/TransactionalDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing
    expect(EmailsDiscovery.name).toBe(client.emails.constructor.name)
    expect(EventsDiscovery.name).toBe(client.events.constructor.name)
    expect(FormsDiscovery.name).toBe(client.forms.constructor.name)
    expect(TransactionalDiscovery.name).toBe(client.transactional.constructor.name)
  })
})
