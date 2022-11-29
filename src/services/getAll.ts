import { DEFAULT_OBJECTS_LIMIT } from '../configuration/constants'

interface IAPIType<CollectionType, ConfigurationType> {
  getPage(
    limit?: number,
    after?: string,
    properties?: string[],
    propertiesWithHistory?: string[],
    associations?: string[],
    archived?: boolean,
    _options?: ConfigurationType,
  ): Promise<CollectionType>
}

interface INextPage {
  after: string
}

interface IForwardPaging {
  next?: INextPage
}

interface ICollectionType<ObjectType> {
  results: ObjectType[]
  paging?: IForwardPaging
}

export async function getAll<ReturnType, ConfigurationType>(
  api: IAPIType<ICollectionType<ReturnType>, ConfigurationType>,
  limit?: number,
  after?: string,
  properties?: string[],
  propertiesWithHistory?: string[],
  associations?: string[],
  archived?: boolean,
): Promise<ReturnType[]> {
  const limitInternal = limit ?? DEFAULT_OBJECTS_LIMIT
  let afterInternal = after
  let result: ReturnType[] = []
  do {
    const response = await api.getPage(
      limitInternal,
      afterInternal,
      properties,
      propertiesWithHistory,
      associations,
      archived,
    )
    result = result.concat(response.results)
    afterInternal = response?.paging?.next?.after
  } while (afterInternal)

  return result
}
