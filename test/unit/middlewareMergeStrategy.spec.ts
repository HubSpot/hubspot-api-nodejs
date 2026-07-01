import { BatchApi, createConfiguration, Middleware, ObservableMiddleware } from '../../codegen/events/send'
import { HttpLibrary, RequestContext, ResponseContext } from '../../codegen/events/send/http/http'
import { from } from '../../codegen/events/send/rxjsStub'
import { ObservableBatchApi } from '../../codegen/events/send/types/ObservableAPI'

class MockResponseBody {
  public async text(): Promise<string> {
    return ''
  }

  public async binary(): Promise<Buffer> {
    return Buffer.from('')
  }
}

const mockHttpApi: HttpLibrary = {
  send(requestContext: RequestContext) {
    void requestContext
    return from(
      Promise.resolve(new ResponseContext(204, { 'content-type': 'application/json' }, new MockResponseBody())),
    )
  },
}

const createTrackingMiddleware = (name: string, trace: string[]): Middleware => ({
  async pre(requestContext: RequestContext) {
    trace.push(`pre:${name}`)
    return requestContext
  },
  async post(responseContext: ResponseContext) {
    trace.push(`post:${name}`)
    return responseContext
  },
})

const createObservableTrackingMiddleware = (name: string, trace: string[]): ObservableMiddleware => ({
  pre(requestContext: RequestContext) {
    trace.push(`pre:${name}`)
    return from(Promise.resolve(requestContext))
  },
  post(responseContext: ResponseContext) {
    trace.push(`post:${name}`)
    return from(Promise.resolve(responseContext))
  },
})

describe('Middleware merge strategy', () => {
  it('runs global middleware when call middleware is not provided', async () => {
    const trace: string[] = []
    const globalMiddleware = createTrackingMiddleware('global', trace)

    const api = new BatchApi(
      createConfiguration({
        promiseMiddleware: [globalMiddleware],
        httpApi: mockHttpApi,
      }),
    )

    await api.send({ inputs: [] })

    expect(trace).toEqual(['pre:global', 'post:global'])
  })

  it('replaces global middleware by default when call middleware is provided', async () => {
    const trace: string[] = []
    const globalMiddleware = createTrackingMiddleware('global', trace)
    const callMiddleware = createTrackingMiddleware('call', trace)

    const api = new BatchApi(
      createConfiguration({
        promiseMiddleware: [globalMiddleware],
        httpApi: mockHttpApi,
      }),
    )

    await api.send({ inputs: [] }, { middleware: [callMiddleware] })

    expect(trace).toEqual(['pre:call', 'post:call'])
  })

  it('appends call middleware after global middleware when strategy is append', async () => {
    const trace: string[] = []
    const globalMiddleware = createTrackingMiddleware('global', trace)
    const callMiddleware = createTrackingMiddleware('call', trace)

    const api = new BatchApi(
      createConfiguration({
        promiseMiddleware: [globalMiddleware],
        httpApi: mockHttpApi,
      }),
    )

    await api.send(
      { inputs: [] },
      {
        middleware: [callMiddleware],
        middlewareMergeStrategy: 'append',
      },
    )

    expect(trace).toEqual(['pre:global', 'pre:call', 'post:call', 'post:global'])
  })

  it('prepends call middleware before global middleware when strategy is prepend', async () => {
    const trace: string[] = []
    const globalMiddleware = createTrackingMiddleware('global', trace)
    const callMiddleware = createTrackingMiddleware('call', trace)

    const api = new BatchApi(
      createConfiguration({
        promiseMiddleware: [globalMiddleware],
        httpApi: mockHttpApi,
      }),
    )

    await api.send(
      { inputs: [] },
      {
        middleware: [callMiddleware],
        middlewareMergeStrategy: 'prepend',
      },
    )

    expect(trace).toEqual(['pre:call', 'pre:global', 'post:global', 'post:call'])
  })

  it('does not mutate call middleware array order across requests', async () => {
    const trace: string[] = []
    const firstCallMiddleware = createTrackingMiddleware('call-first', trace)
    const secondCallMiddleware = createTrackingMiddleware('call-second', trace)
    const callMiddleware: Middleware[] = [firstCallMiddleware, secondCallMiddleware]

    const api = new BatchApi(
      createConfiguration({
        promiseMiddleware: [],
        httpApi: mockHttpApi,
      }),
    )

    await api.send({ inputs: [] }, { middleware: callMiddleware })

    expect(trace).toEqual(['pre:call-first', 'pre:call-second', 'post:call-second', 'post:call-first'])
    expect(callMiddleware).toEqual([firstCallMiddleware, secondCallMiddleware])

    trace.length = 0
    await api.send({ inputs: [] }, { middleware: callMiddleware })

    expect(trace).toEqual(['pre:call-first', 'pre:call-second', 'post:call-second', 'post:call-first'])
  })

  it('does not mutate observable call middleware order across requests', async () => {
    const trace: string[] = []
    const firstCallMiddleware = createObservableTrackingMiddleware('call-first', trace)
    const secondCallMiddleware = createObservableTrackingMiddleware('call-second', trace)
    const callMiddleware: ObservableMiddleware[] = [firstCallMiddleware, secondCallMiddleware]

    const configuration = createConfiguration({
      middleware: [],
      httpApi: mockHttpApi,
    })
    const api = new ObservableBatchApi(configuration)

    await api.send({ inputs: [] }, { middleware: callMiddleware }).toPromise()

    expect(trace).toEqual(['pre:call-first', 'pre:call-second', 'post:call-second', 'post:call-first'])
    expect(callMiddleware).toEqual([firstCallMiddleware, secondCallMiddleware])

    trace.length = 0
    await api.send({ inputs: [] }, { middleware: callMiddleware }).toPromise()

    expect(trace).toEqual(['pre:call-first', 'pre:call-second', 'post:call-second', 'post:call-first'])
  })
})
