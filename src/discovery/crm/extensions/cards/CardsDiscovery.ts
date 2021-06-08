import { configuration } from '../../../../configuration'
import { baseDiscovery } from '../../../baseDiscovery'
import { CardsApi, SampleResponseApi } from '../../../../../codegen/crm/extensions/cards/index'
import { createConfiguration } from '../../../../../codegen/crm/extensions/cards/configuration'

export class CardsDiscovery extends baseDiscovery {
    public cardsApi: CardsApi
    public sampleResponseApi: SampleResponseApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.cardsApi = new CardsApi(configuration)
        this.sampleResponseApi = new SampleResponseApi(configuration)
    }
}
