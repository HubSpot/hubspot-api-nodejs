import IConfiguration from '../../configuration/IConfiguration'
import VisitorIdentificationDiscovery from './visitor_identification/VisitorIdentificationDiscovery'

export default class ConversationsDiscovery {
  public visitorIdentification: VisitorIdentificationDiscovery

  constructor(config: IConfiguration = {}) {
    this.visitorIdentification = new VisitorIdentificationDiscovery(config)
  }
}
