import * as http from 'http'
import FormData from 'form-data'
import { Client } from '../../index'
import { HttpMethod, RequestContext } from '../../codegen/crm/contacts/http/http'
import { IsomorphicFetchHttpLibrary } from '../../codegen/crm/contacts/http/isomorphic-fetch'
import { createConfiguration } from '../../codegen/files/configuration'
import { FilesApiRequestFactory } from '../../codegen/files/apis/FilesApi'
import { IsomorphicFetchHttpLibrary as FilesHttpLibrary } from '../../codegen/files/http/isomorphic-fetch'
import { ServerConfiguration } from '../../codegen/files/servers'

interface ICapturedRequest {
  method: string
  url: string
  headers: http.IncomingHttpHeaders
  body: Buffer
}

describe('HTTP transport', () => {
  it('sends apiRequest JSON bodies through native fetch', async () => {
    let capturedRequest: ICapturedRequest | undefined
    const server = await createServer(async (request: ICapturedRequest, response: http.ServerResponse) => {
      capturedRequest = request
      response.statusCode = 201
      response.setHeader('content-type', 'application/json')
      response.end(JSON.stringify({ ok: true }))
    })

    try {
      const client = new Client({ accessToken: 'test-token' })
      const response = await client.apiRequest({
        method: 'POST',
        overlapUrl: `${server.baseUrl}/json?foo=bar`,
        body: { hello: 'world' },
      })

      expect(response.status).toBe(201)
      expect(await response.json()).toEqual({ ok: true })
      expect(capturedRequest).toBeDefined()
      const req = capturedRequest as ICapturedRequest
      expect(req.method).toBe('POST')
      expect(req.url).toBe('/json?foo=bar')
      expect(req.headers.authorization).toBe('Bearer test-token')
      expect(String(req.headers['content-type'])).toContain('application/json')
      expect(req.body.toString()).toBe(JSON.stringify({ hello: 'world' }))
    } finally {
      await server.close()
    }
  })

  it('preserves multipart apiRequest uploads with the form-data package', async () => {
    let capturedRequest: ICapturedRequest | undefined
    const server = await createServer(async (request: ICapturedRequest, response: http.ServerResponse) => {
      capturedRequest = request
      response.statusCode = 204
      response.end()
    })

    try {
      const formData = new FormData()
      formData.append('field', 'value')
      formData.append('file', Buffer.from('payload'), { filename: 'hello.txt', contentType: 'text/plain' })

      const client = new Client()
      const response = await client.apiRequest({
        method: 'POST',
        overlapUrl: `${server.baseUrl}/upload`,
        body: formData,
        defaultJson: false,
      })

      expect(response.status).toBe(204)
      expect(capturedRequest).toBeDefined()
      const req = capturedRequest as ICapturedRequest
      expect(String(req.headers['content-type'])).toContain('multipart/form-data; boundary=')
      expect(req.body.toString()).toContain('name="field"')
      expect(req.body.toString()).toContain('value')
      expect(req.body.toString()).toContain('filename="hello.txt"')
      expect(req.body.toString()).toContain('payload')
    } finally {
      await server.close()
    }
  })

  it('supports WHATWG FormData when form-data is provided by a runtime shim', async () => {
    let capturedRequest: ICapturedRequest | undefined
    const server = await createServer(async (request: ICapturedRequest, response: http.ServerResponse) => {
      capturedRequest = request
      response.statusCode = 204
      response.end()
    })
    const nativeFormData = new globalThis.FormData()
    nativeFormData.append('field', 'value')
    const originalHasInstance = Object.getOwnPropertyDescriptor(FormData, Symbol.hasInstance)
    Object.defineProperty(FormData, Symbol.hasInstance, {
      configurable: true,
      value: (body: unknown) => body instanceof globalThis.FormData,
    })

    try {
      const client = new Client()
      const response = await client.apiRequest({
        method: 'POST',
        overlapUrl: `${server.baseUrl}/upload`,
        body: nativeFormData,
        defaultJson: false,
      })

      expect(response.status).toBe(204)
      expect(capturedRequest).toBeDefined()
      const req = capturedRequest as ICapturedRequest
      expect(String(req.headers['content-type'])).toContain('multipart/form-data; boundary=')
      expect(req.body.toString()).toContain('name="field"')
      expect(req.body.toString()).toContain('value')
    } finally {
      if (originalHasInstance) {
        Object.defineProperty(FormData, Symbol.hasInstance, originalHasInstance)
      } else {
        Reflect.deleteProperty(FormData, Symbol.hasInstance)
      }
      await server.close()
    }
  })

  it('returns generated ResponseContext bodies through native fetch', async () => {
    let capturedRequest: ICapturedRequest | undefined
    const server = await createServer(async (request: ICapturedRequest, response: http.ServerResponse) => {
      capturedRequest = request
      response.statusCode = 202
      response.setHeader('content-type', 'application/octet-stream')
      response.end(Buffer.from('generated-response'))
    })

    try {
      const requestContext = new RequestContext(`${server.baseUrl}/generated`, HttpMethod.POST)
      requestContext.setHeaderParam('X-Test', '1')
      requestContext.setBody('payload')

      const response = await new IsomorphicFetchHttpLibrary().send(requestContext).toPromise()

      expect(response.httpStatusCode).toBe(202)
      expect(capturedRequest).toBeDefined()
      const req = capturedRequest as ICapturedRequest
      expect(req.method).toBe('POST')
      expect(req.headers['x-test']).toBe('1')
      expect(req.body.toString()).toBe('payload')
      expect(await response.body.text()).toBe('generated-response')
      expect((await response.body.binary()).toString()).toBe('generated-response')
    } finally {
      await server.close()
    }
  })

  it('supports generated multipart uploads when a custom httpAgent is configured', async () => {
    let capturedRequest: ICapturedRequest | undefined
    const server = await createServer(async (request: ICapturedRequest, response: http.ServerResponse) => {
      capturedRequest = request
      response.statusCode = 200
      response.end('ok')
    })

    try {
      const configuration = createConfiguration({
        baseServer: new ServerConfiguration(server.baseUrl, {}),
      })
      const requestContext = await new FilesApiRequestFactory(configuration).upload(
        { data: Buffer.from('payload'), name: 'hello.txt' },
        undefined,
        '/folder',
        'hello.txt',
      )
      requestContext.setAgent(new http.Agent({ keepAlive: true }))

      const response = await new FilesHttpLibrary().send(requestContext).toPromise()

      expect(response.httpStatusCode).toBe(200)
      expect(capturedRequest).toBeDefined()
      const req = capturedRequest as ICapturedRequest
      expect(req.method).toBe('POST')
      expect(req.url).toBe('/files/v3/files')
      expect(String(req.headers['content-type'])).toContain('multipart/form-data; boundary=')
      expect(req.body.toString()).toContain('filename="hello.txt"')
      expect(req.body.toString()).toContain('name="folderPath"')
      expect(req.body.toString()).toContain('/folder')
      expect(req.body.toString()).toContain('payload')
      expect(await response.body.text()).toBe('ok')
    } finally {
      await server.close()
    }
  })
})

async function createServer(
  handler: (request: ICapturedRequest, response: http.ServerResponse) => Promise<void> | void,
): Promise<{ baseUrl: string; close(): Promise<void> }> {
  const server = http.createServer(async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const bodyChunks: Buffer[] = []

    request.on('data', (chunk: Buffer | string) => {
      bodyChunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
    })

    request.on('end', async () => {
      await handler(
        {
          body: Buffer.concat(bodyChunks),
          headers: request.headers,
          method: request.method ?? 'GET',
          url: request.url ?? '/',
        },
        response,
      )
    })
  })

  await new Promise<void>((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(undefined))
  })

  const address = server.address()
  if (!address || typeof address === 'string') {
    throw new Error('Failed to start test server.')
  }

  return {
    baseUrl: `http://127.0.0.1:${address.port}`,
    close: async () => {
      await new Promise<void>((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error)
            return
          }

          resolve(undefined)
        })
      })
    },
  }
}
