import RetryDecorator from '../../src/services/decorators/RetryDecorator'

describe('RetryDecorator', () => {
  it('retries transient failures without writing to the application error log', async () => {
    const errorLogger = spyOn(console, 'error')
    const retryDecorator = new RetryDecorator(2)
    retryDecorator.retryTimeout.INTERNAL_SERVER_ERROR = 0
    let attempts = 0
    const request = async () => {
      attempts += 1
      if (attempts === 1) {
        throw Object.assign(new Error('temporary failure'), { code: 500 })
      }
      return 'success'
    }

    const result = await retryDecorator.decorate(request)()

    expect(result).toBe('success')
    expect(attempts).toBe(2)
    expect(errorLogger).not.toHaveBeenCalled()
  })
})
