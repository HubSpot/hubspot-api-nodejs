import { Client } from '../../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.extensions.videoconferencing
    expect(client.hasOwnProperty('settingsApi')).toBeTruthy()
  })
})
