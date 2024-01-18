import { BasicApi, BatchApi, GDPRApi, PublicObjectApi, SearchApi } from '../../../../codegen/crm/deals/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.deals
    expect(client.hasOwnProperty('basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(client.hasOwnProperty('gdprApi')).toBeTruthy()
    expect(GDPRApi.name).toBe(client.gdprApi.constructor.name)
    expect(client.hasOwnProperty('publicObjectApi')).toBeTruthy()
    expect(PublicObjectApi.name).toBe(client.publicObjectApi.constructor.name)
    expect(client.hasOwnProperty('searchApi')).toBeTruthy()
    expect(SearchApi.name).toBe(client.searchApi.constructor.name)
  })
})
