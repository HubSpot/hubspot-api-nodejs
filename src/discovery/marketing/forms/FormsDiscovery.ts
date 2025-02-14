import {
  FormsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../codegen/marketing/forms/index'
import { Observable } from '../../../../codegen/marketing/forms/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class FormsDiscovery {
  public formsApi: FormsApi

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

    this.formsApi = ApiDecoratorService.getInstance().apply<FormsApi>(new FormsApi(configuration))
  }
}
