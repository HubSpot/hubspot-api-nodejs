import { createConfiguration } from '../../../../codegen/crm/owners/configuration'
import { DefaultApi } from '../../../../codegen/crm/owners/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class OwnersDiscovery extends BaseDiscovery {
  public defaultApi: DefaultApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.defaultApi = new DefaultApi(configuration)
  }
}
