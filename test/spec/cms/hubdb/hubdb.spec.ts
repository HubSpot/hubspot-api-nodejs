import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.hubdb
    expect(client.hasOwnProperty('rowsApi')).toBeTruthy()
    expect(client.hasOwnProperty('rowsBatchApi')).toBeTruthy()
    expect(client.hasOwnProperty('tablesApi')).toBeTruthy()
  })
})
