import { BehavioralEventsTrackingApi } from '../../../../codegen/events/send/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().events.send
    expect(client.hasOwnProperty('behavioralEventsTrackingApi')).toBeTruthy()
    expect(BehavioralEventsTrackingApi.name).toBe(client.behavioralEventsTrackingApi.constructor.name)
  })
})
