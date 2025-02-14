import AutomationDiscovery from '../../src/discovery/automation/AutomationDiscovery'
import { Client } from '../../index'
import CmsDiscovery from '../../src/discovery/cms/CmsDiscovery'
import CommunicationPreferencesDiscovery from '../../src/discovery/communicationPreferences/CommunicationPreferencesDiscovery'
import ConversationsDiscovery from '../../src/discovery/conversations/ConversationsDiscovery'
import CrmDiscovery from '../../src/discovery/crm/CrmDiscovery'
import EventsDiscovery from '../../src/discovery/events/EventsDiscovery'
import FilesDiscovery from '../../src/discovery/files/FilesDiscovery'
import MarketingDiscovery from '../../src/discovery/marketing/MarketingDiscovery'
import OauthDiscovery from '../../src/discovery/oauth/OauthDiscovery'
import SettingsDiscovery from '../../src/discovery/settings/SettingsDiscovery'
import WebhooksDiscovery from '../../src/discovery/webhooks/WebhooksDiscovery'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client()
    expect(AutomationDiscovery.name).toBe(client.automation.constructor.name)
    expect(CmsDiscovery.name).toBe(client.cms.constructor.name)
    expect(CommunicationPreferencesDiscovery.name).toBe(client.communicationPreferences.constructor.name)
    expect(ConversationsDiscovery.name).toBe(client.conversations.constructor.name)
    expect(CrmDiscovery.name).toBe(client.crm.constructor.name)
    expect(EventsDiscovery.name).toBe(client.events.constructor.name)
    expect(FilesDiscovery.name).toBe(client.files.constructor.name)
    expect(MarketingDiscovery.name).toBe(client.marketing.constructor.name)
    expect(OauthDiscovery.name).toBe(client.oauth.constructor.name)
    expect(SettingsDiscovery.name).toBe(client.settings.constructor.name)
    expect(WebhooksDiscovery.name).toBe(client.webhooks.constructor.name)
  })
})
