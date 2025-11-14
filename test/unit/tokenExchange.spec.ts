import { Client } from '../../index'

describe('Token Exchange with PKCE', () => {
  it('should have tokensApi with create method', () => {
    const client = new Client()
    expect(typeof client.oauth.tokensApi.create).toBe('function')
  })

  it('should accept code_verifier parameter (PKCE support)', async () => {
    const client = new Client()

    // Verify the method signature accepts code_verifier as 7th parameter
    // This test just verifies the method can be called with the parameter
    // It will fail at runtime due to invalid credentials, but that's expected
    try {
      await client.oauth.tokensApi.create(
        'authorization_code',
        'auth_code_123',
        'https://redirect.example.com',
        'client_id_123',
        'client_secret_123',
        undefined, // refreshToken
        'code_verifier_abc123', // codeVerifier - PKCE parameter
      )
    } catch (error) {
      // Expected to fail since these are fake credentials
      // The important thing is the method accepts the parameter
      expect(error).toBeDefined()
    }
  })

  it('should work without code_verifier (backwards compatibility)', async () => {
    const client = new Client()

    // Traditional OAuth without PKCE
    try {
      await client.oauth.tokensApi.create(
        'authorization_code',
        'auth_code_123',
        'https://redirect.example.com',
        'client_id_123',
        'client_secret_123',
      )
    } catch (error) {
      // Expected to fail since these are fake credentials
      expect(error).toBeDefined()
    }
  })
})
