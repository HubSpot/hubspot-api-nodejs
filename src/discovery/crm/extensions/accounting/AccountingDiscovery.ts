import { configuration } from '../../../../configuration'
import { baseDiscovery } from '../../../baseDiscovery'
import { CallbacksApi, InvoiceApi, SettingsApi, SyncApi, UserAccountsApi } from '../../../../../codegen/crm/extensions/accounting/index'
import { createConfiguration } from '../../../../../codegen/crm/extensions/accounting/configuration'

export class AccountingDiscovery extends baseDiscovery {
    public callbacksApi: CallbacksApi
    public invoiceApi: InvoiceApi
    public settingsApi: SettingsApi
    public syncApi: SyncApi
    public userAccountsApi: UserAccountsApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.callbacksApi = new CallbacksApi(configuration)
        this.invoiceApi = new InvoiceApi(configuration)
        this.settingsApi = new SettingsApi(configuration)
        this.syncApi = new SyncApi(configuration)
        this.userAccountsApi = new UserAccountsApi(configuration)
    }
}
