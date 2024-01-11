import {
  createConfiguration,
  PublicActionDefinitionsApi,
  PublicActionFunctionsApi,
  PublicActionRevisionsApi,
  PublicCallbacksApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/automation/actions/index'
import { Observable } from '../../../../codegen/automation/actions/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class ActionsDiscovery {
  public publicActionDefinitionsApi: PublicActionDefinitionsApi
  public publicActionRevisionsApi: PublicActionRevisionsApi
  public publicActionFunctionsApi: PublicActionFunctionsApi
  public publicCallbacksApi: PublicCallbacksApi

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

    this.publicActionDefinitionsApi = ApiDecoratorService.getInstance().apply<PublicActionDefinitionsApi>(
      new PublicActionDefinitionsApi(configuration),
    )
    this.publicActionRevisionsApi = ApiDecoratorService.getInstance().apply<PublicActionRevisionsApi>(
      new PublicActionRevisionsApi(configuration),
    )
    this.publicActionFunctionsApi = ApiDecoratorService.getInstance().apply<PublicActionFunctionsApi>(
      new PublicActionFunctionsApi(configuration),
    )
    this.publicCallbacksApi = ApiDecoratorService.getInstance().apply<PublicCallbacksApi>(
      new PublicCallbacksApi(configuration),
    )
  }
}
