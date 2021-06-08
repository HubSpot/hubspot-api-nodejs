import { configuration } from '../../../configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { CoreApi, DefaultApi } from '../../../../codegen/crm/imports/index'
import { createConfiguration } from '../../../../codegen/crm/imports/configuration'

export class ImportsDiscovery extends BaseDiscovery {
    public coreApi: CoreApi
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.coreApi = new CoreApi(configuration)
        this.defaultApi = new DefaultApi(configuration)
    }
}
