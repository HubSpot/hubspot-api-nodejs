import { BasicApi, BatchApi, MergeApi, SearchApi } from '../../../../codegen/crm/companies/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.companies
    expect(Object.prototype.hasOwnProperty.call(client, 'basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'mergeApi')).toBeTruthy()
    expect(MergeApi.name).toBe(client.mergeApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'searchApi')).toBeTruthy()
    expect(SearchApi.name).toBe(client.searchApi.constructor.name)
  })
})
