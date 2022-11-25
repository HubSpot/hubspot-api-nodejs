import { initObject } from '../../../services/initObject'
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
      this._accounting = initObject<AccountingDiscovery>('crm/extensions/accounting/AccountingDiscovery', this.config)
    }
    return this._accounting
  }

  /**
   * Getter
   * @returns CallingDiscovery
   */
  get calling() {
    if (!this._calling) {
      this._calling = initObject<CallingDiscovery>('crm/extensions/calling/CallingDiscovery', this.config)
    }
    return this._calling
  }

  /**
   * Getter
   * @returns CardsDiscovery
   */
  get cards() {
    if (!this._cards) {
      this._cards = initObject<CardsDiscovery>('crm/extensions/cards/CardsDiscovery', this.config)
    }
    return this._cards
  }

  /**
   * Getter
   * @returns VideoconferencingDiscovery
   */
  get videoconferencing() {
    if (!this._videoconferencing) {
      this._videoconferencing = initObject<VideoconferencingDiscovery>(
        'crm/extensions/videoconferencing/VideoconferencingDiscovery',
        this.config,
      )
    }
    return this._videoconferencing
  }
}
