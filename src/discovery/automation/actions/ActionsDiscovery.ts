import { createConfiguration } from '../../../../codegen/automation/actions/configuration'
import {
  CallbacksApi,
  DefinitionsApi,
  FunctionsApi,
  RequestContext,
  ResponseContext,
  RevisionsApi,
} from '../../../../codegen/automation/actions/index'
import { ApiClientConfirator } from '../../../configuration/ApiClientConfirator'
import { IConfiguration } from '../../../configuration/IConfiguration'

export class ActionsDiscovery {
  public callbacksApi: CallbacksApi
  public definitionsApi: DefinitionsApi
  public functionsApi: FunctionsApi
  public revisionsApi: RevisionsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(ApiClientConfirator.getParams<RequestContext, ResponseContext>(config))

    this.callbacksApi = new CallbacksApi(configuration)
    this.definitionsApi = new DefinitionsApi(configuration)
    this.functionsApi = new FunctionsApi(configuration)
    this.revisionsApi = new RevisionsApi(configuration)
  }
}
