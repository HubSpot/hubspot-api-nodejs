import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().communicationPreferences
    expect(client.hasOwnProperty('definitionApi')).toBeTruthy()
    expect(client.hasOwnProperty('statusApi')).toBeTruthy()
  })
})
