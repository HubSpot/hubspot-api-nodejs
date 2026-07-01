import { Client } from '../../../../../index'
import { BasicApi } from '../../../../../codegen/crm/extensions/videoconferencing/index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.extensions.videoconferencing
    expect(Object.prototype.hasOwnProperty.call(client, 'settingsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.settingsApi.constructor.name)
  })
})
