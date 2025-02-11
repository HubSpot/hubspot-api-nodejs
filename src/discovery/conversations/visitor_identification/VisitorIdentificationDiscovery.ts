import {
  createConfiguration,
  GenerateApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/conversations/visitor_identification/index'
import { Observable } from '../../../../codegen/conversations/visitor_identification/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class VisitorIdentificationDiscovery {
  public generateApi: GenerateApi

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

    this.generateApi = ApiDecoratorService.getInstance().apply<GenerateApi>(new GenerateApi(configuration))
  }
}
