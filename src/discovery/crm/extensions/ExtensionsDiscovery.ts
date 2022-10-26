import { IConfiguration } from '../../../configuration/IConfiguration'
import { initObject } from '../../../services/initObject'
import { BaseDiscovery } from '../../BaseDiscovery'

export default class ExtensionsDiscovery extends BaseDiscovery {
  protected _accounting: any
  protected _calling: any
  protected _cards: any
  protected _videoconferencing: any

  /**
   * Getter
   * @returns AccountingDiscovery
   */
  get accounting() {
    if (!this._accounting) {
      this._accounting = initObject('crm/extensions/accounting/AccountingDiscovery', this.config)
    }
    return this._accounting
  }

  /**
   * Getter
   * @returns СallingDiscovery
   */
  get calling() {
    if (!this._calling) {
      this._calling = initObject('crm/extensions/calling/СallingDiscovery', this.config)
    }
    return this._calling
  }

  /**
   * Getter
   * @returns СardsDiscovery
   */
  get cards() {
    if (!this._cards) {
      this._cards = initObject('crm/extensions/cards/СardsDiscovery', this.config)
    }
    return this._cards
  }

  /**
   * Getter
   * @returns VideoconferencingDiscovery
   */
  get videoconferencing() {
    if (!this._videoconferencing) {
      this._videoconferencing = initObject('crm/extensions/videoconferencing/VideoconferencingDiscovery', this.config)
    }
    return this._videoconferencing
  }
}
