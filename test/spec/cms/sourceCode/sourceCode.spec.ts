import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.sourceCode
    expect(client.hasOwnProperty('contentApi')).toBeTruthy()
    expect(client.hasOwnProperty('extractApi')).toBeTruthy()
    expect(client.hasOwnProperty('metadataApi')).toBeTruthy()
    expect(client.hasOwnProperty('sourceCodeExtractApi')).toBeTruthy()
    expect(client.hasOwnProperty('validationApi')).toBeTruthy()
  })
})
