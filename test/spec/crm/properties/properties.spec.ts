import { BatchApi, CoreApi, GroupsApi } from '../../../../codegen/crm/properties/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.properties
    expect(Object.prototype.hasOwnProperty.call(client, 'batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'coreApi')).toBeTruthy()
    expect(CoreApi.name).toBe(client.coreApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'groupsApi')).toBeTruthy()
    expect(GroupsApi.name).toBe(client.groupsApi.constructor.name)
  })
})
