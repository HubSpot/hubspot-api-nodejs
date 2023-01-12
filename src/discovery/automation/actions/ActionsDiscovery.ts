import {
  CallbacksApi,
  Configuration,
  createConfiguration,
  DefinitionsApi,
  FunctionsApi,
  RequestContext,
  ResponseContext,
  RevisionsApi,
  ServerConfiguration,
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
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.callbacksApi = ApiDecoratorService.getInstance().apply<CallbacksApi, Configuration>(
      new CallbacksApi(configuration),
      configuration,
    )
    this.definitionsApi = ApiDecoratorService.getInstance().apply<DefinitionsApi, Configuration>(
      new DefinitionsApi(configuration),
      configuration,
    )
    this.functionsApi = ApiDecoratorService.getInstance().apply<FunctionsApi, Configuration>(
      new FunctionsApi(configuration),
      configuration,
    )
    this.revisionsApi = ApiDecoratorService.getInstance().apply<RevisionsApi, Configuration>(
      new RevisionsApi(configuration),
      configuration,
    )
  }
}
