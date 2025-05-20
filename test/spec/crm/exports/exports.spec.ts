import { Client } from '../../../../index'
import { PublicExportsApi } from '../../../../codegen/crm/exports/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.exports
    expect(Object.prototype.hasOwnProperty.call(client, 'publicExportsApi')).toBeTruthy()
    expect(PublicExportsApi.name).toBe(client.publicExportsApi.constructor.name)
  })
})
