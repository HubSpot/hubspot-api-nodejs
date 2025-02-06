import { FoldersApi, ListsApi, MappingApi, MembershipsApi } from '../../../../codegen/crm/lists/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.lists
    expect(Object.prototype.hasOwnProperty.call(client, 'foldersApi')).toBeTruthy()
    expect(FoldersApi.name).toBe(client.foldersApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'listsApi')).toBeTruthy()
    expect(ListsApi.name).toBe(client.listsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'mappingApi')).toBeTruthy()
    expect(MappingApi.name).toBe(client.mappingApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'membershipsApi')).toBeTruthy()
    expect(MembershipsApi.name).toBe(client.membershipsApi.constructor.name)
  })
})
