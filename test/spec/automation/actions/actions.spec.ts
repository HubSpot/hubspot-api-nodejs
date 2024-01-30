import { CallbacksApi, DefinitionsApi, FunctionsApi, RevisionsApi } from '../../../../codegen/automation/actions/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().automation.actions
    expect(client.hasOwnProperty('callbacksApi')).toBeTruthy()
    expect(CallbacksApi.name).toBe(client.callbacksApi.constructor.name)
    expect(client.hasOwnProperty('definitionsApi')).toBeTruthy()
    expect(DefinitionsApi.name).toBe(client.definitionsApi.constructor.name)
    expect(client.hasOwnProperty('functionsApi')).toBeTruthy()
    expect(FunctionsApi.name).toBe(client.functionsApi.constructor.name)
    expect(client.hasOwnProperty('revisionsApi')).toBeTruthy()
    expect(RevisionsApi.name).toBe(client.revisionsApi.constructor.name)
  })
})
