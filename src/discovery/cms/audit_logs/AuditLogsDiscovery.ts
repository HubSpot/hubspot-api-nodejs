import { createConfiguration } from '../../../../codegen/cms/audit_logs/configuration'
import { AuditLogsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/audit_logs/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class AuditLogsDiscovery {
  public auditLogsApi: AuditLogsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.auditLogsApi = new AuditLogsApi(configuration)
  }
}
