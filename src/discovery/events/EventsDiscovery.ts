import {
  BasicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../codegen/events/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../services/ApiDecoratorService'
import BaseDiscovery from '../BaseDiscovery'
import IConfiguration from '../../configuration/IConfiguration'
import { Observable } from '../../../codegen/events/rxjsStub'
import type SendDiscovery from './send/SendDiscovery'

export default class EventsDiscovery extends BaseDiscovery {
  public eventsApi: BasicApi
  protected _send: SendDiscovery | undefined

  constructor(config: IConfiguration = {}) {
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

    const api = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.eventsApi = api
  }

  /**
   * Getter
   * @returns SendDiscovery
   */
  get send() {
    if (!this._send) {
      const requiredClass = require('./send/SendDiscovery')
      this._send = new requiredClass.default(this.config) as SendDiscovery
    }

    return this._send
  }
}
