import { BasicApi } from '../../../codegen/webhooks/index'
import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().webhooks
    expect(Object.prototype.hasOwnProperty.call(client, 'settingsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.settingsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'subscriptionsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.subscriptionsApi.constructor.name)
  })
})
