import { Client } from '../../../index'
import { EventsApi } from '../../../codegen/events/index'
import SendDiscovery from '../../../src/discovery/events/send/SendDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().events
    expect(Object.prototype.hasOwnProperty.call(client, 'eventsApi')).toBeTruthy()
    expect(EventsApi.name).toBe(client.eventsApi.constructor.name)
    expect(SendDiscovery.name).toBe(client.send.constructor.name)
  })
})
