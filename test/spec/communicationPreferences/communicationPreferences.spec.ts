import { DefinitionApi, StatusApi } from '../../../codegen/communication_preferences/index'
import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().communicationPreferences
    expect(Object.prototype.hasOwnProperty.call(client, 'definitionApi')).toBeTruthy()
    expect(DefinitionApi.name).toBe(client.definitionApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'statusApi')).toBeTruthy()
    expect(StatusApi.name).toBe(client.statusApi.constructor.name)
  })
})
