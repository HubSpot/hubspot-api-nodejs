import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.performance
    expect(client.hasOwnProperty('publicPerformanceApi')).toBeTruthy()
  })
})
