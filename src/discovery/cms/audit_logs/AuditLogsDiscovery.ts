import { createConfiguration } from '../../../../codegen/cms/audit_logs/configuration'
import {
  AuditLogsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/cms/audit_logs/index'
import { Observable } from '../../../../codegen/cms/audit_logs/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'

export default class AuditLogsDiscovery {
  public auditLogsApi: AuditLogsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.auditLogsApi = new AuditLogsApi(configuration)
  }
}
