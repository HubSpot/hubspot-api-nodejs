import { initObject } from '../../services/initObject'
import BaseDiscovery from '../BaseDiscovery'

export class ConversationsDiscovery extends BaseDiscovery {
  protected _visitorIdentification: any

  /**
   * Getter
   * @returns VisitorIdentificationDiscovery
   */
  get visitorIdentification() {
    if (!this._visitorIdentification) {
      this._visitorIdentification = initObject(
        'conversations/visitor_identification/VisitorIdentificationDiscovery',
        this.config,
      )
    }

    return this._visitorIdentification
  }
}
