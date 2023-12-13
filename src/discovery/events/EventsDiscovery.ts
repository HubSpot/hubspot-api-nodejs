import BaseDiscovery from '../BaseDiscovery'
import type SendDiscovery from './send/SendDiscovery'
import {
  createConfiguration,
  EventsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../codegen/events/index'
import { Observable } from '../../../codegen/events/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import IConfiguration from '../../configuration/IConfiguration'
import ApiDecoratorService from '../../services/ApiDecoratorService'

export default class EventsDiscovery extends BaseDiscovery {
  protected _send: SendDiscovery | undefined
  public eventsApi: EventsApi

  constructor(config: IConfiguration = {}) {
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

    this.eventsApi = ApiDecoratorService.getInstance().apply<EventsApi>(new EventsApi(configuration))
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
