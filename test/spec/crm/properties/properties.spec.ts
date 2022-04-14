import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.properties
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(client.hasOwnProperty('coreApi')).toBeTruthy()
    expect(client.hasOwnProperty('groupsApi')).toBeTruthy()
  })
})
