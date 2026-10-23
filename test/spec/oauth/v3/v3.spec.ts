import { AdvancedApi } from '../../../../codegen/oauth/v3/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().oauth.v3
    expect(Object.prototype.hasOwnProperty.call(client, 'advancedApi')).toBeTruthy()
    expect(AdvancedApi.name).toBe(client.advancedApi.constructor.name)
  })
})
