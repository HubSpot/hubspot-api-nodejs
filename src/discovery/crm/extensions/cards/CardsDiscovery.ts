import {
  BasicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../../codegen/crm/extensions/cards/index'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'
import IConfiguration from '../../../../configuration/IConfiguration'
import { Observable } from '../../../../../codegen/crm/extensions/cards/rxjsStub'

export default class CardsDiscovery {
  public cardsApi: BasicApi
  public sampleResponseApi: BasicApi

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

    const api = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.cardsApi = api
    this.sampleResponseApi = api
  }
}
