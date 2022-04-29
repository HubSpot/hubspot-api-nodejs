import { createConfiguration } from '../../../../../codegen/crm/extensions/calling/configuration'
import { RequestContext, ResponseContext, SettingsApi, ServerConfiguration } from '../../../../../codegen/crm/extensions/calling/index'
import { Observable } from '../../../../../codegen/crm/extensions/calling/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class CallingDiscovery {
  public settingsApi: SettingsApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable)
    )

    this.settingsApi = new SettingsApi(configuration)
  }
}
