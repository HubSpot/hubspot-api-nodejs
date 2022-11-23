import IConfiguration from '../configuration/IConfiguration'

export function initObject(path: string, config: IConfiguration) {
  const importedClass = require('../discovery/' + path)
  return new importedClass.default(config)
}
