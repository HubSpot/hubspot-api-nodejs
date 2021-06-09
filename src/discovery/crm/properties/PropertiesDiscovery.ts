import { Configuration } from '../../../Configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { BatchApi, CoreApi, GroupsApi} from '../../../../codegen/crm/properties/index'
import { createConfiguration } from '../../../../codegen/crm/properties/configuration'

export class PropertiesDiscovery extends BaseDiscovery {
    public batchApi: BatchApi
    public coreApi: CoreApi
    public groupsApi: GroupsApi

    constructor(config: Configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.batchApi = new BatchApi(configuration)
        this.coreApi = new CoreApi(configuration)
        this.groupsApi = new GroupsApi(configuration)
    }
}
