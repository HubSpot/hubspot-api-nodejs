import * as path from 'path'
import IConfiguration from '../configuration/IConfiguration'

const hash = {
  'cms/CmsDiscovery': () => require('../discovery/cms/CmsDiscovery')
}

export function initObject<T>(objectPath: string, config: IConfiguration): T {
  return new (hash[objectPath]().default)(config);
}

