import { createConfiguration } from '../../../../codegen/crm/imports/configuration'
import { CoreApi, PublicImportsApi, RequestContext, ResponseContext } from '../../../../codegen/crm/imports/index'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class ImportsDiscovery extends BaseDiscovery {
  public coreApi: CoreApi
  public publicImportsApi: PublicImportsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.coreApi = new CoreApi(configuration)
    this.publicImportsApi = new PublicImportsApi(configuration)
  }
}
