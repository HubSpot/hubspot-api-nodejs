import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.extensions
    expect(client.hasOwnProperty('accounting')).toBeTruthy()
    expect(client.hasOwnProperty('calling')).toBeTruthy()
    expect(client.hasOwnProperty('cards')).toBeTruthy()
    expect(client.hasOwnProperty('videoconferencing')).toBeTruthy()
  })
})
