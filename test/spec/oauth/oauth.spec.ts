import { AccessTokensApi, RefreshTokensApi, TokensApi  } from '../../../codegen/oauth/index'
import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().oauth
    expect(Object.prototype.hasOwnProperty.call(client, 'accessTokensApi')).toBeTruthy()
    expect(AccessTokensApi.name).toBe(client.accessTokensApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'refreshTokensApi')).toBeTruthy()
    expect(RefreshTokensApi.name).toBe(client.refreshTokensApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'tokensApi')).toBeTruthy()
    expect(TokensApi.name).toBe(client.tokensApi.constructor.name)
  })
})
