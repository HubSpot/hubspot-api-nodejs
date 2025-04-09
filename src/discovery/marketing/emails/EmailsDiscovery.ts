import {
  MarketingEmailsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  StatisticsApi,
  createConfiguration,
} from '../../../../codegen/marketing/emails/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/marketing/emails/rxjsStub'

export default class EmailsDiscovery {
  public marketingEmailsApi: MarketingEmailsApi
  public statisticsApi: StatisticsApi

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

    this.marketingEmailsApi =
      ApiDecoratorService.getInstance().apply<MarketingEmailsApi>(
        new MarketingEmailsApi(configuration),
      )
    this.statisticsApi = ApiDecoratorService.getInstance().apply<StatisticsApi>(new StatisticsApi(configuration))
  }
}
