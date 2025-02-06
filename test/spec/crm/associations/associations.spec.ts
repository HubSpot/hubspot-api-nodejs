import { BatchApi } from '../../../../codegen/crm/associations/index'
import { Client } from '../../../../index'
import SchemaDiscovery from '../../../../src/discovery/crm/associations/schema/SchemaDiscovery'
import AssociationsDiscovery from '../../../../src/discovery/crm/associations/v4/AssociationsDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations
    expect(Object.prototype.hasOwnProperty.call(client, 'batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(SchemaDiscovery.name).toBe(client.schema.constructor.name)
    expect(AssociationsDiscovery.name).toBe(client.v4.constructor.name)
  })
})
