import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().automation.actions
    expect(client.hasOwnProperty('callbacksApi')).toBeTruthy()
    expect(client.hasOwnProperty('definitionsApi')).toBeTruthy()
    expect(client.hasOwnProperty('functionsApi')).toBeTruthy()
    expect(client.hasOwnProperty('revisionsApi')).toBeTruthy()
  })
})
