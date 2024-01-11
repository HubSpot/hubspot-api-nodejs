import {
  PublicActionDefinitionsApi,
  PublicActionFunctionsApi,
  PublicActionRevisionsApi,
  PublicCallbacksApi,
} from '../../../../codegen/automation/actions/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().automation.actions
    expect(client.hasOwnProperty('publicActionDefinitionsApi')).toBeTruthy()
    expect(PublicActionDefinitionsApi.name).toBe(client.publicActionDefinitionsApi.constructor.name)
    expect(client.hasOwnProperty('publicActionFunctionsApi')).toBeTruthy()
    expect(PublicActionFunctionsApi.name).toBe(client.publicActionFunctionsApi.constructor.name)
    expect(client.hasOwnProperty('publicActionRevisionsApi')).toBeTruthy()
    expect(PublicActionRevisionsApi.name).toBe(client.publicActionRevisionsApi.constructor.name)
    expect(client.hasOwnProperty('publicCallbacksApi')).toBeTruthy()
    expect(PublicCallbacksApi.name).toBe(client.publicCallbacksApi.constructor.name)
  })
})
