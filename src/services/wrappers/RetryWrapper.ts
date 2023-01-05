import get from 'lodash.get'

export default class RetryWrapper {
  public static readonly tenSecondlyRolling = 'TEN_SECONDLY_ROLLING'
  public static readonly secondlyLimitMessage = 'You have reached your secondly limit.'
  public static readonly retryTimeout = {
    INTERNAL_SERVER_ERROR: 200,
    TOO_MANY_REQUESTS: 10 * 1000,
    TOO_MANY_SEARCH_REQUESTS: 1000,
  }
  public static readonly httpStatusCode = {
    TOO_MANY_REQUESTS: 429,
    MIN_SERVER_ERROR: 500,
    MAX_SERVER_ERROR: 599,
  }

  public static getWrappedMethod(method: any, numberOfApiCallRetries: number) {
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
          if (
            statusCode >= this.httpStatusCode.MIN_SERVER_ERROR &&
            statusCode <= this.httpStatusCode.MAX_SERVER_ERROR
          ) {
            await this._waitAfterRequestFailure(statusCode, index, this.retryTimeout.INTERNAL_SERVER_ERROR)
            continue
          }

          if (statusCode === this.httpStatusCode.TOO_MANY_REQUESTS) {
            const policyName = get(e, 'body.policyName')
            if (policyName === this.tenSecondlyRolling) {
              await this._waitAfterRequestFailure(statusCode, index, this.retryTimeout.TOO_MANY_REQUESTS)
              continue
            }

            const message = get(e, 'body.message')

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

  protected static _waitAfterRequestFailure(statusCode: number, retryNumber: number, retryTimeout: number) {
    console.error(
      `Request failed with status code [${statusCode}], will retry [${retryNumber}] time in [${retryTimeout}] ms`,
    )
    return new Promise((resolve) => setTimeout(resolve, retryTimeout * retryNumber))
  }
}
