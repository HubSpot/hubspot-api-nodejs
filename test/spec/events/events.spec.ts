import { Client } from '../../../index'
import SendDiscovery from '../../../src/discovery/events/send/SendDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().events
    expect(client.hasOwnProperty('eventsApi')).toBeTruthy()
    expect(SendDiscovery.name).toBe(client.send.constructor.name)
  })
})
