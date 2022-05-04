import { createConfiguration } from '../../../../codegen/conversations/visitor_identification/configuration'
import {
  GenerateApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/conversations/visitor_identification/index'
import { Observable } from '../../../../codegen/conversations/visitor_identification/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class VisitorIdentificationDiscovery {
  public generateApi: GenerateApi

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

    this.generateApi = new GenerateApi(configuration)
  }
}
