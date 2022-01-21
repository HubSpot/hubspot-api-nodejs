import { createConfiguration } from '../../../../../codegen/crm/extensions/cards/configuration'
import {
  CardsApi,
  RequestContext,
  ResponseContext,
  SampleResponseApi,
} from '../../../../../codegen/crm/extensions/cards/index'
import { IConfiguration } from '../../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class CardsDiscovery extends BaseDiscovery {
  public cardsApi: CardsApi
  public sampleResponseApi: SampleResponseApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.cardsApi = new CardsApi(configuration)
    this.sampleResponseApi = new SampleResponseApi(configuration)
  }
}
