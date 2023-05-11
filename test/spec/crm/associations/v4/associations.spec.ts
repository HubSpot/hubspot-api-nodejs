import { Client } from '../../../../../index'
import SchemaDiscovery from '../../../../../src/discovery/crm/associations/v4/schema/SchemaDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations.v4
    expect(client.hasOwnProperty('basicApi')).toBeTruthy()
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(SchemaDiscovery.name).toBe(client.schema.constructor.name)
  })
})
