import get from 'lodash.get'
import IConfiguration from '../configuration/IConfiguration'

const RETRY_TIMEOUT = {
  INTERNAL_SERVER_ERROR: 200,
  TOO_MANY_REQUESTS: 10 * 1000,
  TOO_MANY_SEARCH_REQUESTS: 1000,
}

const TEN_SECONDLY_ROLLING = 'TEN_SECONDLY_ROLLING'
const SECONDLY_LIMIT_MESSAGE = 'You have reached your secondly limit.'

export default class MethodPatcher {
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
          const methodToPatch = clientPrototype[methodName].bind(apiDiscovery[property])
          const patchedMethod = this._getRetryWrappedMethod(methodToPatch, config.numberOfApiCallRetries)

          clientPrototype[methodName] = patchedMethod
        })

        apiDiscovery[property] = new clientPrototype.constructor(configuration)
      })
    }
  }

  protected static _getRetryWrappedMethod(method: any, numberOfApiCallRetries?: number) {
    if (numberOfApiCallRetries === undefined) {
      return undefined
    }
    return async (...args: any) => {
      const numberOfRetries = numberOfApiCallRetries
      let resultSuccess: any
      let resultRejected: any

      for (let index = 1; index <= numberOfApiCallRetries; index++) {
        try {
          resultSuccess = await method(...args)
          resultRejected = null
          break
        } catch (e) {
          resultRejected = e

          if (index === numberOfRetries) {
            break
          }

          const statusCode: number = get(e, 'code', 0)
          console.error(statusCode)
          if (statusCode >= 500 && statusCode <= 599) {
            await this._waitAfterRequestFailure(statusCode, index, RETRY_TIMEOUT.INTERNAL_SERVER_ERROR)
            continue
          }

          if (statusCode === 429) {
            const policyName = get(e, 'body.policyName')
            if (policyName === TEN_SECONDLY_ROLLING) {
              await this._waitAfterRequestFailure(statusCode, index, RETRY_TIMEOUT.TOO_MANY_REQUESTS)
              continue
            }

            const message = get(e, 'body.message')

            if (message === SECONDLY_LIMIT_MESSAGE) {
              await this._waitAfterRequestFailure(statusCode, index, RETRY_TIMEOUT.TOO_MANY_SEARCH_REQUESTS)
              continue
            }
          }

          break
        }
      }

      return new Promise((resolve, reject) => {
        if (resultRejected) {
          return reject(resultRejected)
        }
        return resolve(resultSuccess)
      })
    }
  }

  protected static _waitAfterRequestFailure(statusCode: number, retryNumber: number, retryTimeout: number) {
    console.error(
      `Request failed with status code [${statusCode}], will retry [${retryNumber}] time in [${retryTimeout}] ms`,
    )
    return new Promise((resolve) => setTimeout(resolve, retryTimeout * retryNumber))
  }
}
