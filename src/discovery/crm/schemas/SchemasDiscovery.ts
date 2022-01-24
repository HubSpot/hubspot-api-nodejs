import { createConfiguration } from '../../../../codegen/crm/schemas/configuration'
import { CoreApi, PublicObjectSchemasApi, RequestContext, ResponseContext } from '../../../../codegen/crm/schemas/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class SchemasDiscovery {
  public coreApi: CoreApi
  public publicObjectSchemasApi: PublicObjectSchemasApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.coreApi = new CoreApi(configuration)
    this.publicObjectSchemasApi = new PublicObjectSchemasApi(configuration)
  }
}
