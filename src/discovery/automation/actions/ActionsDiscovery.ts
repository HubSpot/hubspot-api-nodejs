import { configuration } from '../../../configuration'
import { baseDiscovery } from '../../baseDiscovery'
import { CallbacksApi, DefinitionsApi, FunctionsApi, RevisionsApi } from '../../../../codegen/automation/actions/index'
import { createConfiguration } from '../../../../codegen/automation/actions/configuration'

export class ActionsDiscovery extends baseDiscovery {
    public callbacksApi: CallbacksApi
    public definitionsApi: DefinitionsApi
    public functionsApi: FunctionsApi
    public revisionsApi: RevisionsApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())
        
        this.callbacksApi = new CallbacksApi(configuration)
        this.definitionsApi = new DefinitionsApi(configuration)
        this.functionsApi = new FunctionsApi(configuration)
        this.revisionsApi = new RevisionsApi(configuration)
    }
}
