import { Configuration } from '../../Configuration'
import { VisitorIdentificationDiscovery } from './visitor_identification/VisitorIdentificationDiscovery'

export class ConversationsDiscovery {
    public visitorIdentification: VisitorIdentificationDiscovery

    constructor(config: Configuration) {
        this.visitorIdentification = new VisitorIdentificationDiscovery(config)
    }
}
