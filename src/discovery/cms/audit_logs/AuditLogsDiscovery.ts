import { Configuration } from '../../../Configuration'
import { BaseDiscovery } from '../../BaseDiscovery'
import { DefaultApi } from '../../../../codegen/cms/audit_logs/index'
import { createConfiguration } from '../../../../codegen/cms/audit_logs/configuration'

export class AuditLogsDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: Configuration) {
        super(config)

        const configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
