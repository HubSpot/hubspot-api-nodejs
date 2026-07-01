import { Client } from '../../../../index'
import { BasicApi } from '../../../../codegen/crm/schemas/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.schemas
    expect(Object.prototype.hasOwnProperty.call(client, 'coreApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.coreApi.constructor.name)
  })
})
