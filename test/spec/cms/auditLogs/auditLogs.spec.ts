import { AuditLogsApi } from '../../../../codegen/cms/audit_logs/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.auditLogs
    expect(Object.prototype.hasOwnProperty.call(client, 'auditLogsApi')).toBeTruthy()
    expect(AuditLogsApi.name).toBe(client.auditLogsApi.constructor.name)
  })
})
