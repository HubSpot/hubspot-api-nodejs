import { Client } from '../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().webhooks
    expect(client.hasOwnProperty('settingsApi')).toBeTruthy()
    expect(client.hasOwnProperty('subscriptionsApi')).toBeTruthy()
  })
})
