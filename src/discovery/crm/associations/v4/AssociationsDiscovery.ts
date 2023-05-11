import {
  BasicApi,
  BatchApi,
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../../codegen/crm/associations/v4/index'
import { Observable } from '../../../../../codegen/crm/associations/v4/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'
import BaseDiscovery from '../../../BaseDiscovery'
import type SchemaDiscovery from './schema/SchemaDiscovery'

export default class AssociationsDiscovery extends BaseDiscovery {
  public basicApi: BasicApi
  public batchApi: BatchApi
  protected _schema: SchemaDiscovery | undefined

  constructor(config: IConfiguration) {
    super(config)
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.basicApi = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi>(new BatchApi(configuration))
  }

  /**
   * Getter
   * @returns SchemaDiscovery
   */
  get schema() {
    if (!this._schema) {
      const requiredClass = require('./schema/SchemaDiscovery')
      this._schema = new requiredClass.default(this.config) as SchemaDiscovery
    }

    return this._schema
  }
}
