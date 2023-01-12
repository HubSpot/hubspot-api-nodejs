import {
  BatchApi,
  Configuration,
  CoreApi,
  createConfiguration,
  GroupsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/crm/properties/index'
import { Observable } from '../../../../codegen/crm/properties/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class PropertiesDiscovery {
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

    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi, Configuration>(
      new BatchApi(configuration),
      configuration,
    )
    this.coreApi = ApiDecoratorService.getInstance().apply<CoreApi, Configuration>(
      new CoreApi(configuration),
      configuration,
    )
    this.groupsApi = ApiDecoratorService.getInstance().apply<GroupsApi, Configuration>(
      new GroupsApi(configuration),
      configuration,
    )
  }
}
