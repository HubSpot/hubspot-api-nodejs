import IConfiguration from '../configuration/IConfiguration'
import RetryDecorator from './decorators/RetryDecorator'

export default class ApiDecoratorApplier {
  public static apply<APIClass, Configuration>(
    api: APIClass,
    config: IConfiguration,
    configuration: Configuration,
  ): APIClass {
    if (config.numberOfApiCallRetries !== undefined) {
      const clientPrototype = Object.getPrototypeOf(api)
      const methodsNamesToPatch = Object.getOwnPropertyNames(clientPrototype)
      const constructorIndex = methodsNamesToPatch.indexOf('constructor')

      if (constructorIndex !== -1) {
        methodsNamesToPatch.splice(constructorIndex, 1)
      }

      methodsNamesToPatch.forEach((methodName) => {
        let patchedMethod = clientPrototype[methodName].bind(api)
        if (config.numberOfApiCallRetries !== undefined) {
          patchedMethod = RetryDecorator.decorate(patchedMethod, config.numberOfApiCallRetries)
        }

        clientPrototype[methodName] = patchedMethod
      })

      return new clientPrototype.constructor(configuration)
    }

    return api
  }
}
