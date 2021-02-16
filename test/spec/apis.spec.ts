import { Client } from '../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client()
    expect(client.hasOwnProperty('automation')).toBeTruthy()
    expect(client.hasOwnProperty('crm')).toBeTruthy()
    expect(client.hasOwnProperty('cms')).toBeTruthy()
    expect(client.hasOwnProperty('events')).toBeTruthy()
    expect(client.hasOwnProperty('oauth')).toBeTruthy()
    expect(client.hasOwnProperty('webhooks')).toBeTruthy()
  })
})
