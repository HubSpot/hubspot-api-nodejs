import {
  PublicSMTPTokensApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SingleSendApi,
  createConfiguration,
} from '../../../../codegen/marketing/transactional/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/marketing/transactional/rxjsStub'

export default class TransactionalDiscovery {
  public publicSMTPTokensApi: PublicSMTPTokensApi
  public singleSendApi: SingleSendApi

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

    this.publicSMTPTokensApi = ApiDecoratorService.getInstance().apply<PublicSMTPTokensApi>(
      new PublicSMTPTokensApi(configuration),
    )
    this.singleSendApi = ApiDecoratorService.getInstance().apply<SingleSendApi>(new SingleSendApi(configuration))
  }
}
