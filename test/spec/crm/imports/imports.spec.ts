import { Client } from '../../../../index'
import { CoreApi } from '../../../../codegen/crm/imports/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.imports
    expect(Object.prototype.hasOwnProperty.call(client, 'coreApi')).toBeTruthy()
    expect(CoreApi.name).toBe(client.coreApi.constructor.name)
  })
})
