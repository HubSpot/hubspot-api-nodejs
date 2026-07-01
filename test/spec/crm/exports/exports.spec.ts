import { Client } from '../../../../index'
import { BasicApi } from '../../../../codegen/crm/exports/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.exports
    expect(Object.prototype.hasOwnProperty.call(client, 'publicExportsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.publicExportsApi.constructor.name)
  })
})
