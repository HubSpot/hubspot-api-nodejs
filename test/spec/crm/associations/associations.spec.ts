import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(client.hasOwnProperty('typesApi')).toBeTruthy()
  })
})
