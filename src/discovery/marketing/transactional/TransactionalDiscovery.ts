import {
  Configuration,
  createConfiguration,
  PublicSmtpTokensApi,
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
  public publicSmtpTokensApi: PublicSmtpTokensApi
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

    this.publicSmtpTokensApi = ApiDecoratorService.getInstance().apply<PublicSmtpTokensApi, Configuration>(
      new PublicSmtpTokensApi(configuration),
      configuration,
    )
    this.singleSendApi = ApiDecoratorService.getInstance().apply<SingleSendApi, Configuration>(
      new SingleSendApi(configuration),
      configuration,
    )
  }
}
