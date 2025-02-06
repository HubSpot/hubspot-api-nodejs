import { SettingsApi, SubscriptionsApi } from '../../../codegen/webhooks/index'
import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().webhooks
    expect(Object.prototype.hasOwnProperty.call(client, 'settingsApi')).toBeTruthy()
    expect(SettingsApi.name).toBe(client.settingsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'subscriptionsApi')).toBeTruthy()
    expect(SubscriptionsApi.name).toBe(client.subscriptionsApi.constructor.name)
  })
})
