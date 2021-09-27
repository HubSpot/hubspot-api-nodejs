import { createConfiguration } from '../../../../codegen/crm/schemas/configuration'
import { CoreApi, PublicObjectSchemasApi } from '../../../../codegen/crm/schemas/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class SchemasDiscovery extends BaseDiscovery {
  public coreApi: CoreApi
  public publicObjectSchemasApi: PublicObjectSchemasApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams())

    this.coreApi = new CoreApi(configuration)
    this.publicObjectSchemasApi = new PublicObjectSchemasApi(configuration)
  }
}
