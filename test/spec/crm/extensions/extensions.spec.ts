import { Client } from '../../../../index'
import AccountingDiscovery from '../../../../src/discovery/crm/extensions/accounting/AccountingDiscovery'
import CallingDiscovery from '../../../../src/discovery/crm/extensions/calling/CallingDiscovery'
import CardsDiscovery from '../../../../src/discovery/crm/extensions/cards/CardsDiscovery'
import VideoconferencingDiscovery from '../../../../src/discovery/crm/extensions/videoconferencing/VideoconferencingDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.extensions
    expect(AccountingDiscovery.name).toBe(client.accounting.constructor.name)
    expect(CallingDiscovery.name).toBe(client.calling.constructor.name)
    expect(CardsDiscovery.name).toBe(client.cards.constructor.name)
    expect(VideoconferencingDiscovery.name).toBe(client.videoconferencing.constructor.name)
  })
})
