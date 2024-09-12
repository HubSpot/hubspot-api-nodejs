import {
  createConfiguration,
  PublicSMTPTokensApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SingleSendApi,
} from '../../../../codegen/marketing/transactional/index'
import { Observable } from '../../../../codegen/marketing/transactional/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

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
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.publicSMTPTokensApi = ApiDecoratorService.getInstance().apply<PublicSMTPTokensApi>(
      new PublicSMTPTokensApi(configuration),
    )
    this.singleSendApi = ApiDecoratorService.getInstance().apply<SingleSendApi>(new SingleSendApi(configuration))
  }
}
