import { IConfiguration } from '../../IConfiguration'
import { VisitorIdentificationDiscovery } from './visitor_identification/VisitorIdentificationDiscovery'

export class ConversationsDiscovery {
  public visitorIdentification: VisitorIdentificationDiscovery

  constructor(config: IConfiguration) {
    this.visitorIdentification = new VisitorIdentificationDiscovery(config)
  }
}
