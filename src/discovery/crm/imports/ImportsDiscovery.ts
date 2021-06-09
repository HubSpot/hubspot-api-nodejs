import { createConfiguration } from '../../../../codegen/crm/imports/configuration'
import { CoreApi, DefaultApi } from '../../../../codegen/crm/imports/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class ImportsDiscovery extends BaseDiscovery {
    public coreApi: CoreApi
    public defaultApi: DefaultApi

    constructor(config: IConfiguration) {
        super(config)

        const configuration = createConfiguration(this.getParams())

        this.coreApi = new CoreApi(configuration)
        this.defaultApi = new DefaultApi(configuration)
    }
}
