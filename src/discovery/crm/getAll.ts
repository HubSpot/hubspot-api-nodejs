
import { DEFAULT_OBJECTS_LIMIT } from '../../constants'
import * as _ from 'lodash'

interface APIType<CollectionType, ConfigurationType> {
  getPage(
    limit?: number,
    after?: string,
    properties?: Array<string>,
    associations?: Array<string>,
    archived?: boolean,
    _options?: ConfigurationType,
  ): Promise<CollectionType>
}
interface CollectionType<ObjectType> {
  results: Array<ObjectType>
}

export async function getAll<ReturnType, ConfigurationType>(
  api: APIType<CollectionType<ReturnType>, ConfigurationType>,
  limit?: number,
  after?: string,
  properties?: Array<string>,
  associations?: Array<string>,
  archived?: boolean,
): Promise<ReturnType[]> {
  const limitInternal = limit ?? DEFAULT_OBJECTS_LIMIT
  let afterInternal = after
  let result: ReturnType[] = []
  do {
    let response = await api.getPage(limitInternal, afterInternal, properties, associations, archived)
    result = result.concat(response.results)
    afterInternal = _.get(response, 'paging.next.after')
    console.log(afterInternal)
  } while (!_.isNil(afterInternal))

  return result
}
