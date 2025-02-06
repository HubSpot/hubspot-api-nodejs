import { CallbacksApi, DefinitionsApi, FunctionsApi, RevisionsApi } from '../../../../codegen/automation/actions/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().automation.actions
    expect(Object.prototype.hasOwnProperty.call(client, 'callbacksApi')).toBeTruthy()
    expect(CallbacksApi.name).toBe(client.callbacksApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'definitionsApi')).toBeTruthy()
    expect(DefinitionsApi.name).toBe(client.definitionsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'functionsApi')).toBeTruthy()
    expect(FunctionsApi.name).toBe(client.functionsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'revisionsApi')).toBeTruthy()
    expect(RevisionsApi.name).toBe(client.revisionsApi.constructor.name)
  })
})
