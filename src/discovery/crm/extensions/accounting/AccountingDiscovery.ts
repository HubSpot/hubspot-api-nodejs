import { createConfiguration } from '../../../../../codegen/crm/extensions/accounting/configuration'
import {
  CallbacksApi,
  InvoiceApi,
  SettingsApi,
  SyncApi,
  UserAccountsApi,
} from '../../../../../codegen/crm/extensions/accounting/index'
import { IConfiguration } from '../../../../IConfiguration'
import { BaseDiscovery } from '../../../BaseDiscovery'

export class AccountingDiscovery extends BaseDiscovery {
  public callbacksApi: CallbacksApi
  public invoiceApi: InvoiceApi
  public settingsApi: SettingsApi
  public syncApi: SyncApi
  public userAccountsApi: UserAccountsApi

  constructor(config: IConfiguration) {
    super(config)

    const configuration = this.createConfiguration(createConfiguration)

    this.callbacksApi = new CallbacksApi(configuration)
    this.invoiceApi = new InvoiceApi(configuration)
    this.settingsApi = new SettingsApi(configuration)
    this.syncApi = new SyncApi(configuration)
    this.userAccountsApi = new UserAccountsApi(configuration)
  }
}
