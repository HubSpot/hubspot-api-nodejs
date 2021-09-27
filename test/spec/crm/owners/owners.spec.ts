import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.owners
    expect(client.hasOwnProperty('ownersApi')).toBeTruthy()
  })
})
