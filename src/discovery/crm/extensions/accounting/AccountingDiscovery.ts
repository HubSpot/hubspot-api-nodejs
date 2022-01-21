import { createConfiguration } from '../../../../../codegen/crm/extensions/accounting/configuration'
import {
  CallbacksApi,
  InvoiceApi,
  RequestContext,
  ResponseContext,
  SettingsApi,
  SyncApi,
  UserAccountsApi,
} from '../../../../../codegen/crm/extensions/accounting/index'
import { IConfiguration } from '../../../../configuration/IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class AccountingDiscovery extends BaseDiscovery {
  public callbacksApi: CallbacksApi
  public invoiceApi: InvoiceApi
  public settingsApi: SettingsApi
  public syncApi: SyncApi
  public userAccountsApi: UserAccountsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = createConfiguration(this.getParams<RequestContext, ResponseContext>())

    this.callbacksApi = new CallbacksApi(configuration)
    this.invoiceApi = new InvoiceApi(configuration)
    this.settingsApi = new SettingsApi(configuration)
    this.syncApi = new SyncApi(configuration)
    this.userAccountsApi = new UserAccountsApi(configuration)
  }
}
