import {
  CallbacksApi,
  DefinitionsApi,
  FunctionsApi,
  RequestContext,
  ResponseContext,
  RevisionsApi,
  ServerConfiguration,
  createConfiguration,
} from '../../../../codegen/automation/actions/index'
import { Observable } from '../../../../codegen/automation/actions/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class ActionsDiscovery {
  public callbacksApi: CallbacksApi
  public definitionsApi: DefinitionsApi
  public functionsApi: FunctionsApi
  public revisionsApi: RevisionsApi

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

    this.callbacksApi = ApiDecoratorService.getInstance().apply<CallbacksApi>(new CallbacksApi(configuration))
    this.definitionsApi = ApiDecoratorService.getInstance().apply<DefinitionsApi>(new DefinitionsApi(configuration))
    this.functionsApi = ApiDecoratorService.getInstance().apply<FunctionsApi>(new FunctionsApi(configuration))
    this.revisionsApi = ApiDecoratorService.getInstance().apply<RevisionsApi>(new RevisionsApi(configuration))
  }
}
