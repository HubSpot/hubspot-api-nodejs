import { createConfiguration } from '../../../../../codegen/crm/extensions/accounting/configuration'
import {
  CallbacksApi,
  InvoiceApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  SettingsApi,
  SyncApi,
  UserAccountsApi,
} from '../../../../../codegen/crm/extensions/accounting/index'
import { Observable } from '../../../../../codegen/crm/extensions/accounting/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../../configuration/IConfiguration'

export class AccountingDiscovery {
  public callbacksApi: CallbacksApi
  public invoiceApi: InvoiceApi
  public settingsApi: SettingsApi
  public syncApi: SyncApi
  public userAccountsApi: UserAccountsApi

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
    this.invoiceApi = new InvoiceApi(configuration)
    this.settingsApi = new SettingsApi(configuration)
    this.syncApi = new SyncApi(configuration)
    this.userAccountsApi = new UserAccountsApi(configuration)
  }
}
