import { Client } from '../../../index'
import BusinessUnitsDiscovery from '../../../src/discovery/settings/business_units/BusinessUnitsDiscovery'
import UsersDiscovery from '../../../src/discovery/settings/users/UsersDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().settings
    expect(BusinessUnitsDiscovery.name).toBe(client.businessUnits.constructor.name)
    expect(UsersDiscovery.name).toBe(client.users.constructor.name)
  })
})
