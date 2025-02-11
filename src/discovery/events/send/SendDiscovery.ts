import {
  createConfiguration,
  CustomEventDataApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/events/send/index'
import { Observable } from '../../../../codegen/events/send/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class EventsDiscovery {
  public customEventDataApi: CustomEventDataApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.customEventDataApi = ApiDecoratorService.getInstance().apply<CustomEventDataApi>(
      new CustomEventDataApi(configuration),
    )
  }
}
