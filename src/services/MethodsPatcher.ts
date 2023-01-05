import IConfiguration from '../configuration/IConfiguration'
import RetryWrapper from './wrappers/RetryWrapper'

export default class MethodsPatcher {
  public static patch<Configuration>(config: IConfiguration, apiDiscovery: any, configuration: Configuration) {
    if (config.numberOfApiCallRetries !== undefined) {
      const properties = Object.getOwnPropertyNames(apiDiscovery)

      properties.forEach((property) => {
        const clientPrototype = Object.getPrototypeOf(apiDiscovery[property])
        const methodsNamesToPatch = Object.getOwnPropertyNames(clientPrototype)
        const constructorIndex = methodsNamesToPatch.indexOf('constructor')

        if (constructorIndex !== -1) {
          methodsNamesToPatch.splice(constructorIndex, 1)
        }

        methodsNamesToPatch.forEach((methodName) => {
          let patchedMethod = clientPrototype[methodName].bind(apiDiscovery[property])
          if (config.numberOfApiCallRetries !== undefined) {
            patchedMethod = RetryWrapper.getWrappedMethod(patchedMethod, config.numberOfApiCallRetries)
          }

          clientPrototype[methodName] = patchedMethod
        })

        apiDiscovery[property] = new clientPrototype.constructor(configuration)
      })
    }
  }
}
