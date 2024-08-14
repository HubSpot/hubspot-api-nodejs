import { BasicApi, BatchApi, SearchApi } from '../../../../../codegen/crm/objects/leads/index'
import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.objects.leads
    expect(client.hasOwnProperty('basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(client.hasOwnProperty('searchApi')).toBeTruthy()
    expect(SearchApi.name).toBe(client.searchApi.constructor.name)
  })
})
