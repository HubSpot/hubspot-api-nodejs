import { Client } from '../../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations.v4.schema
    expect(client.hasOwnProperty('definitionsApi')).toBeTruthy()
  })
})
