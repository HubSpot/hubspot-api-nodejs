import IConfiguration from '../configuration/IConfiguration'

export function initObject<T>(path: string, config: IConfiguration): T {
    const importedClass = require('../discovery/' + path)
    return new importedClass.default(config) as unknown as T;
}
