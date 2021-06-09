import { createConfiguration } from '../../../../codegen/cms/audit_logs/configuration'
import { DefaultApi } from '../../../../codegen/cms/audit_logs/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class AuditLogsDiscovery extends BaseDiscovery {
    public defaultApi: DefaultApi

    constructor(config: IConfiguration) {
        super(config)

        const configuration = createConfiguration(this.getParams())
        
        this.defaultApi = new DefaultApi(configuration)
    }
}
