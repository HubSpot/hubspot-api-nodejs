import {
  AttendanceSubscriberStateChangesApi,
  BasicApi,
  ParticipantStateApi,
  SettingsApi,
  SubscriberStateChangesApi,
} from '../../../../codegen/marketing/events/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.events
    expect(client.hasOwnProperty('attendanceSubscriberStateChangesApi')).toBeTruthy()
    expect(AttendanceSubscriberStateChangesApi.name).toBe(client.attendanceSubscriberStateChangesApi.constructor.name)
    expect(client.hasOwnProperty('basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(client.hasOwnProperty('participantStateApi')).toBeTruthy()
    expect(ParticipantStateApi.name).toBe(client.participantStateApi.constructor.name)
    expect(client.hasOwnProperty('settingsApi')).toBeTruthy()
    expect(SettingsApi.name).toBe(client.settingsApi.constructor.name)
    expect(client.hasOwnProperty('subscriberStateChangesApi')).toBeTruthy()
    expect(SubscriberStateChangesApi.name).toBe(client.subscriberStateChangesApi.constructor.name)
  })
})
