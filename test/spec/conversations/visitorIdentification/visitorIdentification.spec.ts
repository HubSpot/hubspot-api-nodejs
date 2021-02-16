import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().conversations.visitorIdentification
    expect(client.hasOwnProperty('generateApi')).toBeTruthy()
  })
})
