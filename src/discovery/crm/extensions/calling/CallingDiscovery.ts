import {
  BasicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../../../codegen/crm/extensions/calling/index'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../../services/ApiDecoratorService'
import IConfiguration from '../../../../configuration/IConfiguration'
import { Observable } from '../../../../../codegen/crm/extensions/calling/rxjsStub'

export default class CallingDiscovery {
  public channelConnectionSettingsApi: BasicApi
  public settingsApi: BasicApi
  public recordingSettingsApi: BasicApi

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

    const api = ApiDecoratorService.getInstance().apply<BasicApi>(new BasicApi(configuration))
    this.channelConnectionSettingsApi = api
    this.settingsApi = api
    this.recordingSettingsApi = api
  }
}
