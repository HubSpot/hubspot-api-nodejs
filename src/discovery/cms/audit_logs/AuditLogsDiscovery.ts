import {
  AuditLogsApi,
  Configuration,
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/cms/audit_logs/index'
import { Observable } from '../../../../codegen/cms/audit_logs/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

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

    this.auditLogsApi = ApiDecoratorService.getInstance().apply<AuditLogsApi, Configuration>(
      new AuditLogsApi(configuration),
      configuration,
    )
  }
}
