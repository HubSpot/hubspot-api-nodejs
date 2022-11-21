import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.events
    expect(client.hasOwnProperty('attendanceSubscriberStateChangesApi')).toBeTruthy()
    expect(client.hasOwnProperty('marketingEventsExternalApi')).toBeTruthy()
    expect(client.hasOwnProperty('settingsExternalApi')).toBeTruthy()
  })
})
