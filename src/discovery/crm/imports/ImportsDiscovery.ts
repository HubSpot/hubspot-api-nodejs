import { createConfiguration } from '../../../../codegen/crm/imports/configuration'
import { CoreApi, PublicImportsApi } from '../../../../codegen/crm/imports/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class ImportsDiscovery extends BaseDiscovery {
  public coreApi: CoreApi
  public publicImportsApi: PublicImportsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.coreApi = new CoreApi(configuration)
    this.publicImportsApi = new PublicImportsApi(configuration)
  }
}
