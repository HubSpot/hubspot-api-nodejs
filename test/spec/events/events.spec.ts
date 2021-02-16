import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().events
    expect(client.hasOwnProperty('eventsApi')).toBeTruthy()
  })
})
