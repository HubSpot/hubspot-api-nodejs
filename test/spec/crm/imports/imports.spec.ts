import { Client } from '../../../../index'
import { BasicApi } from '../../../../codegen/crm/imports/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.imports
    expect(Object.prototype.hasOwnProperty.call(client, 'coreApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.coreApi.constructor.name)
  })
})
