import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { CoreApi, DefaultApi } from '../../../../codegen/crm/imports/index'
import { createConfiguration } from '../../../../codegen/crm/imports/configuration'

export class ImportsDiscovery extends baseDiscovery {
    public coreApi: CoreApi
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.coreApi = new CoreApi(configuration)
        this.defaultApi = new DefaultApi(configuration)
    }
}
