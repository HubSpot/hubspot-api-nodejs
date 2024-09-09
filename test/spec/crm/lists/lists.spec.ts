import { FoldersApi, ListsApi, MappingApi, MembershipsApi } from '../../../../codegen/crm/lists/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.lists
    expect(client.hasOwnProperty('foldersApi')).toBeTruthy()
    expect(FoldersApi.name).toBe(client.foldersApi.constructor.name)
    expect(client.hasOwnProperty('listsApi')).toBeTruthy()
    expect(ListsApi.name).toBe(client.listsApi.constructor.name)
    expect(client.hasOwnProperty('mappingApi')).toBeTruthy()
    expect(MappingApi.name).toBe(client.mappingApi.constructor.name)
    expect(client.hasOwnProperty('membershipsApi')).toBeTruthy()
    expect(MembershipsApi.name).toBe(client.membershipsApi.constructor.name)
  })
})
