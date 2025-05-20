import {
  AddEventAttendeesApi,
  BasicApi,
  BatchApi,
  ChangePropertyApi,
  IdentifiersApi,
  ListAssociationsApi,
  RetrieveParticipantStateApi,
  SettingsApi,
  SubscriberStateChangesApi,
} from '../../../../codegen/marketing/events/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().marketing.events
    expect(Object.prototype.hasOwnProperty.call(client, 'addEventAttendeesApi')).toBeTruthy()
    expect(AddEventAttendeesApi.name).toBe(client.addEventAttendeesApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'basicApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.basicApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'batchApi')).toBeTruthy()
    expect(BatchApi.name).toBe(client.batchApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'changePropertyApi')).toBeTruthy()
    expect(ChangePropertyApi.name).toBe(client.changePropertyApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'identifiersApi')).toBeTruthy()
    expect(IdentifiersApi.name).toBe(client.identifiersApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'listAssociationsApi')).toBeTruthy()
    expect(ListAssociationsApi.name).toBe(client.listAssociationsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'retrieveParticipantStateApi')).toBeTruthy()
    expect(RetrieveParticipantStateApi.name).toBe(client.retrieveParticipantStateApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'settingsApi')).toBeTruthy()
    expect(SettingsApi.name).toBe(client.settingsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'subscriberStateChangesApi')).toBeTruthy()
    expect(SubscriberStateChangesApi.name).toBe(client.subscriberStateChangesApi.constructor.name)
  })
})
