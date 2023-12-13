import {
  createConfiguration,
  ListsApi,
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
  public listsApi: ListsApi
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

    this.listsApi = ApiDecoratorService.getInstance().apply<ListsApi>(new ListsApi(configuration))
    this.membershipsApi = ApiDecoratorService.getInstance().apply<MembershipsApi>(new MembershipsApi(configuration))
  }
}
