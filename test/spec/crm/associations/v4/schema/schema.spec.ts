import { DefinitionsApi } from '../../../../../../codegen/crm/associations/v4/schema/index'
import { Client } from '../../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations.v4.schema
    expect(Object.prototype.hasOwnProperty.call(client, 'definitionsApi')).toBeTruthy()
    expect(DefinitionsApi.name).toBe(client.definitionsApi.constructor.name)
  })
})
