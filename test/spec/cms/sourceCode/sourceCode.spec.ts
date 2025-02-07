import { ContentApi, ExtractApi, MetadataApi, ValidationApi } from '../../../../codegen/cms/source_code/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.sourceCode
    expect(Object.prototype.hasOwnProperty.call(client, 'contentApi')).toBeTruthy()
    expect(ContentApi.name).toBe(client.contentApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'extractApi')).toBeTruthy()
    expect(ExtractApi.name).toBe(client.extractApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'metadataApi')).toBeTruthy()
    expect(MetadataApi.name).toBe(client.metadataApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'validationApi')).toBeTruthy()
    expect(ValidationApi.name).toBe(client.validationApi.constructor.name)
  })
})
