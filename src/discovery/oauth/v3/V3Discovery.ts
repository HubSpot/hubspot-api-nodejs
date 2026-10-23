import { AdvancedApi, RequestContext, ResponseContext, ServerConfiguration } from '../../../../codegen/oauth/v3/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/oauth/v3/rxjsStub'
import { createConfiguration } from '../../../../codegen/oauth/v3/configuration'

export default class V3Discovery {
  public advancedApi: AdvancedApi

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

    this.advancedApi = ApiDecoratorService.getInstance().apply<AdvancedApi>(new AdvancedApi(configuration))
  }
}
