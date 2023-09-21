import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.events
    expect(client.hasOwnProperty('attendanceSubscriberStateChangesApi')).toBeTruthy()
    expect(client.hasOwnProperty('basicApi')).toBeTruthy()
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(client.hasOwnProperty('marketingEventsExternalApi')).toBeTruthy()
    expect(client.hasOwnProperty('searchApi')).toBeTruthy()
    expect(client.hasOwnProperty('settingsApi')).toBeTruthy()
    expect(client.hasOwnProperty('subscriberStateChangesApi')).toBeTruthy()
  })
})
