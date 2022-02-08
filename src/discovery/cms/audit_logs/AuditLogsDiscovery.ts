import { createConfiguration } from '../../../../codegen/cms/audit_logs/configuration'
import { AuditLogsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/audit_logs/index'
import { Observable } from '../../../../codegen/cms/audit_logs/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class AuditLogsDiscovery {
  public auditLogsApi: AuditLogsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.auditLogsApi = new AuditLogsApi(configuration)
  }
}
