import { FilesApi, FoldersApi } from '../../../codegen/files/index'
import { Client } from '../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().files
    expect(Object.prototype.hasOwnProperty.call(client, 'filesApi')).toBeTruthy()
    expect(FilesApi.name).toBe(client.filesApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'foldersApi')).toBeTruthy()
    expect(FoldersApi.name).toBe(client.foldersApi.constructor.name)
  })
})
