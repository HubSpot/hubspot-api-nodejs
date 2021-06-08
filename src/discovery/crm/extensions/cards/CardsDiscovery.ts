import { configuration } from '../../../../configuration'
import { BaseDiscovery } from '../../../BaseDiscovery'
import { CardsApi, SampleResponseApi } from '../../../../../codegen/crm/extensions/cards/index'
import { createConfiguration } from '../../../../../codegen/crm/extensions/cards/configuration'

export class CardsDiscovery extends BaseDiscovery {
    public cardsApi: CardsApi
    public sampleResponseApi: SampleResponseApi

    constructor(config: configuration) {
        super(config)

        let configuration = createConfiguration(this.getParams())

        this.cardsApi = new CardsApi(configuration)
        this.sampleResponseApi = new SampleResponseApi(configuration)
    }
}
