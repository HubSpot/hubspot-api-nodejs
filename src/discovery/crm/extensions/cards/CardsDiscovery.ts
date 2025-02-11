import {
  CardsApi,
  createConfiguration,
  RequestContext,
  ResponseContext,
  SampleResponseApi,
  ServerConfiguration,
} from '../../../../../codegen/crm/extensions/cards/index'
import { Observable } from '../../../../../codegen/crm/extensions/cards/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'

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
