import { createConfiguration } from '../../../../codegen/automation/actions/configuration'
import {
  CallbacksApi,
  DefinitionsApi,
  FunctionsApi,
  RequestContext,
  ResponseContext,
  RevisionsApi,
  ServerConfiguration,
} from '../../../../codegen/automation/actions/index'
import { Observable } from '../../../../codegen/automation/actions/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class ActionsDiscovery {
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

    this.callbacksApi = new CallbacksApi(configuration)
    this.definitionsApi = new DefinitionsApi(configuration)
    this.functionsApi = new FunctionsApi(configuration)
    this.revisionsApi = new RevisionsApi(configuration)
  }
}
