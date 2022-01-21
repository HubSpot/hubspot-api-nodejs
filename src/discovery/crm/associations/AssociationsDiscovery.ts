import { createConfiguration } from '../../../../codegen/crm/associations/configuration'
import { BatchApi, RequestContext, ResponseContext, TypesApi } from '../../../../codegen/crm/associations/index'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class AssociationsDiscovery extends BaseDiscovery {
  public batchApi: BatchApi
  public typesApi: TypesApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.batchApi = new BatchApi(configuration)
    this.typesApi = new TypesApi(configuration)
  }
}
