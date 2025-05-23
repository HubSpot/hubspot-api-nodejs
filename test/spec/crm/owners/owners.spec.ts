import { Client } from '../../../../index'
import { OwnersApi } from '../../../../codegen/crm/owners/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.owners
    expect(Object.prototype.hasOwnProperty.call(client, 'ownersApi')).toBeTruthy()
    expect(OwnersApi.name).toBe(client.ownersApi.constructor.name)
  })
})
