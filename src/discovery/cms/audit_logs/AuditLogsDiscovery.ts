import { createConfiguration } from '../../../../codegen/cms/audit_logs/configuration'
import { AuditLogsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/audit_logs/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class AuditLogsDiscovery extends BaseDiscovery {
  public auditLogsApi: AuditLogsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.auditLogsApi = new AuditLogsApi(configuration)
  }
}
