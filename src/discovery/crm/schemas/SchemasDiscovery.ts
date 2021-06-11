import { createConfiguration } from '../../../../codegen/crm/schemas/configuration'
import { CoreApi, DefaultApi } from '../../../../codegen/crm/schemas/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class SchemasDiscovery extends BaseDiscovery {
  public coreApi: CoreApi
  public defaultApi: DefaultApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.coreApi = new CoreApi(configuration)
    this.defaultApi = new DefaultApi(configuration)
  }
}
