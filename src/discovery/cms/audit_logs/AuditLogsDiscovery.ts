import {
  AuditLogsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
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
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.auditLogsApi = ApiDecoratorService.getInstance().apply<AuditLogsApi>(new AuditLogsApi(configuration))
  }
}
