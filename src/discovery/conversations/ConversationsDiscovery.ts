import IConfiguration from '../../configuration/IConfiguration'
import { initObjectOld} from '../../services/initObjectOld'
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
      this._visitorIdentification = initObjectOld<VisitorIdentificationDiscovery>(
        'conversations/visitor_identification/VisitorIdentificationDiscovery',
        this.config,
      )
    }

    return this._visitorIdentification
  }
}
