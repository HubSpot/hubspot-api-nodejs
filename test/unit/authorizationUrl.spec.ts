import { Client } from '../../index'

describe('Check Authorization Url', () => {
  it('Authorization Url with optional_scope', () => {
    const client = new Client()
    const url = client.oauth.getAuthorizationUrl('clientid', 'http://localhost', 'contacts timeline', 'scope1 scope2')

    expect(
      'https://app.hubspot.com/oauth/authorize?client_id=clientid&redirect_uri=http%3A%2F%2Flocalhost&scope=contacts%20timeline&optional_scope=scope1%20scope2',
    ).toBe(url)
  })
  it('Authorization Url without optional_scope', () => {
    const client = new Client()
    const url = client.oauth.getAuthorizationUrl('clientid', 'http://localhost', 'contacts timeline')

    expect(
      'https://app.hubspot.com/oauth/authorize?client_id=clientid&redirect_uri=http%3A%2F%2Flocalhost&scope=contacts%20timeline',
    ).toBe(url)
  })
})
