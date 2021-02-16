import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().conversations
    expect(client.hasOwnProperty('visitorIdentification')).toBeTruthy()
  })
})
