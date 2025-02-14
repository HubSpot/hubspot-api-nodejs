import {
  RecordingSettingsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
  createConfiguration,
} from '../../../../../codegen/crm/extensions/calling/index'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'
import IConfiguration from '../../../../configuration/IConfiguration'
import { Observable } from '../../../../../codegen/crm/extensions/calling/rxjsStub'

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
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.settingsApi = ApiDecoratorService.getInstance().apply<SettingsApi>(new SettingsApi(configuration))
    this.recordingSettingsApi = ApiDecoratorService.getInstance().apply<RecordingSettingsApi>(
      new RecordingSettingsApi(configuration),
    )
  }
}
