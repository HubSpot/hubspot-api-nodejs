import { createConfiguration } from '../../../../codegen/crm/objects/configuration'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  GDPRApi,
  RequestContext,
  ResponseContext,
  SearchApi,
} from '../../../../codegen/crm/objects/index'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class ObjectsDiscovery extends BaseDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public gdprApi: GDPRApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.gdprApi = new GDPRApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }
}
