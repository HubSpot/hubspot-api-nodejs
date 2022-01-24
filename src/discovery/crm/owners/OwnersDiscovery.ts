import { createConfiguration } from '../../../../codegen/crm/owners/configuration'
import { OwnersApi, RequestContext, ResponseContext } from '../../../../codegen/crm/owners/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class OwnersDiscovery {
  public ownersApi: OwnersApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.ownersApi = new OwnersApi(configuration)
  }
}
