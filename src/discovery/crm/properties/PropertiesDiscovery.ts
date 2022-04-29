import { createConfiguration } from '../../../../codegen/crm/properties/configuration'
import {
  BatchApi,
  CoreApi,
  GroupsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/crm/properties/index'
import { Observable } from '../../../../codegen/crm/properties/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class PropertiesDiscovery {
  public batchApi: BatchApi
  public coreApi: CoreApi
  public groupsApi: GroupsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.batchApi = new BatchApi(configuration)
    this.coreApi = new CoreApi(configuration)
    this.groupsApi = new GroupsApi(configuration)
  }
}
