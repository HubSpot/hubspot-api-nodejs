import { Configuration } from '../../../Configuration'
import { AccountingDiscovery } from './accounting/AccountingDiscovery'
import { CallingDiscovery } from './calling/CallingDiscovery'
import { CardsDiscovery } from './cards/CardsDiscovery'
import { VideoconferencingDiscovery } from './videoconferencing/VideoconferencingDiscovery'

export class ExtensionsDiscovery {
    public accounting: AccountingDiscovery
    public calling: CallingDiscovery
    public cards: CardsDiscovery
    public videoconferencing: VideoconferencingDiscovery
    
    constructor(config: Configuration) {
        this.accounting = new AccountingDiscovery(config)
        this.calling = new CallingDiscovery(config)
        this.cards = new CardsDiscovery(config)
        this.videoconferencing = new VideoconferencingDiscovery(config)
    }
}
