import { BasicApi } from '../../../../codegen/crm/pipelines/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.pipelines
    expect(Object.prototype.hasOwnProperty.call(client, 'pipelineAuditsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.pipelineAuditsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'pipelineStageAuditsApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.pipelineStageAuditsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'pipelineStagesApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.pipelineStagesApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'pipelinesApi')).toBeTruthy()
    expect(BasicApi.name).toBe(client.pipelinesApi.constructor.name)
  })
})
