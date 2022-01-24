import { createConfiguration } from '../../../../codegen/marketing/transactional/configuration'
import {
  PublicSmtpTokensApi,
  RequestContext,
  ResponseContext,
  SingleSendApi,
} from '../../../../codegen/marketing/transactional/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class TransactionalDiscovery {
  public publicSmtpTokensApi: PublicSmtpTokensApi
  public singleSendApi: SingleSendApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.publicSmtpTokensApi = new PublicSmtpTokensApi(configuration)
    this.singleSendApi = new SingleSendApi(configuration)
  }
}
