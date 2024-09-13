import { BasicApi, BatchApi, GDPRApi, MergeApi, SearchApi } from '../../../../codegen/crm/contacts/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.contacts
    expect(client.hasOwnProperty('basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(client.hasOwnProperty('gdprApi')).toBeTruthy()
    expect(GDPRApi.name).toBe(client.gdprApi.constructor.name)
    expect(client.hasOwnProperty('mergeApi')).toBeTruthy()
    expect(MergeApi.name).toBe(client.mergeApi.constructor.name)
    expect(client.hasOwnProperty('searchApi')).toBeTruthy()
    expect(SearchApi.name).toBe(client.searchApi.constructor.name)
  })
})
