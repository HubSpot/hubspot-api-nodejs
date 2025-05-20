import {
  CardsApi,
  RequestContext,
  ResponseContext,
  SampleResponseApi,
  ServerConfiguration,
  createConfiguration,
} from '../../../../../codegen/crm/extensions/cards/index'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'
import IConfiguration from '../../../../configuration/IConfiguration'
import { Observable } from '../../../../../codegen/crm/extensions/cards/rxjsStub'

export default class CardsDiscovery {
  public cardsApi: CardsApi
  public sampleResponseApi: SampleResponseApi

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

    this.cardsApi = ApiDecoratorService.getInstance().apply<CardsApi>(new CardsApi(configuration))
    this.sampleResponseApi = ApiDecoratorService.getInstance().apply<SampleResponseApi>(
      new SampleResponseApi(configuration),
    )
  }
}
