import BaseDiscovery from '../../BaseDiscovery'
import type AccountingDiscovery from './accounting/AccountingDiscovery'
import type CallingDiscovery from './calling/CallingDiscovery'
import type CardsDiscovery from './cards/CardsDiscovery'
import type VideoconferencingDiscovery from './videoconferencing/VideoconferencingDiscovery'

export default class ExtensionsDiscovery extends BaseDiscovery {
  protected _accounting: AccountingDiscovery | undefined
  protected _calling: CallingDiscovery | undefined
  protected _cards: CardsDiscovery | undefined
  protected _videoconferencing: VideoconferencingDiscovery | undefined

  /**
   * Getter
   * @returns AccountingDiscovery
   */
  get accounting() {
    if (!this._accounting) {
      const requiredClass = require('./accounting/AccountingDiscovery')
      this._accounting = new requiredClass.default(this.config) as AccountingDiscovery
    }
    return this._accounting
  }

  /**
   * Getter
   * @returns CallingDiscovery
   */
  get calling() {
    if (!this._calling) {
      const requiredClass = require('./calling/CallingDiscovery')
      this._calling = new requiredClass.default(this.config) as CallingDiscovery
    }
    return this._calling
  }

  /**
   * Getter
   * @returns CardsDiscovery
   */
  get cards() {
    if (!this._cards) {
      const requiredClass = require('./cards/CardsDiscovery')
      this._cards = new requiredClass.default(this.config) as CardsDiscovery
    }
    return this._cards
  }

  /**
   * Getter
   * @returns VideoconferencingDiscovery
   */
  get videoconferencing() {
    if (!this._videoconferencing) {
      const requiredClass = require('./videoconferencing/VideoconferencingDiscovery')
      this._videoconferencing = new requiredClass.default(this.config) as VideoconferencingDiscovery
    }
    return this._videoconferencing
  }
}
