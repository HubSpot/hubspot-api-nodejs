import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { GenerateApi } from '../../../../codegen/conversations/visitor_identification/index'
import { createConfiguration } from '../../../../codegen/conversations/visitor_identification/configuration'

export class VisitorIdentificationDiscovery extends baseDiscovery {
    public generateApi: GenerateApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.generateApi = new GenerateApi(configuration)
    }
}
