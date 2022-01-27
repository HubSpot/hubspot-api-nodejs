import { createConfiguration } from '../../../../codegen/cms/hubdb/configuration'
import { RequestContext, ResponseContext, RowsApi, RowsBatchApi, TablesApi } from '../../../../codegen/cms/hubdb/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class HubdbDiscovery {
  public rowsApi: RowsApi
  public rowsBatchApi: RowsBatchApi
  public tablesApi: TablesApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfigurator.getParams<RequestContext, ResponseContext>(config))

    this.rowsApi = new RowsApi(configuration)
    this.rowsBatchApi = new RowsBatchApi(configuration)
    this.tablesApi = new TablesApi(configuration)
  }
}
