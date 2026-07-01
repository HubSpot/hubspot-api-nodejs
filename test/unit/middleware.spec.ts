import * as http from 'http'
import { BasicApi, createConfiguration } from '../../codegen/crm/contacts/index'
import { ServerConfiguration } from '../../codegen/crm/contacts/servers'
import { RequestContext, ResponseContext } from '../../codegen/crm/contacts/http/http'
import { PromiseMiddleware } from '../../codegen/crm/contacts/middleware'

const EMPTY_CONTACTS_RESPONSE = JSON.stringify({ results: [], paging: {} })

function makeApi(baseUrl: string, globalMiddleware: PromiseMiddleware[]) {
  const configuration = createConfiguration({
    baseServer: new ServerConfiguration(baseUrl, {}),
    promiseMiddleware: globalMiddleware,
  })
  return new BasicApi(configuration)
}

describe('middleware', () => {
  it('runs global middleware when no per-call options are given', async () => {
    const server = await createServer((_req, res) => {
      res.statusCode = 200
      res.setHeader('content-type', 'application/json')
      res.end(EMPTY_CONTACTS_RESPONSE)
    })
    try {
      const ran: string[] = []
      const api = makeApi(server.baseUrl, [{
        pre:  async (ctx: RequestContext)  => { ran.push('pre');  return ctx },
        post: async (ctx: ResponseContext) => { ran.push('post'); return ctx },
      }])

      await api.getPage()

      expect(ran).toContain('pre')
      expect(ran).toContain('post')
    } finally {
      await server.close()
    }
  })

  it('runs global middleware when per-call options object has no middleware key (Bug 1 regression)', async () => {
    const server = await createServer((_req, res) => {
      res.statusCode = 200
      res.setHeader('content-type', 'application/json')
      res.end(EMPTY_CONTACTS_RESPONSE)
    })
    try {
      const ran: string[] = []
      const api = makeApi(server.baseUrl, [{
        pre:  async (ctx: RequestContext)  => { ran.push('pre');  return ctx },
        post: async (ctx: ResponseContext) => { ran.push('post'); return ctx },
      }])

      // Passing any per-call options object without a middleware key used to
      // silently drop global middleware: allMiddleware was initialised to []
      // and [] || globalMiddleware evaluated to [].
      await api.getPage(undefined, undefined, undefined, undefined, undefined, undefined, {})

      expect(ran).toContain('pre')
      expect(ran).toContain('post')
    } finally {
      await server.close()
    }
  })

  it('preserves global middleware order across consecutive calls (Bug 2 regression)', async () => {
    const server = await createServer((_req, res) => {
      res.statusCode = 200
      res.setHeader('content-type', 'application/json')
      res.end(EMPTY_CONTACTS_RESPONSE)
    })
    try {
      const log: string[] = []
      const api = makeApi(server.baseUrl, [
        { pre: async (ctx: RequestContext) => { log.push('A-pre'); return ctx }, post: async (ctx: ResponseContext) => { log.push('A-post'); return ctx } },
        { pre: async (ctx: RequestContext) => { log.push('B-pre'); return ctx }, post: async (ctx: ResponseContext) => { log.push('B-post'); return ctx } },
      ])

      await api.getPage()
      const firstCall = [...log]

      log.length = 0
      await api.getPage()

      // calltimeMiddleware.reverse() was mutating the shared array, causing
      // post-middleware to run in reversed order on the second call.
      expect(log).toEqual(firstCall)
    } finally {
      await server.close()
    }
  })

  it('replaces global middleware with call-time middleware when strategy is replace (default)', async () => {
    const server = await createServer((_req, res) => {
      res.statusCode = 200
      res.setHeader('content-type', 'application/json')
      res.end(EMPTY_CONTACTS_RESPONSE)
    })
    try {
      const ran: string[] = []
      const api = makeApi(server.baseUrl, [{
        pre: async (ctx: RequestContext) => { ran.push('global'); return ctx },
        post: async (ctx: ResponseContext) => ctx,
      }])

      await api.getPage(undefined, undefined, undefined, undefined, undefined, undefined, {
        middleware: [{
          pre: async (ctx: RequestContext) => { ran.push('calltime'); return ctx },
          post: async (ctx: ResponseContext) => ctx,
        }],
        middlewareMergeStrategy: 'replace',
      })

      expect(ran).toContain('calltime')
      expect(ran).not.toContain('global')
    } finally {
      await server.close()
    }
  })

  it('appends call-time middleware after global middleware when strategy is append', async () => {
    const server = await createServer((_req, res) => {
      res.statusCode = 200
      res.setHeader('content-type', 'application/json')
      res.end(EMPTY_CONTACTS_RESPONSE)
    })
    try {
      const ran: string[] = []
      const api = makeApi(server.baseUrl, [{
        pre: async (ctx: RequestContext) => { ran.push('global'); return ctx },
        post: async (ctx: ResponseContext) => ctx,
      }])

      await api.getPage(undefined, undefined, undefined, undefined, undefined, undefined, {
        middleware: [{
          pre: async (ctx: RequestContext) => { ran.push('calltime'); return ctx },
          post: async (ctx: ResponseContext) => ctx,
        }],
        middlewareMergeStrategy: 'append',
      })

      expect(ran.indexOf('global')).toBeLessThan(ran.indexOf('calltime'))
    } finally {
      await server.close()
    }
  })

  it('prepends call-time middleware before global middleware when strategy is prepend', async () => {
    const server = await createServer((_req, res) => {
      res.statusCode = 200
      res.setHeader('content-type', 'application/json')
      res.end(EMPTY_CONTACTS_RESPONSE)
    })
    try {
      const ran: string[] = []
      const api = makeApi(server.baseUrl, [{
        pre: async (ctx: RequestContext) => { ran.push('global'); return ctx },
        post: async (ctx: ResponseContext) => ctx,
      }])

      await api.getPage(undefined, undefined, undefined, undefined, undefined, undefined, {
        middleware: [{
          pre: async (ctx: RequestContext) => { ran.push('calltime'); return ctx },
          post: async (ctx: ResponseContext) => ctx,
        }],
        middlewareMergeStrategy: 'prepend',
      })

      expect(ran.indexOf('calltime')).toBeLessThan(ran.indexOf('global'))
    } finally {
      await server.close()
    }
  })

  it('middleware receives the outgoing request URL and method', async () => {
    const server = await createServer((_req, res) => {
      res.statusCode = 200
      res.setHeader('content-type', 'application/json')
      res.end(EMPTY_CONTACTS_RESPONSE)
    })
    try {
      let capturedUrl: string | undefined
      let capturedMethod: string | undefined
      const api = makeApi(server.baseUrl, [{
        pre: async (ctx: RequestContext) => {
          capturedUrl    = ctx.getUrl()
          capturedMethod = ctx.getHttpMethod().toString()
          return ctx
        },
        post: async (ctx: ResponseContext) => ctx,
      }])

      await api.getPage()

      expect(capturedUrl).toContain(server.baseUrl)
      expect(capturedMethod).toBe('GET')
    } finally {
      await server.close()
    }
  })

  it('middleware can inject request headers that reach the server', async () => {
    let capturedHeader: string | undefined
    const server = await createServer((req, res) => {
      capturedHeader = req.headers['x-injected'] as string
      res.statusCode = 200
      res.setHeader('content-type', 'application/json')
      res.end(EMPTY_CONTACTS_RESPONSE)
    })
    try {
      const api = makeApi(server.baseUrl, [{
        pre: async (ctx: RequestContext) => {
          ctx.setHeaderParam('x-injected', 'from-middleware')
          return ctx
        },
        post: async (ctx: ResponseContext) => ctx,
      }])

      await api.getPage()

      expect(capturedHeader).toBe('from-middleware')
    } finally {
      await server.close()
    }
  })
})

async function createServer(
  handler: (request: http.IncomingMessage, response: http.ServerResponse) => void,
): Promise<{ baseUrl: string; close(): Promise<void> }> {
  const srv = http.createServer(handler)

  await new Promise<void>((resolve) => {
    srv.listen(0, '127.0.0.1', () => resolve())
  })

  const address = srv.address()
  if (!address || typeof address === 'string') {
    throw new Error('Failed to start test server.')
  }

  return {
    baseUrl: `http://127.0.0.1:${address.port}`,
    close: () => new Promise<void>((resolve, reject) => {
      srv.close((err) => err ? reject(err) : resolve())
    }),
  }
}
