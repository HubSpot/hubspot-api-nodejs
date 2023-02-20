import {
  BatchApi,
  Configuration,
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  TypesApi,
} from '../../../../codegen/crm/associations/index'
import { Observable } from '../../../../codegen/crm/associations/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import BaseDiscovery from '../../BaseDiscovery'
import type AssociationsV4Discovery from './v4/AssociationsDiscovery'

export default class AssociationsDiscovery extends BaseDiscovery {
  public batchApi: BatchApi
  public typesApi: TypesApi
  protected _v4: AssociationsV4Discovery | undefined

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

    this.batchApi = ApiDecoratorService.getInstance().apply<BatchApi, Configuration>(
      new BatchApi(configuration),
      configuration,
    )
    this.typesApi = ApiDecoratorService.getInstance().apply<TypesApi, Configuration>(
      new TypesApi(configuration),
      configuration,
    )
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
