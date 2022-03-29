import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().settings
    expect(client.hasOwnProperty('users')).toBeTruthy()
  })
})
