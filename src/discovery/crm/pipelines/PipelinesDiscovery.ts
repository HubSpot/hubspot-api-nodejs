import { configuration } from '../../../configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { PipelineStagesApi, PipelinesApi} from '../../../../codegen/crm/pipelines/index'
import { createConfiguration } from '../../../../codegen/crm/pipelines/configuration'

export class PipelinesDiscovery extends BaseDiscovery {
    public pipelineStagesApi: PipelineStagesApi
    public pipelinesApi: PipelinesApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.pipelineStagesApi = new PipelineStagesApi(configuration)
        this.pipelinesApi = new PipelinesApi(configuration)
    }
}
