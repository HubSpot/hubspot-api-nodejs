import { RolesApi, TeamsApi, UsersApi } from '../../../../codegen/settings/users/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().settings.users
    expect(Object.prototype.hasOwnProperty.call(client, 'rolesApi')).toBeTruthy()
    expect(RolesApi.name).toBe(client.rolesApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'teamsApi')).toBeTruthy()
    expect(TeamsApi.name).toBe(client.teamsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'usersApi')).toBeTruthy()
    expect(UsersApi.name).toBe(client.usersApi.constructor.name)
  })
})
