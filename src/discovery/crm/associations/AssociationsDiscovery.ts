import { createConfiguration } from '../../../../codegen/crm/associations/configuration'
import { BatchApi, RequestContext, ResponseContext, TypesApi } from '../../../../codegen/crm/associations/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class AssociationsDiscovery {
  public batchApi: BatchApi
  public typesApi: TypesApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.batchApi = new BatchApi(configuration)
    this.typesApi = new TypesApi(configuration)
  }
}
