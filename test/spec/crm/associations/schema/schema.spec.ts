import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations.schema
    expect(client.hasOwnProperty('typesApi')).toBeTruthy()
  })
})
