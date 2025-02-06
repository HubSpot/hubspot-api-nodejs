import { PublicPerformanceApi } from '../../../../codegen/cms/performance/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.performance
    expect(Object.prototype.hasOwnProperty.call(client, 'publicPerformanceApi')).toBeTruthy()
    expect(PublicPerformanceApi.name).toBe(client.publicPerformanceApi.constructor.name)
  })
})
