var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseDiscovery_1 = require('../../../baseDiscovery');
var index_1 = require('../../../../../codegen/crm/extensions/accounting/index');
var configuration_1 = require('../../../../../codegen/crm/extensions/accounting/configuration');
var AccountingDiscovery = (function (_super) {
    __extends(AccountingDiscovery, _super);
    function AccountingDiscovery(config) {
        _super.call(this, config);
        var configuration = configuration_1.createConfiguration(this.getParams());
        this.callbacksApi = new index_1.CallbacksApi(configuration);
        this.invoiceApi = new index_1.InvoiceApi(configuration);
        this.settingsApi = new index_1.SettingsApi(configuration);
        this.syncApi = new index_1.SyncApi(configuration);
        this.userAccountsApi = new index_1.UserAccountsApi(configuration);
    }
    return AccountingDiscovery;
})(baseDiscovery_1.baseDiscovery);
exports.AccountingDiscovery = AccountingDiscovery;
