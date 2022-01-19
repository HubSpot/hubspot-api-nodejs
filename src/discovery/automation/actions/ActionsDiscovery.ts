import { createConfiguration } from '../../../../codegen/automation/actions/configuration'
import {
  CallbacksApi,
  DefinitionsApi,
  FunctionsApi,
  RequestContext,
  ResponseContext,
  RevisionsApi,
} from '../../../../codegen/automation/actions/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class ActionsDiscovery extends BaseDiscovery {
  public callbacksApi: CallbacksApi
  public definitionsApi: DefinitionsApi
  public functionsApi: FunctionsApi
  public revisionsApi: RevisionsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.callbacksApi = new CallbacksApi(configuration)
    this.definitionsApi = new DefinitionsApi(configuration)
    this.functionsApi = new FunctionsApi(configuration)
    this.revisionsApi = new RevisionsApi(configuration)
  }
}
