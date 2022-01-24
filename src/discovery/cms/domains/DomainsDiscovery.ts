import { createConfiguration } from '../../../../codegen/cms/domains/configuration'
import { DomainsApi, RequestContext, ResponseContext } from '../../../../codegen/cms/domains/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class DomainsDiscovery {
  public domainsApi: DomainsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.domainsApi = new DomainsApi(configuration)
  }
}
