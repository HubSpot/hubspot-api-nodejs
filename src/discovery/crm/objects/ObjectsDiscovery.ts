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
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class ObjectsDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public gdprApi: GDPRApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.gdprApi = new GDPRApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }
}
