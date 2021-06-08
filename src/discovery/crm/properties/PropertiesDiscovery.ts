import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { BatchApi, CoreApi, GroupsApi} from '../../../../codegen/crm/properties/index'
import { createConfiguration } from '../../../../codegen/crm/properties/configuration'

export class PropertiesDiscovery extends baseDiscovery {
    public batchApi: BatchApi
    public coreApi: CoreApi
    public groupsApi: GroupsApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.batchApi = new BatchApi(configuration)
        this.coreApi = new CoreApi(configuration)
        this.groupsApi = new GroupsApi(configuration)
    }
}
