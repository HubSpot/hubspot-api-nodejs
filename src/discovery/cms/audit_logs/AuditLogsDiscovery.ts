import { createConfiguration } from '../../../../codegen/cms/audit_logs/configuration'
import { AuditLogsApi } from '../../../../codegen/cms/audit_logs/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class AuditLogsDiscovery extends BaseDiscovery {
  public auditLogsApi: AuditLogsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.auditLogsApi = new AuditLogsApi(configuration)
  }
}
