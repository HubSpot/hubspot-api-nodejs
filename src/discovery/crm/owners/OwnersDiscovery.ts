import { createConfiguration } from '../../../../codegen/crm/owners/configuration'
import { OwnersApi, RequestContext, ResponseContext } from '../../../../codegen/crm/owners/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class OwnersDiscovery {
  public ownersApi: OwnersApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.ownersApi = new OwnersApi(configuration)
  }
}
