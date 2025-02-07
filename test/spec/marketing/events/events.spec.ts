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
    expect(Object.prototype.hasOwnProperty.call(client, 'attendanceSubscriberStateChangesApi')).toBeTruthy()
    expect(AttendanceSubscriberStateChangesApi.name).toBe(client.attendanceSubscriberStateChangesApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'participantStateApi')).toBeTruthy()
    expect(ParticipantStateApi.name).toBe(client.participantStateApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'settingsApi')).toBeTruthy()
    expect(SettingsApi.name).toBe(client.settingsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'subscriberStateChangesApi')).toBeTruthy()
    expect(SubscriberStateChangesApi.name).toBe(client.subscriberStateChangesApi.constructor.name)
  })
})
