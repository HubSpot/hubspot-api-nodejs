import { Client } from '../../../index'
import VisitorIdentificationDiscovery from '../../../src/discovery/conversations/visitor_identification/VisitorIdentificationDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().conversations
    expect(VisitorIdentificationDiscovery.name).toBe(client.visitorIdentification.constructor.name)
  })
})
