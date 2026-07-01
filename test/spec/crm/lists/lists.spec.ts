import { BasicApi } from '../../../../codegen/crm/lists/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.lists
    expect(Object.prototype.hasOwnProperty.call(client, 'foldersApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.foldersApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'listsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.listsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'mappingApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.mappingApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'membershipsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.membershipsApi.constructor.name)
  })
})
