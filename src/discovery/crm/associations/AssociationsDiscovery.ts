import { createConfiguration } from '../../../../codegen/crm/associations/configuration'
import { BatchApi, TypesApi } from '../../../../codegen/crm/associations/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class AssociationsDiscovery extends BaseDiscovery {
  public batchApi: BatchApi
  public typesApi: TypesApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.batchApi = new BatchApi(configuration)
    this.typesApi = new TypesApi(configuration)
  }
}
