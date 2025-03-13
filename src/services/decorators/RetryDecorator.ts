import { StatusCodes } from '../http/StatusCodes'
import IDecorator from './IDecorator'

interface ApiError extends Error {
  policyName?: string;
}
class ApiException<ApiError> extends Error {
  public constructor(public code: number, message: string, public body: ApiError, public headers: { [key: string]: string; }) {
      super("HTTP-Code: " + code + "\nMessage: " + message + "\nBody: " + JSON.stringify(body) + "\nHeaders: " +
      JSON.stringify(headers))
  }
}

export default class RetryDecorator implements IDecorator {
  public readonly tenSecondlyRolling = 'TEN_SECONDLY_ROLLING'
  public readonly secondlyLimitMessage = 'You have reached your secondly limit.'
  public readonly retryTimeout = {
    INTERNAL_SERVER_ERROR: 200,
    TOO_MANY_REQUESTS: 10 * 1000,
    TOO_MANY_SEARCH_REQUESTS: 1000,
  }

  protected numberOfApiCallRetries: number

  public constructor(numberOfApiCallRetries: number) {
    this.numberOfApiCallRetries = numberOfApiCallRetries
  }

  public decorate(method: any): (...args: any) => any {
    return async (...args: any) => {
      const numberOfRetries = this.numberOfApiCallRetries
      let resultSuccess: any
      let resultRejected: any

      for (let index = 1; index <= this.numberOfApiCallRetries; index++) {
        try {
          resultSuccess = await method(...args)
          resultRejected = null
          break
        } catch (error) {
          resultRejected = error

          if (index === numberOfRetries || !(error instanceof ApiException)) {
            break
          }
          const statusCode: number = error?.code ?? 0
          console.log('statusCode ' + statusCode)
          if (statusCode >= StatusCodes.MinServerError && statusCode <= StatusCodes.MaxServerError) {
            await this._waitAfterRequestFailure(statusCode, index, this.retryTimeout.INTERNAL_SERVER_ERROR)
            continue
          }

          if (statusCode === StatusCodes.TooManyRequests) {
            const policyName =  error?.body?.policyName
            if (policyName === this.tenSecondlyRolling) {
              await this._waitAfterRequestFailure(statusCode, index, this.retryTimeout.TOO_MANY_REQUESTS)
              continue
            }

            const message = error?.body?.message

            if (message === this.secondlyLimitMessage) {
              await this._waitAfterRequestFailure(statusCode, index, this.retryTimeout.TOO_MANY_SEARCH_REQUESTS)
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

  protected _waitAfterRequestFailure(statusCode: number, retryNumber: number, retryTimeout: number) {
    console.error(
      `Request failed with status code [${statusCode}], will retry [${retryNumber}] time in [${retryTimeout}] ms`,
    )
    return new Promise((resolve) => setTimeout(resolve, retryTimeout * retryNumber))
  }
}
