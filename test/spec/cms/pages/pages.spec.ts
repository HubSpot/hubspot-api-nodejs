import { BasicApi, LandingPagesApi } from '../../../../codegen/cms/pages/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.pages
    expect(Object.prototype.hasOwnProperty.call(client, 'landingPagesApi')).toBeTruthy()
    expect(LandingPagesApi.name).toBe(client.landingPagesApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'sitePagesApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.sitePagesApi.constructor.name)
  })
})
