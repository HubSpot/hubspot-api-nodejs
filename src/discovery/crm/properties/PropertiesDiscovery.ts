import { createConfiguration } from '../../../../codegen/crm/properties/configuration'
import { BatchApi, CoreApi, GroupsApi, RequestContext, ResponseContext } from '../../../../codegen/crm/properties/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class PropertiesDiscovery {
  public batchApi: BatchApi
  public coreApi: CoreApi
  public groupsApi: GroupsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.batchApi = new BatchApi(configuration)
    this.coreApi = new CoreApi(configuration)
    this.groupsApi = new GroupsApi(configuration)
  }
}
