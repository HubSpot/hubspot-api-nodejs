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
    const server = await createServer(async (request, response) => {
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
      expect(capturedRequest!.method).toBe('POST')
      expect(capturedRequest!.url).toBe('/json?foo=bar')
      expect(capturedRequest!.headers.authorization).toBe('Bearer test-token')
      expect(String(capturedRequest!.headers['content-type'])).toContain('application/json')
      expect(capturedRequest!.body.toString()).toBe(JSON.stringify({ hello: 'world' }))
    } finally {
      await server.close()
    }
  })

  it('preserves multipart apiRequest uploads with the form-data package', async () => {
    let capturedRequest: ICapturedRequest | undefined
    const server = await createServer(async (request, response) => {
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
      expect(String(capturedRequest!.headers['content-type'])).toContain('multipart/form-data; boundary=')
      expect(capturedRequest!.body.toString()).toContain('name="field"')
      expect(capturedRequest!.body.toString()).toContain('value')
      expect(capturedRequest!.body.toString()).toContain('filename="hello.txt"')
      expect(capturedRequest!.body.toString()).toContain('payload')
    } finally {
      await server.close()
    }
  })

  it('returns generated ResponseContext bodies through native fetch', async () => {
    let capturedRequest: ICapturedRequest | undefined
    const server = await createServer(async (request, response) => {
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
      expect(capturedRequest!.method).toBe('POST')
      expect(capturedRequest!.headers['x-test']).toBe('1')
      expect(capturedRequest!.body.toString()).toBe('payload')
      expect(await response.body.text()).toBe('generated-response')
      expect((await response.body.binary()).toString()).toBe('generated-response')
    } finally {
      await server.close()
    }
  })

  it('supports generated multipart uploads when a custom httpAgent is configured', async () => {
    let capturedRequest: ICapturedRequest | undefined
    const server = await createServer(async (request, response) => {
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
      expect(capturedRequest!.method).toBe('POST')
      expect(capturedRequest!.url).toBe('/files/v3/files')
      expect(String(capturedRequest!.headers['content-type'])).toContain('multipart/form-data; boundary=')
      expect(capturedRequest!.body.toString()).toContain('filename="hello.txt"')
      expect(capturedRequest!.body.toString()).toContain('name="folderPath"')
      expect(capturedRequest!.body.toString()).toContain('/folder')
      expect(capturedRequest!.body.toString()).toContain('payload')
      expect(await response.body.text()).toBe('ok')
    } finally {
      await server.close()
    }
  })
})

async function createServer(
  handler: (request: ICapturedRequest, response: http.ServerResponse) => Promise<void> | void,
): Promise<{ baseUrl: string; close(): Promise<void> }> {
  const server = http.createServer(async (request, response) => {
    const bodyChunks: Buffer[] = []

    request.on('data', (chunk) => {
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
    server.listen(0, '127.0.0.1', () => resolve())
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

          resolve()
        })
      })
    },
  }
}
