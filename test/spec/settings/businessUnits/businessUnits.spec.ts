import { BusinessUnitApi } from '../../../../codegen/settings/business_units/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().settings.businessUnits
    expect(client.hasOwnProperty('businessUnitApi')).toBeTruthy()
    expect(BusinessUnitApi.name).toBe(client.businessUnitApi.constructor.name)
  })
})
