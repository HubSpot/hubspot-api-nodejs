import { configuration } from '../../configuration'
import { VisitorIdentificationDiscovery } from './visitor_identification/VisitorIdentificationDiscovery'

export class ConversationsDiscovery {
    public visitorIdentification: VisitorIdentificationDiscovery

    constructor(config: configuration) {
        this.visitorIdentification = new VisitorIdentificationDiscovery(config)
    }
}
