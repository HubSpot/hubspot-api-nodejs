import { BasicApi } from '../../../../codegen/cms/source_code/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.sourceCode
    expect(Object.prototype.hasOwnProperty.call(client, 'contentApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.contentApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'extractApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.extractApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'metadataApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.metadataApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'validationApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.validationApi.constructor.name)
  })
})
