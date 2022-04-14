import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.pipelines
    expect(client.hasOwnProperty('pipelineAuditsApi')).toBeTruthy()
    expect(client.hasOwnProperty('pipelineStageAuditsApi')).toBeTruthy()
    expect(client.hasOwnProperty('pipelineStagesApi')).toBeTruthy()
    expect(client.hasOwnProperty('pipelinesApi')).toBeTruthy()
  })
})
