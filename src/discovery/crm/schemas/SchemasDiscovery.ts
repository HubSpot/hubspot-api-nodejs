import { createConfiguration } from '../../../../codegen/crm/schemas/configuration'
import { CoreApi, PublicObjectSchemasApi, RequestContext, ResponseContext } from '../../../../codegen/crm/schemas/index'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class SchemasDiscovery extends BaseDiscovery {
  public coreApi: CoreApi
  public publicObjectSchemasApi: PublicObjectSchemasApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.coreApi = new CoreApi(configuration)
    this.publicObjectSchemasApi = new PublicObjectSchemasApi(configuration)
  }
}
