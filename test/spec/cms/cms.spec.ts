import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms
    expect(client.hasOwnProperty('auditLogs')).toBeTruthy()
    expect(client.hasOwnProperty('blogs')).toBeTruthy()
    expect(client.hasOwnProperty('domains')).toBeTruthy()
    expect(client.hasOwnProperty('hubdb')).toBeTruthy()
    expect(client.hasOwnProperty('performance')).toBeTruthy()
    expect(client.hasOwnProperty('urlRedirects')).toBeTruthy()
    expect(client.hasOwnProperty('siteSearch')).toBeTruthy()
    expect(client.hasOwnProperty('sourceCode')).toBeTruthy()
  })
})
