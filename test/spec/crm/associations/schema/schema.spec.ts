import { TypesApi } from '../../../../../codegen/crm/associations/schema'
import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations.schema
    expect(Object.prototype.hasOwnProperty.call(client, 'typesApi')).toBeTruthy()
    expect(TypesApi.name).toBe(client.typesApi.constructor.name)
  })
})
