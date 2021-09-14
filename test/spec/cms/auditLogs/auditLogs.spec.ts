import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.auditLogs
    expect(client.hasOwnProperty('auditLogsApi')).toBeTruthy()
  })
})
