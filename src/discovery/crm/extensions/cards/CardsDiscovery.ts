import { createConfiguration } from '../../../../../codegen/crm/extensions/cards/configuration'
import {
  CardsApi,
  RequestContext,
  ResponseContext,
  SampleResponseApi,
} from '../../../../../codegen/crm/extensions/cards/index'
import { Observable } from '../../../../../codegen/crm/extensions/cards/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class CardsDiscovery {
  public cardsApi: CardsApi
  public sampleResponseApi: SampleResponseApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.cardsApi = new CardsApi(configuration)
    this.sampleResponseApi = new SampleResponseApi(configuration)
  }
}
