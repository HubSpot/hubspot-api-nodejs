import { Client } from '../../index'

describe('Check Authorization Url', () => {
  it('should generate authorization url with optional_scope', () => {
    const client = new Client()
    const url = client.oauth.getAuthorizationUrl('clientid', 'http://localhost', 'contacts timeline', 'scope1 scope2')

    expect(
      'https://app.hubspot.com/oauth/authorize?client_id=clientid&redirect_uri=http%3A%2F%2Flocalhost&scope=contacts%20timeline&optional_scope=scope1%20scope2',
    ).toBe(url)
  })
  it('should generate authorization url without optional_scope', () => {
    const client = new Client()
    const url = client.oauth.getAuthorizationUrl('clientid', 'http://localhost', 'contacts timeline')

    expect(
      'https://app.hubspot.com/oauth/authorize?client_id=clientid&redirect_uri=http%3A%2F%2Flocalhost&scope=contacts%20timeline',
    ).toBe(url)
  })
  it('should generate authorization url with PKCE parameters', () => {
    const client = new Client()
    const url = client.oauth.getAuthorizationUrl(
      'clientid',
      'http://localhost',
      'contacts timeline',
      undefined,
      undefined,
      'test_code_challenge',
      'S256',
    )

    expect(
      'https://app.hubspot.com/oauth/authorize?client_id=clientid&redirect_uri=http%3A%2F%2Flocalhost&scope=contacts%20timeline&code_challenge=test_code_challenge&code_challenge_method=S256',
    ).toBe(url)
  })
  it('should generate authorization url with PKCE and optional parameters', () => {
    const client = new Client()
    const url = client.oauth.getAuthorizationUrl(
      'clientid',
      'http://localhost',
      'contacts timeline',
      'scope1 scope2',
      'random_state',
      'test_code_challenge',
      'S256',
    )

    expect(
      'https://app.hubspot.com/oauth/authorize?client_id=clientid&redirect_uri=http%3A%2F%2Flocalhost&scope=contacts%20timeline&optional_scope=scope1%20scope2&state=random_state&code_challenge=test_code_challenge&code_challenge_method=S256',
    ).toBe(url)
  })
  it('should generate authorization url without PKCE when not provided', () => {
    const client = new Client()
    const url = client.oauth.getAuthorizationUrl(
      'clientid',
      'http://localhost',
      'contacts timeline',
      'scope1 scope2',
      'state123',
    )

    expect(
      'https://app.hubspot.com/oauth/authorize?client_id=clientid&redirect_uri=http%3A%2F%2Flocalhost&scope=contacts%20timeline&optional_scope=scope1%20scope2&state=state123',
    ).toBe(url)
  })
})
