import { BasicApi, BatchApi, SearchApi } from '../../../../codegen/crm/quotes/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.quotes
    expect(Object.prototype.hasOwnProperty.call(client, 'basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'searchApi')).toBeTruthy()
    expect(SearchApi.name).toBe(client.searchApi.constructor.name)
  })
})
