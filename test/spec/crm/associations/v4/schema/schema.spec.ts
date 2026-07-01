import { Client } from '../../../../../../index'
import { LabelsApi } from '../../../../../../codegen/crm/associations/v4/schema/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations.v4.schema
    expect(Object.prototype.hasOwnProperty.call(client, 'definitionsApi')).toBeTruthy()
    expect(LabelsApi.name).toBe(client.definitionsApi.constructor.name)
  })
})
