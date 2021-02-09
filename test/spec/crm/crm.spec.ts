import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm
    expect(client.hasOwnProperty('extensions')).toBeTruthy()
  })
})
