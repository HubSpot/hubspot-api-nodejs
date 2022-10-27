import { Client } from '../../../index'
import UsersDiscovery from '../../../src/discovery/settings/users/UsersDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().settings
    expect(UsersDiscovery.name).toBe(client.users.constructor.name)
  })
})
