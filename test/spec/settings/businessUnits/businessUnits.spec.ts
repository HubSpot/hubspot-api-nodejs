import { BasicApi } from '../../../../codegen/settings/business_units/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().settings.businessUnits
    expect(Object.prototype.hasOwnProperty.call(client, 'businessUnitApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.businessUnitApi.constructor.name)
  })
})
