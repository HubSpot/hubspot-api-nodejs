import {
  createConfiguration,
  FoldersApi,
  ListsApi,
  MappingApi,
  MembershipsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/crm/lists/index'
import { Observable } from '../../../../codegen/crm/lists/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class ListsDiscovery {
  public foldersApi: FoldersApi
  public listsApi: ListsApi
  public mappingApi: MappingApi
  public membershipsApi: MembershipsApi

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

    this.foldersApi = ApiDecoratorService.getInstance().apply<FoldersApi>(new FoldersApi(configuration))
    this.listsApi = ApiDecoratorService.getInstance().apply<ListsApi>(new ListsApi(configuration))
    this.mappingApi = ApiDecoratorService.getInstance().apply<MappingApi>(new MappingApi(configuration))
    this.membershipsApi = ApiDecoratorService.getInstance().apply<MembershipsApi>(new MembershipsApi(configuration))
  }
}
