import { Client } from '../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().oauth
    expect(client.hasOwnProperty('accessTokensApi')).toBeTruthy()
    expect(client.hasOwnProperty('refreshTokensApi')).toBeTruthy()
    expect(client.hasOwnProperty('tokensApi')).toBeTruthy()
  })
})
