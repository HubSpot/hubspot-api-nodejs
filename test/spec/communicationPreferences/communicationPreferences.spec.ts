import { BasicApi } from '../../../codegen/communication_preferences/index'
import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().communicationPreferences
    expect(Object.prototype.hasOwnProperty.call(client, 'definitionApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.definitionApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'statusApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.statusApi.constructor.name)
  })
})
