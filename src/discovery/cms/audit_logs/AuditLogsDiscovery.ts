import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { DefaultApi } from '../../../../codegen/cms/audit_logs/index'
import { createConfiguration } from '../../../../codegen/cms/audit_logs/configuration'

export class AuditLogsDiscovery extends baseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
