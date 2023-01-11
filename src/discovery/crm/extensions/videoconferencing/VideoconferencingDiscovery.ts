import {
  Configuration,
  createConfiguration,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
} from '../../../../../codegen/crm/extensions/videoconferencing/index'
import { Observable } from '../../../../../codegen/crm/extensions/videoconferencing/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'

export default class VideoconferencingDiscovery {
  public settingsApi: SettingsApi

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

    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi, Configuration>(
      new SettingsApi(configuration),
      configuration,
    )
  }
}
