import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.timeline
    expect(client.hasOwnProperty('eventsApi')).toBeTruthy()
    expect(client.hasOwnProperty('templatesApi')).toBeTruthy()
    expect(client.hasOwnProperty('tokensApi')).toBeTruthy()
  })
})
