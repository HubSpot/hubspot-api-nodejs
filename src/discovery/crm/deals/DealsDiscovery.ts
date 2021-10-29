import { createConfiguration } from '../../../../codegen/crm/deals/configuration'
import { AssociationsApi, BasicApi, BatchApi, SearchApi } from '../../../../codegen/crm/deals/index'
import { IConfiguration } from '../../../IConfiguration'
import { ObjectDiscovery } from '../ObjectDiscovery'

export class DealsDiscovery extends ObjectDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }
}
