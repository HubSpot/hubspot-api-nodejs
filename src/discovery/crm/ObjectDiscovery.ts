import * as _ from 'lodash'
import { BaseDiscovery } from '../BaseDiscovery'

export class ObjectDiscovery extends BaseDiscovery {
  public basicApi: any

  public async getAll(properties?: Array<string>, associations?: Array<string>, archived?: boolean) {
    let after
    let result = []
    do {
      let response = await this.basicApi.getPage(100, after, properties, associations, archived)
      result.push(response.results)
      after = _.get(response, 'paging.next.after')
    } while (!_.isNil(after))

    return result
  }
}
