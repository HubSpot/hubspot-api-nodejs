import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { PipelineStagesApi, PipelinesApi} from '../../../../codegen/crm/pipelines/index'
import { createConfiguration } from '../../../../codegen/crm/pipelines/configuration'

export class PipelinesDiscovery extends baseDiscovery {
    public pipelineStagesApi: PipelineStagesApi
    public pipelinesApi: PipelinesApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.pipelineStagesApi = new PipelineStagesApi(configuration)
        this.pipelinesApi = new PipelinesApi(configuration)
    }
}
