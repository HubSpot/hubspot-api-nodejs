import {
  BasicApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../codegen/communication_preferences/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../services/ApiDecoratorService'
import IConfiguration from '../../configuration/IConfiguration'
import { Observable } from '../../../codegen/communication_preferences/rxjsStub'

export default class CommunicationPreferencesDiscovery {
  public definitionApi: BasicApi
  public statusApi: BasicApi

  constructor(config: IConfiguration = {}) {
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
    this.definitionApi = api
    this.statusApi = api
  }
}
