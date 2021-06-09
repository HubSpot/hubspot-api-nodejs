import { createConfiguration } from '../../../../codegen/crm/feedback_submissions/configuration'
import { AssociationsApi, BasicApi, BatchApi, SearchApi } from '../../../../codegen/crm/feedback_submissions/index'
import { IConfiguration } from '../../../IConfiguration'
import { BaseDiscovery } from '../../BaseDiscovery'

export class FeedbackSubmissionsDiscovery extends BaseDiscovery {
    public associationsApi: AssociationsApi
    public basicApi: BasicApi
    public batchApi: BatchApi
    public searchApi: SearchApi

    constructor(config: IConfiguration) {
        super(config)

        const configuration = createConfiguration(this.getParams())

        this.associationsApi = new AssociationsApi(configuration)
        this.basicApi = new BasicApi(configuration)
        this.batchApi = new BatchApi(configuration)
        this.searchApi = new SearchApi(configuration)
    }
}
