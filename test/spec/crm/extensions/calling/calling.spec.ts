import { RecordingSettingsApi, SettingsApi } from '../../../../../codegen/crm/extensions/calling/index'
import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.extensions.calling
    expect(client.hasOwnProperty('settingsApi')).toBeTruthy()
    expect(SettingsApi.name).toBe(client.settingsApi.constructor.name)
    expect(client.hasOwnProperty('recordingSettingsApi')).toBeTruthy()
    expect(RecordingSettingsApi.name).toBe(client.recordingSettingsApi.constructor.name)
  })
})
