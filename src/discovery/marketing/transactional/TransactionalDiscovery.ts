import { createConfiguration } from '../../../../codegen/marketing/transactional/configuration'
import {
  PublicSmtpTokensApi,
  RequestContext,
  ResponseContext,
  SingleSendApi,
} from '../../../../codegen/marketing/transactional/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class TransactionalDiscovery extends BaseDiscovery {
  public publicSmtpTokensApi: PublicSmtpTokensApi
  public singleSendApi: SingleSendApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.publicSmtpTokensApi = new PublicSmtpTokensApi(configuration)
    this.singleSendApi = new SingleSendApi(configuration)
  }
}
