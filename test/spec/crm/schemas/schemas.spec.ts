import { CoreApi } from '../../../../codegen/crm/schemas/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.schemas
    expect(client.hasOwnProperty('coreApi')).toBeTruthy()
    expect(CoreApi.name).toBe(client.coreApi.constructor.name)
  })
})
