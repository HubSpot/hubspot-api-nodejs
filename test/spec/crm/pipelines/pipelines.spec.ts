import {
  PipelineAuditsApi,
  PipelineStageAuditsApi,
  PipelineStagesApi,
  PipelinesApi,
} from '../../../../codegen/crm/pipelines/index'
import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.pipelines
    expect(Object.prototype.hasOwnProperty.call(client, 'pipelineAuditsApi')).toBeTruthy()
    expect(PipelineAuditsApi.name).toBe(client.pipelineAuditsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'pipelineStageAuditsApi')).toBeTruthy()
    expect(PipelineStageAuditsApi.name).toBe(client.pipelineStageAuditsApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'pipelineStagesApi')).toBeTruthy()
    expect(PipelineStagesApi.name).toBe(client.pipelineStagesApi.constructor.name)
    expect(Object.prototype.hasOwnProperty.call(client, 'pipelinesApi')).toBeTruthy()
    expect(PipelinesApi.name).toBe(client.pipelinesApi.constructor.name)
  })
})
