import {
  createConfiguration,
  RecordingSettingsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
} from '../../../../../codegen/crm/extensions/calling/index'
import { Observable } from '../../../../../codegen/crm/extensions/calling/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'

export default class CallingDiscovery {
  public settingsApi: SettingsApi
  public recordingSettingsApi: RecordingSettingsApi

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

    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi>(new SettingsApi(configuration))
    this.recordingSettingsApi = ApiDecoratorService.getInstance().apply<RecordingSettingsApi>(
      new RecordingSettingsApi(configuration),
    )
  }
}
