import { createConfiguration } from '../../../../codegen/crm/owners/configuration'
import { OwnersApi, RequestContext, ResponseContext } from '../../../../codegen/crm/owners/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class OwnersDiscovery extends BaseDiscovery {
  public ownersApi: OwnersApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.ownersApi = new OwnersApi(configuration)
  }
}
