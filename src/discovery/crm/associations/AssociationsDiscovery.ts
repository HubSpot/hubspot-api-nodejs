import {
  BatchApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../codegen/crm/associations/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import type AssociationsV4Discovery from './v4/AssociationsDiscovery'
import BaseDiscovery from '../../BaseDiscovery'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/crm/associations/rxjsStub'
import type SchemaDiscovery from './schema/SchemaDiscovery'

export default class AssociationsDiscovery extends BaseDiscovery {
  public batchApi: BatchApi
  protected _schema: SchemaDiscovery | undefined
  protected _v4: AssociationsV4Discovery | undefined

  constructor(config: IConfiguration) {
    super(config)
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

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

  /**
   * Getter
   * @returns AssociationsV4Discovery
   */
  get v4() {
    if (!this._v4) {
      const requiredClass = require('./v4/AssociationsDiscovery')
      this._v4 = new requiredClass.default(this.config) as AssociationsV4Discovery
    }

    return this._v4
  }
}
