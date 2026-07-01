import { BasicApi } from '../../../../../codegen/crm/extensions/calling/index'
import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.extensions.calling
    expect(Object.prototype.hasOwnProperty.call(client, 'channelConnectionSettingsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.channelConnectionSettingsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'settingsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.settingsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'recordingSettingsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.recordingSettingsApi.constructor.name)
  })
})
