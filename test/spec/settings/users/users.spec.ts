import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().settings.users
    expect(client.hasOwnProperty('rolesApi')).toBeTruthy()
    expect(client.hasOwnProperty('teamsApi')).toBeTruthy()
    expect(client.hasOwnProperty('usersApi')).toBeTruthy()
  })
})
