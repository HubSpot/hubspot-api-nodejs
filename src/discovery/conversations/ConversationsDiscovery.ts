import BaseDiscovery from '../BaseDiscovery'
import type VisitorIdentificationDiscovery from './visitor_identification/VisitorIdentificationDiscovery'

export default class ConversationsDiscovery extends BaseDiscovery {
  protected _visitorIdentification: VisitorIdentificationDiscovery | undefined

  /**
   * Getter
   * @returns VisitorIdentificationDiscovery
   */
  get visitorIdentification() {
    if (!this._visitorIdentification) {
      const requiredClass = require('./visitor_identification/VisitorIdentificationDiscovery')
      this._visitorIdentification = new requiredClass.default(this.config) as VisitorIdentificationDiscovery
    }

    return this._visitorIdentification
  }
}
