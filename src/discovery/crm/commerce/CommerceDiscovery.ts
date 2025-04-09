import BaseDiscovery from '../../BaseDiscovery'
import type InvoicesDiscovery from './invoices/InvoicesDiscovery'

export default class CommerceDiscovery extends BaseDiscovery {
  protected _invoices: InvoicesDiscovery | undefined

  /**
   * Getter
   * @returns InvoicesDiscovery
   */
  get invoices() {
    if (!this._invoices) {
      const requiredClass = require('./invoices/InvoicesDiscovery')
      this._invoices = new requiredClass.default(this.config) as InvoicesDiscovery
    }

    return this._invoices
  }
}
