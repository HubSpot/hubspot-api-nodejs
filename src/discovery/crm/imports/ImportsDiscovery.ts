import { createConfiguration } from '../../../../codegen/crm/imports/configuration'
import { CoreApi, PublicImportsApi, RequestContext, ResponseContext } from '../../../../codegen/crm/imports/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class ImportsDiscovery {
  public coreApi: CoreApi
  public publicImportsApi: PublicImportsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.coreApi = new CoreApi(configuration)
    this.publicImportsApi = new PublicImportsApi(configuration)
  }
}
