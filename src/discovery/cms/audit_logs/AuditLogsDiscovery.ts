import { createConfiguration } from '../../../../codegen/cms/audit_logs/configuration'
import { AuditLogsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/audit_logs/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class AuditLogsDiscovery {
  public auditLogsApi: AuditLogsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.auditLogsApi = new AuditLogsApi(configuration)
  }
}
