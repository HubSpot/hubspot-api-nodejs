import * as path from 'path'
import IConfiguration from '../configuration/IConfiguration'

export function initObject<T>(objectPath: string, config: IConfiguration): T {
  let extention = '.js'
  if (path.extname(__filename)) {
    extention = path.extname(__filename)
  }

  const importedClass = require('../discovery/' + objectPath + extention)
  return new importedClass.default(config) as unknown as T
}
