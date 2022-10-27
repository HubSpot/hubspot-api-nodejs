import { createConfiguration } from '../../../../codegen/marketing/transactional/configuration'
import {
  PublicSmtpTokensApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SingleSendApi,
} from '../../../../codegen/marketing/transactional/index'
import { Observable } from '../../../../codegen/marketing/transactional/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

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

    this.publicSmtpTokensApi = new PublicSmtpTokensApi(configuration)
    this.singleSendApi = new SingleSendApi(configuration)
  }
}
