import {
  Configuration,
  createConfiguration,
  RequestContext,
  ResponseContext,
  RowsApi,
  RowsBatchApi,
  ServerConfiguration,
  TablesApi,
} from '../../../../codegen/cms/hubdb/index'
import { Observable } from '../../../../codegen/cms/hubdb/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class HubdbDiscovery {
  public rowsApi: RowsApi
  public rowsBatchApi: RowsBatchApi
  public tablesApi: TablesApi

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

    this.rowsApi = ApiDecoratorService.getInstance().apply<RowsApi, Configuration>(
      new RowsApi(configuration),
      configuration,
    )
    this.rowsBatchApi = ApiDecoratorService.getInstance().apply<RowsBatchApi, Configuration>(
      new RowsBatchApi(configuration),
      configuration,
    )
    this.tablesApi = ApiDecoratorService.getInstance().apply<TablesApi, Configuration>(
      new TablesApi(configuration),
      configuration,
    )
  }
}
