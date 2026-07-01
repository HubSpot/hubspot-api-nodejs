import { Client } from '../../../../../index'
import { BasicApi } from '../../../../../codegen/crm/associations/schema'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations.schema
    expect(Object.prototype.hasOwnProperty.call(client, 'typesApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.typesApi.constructor.name)
  })
})
