import { Client } from '../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().oauth
    expect(client.hasOwnProperty('defaultApi')).toBeTruthy()
  })
})
