import { BasicApi, BatchApi, ReportApi } from '../../../../../codegen/crm/associations/v4/index'
import { Client } from '../../../../../index'
import SchemaDiscovery from '../../../../../src/discovery/crm/associations/v4/schema/SchemaDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations.v4
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'basicApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'batchApi')).toBeTruthy()
    expect(ReportApi.name).toBe(client.reportApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'reportApi')).toBeTruthy()
    expect(SchemaDiscovery.name).toBe(client.schema.constructor.name)
  })
})
