import { RowsApi, RowsBatchApi, TablesApi } from '../../../../codegen/cms/hubdb/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().cms.hubdb
    expect(Object.prototype.hasOwnProperty.call(client, 'rowsApi')).toBeTruthy()
    expect(RowsApi.name).toBe(client.rowsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'rowsBatchApi')).toBeTruthy()
    expect(RowsBatchApi.name).toBe(client.rowsBatchApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'tablesApi')).toBeTruthy()
    expect(TablesApi.name).toBe(client.tablesApi.constructor.name)
  })
})
